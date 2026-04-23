"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

// Ícones com traços mais espessos para o padrão profissional
const Icons = {
  Plus: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  Edit: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  ChevronRight: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18-6-6-6-6" />
    </svg>
  ),
};

export default function LojasGerencia() {
  const lojas = [
    {
      nome: "Loja Norte",
      cidade: "Patos",
      responsavel: "João Filho",
      telefone: "(83) 99999-9999",
      status: "Ativa",
    },
    {
      nome: "Loja Centro",
      cidade: "Patos",
      responsavel: "José Neto",
      telefone: "(83) 98888-8888",
      status: "Ativa",
    },
    {
      nome: "Loja Limão",
      cidade: "Patos",
      responsavel: "Osmar Filho",
      telefone: "(83) 97777-7777",
      status: "Ativa",
    },
    {
      nome: "Loja Lapa",
      cidade: "Patos",
      responsavel: "Neto",
      telefone: "(83) 96666-6666",
      status: "Ativa",
    },
    {
      nome: "Loja Sul",
      cidade: "Patos",
      responsavel: "Marcos",
      telefone: "(83) 96666-6666",
      status: "Inativa",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a0f1c] text-gray-300 font-sans antialiased">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-8 md:p-12 transition-all duration-300">
        {/* Header Profissional UniStock */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <span className="text-blue-500 text-[11px] font-black uppercase tracking-[4px] mb-3 block">
              Administração de Rede
            </span>
            {/* Título Principal text-white */}
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Lojas
            </h1>
          </div>

          {/* Botão Primário Azul da Paleta */}
          <Link
            href="/lojas/novaloja"
            className="flex items-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-2xl font-black text-[12px] uppercase tracking-wider hover:bg-blue-700 transition-all shadow-xl active:scale-95 border-none"
          >
            <Icons.Plus /> Nova Loja
          </Link>
        </div>

        {/* Container de Tabela Estilo Premium (Card: #121826, Borda: #1f2a44) */}
        <div className="bg-[#121826] border border-[#1f2a44] rounded-[32px] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                {/* Header de tabela: #161b2e */}
                <tr className="border-b border-[#1f2a44] bg-[#161b2e]">
                  <th className="p-7 text-[11px] font-black text-gray-500 uppercase tracking-[2px]">
                    Nome da Unidade
                  </th>
                  <th className="p-7 text-[11px] font-black text-gray-500 uppercase tracking-[2px]">
                    Cidade
                  </th>
                  <th className="p-7 text-[11px] font-black text-gray-500 uppercase tracking-[2px]">
                    Responsável
                  </th>
                  <th className="p-7 text-[11px] font-black text-gray-500 uppercase tracking-[2px]">
                    Telefone
                  </th>
                  <th className="p-7 text-[11px] font-black text-gray-500 uppercase tracking-[2px]">
                    Status
                  </th>
                  <th className="p-7 text-[11px] font-black text-gray-500 uppercase tracking-[2px] text-center">
                    Editar
                  </th>
                </tr>
              </thead>
              {/* Borda interna das linhas */}
              <tbody className="divide-y divide-[#1f2a44]">
                {lojas.map((loja, index) => (
                  <tr
                    key={index}
                    /* Hover interativo: #1a2238 */
                    className="group hover:bg-[#1a2238] transition-all cursor-default"
                  >
                    <td className="p-7">
                      <Link
                        href="/lojas/detalhes"
                        className="text-[18px] font-black text-white group-hover:text-blue-500 transition-colors tracking-tight"
                      >
                        {loja.nome}
                      </Link>
                    </td>
                    {/* Textos secundários text-gray-400 */}
                    <td className="p-7 text-gray-400 font-bold text-sm">
                      {loja.cidade}
                    </td>
                    <td className="p-7 text-gray-400 font-bold text-sm">
                      {loja.responsavel}
                    </td>
                    {/* Textos mais fracos text-gray-500 */}
                    <td className="p-7 text-gray-500 font-mono text-sm tracking-tighter">
                      {loja.telefone}
                    </td>
                    <td className="p-7">
                      {/* Status de acordo com a paleta */}
                      <span
                        className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider ${
                          loja.status === "Ativa"
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : "bg-red-500/10 text-red-400 border border-red-500/20"
                        }`}
                      >
                        {loja.status}
                      </span>
                    </td>
                    <td className="p-7">
                      <div className="flex justify-center">
                        {/* Botão secundário interno: #0f1629 */}
                        <Link
                          href="/lojas/detalhes"
                          className="p-3 bg-[#0f1629] border border-[#1f2a44] rounded-xl text-gray-500 hover:text-blue-500 hover:border-blue-500/40 hover:bg-[#1a2238] transition-all active:scale-90"
                        >
                          <Icons.Edit />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Paginação */}
          <div className="p-8 border-t border-[#1f2a44] flex justify-center items-center gap-4 bg-[#121826]">
            {/* Inputs/Botões internos: #0f1629 */}
            <button className="w-11 h-11 flex items-center justify-center bg-[#0f1629] border border-[#1f2a44] rounded-xl text-gray-500 hover:text-white hover:bg-[#1a2238] hover:border-gray-500 transition-all active:scale-90 disabled:opacity-20">
              <Icons.ChevronLeft />
            </button>

            <div className="flex gap-2">
              <span className="w-11 h-11 flex items-center justify-center bg-blue-600 text-white font-black rounded-xl text-sm shadow-lg shadow-blue-900/40 border border-blue-500">
                1
              </span>
            </div>

            <button className="w-11 h-11 flex items-center justify-center bg-[#0f1629] border border-[#1f2a44] rounded-xl text-gray-500 hover:text-white hover:bg-[#1a2238] hover:border-gray-500 transition-all active:scale-90">
              <Icons.ChevronRight />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
