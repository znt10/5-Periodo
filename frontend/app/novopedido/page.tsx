"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

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
  const [quantidade, setQuantidade] = useState(0);
  const isCollapsed = false;

  return (
    // MUDANÇA: bg-theme-base em vez de bg-white dark:bg-...
    <div className="flex min-h-screen bg-theme-base text-theme-text-sub transition-colors duration-300">
      <Sidebar />

      <main
        className={`flex-1 flex flex-col items-center justify-center p-4 md:p-10 transition-all duration-300 ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}`}
      >
        {/* CARD - MUDANÇA: bg-theme-card e border-theme-border */}
        <section className="w-full max-w-2xl rounded-[32px] md:rounded-[40px] bg-theme-card p-6 md:p-12 text-theme-text-title shadow-2xl border border-theme-border mt-16 lg:mt-0 transition-all">
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-theme-text-title">
              Novo Pedido
            </h1>
            <p className="text-theme-text-sub/60 mt-2 text-sm md:text-base">
              Preencha os dados abaixo para solicitar produtos.
            </p>
          </header>

          <div className="space-y-6 md:space-y-7">
            {/* PRODUTO - MUDANÇA: bg-theme-header ou bg-theme-base para o select */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-theme-text-sub group-focus-within:text-blue-500 transition-colors">
                <Icons.Package />
              </div>

              <select className="w-full appearance-none rounded-2xl border border-theme-border bg-theme-base py-3.5 md:py-4 pl-12 pr-12 text-theme-text-title outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all cursor-pointer text-sm md:text-base">
                <option value="">Selecione um produto</option>
                <option value="coxinha">Coxinha</option>
                <option value="pastel">Pastel de Frango</option>
                <option value="enroladinho">Enroladinho</option>
              </select>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-theme-text-sub/40 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* QUANTIDADE */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-theme-text-sub/50 uppercase tracking-wider ml-1">
                Quantidade
              </label>
              <input
                type="number"
                value={quantidade || ""}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="w-full rounded-2xl border border-theme-border bg-theme-base px-5 py-4 text-theme-text-title outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all"
              />
            </div>

            {/* DESCRIÇÃO */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-theme-text-sub/50 uppercase tracking-wider ml-1">
                Descrição
              </label>
              <textarea
                className="w-full rounded-2xl border border-theme-border bg-theme-base p-5 text-theme-text-title outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all min-h-[120px]"
                placeholder="Detalhes do pedido..."
              />
            </div>
          </div>
        </section>

        {/* BOTÕES */}
        <div className="mt-8 flex gap-4 w-full max-w-2xl">
          <button className="w-1/2 bg-theme-header border border-theme-border p-4 rounded-2xl text-theme-text-sub hover:bg-theme-hover transition-all">
            Cancelar
          </button>

          <button className="w-1/2 bg-blue-600 hover:bg-blue-500 p-4 rounded-2xl text-white font-semibold transition-all active:scale-[0.97] shadow-lg shadow-blue-500/20">
            Confirmar
          </button>
        </div>
      </main>
    </div>
  );
}
