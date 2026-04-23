"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import StatsCards from "@/components/Cards/StatsCards";
import OrdersTable from "@/components/Cards/OrdersTable";
import FiltersBar from "@/components/Cards/FiltersBar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen dark:bg-[#0a0f1c] text-gray-100 font-sans ">
      <Sidebar />
      <main className="flex-1 p-4 md:p-10 lg:ml-64 transition-all duration-300">
        {/* Header Superior */}
        <div className="flex justify-between items-start mb-10 mt-12 lg:mt-0">
          <header>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Painel de Controle
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Bem-vindo de volta, aqui está o resumo de hoje.
            </p>
          </header>
        </div>

        {/* Cards de Métricas */}
        <section className="mb-10">
          <StatsCards />
        </section>

        {/* Filtros e Busca Padronizados */}
        <FiltersBar />
        {/* Tabela de Pedidos Recentes (Título interno) */}
        <div className="bg-[#161b22] rounded-[24px] border border-gray-800 shadow-2xl overflow-hidden transition-all">
          <OrdersTable />
        </div>
      </main>
    </div>
  );
}
