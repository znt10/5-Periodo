'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import StatsCards from '@/components/Cards/StatsCards';
import OrdersTable from '@/components/Cards/OrdersTable';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar importada aqui */}
      <Sidebar />

      {/* O main precisa de 'ml-64' para não ficar DEBAIXO da sidebar fixa */}
      <main className="ml-64 flex-1 p-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Painel de Controle</h1>
        </header>

        {/* Componente dos Cards de Resumo */}
        <StatsCards />

        {/* Filtros rápidos */}
        <div className="flex flex-wrap gap-4 mb-6 mt-8">
          <div className="relative">
            <select className="appearance-none bg-[#020617] text-white pl-4 pr-10 py-2 rounded-xl border border-slate-800 text-sm outline-none focus:ring-1 focus:ring-blue-500/40 cursor-pointer">
              <option>Data</option>
              <option>Hoje</option>
              <option>Últimos 7 dias</option>
              <option>Este mês</option>
            </select>

            {/* Ícone */}
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select className="appearance-none bg-[#020617] text-white pl-4 pr-10 py-2 rounded-xl border border-slate-800 text-sm outline-none focus:ring-1 focus:ring-blue-500/40 cursor-pointer">
              <option>Categorias</option>
            </select>

            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="w-[250px] relative ml-auto">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full bg-[#020617] text-white pl-9 pr-3 py-2 rounded-xl border border-slate-800 text-sm outline-none focus:ring-1 focus:ring-blue-500/40"
            />
            <svg className="absolute left-3 top-2.5 text-slate-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
        </div>

        {/* Componente da Tabela de Pedidos */}
        <OrdersTable />
      </main>
    </div>
  );
}