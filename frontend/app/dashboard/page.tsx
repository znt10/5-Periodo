"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import StatsCards from "@/components/Cards/StatsCards";
import OrdersTable from "@/components/Cards/OrdersTable";
import TopHeader from "@/components/TopHeader";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0f1c] text-gray-900 dark:text-gray-100 font-sans">
      <Sidebar />

      <main className="flex-1 p-4 md:p-10 lg:ml-64 transition-all duration-300">
        {/* Header Superior */}
        <div className="flex justify-between items-start mb-10 mt-12 lg:mt-0">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Painel de Controle
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Bem-vindo de volta, aqui está o resumo de hoje.
            </p>
          </header>

          <div className="relative">
            <TopHeader />
          </div>
        </div>

        {/* Cards */}
        <section className="mb-10">
          <StatsCards />
        </section>

        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex gap-3">
            <select className="bg-gray-100 dark:bg-[#161b22] border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500/50 transition-colors cursor-pointer">
              <option>Data: Últimos 7 dias</option>
              <option>Hoje</option>
              <option>Este mês</option>
            </select>

            <select className="bg-gray-100 dark:bg-[#161b22] border border-gray-300 dark:border-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500/50 transition-colors cursor-pointer">
              <option>Todas Categorias</option>
            </select>
          </div>

          <div className="relative flex-1 md:max-w-md md:ml-auto group">
            <input
              type="text"
              placeholder="Pesquisar pedidos..."
              className="w-full bg-gray-100 dark:bg-[#161b22] border border-gray-300 dark:border-gray-800 text-gray-900 dark:text-white pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-600"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-600 group-focus-within:text-blue-500 transition-colors">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tabela */}
        <div className="bg-gray-100 dark:bg-[#161b22] rounded-[24px] border border-gray-300 dark:border-gray-800 shadow-2xl overflow-hidden transition-all">
          <OrdersTable />
        </div>
      </main>
    </div>
  );
}
