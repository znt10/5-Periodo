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
    <div className="bg-gray-100 dark:bg-[#161b22] rounded-[24px] border border-gray-300 dark:border-gray-800 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-300 dark:border-gray-800 bg-gray-200/50 dark:bg-[#1c2128]/40 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <div className="w-1.5 h-5 bg-blue-600 rounded-full"></div>
          Pedidos Recentes
        </h2>
        <span className="text-xs text-gray-600 dark:text-gray-500 font-medium">
          Total: {pedidosFull.length}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200/60 dark:bg-[#1c2128]/50 text-gray-600 dark:text-gray-400 text-[11px] uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">CÓDIGO</th>
              <th className="px-6 py-4 font-semibold">LOJA</th>
              <th className="px-6 py-4 font-semibold text-center">QTD</th>
              <th className="px-6 py-4 font-semibold text-center">STATUS</th>
              <th className="px-6 py-4 font-semibold text-right">DATA</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300 dark:divide-gray-800/50">
            {pedidosExibidos.map((pedido) => (
              <tr
                key={pedido.id}
                className="hover:bg-gray-200 dark:hover:bg-[#1f262e] transition-colors group"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-300 font-mono">
                  {pedido.id}
                </td>

                <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-400 font-semibold">
                  {pedido.loja}
                </td>

                <td className="px-6 py-4 text-sm text-center text-blue-600 dark:text-blue-400 font-bold">
                  {pedido.qtd}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold border ${
                      pedido.status === "PENDENTE"
                        ? "bg-orange-500/10 text-orange-600 dark:text-orange-500 border-orange-500/20"
                        : pedido.status === "CANCELADO"
                          ? "bg-red-500/10 text-red-600 dark:text-red-500 border-red-500/20"
                          : "bg-green-500/10 text-green-600 dark:text-green-500 border-green-500/20"
                    }`}
                  >
                    {pedido.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-right text-gray-600 dark:text-gray-500">
                  {pedido.data}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-6 border-t border-gray-300 dark:border-gray-800/50 bg-gray-100 dark:bg-[#161b22] flex justify-center items-center gap-2">
        <button
          onClick={() => setPagina((p) => Math.max(1, p - 1))}
          disabled={pagina === 1}
          className="p-2 text-gray-500 dark:text-gray-600 hover:text-gray-800 dark:hover:text-gray-300 disabled:opacity-10 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {[...Array(totalPaginas)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPagina(i + 1)}
              className={`w-9 h-9 rounded-full text-sm font-bold transition-all ${
                pagina === i + 1
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                  : "text-gray-600 dark:text-gray-500 hover:bg-gray-200 dark:hover:bg-[#1f262e] hover:text-gray-900 dark:hover:text-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
          disabled={pagina === totalPaginas}
          className="p-2 text-gray-500 dark:text-gray-600 hover:text-gray-800 dark:hover:text-gray-300 disabled:opacity-10 transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
