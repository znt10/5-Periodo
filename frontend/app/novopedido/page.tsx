"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar";
import { getProdutos, postPedido } from "@/services/auth";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";

type Produto = {
  id: number;
  nome_produto: string;
};

const Icons = {
  Package: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  ),
};

export default function NovoPedidoPage() {
  const router = useRouter();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<number | "">("");
  const [quantidade, setQuantidade] = useState<number>(0);
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useAuthStore((state) => state.user);

  // 🔹 GET produtos com tratamento de erro e tipo
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const data = await getProdutos();

        // Garante que 'lista' seja um array independente do formato da API
        let lista: Produto[] = [];

        if (Array.isArray(data)) {
          lista = data;
        } else if (data && data.results && Array.isArray(data.results)) {
          lista = data.results;
        } else if (data && data.data && Array.isArray(data.data)) {
          lista = data.data; // Caso a API retorne dentro de .data
        }

        setProdutos(lista);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        setProdutos([]); // Fallback para não quebrar o .map
      }
    };

    fetchProdutos();
  }, []);

  const handleSubmit = async () => {
    if (loading) return;

    // 1. Validações básicas
    if (!produtoSelecionado) {
      alert("Selecione um produto");
      return;
    }

    if (quantidade <= 0) {
      alert("Quantidade deve ser maior que 0");
      return;
    }

    // Importante: Verifique se o objeto user e loja existem
    const lojaId = user?.loja?.id;
    if (!lojaId) {
      alert("Erro: Seu usuário não tem uma loja vinculada.");
      return;
    }

    try {
      setLoading(true);

      // 2. Montagem do objeto EXATAMENTE como o Serializer espera
      const pedido = {
        loja: lojaId, // Envia apenas o ID (número)
        descricao: descricao.trim(),
        itens: [
          {
            produto: Number(produtoSelecionado),
            quantidade: Number(quantidade),
          },
        ],
        // ⚠️ NÃO envie o campo "status" aqui.
        // O Django deve definir o status inicial automaticamente.
      };

      console.log("Enviando pedido:", pedido); // Debug para conferir no console do navegador

      await postPedido(pedido);

      alert("Pedido criado com sucesso!");

      setProdutoSelecionado("");
      setQuantidade(0);
      setDescricao("");
      router.push("/meuspedidos");
    } catch (error) {
      // 3. Melhor tratamento de erro para ver a resposta do Django
      console.error("Erro completo da API:", error.response?.data);

      const serverErrors = error.response?.data;
      if (serverErrors) {
        // Transforma o objeto de erro do Django em uma mensagem legível
        const mensagens = Object.entries(serverErrors)
          .map(([campo, erro]) => `${campo}: ${erro}`)
          .join("\n");
        alert("Erro no servidor:\n" + mensagens);
      } else {
        alert("Erro ao criar pedido. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex min-h-screen bg-theme-base text-theme-text-sub">
      <Sidebar />

      <main className="flex-1 flex flex-col items-center justify-center p-6 lg:ml-64">
        <section className="w-full max-w-2xl rounded-[32px] bg-theme-card p-8 border border-theme-border shadow-2xl">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-theme-text-title">
              Novo Pedido
            </h1>
            <p className="text-theme-text-sub/60 mt-2">
              Preencha os dados abaixo
            </p>
          </header>

          {/* PRODUTO */}
          <div className="relative mb-6">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Icons.Package />
            </div>

            <select
              value={produtoSelecionado}
              onChange={(e) =>
                setProdutoSelecionado(
                  e.target.value ? Number(e.target.value) : "",
                )
              }
              className="w-full rounded-2xl border border-theme-border bg-theme-base py-4 pl-12 pr-4 text-theme-text-title"
            >
              <option value="">Selecione um produto</option>

              {/* Uso do opcional chaining ou check para evitar o erro map */}
              {produtos?.length > 0 ? (
                produtos.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nome_produto}
                  </option>
                ))
              ) : (
                <option disabled>Carregando produtos...</option>
              )}
            </select>
          </div>

          {/* QUANTIDADE */}
          <div className="mb-6">
            <label className="text-sm font-bold text-theme-text-title">
              Quantidade
            </label>
            <input
              type="number"
              value={quantidade || ""}
              onChange={(e) => setQuantidade(Number(e.target.value))}
              placeholder="0"
              className="w-full rounded-2xl border border-theme-border bg-theme-base p-4 mt-2 text-theme-text-title"
            />
          </div>

          {/* DESCRIÇÃO */}
          <div className="mb-6">
            <label className="text-sm font-bold text-theme-text-title">
              Descrição
            </label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Alguma observação sobre o pedido?"
              className="w-full rounded-2xl border border-theme-border bg-theme-base p-4 mt-2 text-theme-text-title min-h-[100px]"
            />
          </div>

          {/* BOTÕES */}
          <div className="flex gap-4">
            <button
              onClick={() => router.back()}
              className="w-1/2 bg-theme-header border border-theme-border p-4 rounded-2xl hover:bg-theme-border transition-colors"
            >
              Cancelar
            </button>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-1/2 bg-blue-600 text-white p-4 rounded-2xl font-bold transition-all ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-500 shadow-lg shadow-blue-500/20"
              }`}
            >
              {loading ? "Enviando..." : "Confirmar Pedido"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
