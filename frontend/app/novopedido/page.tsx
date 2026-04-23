"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

// --- Ícones ---
const Icons = {
  Package: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  ),
};

export default function NovoPedidoPage() {
  const [quantidade, setQuantidade] = useState(0);
  const isCollapsed = false;

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0f1c]">
      <Sidebar />

      <main
        className={`flex-1 flex flex-col items-center justify-center p-4 md:p-10 transition-all duration-300 ${
          isCollapsed ? "lg:ml-20" : "lg:ml-64"
        }`}
      >
        {/* CARD */}
        <section className="w-full max-w-2xl rounded-[32px] md:rounded-[40px] bg-gray-100 dark:bg-[#121a2b] p-6 md:p-12 text-gray-900 dark:text-white shadow-2xl border border-gray-300 dark:border-[#1e293b] mt-16 lg:mt-0">
          {/* HEADER */}
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Novo Pedido
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
              Preencha os dados abaixo para solicitar produtos.
            </p>
          </header>

          <div className="space-y-6 md:space-y-7">
            {/* PRODUTO */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors">
                <Icons.Package />
              </div>

              <select className="w-full appearance-none rounded-2xl border border-gray-300 dark:border-[#1e293b] bg-white dark:bg-[#0f172a] py-3.5 md:py-4 pl-12 pr-12 text-gray-900 dark:text-gray-200 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all cursor-pointer text-sm md:text-base">
                <option value="">Selecione um produto</option>
                <option value="coxinha">Coxinha</option>
                <option value="pastel">Pastel de Frango</option>
                <option value="enroladinho">Enroladinho</option>
              </select>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-600 pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>

            {/* QUANTIDADE */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">
                Quantidade
              </label>

              <input
                type="number"
                value={quantidade || ""}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="w-full rounded-2xl border border-gray-300 dark:border-[#1e293b] bg-white dark:bg-[#0f172a] px-5 py-4 text-gray-900 dark:text-gray-200 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-all"
              />
            </div>

            {/* DESCRIÇÃO */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">
                Descrição
              </label>

              <textarea
                className="w-full rounded-2xl border border-gray-300 dark:border-[#1e293b] bg-white dark:bg-[#0f172a] p-5 text-gray-900 dark:text-gray-200 outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-600 transition-all"
                placeholder="Detalhes do pedido..."
              />
            </div>
          </div>
        </section>

        {/* BOTÕES */}
        <div className="mt-8 flex gap-4 w-full max-w-2xl">
          {/* CANCELAR */}
          <button className="w-1/2 bg-gray-200 dark:bg-[#121a2b] border border-gray-300 dark:border-[#1e293b] p-4 rounded-2xl text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-[#1a2438] transition-all">
            Cancelar
          </button>

          {/* CONFIRMAR */}
          <button className="w-1/2 bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-400 p-4 rounded-2xl text-white font-semibold transition-all active:scale-[0.97] shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[0_0_30px_rgba(37,99,235,0.45)]">
            Confirmar
          </button>
        </div>
      </main>
    </div>
  );
}
