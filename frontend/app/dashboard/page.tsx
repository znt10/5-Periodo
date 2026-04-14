'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import StatsCards from '@/components/Cards/StatsCards';
import OrdersTable from '@/components/Cards/OrdersTable';

// --- Ícones Locais ---
const Icons = {
  Bell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
  ),
  ChevronDown: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
  )
};

// --- Componente do Header com Dropdown de Notificações ---
function TopHeader() {
  const [showNotifs, setShowNotifs] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { id: 1, text: "Pedido #882 realizado com sucesso!", time: "Há 2 min" },
    { id: 2, text: "Novo item adicionado ao estoque", time: "Há 1h" },
    { id: 3, text: "Relatório mensal disponível", time: "Há 5h" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowNotifs(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-end h-16 mb-4 relative">
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setShowNotifs(!showNotifs)}
          className={`p-2.5 rounded-full transition-all relative ${
            showNotifs ? 'bg-blue-600 text-white' : 'bg-[#161b22] text-gray-400 hover:bg-[#1f262e] border border-gray-800'
          }`}
        >
          <Icons.Bell />
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </button>

        {showNotifs && (
          <div className="absolute right-0 mt-3 w-80 bg-[#161b22] border border-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#1c2128]">
              <h3 className="font-bold text-gray-100">Notificações</h3>
              <button className="text-xs text-blue-500 hover:text-blue-400">Marcar como lida</button>
            </div>
            <div className="max-h-[350px] overflow-y-auto">
              {notifications.map((n) => (
                <div key={n.id} className="p-4 hover:bg-[#1f262e] cursor-pointer border-b border-gray-800/50 last:border-0 transition-colors">
                  <p className="text-sm text-gray-200 font-medium mb-1">{n.text}</p>
                  <span className="text-xs text-gray-500">{n.time}</span>
                </div>
              ))}
            </div>
            <Link href="/notificacoes" className="block p-3 text-center text-sm text-blue-500 font-semibold hover:bg-[#1f262e] transition-colors">
              Ver todas as notificações
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

// --- Página Principal ---
export default function DashboardPage() {
  // Simula o estado da sidebar para o padding do main
  const isCollapsed = false; 

  return (
    <div className="flex min-h-screen bg-[#0d1117]">
      <Sidebar />

      <main className={`flex-1 transition-all duration-300 p-4 md:p-8 ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        
        {/* Notificações no topo direito */}
        <TopHeader />

        <header className="mb-8 mt-4 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-100">
            Painel de Controle
          </h1>
          <p className="text-gray-500 text-sm mt-1">Bem-vindo de volta, aqui está o seu resumo.</p>
        </header>

        {/* Cards de métricas (Devem estar configurados com fundo dark internamente) */}
        <StatsCards />

        {/* Filtros e Busca */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 mb-6 mt-10">
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-44">
              <select className="w-full appearance-none bg-[#161b22] text-gray-300 pl-4 pr-10 py-2.5 rounded-xl border border-gray-800 text-sm outline-none focus:ring-1 focus:ring-blue-500/40 cursor-pointer">
                <option>Data: Últimos 7 dias</option>
                <option>Hoje</option>
                <option>Este mês</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Icons.ChevronDown />
              </div>
            </div>

            <div className="relative flex-1 md:w-44">
              <select className="w-full appearance-none bg-[#161b22] text-gray-300 pl-4 pr-10 py-2.5 rounded-xl border border-gray-800 text-sm outline-none focus:ring-1 focus:ring-blue-500/40 cursor-pointer">
                <option>Todas Categorias</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <Icons.ChevronDown />
              </div>
            </div>
          </div>

          <div className="w-full md:w-80 relative md:ml-auto">
            <input
              type="text"
              placeholder="Pesquisar pedidos ou produtos..."
              className="w-full bg-[#161b22] text-white pl-10 pr-4 py-2.5 rounded-xl border border-gray-800 text-sm outline-none focus:ring-1 focus:ring-blue-500/40 placeholder:text-gray-500"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Icons.Search />
            </div>
          </div>
        </div>

        {/* Tabela de Pedidos */}
        <div className="bg-[#161b22] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800 bg-[#1c2128]/50">
            <h2 className="text-lg font-semibold text-gray-100">Pedidos Recentes</h2>
          </div>
          <OrdersTable />
        </div>

      </main>
    </div>
  );
}