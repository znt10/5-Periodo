"use client";

import React, { useState } from "react";

const pedidosFull = [
  {
    id: "#882",
    loja: "Lapa",
    qtd: 150,
    status: "PENDENTE",
    data: "28/02/2026",
  },
  {
    id: "#881",
    loja: "Centro",
    qtd: 80,
    status: "CONCLUÍDO",
    data: "27/02/2026",
  },
  {
    id: "#880",
    loja: "Limão",
    qtd: 200,
    status: "PENDENTE",
    data: "27/02/2026",
  },
  {
    id: "#879",
    loja: "Norte",
    qtd: 50,
    status: "CONCLUÍDO",
    data: "26/02/2026",
  },
  {
    id: "#878",
    loja: "Lapa",
    qtd: 120,
    status: "CANCELADO",
    data: "26/02/2026",
  },
  {
    id: "#877",
    loja: "Centro",
    qtd: 300,
    status: "CONCLUÍDO",
    data: "25/02/2026",
  },
  {
    id: "#876",
    loja: "Limão",
    qtd: 45,
    status: "PENDENTE",
    data: "25/02/2026",
  },
  {
    id: "#875",
    loja: "Norte",
    qtd: 90,
    status: "CONCLUÍDO",
    data: "24/02/2026",
  },
];

export default function OrdersTable() {
  const [pagina, setPagina] = useState(1);
  const itensPorPagina = 5;

  const totalPaginas = Math.ceil(pedidosFull.length / itensPorPagina);
  const inicio = (pagina - 1) * itensPorPagina;
  const pedidosExibidos = pedidosFull.slice(inicio, inicio + itensPorPagina);

  return (
    <div className="bg-theme-card rounded-[24px] border border-theme-border shadow-2xl overflow-hidden transition-all duration-300">
      {/* Header - Substituído text-white por text-theme-text-title */}
      <div className="p-6 border-b border-theme-border bg-theme-header/30 flex justify-between items-center">
        <h2 className="text-lg font-bold text-theme-text-title flex items-center gap-2">
          <div className="w-1.5 h-5 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
          Pedidos Recentes
        </h2>
        <span className="text-[10px] text-theme-text-sub font-black uppercase tracking-widest opacity-70">
          Total: {pedidosFull.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-theme-header/20 text-theme-text-sub text-[10px] font-black uppercase tracking-[2px]">
              <th className="px-6 py-5">Código</th>
              <th className="px-6 py-5">Unidade</th>
              <th className="px-6 py-5 text-center">Qtd</th>
              <th className="px-6 py-5 text-center">Status</th>
              <th className="px-6 py-5 text-right">Data</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-theme-border/30">
            {pedidosExibidos.map((pedido) => (
              <tr
                key={pedido.id}
                className="hover:bg-theme-hover/50 transition-colors group"
              >
                {/* ID com tom azulado em vez de branco */}
                <td className="px-6 py-4 text-sm font-bold text-blue-400/90 font-mono">
                  {pedido.id}
                </td>

                <td className="px-6 py-4 text-sm text-theme-text-title font-medium">
                  {pedido.loja}
                </td>

                <td className="px-6 py-4 text-sm text-center text-blue-500 font-black">
                  {pedido.qtd}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-lg text-[9px] font-black tracking-tighter border ${
                      pedido.status === "PENDENTE"
                        ? "bg-orange-500/10 text-orange-500/90 border-orange-500/20"
                        : pedido.status === "CANCELADO"
                          ? "bg-red-500/10 text-red-500/90 border-red-500/20"
                          : "bg-green-500/10 text-green-500/90 border-green-500/20"
                    }`}
                  >
                    {pedido.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-xs text-right text-theme-text-sub/60 font-medium">
                  {pedido.data}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação - Sem fundo branco nos botões */}
      <div className="p-6 border-t border-theme-border bg-theme-header/10 flex justify-center items-center gap-4">
        <button
          onClick={() => setPagina((p) => Math.max(1, p - 1))}
          disabled={pagina === 1}
          className="text-[10px] font-black text-theme-text-sub hover:text-blue-500 disabled:opacity-20 transition-all tracking-widest"
        >
          ANTERIOR
        </button>

        <div className="flex items-center gap-2">
          {[...Array(totalPaginas)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPagina(i + 1)}
              className={`w-8 h-8 rounded-lg text-[11px] font-black transition-all ${
                pagina === i + 1
                  ? "bg-blue-600 text-theme-card shadow-lg shadow-blue-900/20"
                  : "bg-theme-header text-theme-text-sub hover:text-theme-text-title border border-theme-border"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
          disabled={pagina === totalPaginas}
          className="text-[10px] font-black text-theme-text-sub hover:text-blue-500 disabled:opacity-20 transition-all tracking-widest"
        >
          PRÓXIMO
        </button>
      </div>
    </div>
  );
}
