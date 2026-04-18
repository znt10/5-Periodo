"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";

const Icons = {
  Building: () => (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3b82f6"
      strokeWidth="2.5"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M8 14h.01" />
      <path d="M16 14h.01" />
    </svg>
  ),
  Files: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-gray-600 dark:text-gray-500"
    >
      <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
      <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
      <path d="M15 2v5h5" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-gray-600 dark:text-gray-500"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export default function GerenciaPedidos() {
  const unidades = [
    {
      id: 1,
      nome: "LOJA CENTRO",
      pedidosAbertos: 12,
      ultimaAtividade: "Há 5 min",
    },
    {
      id: 2,
      nome: "LOJA NORTE",
      pedidosAbertos: 8,
      ultimaAtividade: "Há 1 hora",
    },
    { id: 3, nome: "LOJA LIMÃO", pedidosAbertos: 3, ultimaAtividade: "Ontem" },
    { id: 4, nome: "LOJA LAPA", pedidosAbertos: 15, ultimaAtividade: "Agora" },
  ];

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0f1c] text-gray-900 dark:text-gray-100">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-6 md:p-10 transition-all">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[2px] mb-1 block">
              Administração
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Meus Pedidos
            </h1>

            <p className="text-gray-600 dark:text-gray-500 text-sm mt-1">
              Visão geral das unidades e solicitações pendentes.
            </p>
          </div>

          <button className="bg-gray-200 dark:bg-[#161b22] border border-gray-300 dark:border-gray-800 px-5 py-2.5 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-[#1f262e] transition-all">
            Exportar Relatório
          </button>
        </div>

        {/* BUSCA */}
        <div className="relative max-w-lg mb-10 group">
          <input
            type="text"
            placeholder="Localizar unidade..."
            className="w-full bg-white dark:bg-[#161b22] border border-gray-300 dark:border-gray-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-gray-900 dark:text-white focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600"
          />

          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500">
            🔍
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {unidades.map((unidade) => (
            <div
              key={unidade.id}
              className="bg-gray-100 dark:bg-[#161b22] border border-gray-300 dark:border-gray-800 rounded-[32px] p-8 hover:border-blue-500/30 transition-all group relative overflow-hidden shadow-xl"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-5">
                  <div className="bg-blue-600/10 p-4 rounded-2xl border border-blue-500/10">
                    <Icons.Building />
                  </div>

                  <div>
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                      {unidade.nome}
                    </h2>

                    <span className="text-green-500 text-[10px] font-bold flex items-center gap-1.5 uppercase tracking-wider mt-0.5">
                      ● Online
                    </span>
                  </div>
                </div>
              </div>

              {/* STATUS */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-[#0d1117] p-5 rounded-2xl border border-gray-300 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icons.Files />
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      Solicitações
                    </span>
                  </div>

                  <p className="text-2xl font-black text-blue-500">
                    {unidade.pedidosAbertos} itens
                  </p>
                </div>

                <div className="bg-white dark:bg-[#0d1117] p-5 rounded-2xl border border-gray-300 dark:border-gray-800">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Icons.Clock />
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      Atividade
                    </span>
                  </div>

                  <p className="text-2xl font-black text-gray-800 dark:text-gray-200">
                    {unidade.ultimaAtividade}
                  </p>
                </div>
              </div>

              <button className="w-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-[#0d1117] font-black py-4 rounded-2xl transition-all text-xs uppercase tracking-[2px]">
                Acessar Painel da Unidade
              </button>

              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl"></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
