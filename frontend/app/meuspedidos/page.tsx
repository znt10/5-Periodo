"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

// Ícones para o Status
const Icons = {
  Filter: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

export default function MeusPedidosPage() {
  const pedidos = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1626379616459-b2ce1d9decbb?auto=format&fit=crop&w=100&q=80",
      data: "30/03/26",
      produto: "COXINHA DE FRANGO",
      qtd: 150,
      obs: "Necessário para a vitrine da manhã.",
      status: "pendente",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&w=100&q=80",
      data: "30/03/26",
      produto: "PASTEL DE CARNE",
      qtd: 50,
      obs: "",
      status: "pendente",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=100&q=80",
      data: "30/03/26",
      produto: "ENROLADINHO",
      qtd: 80,
      obs: "",
      status: "pendente",
    },
  ];

  return (
    <div className="flex min-h-screen bg-theme-base text-theme-text-sub font-sans antialiased transition-colors duration-300">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-8 md:p-12 transition-all relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64 z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-10">
            <span className="text-blue-500 text-[11px] font-black uppercase tracking-[4px] mb-3 block">
              Histórico de Requisições
            </span>
            <h1 className="text-4xl font-black tracking-tighter text-theme-text-title uppercase leading-none">
              Meus Pedidos
            </h1>
            <p className="text-theme-text-sub/60 font-medium mt-3">
              Acompanhe o status das suas solicitações de estoque em tempo real.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Tabela de Pedidos */}
            <div className="lg:col-span-3 bg-theme-card border border-theme-border rounded-[32px] overflow-hidden shadow-2xl transition-all">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-theme-border bg-theme-header/50">
                      <th className="p-6 text-[11px] font-black text-theme-text-sub/40 uppercase tracking-[2px] text-center w-24">
                        Item
                      </th>
                      <th className="p-6 text-[11px] font-black text-theme-text-sub/40 uppercase tracking-[2px]">
                        Data
                      </th>
                      <th className="p-6 text-[11px] font-black text-theme-text-sub/40 uppercase tracking-[2px]">
                        Produto
                      </th>
                      <th className="p-6 text-[11px] font-black text-theme-text-sub/40 uppercase tracking-[2px] text-center">
                        Qtd
                      </th>
                      <th className="p-6 text-[11px] font-black text-theme-text-sub/40 uppercase tracking-[2px]">
                        Observação
                      </th>
                      <th className="p-6 text-[11px] font-black text-theme-text-sub/40 uppercase tracking-[2px] text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-theme-border">
                    {pedidos.map((item) => (
                      <tr
                        key={item.id}
                        className="group hover:bg-theme-hover transition-all cursor-default"
                      >
                        <td className="p-6">
                          <div className="flex justify-center">
                            <img
                              src={item.img}
                              alt={item.produto}
                              className="w-12 h-12 rounded-xl border border-theme-border object-cover shadow-lg group-hover:scale-105 transition-transform"
                            />
                          </div>
                        </td>
                        <td className="p-6 text-sm font-bold text-theme-text-sub/80 tracking-tight">
                          {item.data}
                        </td>
                        <td className="p-6">
                          <span className="text-[15px] font-black text-theme-text-title group-hover:text-blue-500 transition-colors uppercase tracking-tight">
                            {item.produto}
                          </span>
                        </td>
                        <td className="p-6 text-center">
                          <span className="font-mono text-lg font-black text-blue-500">
                            {item.qtd}
                          </span>
                        </td>
                        <td className="p-6">
                          <p className="text-xs text-theme-text-sub/40 italic max-w-[180px] leading-relaxed">
                            {item.obs || "Sem observações adicionais."}
                          </p>
                        </td>
                        <td className="p-6">
                          <div className="flex justify-center">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/5 text-orange-500 border border-orange-500/20 text-[10px] font-black uppercase tracking-widest shadow-sm">
                              <Icons.Clock />
                              Pendente
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Painel de Filtros Lateral */}
            <aside className="bg-theme-card border border-theme-border rounded-[32px] p-8 shadow-2xl sticky top-8 transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-600/10 rounded-lg text-blue-500">
                  <Icons.Filter />
                </div>
                <h2 className="text-lg font-black text-theme-text-title uppercase tracking-tighter">
                  Filtrar Busca
                </h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-theme-text-sub/30 uppercase tracking-[2px] ml-1">
                    Situação
                  </label>
                  <select className="w-full bg-theme-header border border-theme-border text-theme-text-title rounded-2xl py-4 px-5 text-xs font-bold outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all appearance-none cursor-pointer uppercase">
                    <option>Todos os Status</option>
                    <option>Entregue</option>
                    <option>Pendente</option>
                    <option>Cancelado</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-theme-text-sub/30 uppercase tracking-[2px] ml-1">
                    Período
                  </label>
                  <input
                    type="date"
                    className="w-full bg-theme-header border border-theme-border text-theme-text-title rounded-2xl py-4 px-5 text-xs font-bold outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all uppercase"
                  />
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl text-white text-[12px] font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-900/20 active:scale-95 mt-4">
                  Aplicar Filtro
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
