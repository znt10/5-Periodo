'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import StatsCards from '@/components/Cards/StatsCards';
import OrdersTable from '@/components/Cards/OrdersTable';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#0d1117] text-gray-100 font-sans">
      <Sidebar />

      <main className="flex-1 p-4 md:p-10 lg:ml-64 transition-all duration-300">
        
        {/* Header Superior */}
        <div className="flex justify-between items-start mb-10 mt-12 lg:mt-0">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-white">Painel de Controle</h1>
            <p className="text-gray-500 text-sm mt-1">Bem-vindo de volta, aqui está o resumo de hoje.</p>
          </header>

          <div className="relative">
            <button className="p-2.5 rounded-full bg-[#161b22] text-gray-400 hover:bg-[#1f262e] border border-gray-800 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-[#0d1117]"></span>
            </button>
          </div>
        </div>

        {/* Cards de Métricas */}
        <section className="mb-10">
          <StatsCards />
        </section>

        {/* Filtros e Busca Padronizados */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex gap-3">
            <select className="bg-[#161b22] border border-gray-800 text-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500/50 transition-colors cursor-pointer">
              <option>Data: Últimos 7 dias</option>
              <option>Hoje</option>
              <option>Este mês</option>
            </select>
            <select className="bg-[#161b22] border border-gray-800 text-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500/50 transition-colors cursor-pointer">
              <option>Todas Categorias</option>
            </select>
          </div>
          
          <div className="relative flex-1 md:max-w-md md:ml-auto group">
            <input 
              type="text" 
              placeholder="Pesquisar pedidos..." 
              className="w-full bg-[#161b22] border border-gray-800 text-white pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-600"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </div>
          </div>
        </div>

        {/* Tabela de Pedidos Recentes (Título interno) */}
        <div className="bg-[#161b22] rounded-[24px] border border-gray-800 shadow-2xl overflow-hidden transition-all">
          <OrdersTable />
        </div>

      </main>
    </div>
  );
}