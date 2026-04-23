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
    <div className="bg-[#111827] rounded-[24px] border border-blue-900/20 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-blue-900/20 bg-[#172033] flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-100 flex items-center gap-2">
          <div className="w-1.5 h-5 bg-blue-500 rounded-full"></div>
          Pedidos Recentes
        </h2>
        <span className="text-xs text-gray-400 font-medium">
          Total: {pedidosFull.length}
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#172033] text-gray-400 text-[11px] uppercase tracking-wider">
              <th className="px-6 py-4 font-semibold">CÓDIGO PEDIDO</th>
              <th className="px-6 py-4 font-semibold">LOJA</th>
              <th className="px-6 py-4 font-semibold text-center">
                QUANTIDADE
              </th>
              <th className="px-6 py-4 font-semibold text-center">STATUS</th>
              <th className="px-6 py-4 font-semibold text-right">DATA</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-blue-900/10">
            {pedidosExibidos.map((pedido) => (
              <tr
                key={pedido.id}
                className="hover:bg-[#1e293b] transition-colors"
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-300 font-mono">
                  {pedido.id}
                </td>

                <td className="px-6 py-4 text-sm text-gray-400 font-semibold">
                  {pedido.loja}
                </td>

                <td className="px-6 py-4 text-sm text-center text-blue-400 font-bold">
                  {pedido.qtd}
                </td>

                <td className="px-6 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold border ${
                      pedido.status === "PENDENTE"
                        ? "bg-orange-500/10 text-orange-400 border-orange-500/20"
                        : pedido.status === "CANCELADO"
                          ? "bg-red-500/10 text-red-400 border-red-500/20"
                          : "bg-green-500/10 text-green-400 border-green-500/20"
                    }`}
                  >
                    {pedido.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-right text-gray-500">
                  {pedido.data}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Paginação */}
      <div className="p-6 border-t border-blue-900/20 bg-[#0f172a] flex justify-center items-center gap-2">
        <button
          onClick={() => setPagina((p) => Math.max(1, p - 1))}
          disabled={pagina === 1}
          className="p-2 text-gray-600 hover:text-gray-300 disabled:opacity-10"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {[...Array(totalPaginas)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPagina(i + 1)}
              className={`w-9 h-9 rounded-full text-sm font-bold transition-all ${
                pagina === i + 1
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                  : "text-gray-500 hover:bg-[#1e293b] hover:text-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          onClick={() => setPagina((p) => Math.min(totalPaginas, p + 1))}
          disabled={pagina === totalPaginas}
          className="p-2 text-gray-600 hover:text-gray-300 disabled:opacity-10"
        >
          →
        </button>
      </div>
    </div>
  );
}
