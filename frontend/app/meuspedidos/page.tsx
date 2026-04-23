"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function MeusPedidosPage() {
  const [quantidade, setQuantidade] = useState(0);

  const pedidos = [
    {
      id: 1,
      img: "/images/coxinha.jpg",
      data: "30/03/26",
      produto: "Coxinha",
      qtd: 150,
      obs: "Preciso, pois não tem para amanhã",
      status: "pendente",
    },
    {
      id: 2,
      img: "/images/pasteldefrango.jpg",
      data: "30/03/26",
      produto: "Pastel de Frango",
      qtd: 50,
      obs: "",
      status: "pendente",
    },
    {
      id: 3,
      img: "/images/enroladinho.jpg",
      data: "30/03/26",
      produto: "Enroladinho",
      qtd: 80,
      obs: "",
      status: "pendente",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-[#0a0f1c]">
      <Sidebar />

      <main className="flex-1 p-4 md:p-10 lg:ml-64 transition-all relative">
        {/* HEADER */}
        <div className="flex justify-between items-start mb-8 mt-12 lg:mt-0">
          <header>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Meus Pedidos
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Bem-vindo a tela dos seus pedidos.
            </p>
          </header>
        </div>

        {/* CONTEÚDO */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-8 items-start">
          {/* TABELA */}
          <div className="w-full lg:flex-1 bg-gray-100 dark:bg-[#121a2b] rounded-[24px] p-1 shadow-2xl border border-gray-300 dark:border-[#1e293b]">
            <div className="overflow-hidden rounded-[23px]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  {/* HEADER DA TABELA */}
                  <thead className="bg-gray-200 dark:bg-[#162033] border-b border-gray-300 dark:border-[#1e293b]">
                    <tr className="text-gray-600 dark:text-gray-400 font-semibold text-sm">
                      <th className="px-6 py-4 text-center">Ícone</th>
                      <th className="px-6 py-4">Data</th>
                      <th className="px-6 py-4">Produto</th>
                      <th className="px-6 py-4 text-center">Qtd</th>
                      <th className="px-6 py-4">Descrição</th>
                      <th className="px-6 py-4 text-center">Status</th>
                    </tr>
                  </thead>

                  {/* BODY */}
                  <tbody className="text-gray-700 dark:text-gray-300 text-sm">
                    {pedidos.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b border-gray-300 dark:border-[#1e293b]/50 last:border-0 hover:bg-gray-200 dark:hover:bg-[#1a2438] transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex justify-center">
                            <img
                              src={item.img}
                              alt={item.produto}
                              className="w-10 h-10 rounded-lg border border-gray-400 dark:border-[#1e293b] object-cover"
                            />
                          </div>
                        </td>

                        <td className="px-6 py-4 text-gray-500">{item.data}</td>

                        <td className="px-6 py-4 font-bold text-gray-900 dark:text-gray-100">
                          {item.produto}
                        </td>

                        <td className="px-6 py-4 text-center font-mono text-blue-500">
                          {item.qtd}
                        </td>

                        <td className="px-6 py-4 text-xs text-gray-700 dark:text-gray-500 max-w-[200px] truncate">
                          {item.obs || "-"}
                        </td>

                        <td className="px-6 py-4 text-center">
                          <span className="bg-orange-500/10 text-orange-500 p-2 rounded-lg border border-orange-500/20">
                            ⏳
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* FILTRO */}
          <aside className="w-full lg:w-72 bg-gray-100 dark:bg-[#121a2b]/80 backdrop-blur-sm rounded-[20px] p-6 text-gray-900 dark:text-white shadow-2xl border border-gray-300 dark:border-[#1e293b] sticky top-4">
            <h2 className="text-lg font-bold mb-6">Filtro</h2>

            <div className="flex flex-col gap-6">
              {/* STATUS */}
              <select className="w-full bg-white dark:bg-[#0f172a] border border-gray-300 dark:border-[#1e293b] rounded-xl py-3 px-4 text-sm text-gray-900 dark:text-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all">
                <option>Todos os Status</option>
                <option>Entregue</option>
                <option>Pendente</option>
                <option>Cancelado</option>
              </select>

              {/* DATA */}
              <input
                type="date"
                className="w-full bg-white dark:bg-[#0f172a] border border-gray-300 dark:border-[#1e293b] rounded-xl py-3 px-4 text-sm text-gray-900 dark:text-gray-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
              />

              {/* BOTÃO */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-400 py-3 rounded-xl text-white font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.25)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] active:scale-[0.97]">
                Filtrar
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
