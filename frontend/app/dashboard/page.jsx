'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import StatsCards from '@/components/Cards/StatsCards';
import OrdersTable from '@/components/Cards/OrdersTable';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main className="ml-64 flex-1 p-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Painel de Controle</h1>

        {/* Componente dos Cards de Resumo */}
        <StatsCards />

        {/* Filtros rápidos (podem ficar aqui ou em outro componente) */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select className="bg-[#020617] text-white px-4 py-2 rounded-lg border border-slate-700 text-sm outline-none cursor-pointer">
            <option>Data</option>
          </select>
          <select className="bg-[#020617] text-white px-4 py-2 rounded-lg border border-slate-700 text-sm outline-none cursor-pointer">
            <option>Categorias</option>
          </select>
          <div className="flex-1 min-w-[200px] relative">
            <input type="text" placeholder="Pesquisar" className="w-full bg-[#020617] text-white pl-10 pr-4 py-2 rounded-lg border border-slate-700 text-sm outline-none" />
            <svg className="absolute left-3 top-2.5 text-slate-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>

        {/* Componente da Tabela de Pedidos */}
        <OrdersTable />
      </main>
    </div>
  );
}