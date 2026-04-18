"use client";

import React, { useState, useRef, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";
import Link from "next/link";

// --- Ícones ---
const Icons = {
  Bell: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
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

// --- PAGE ---
export default function NovoPedidoPage() {
  const [quantidade, setQuantidade] = useState(0);
  const isCollapsed = false;

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0a0f1c] relative">
      <Sidebar />

      <main
        className={`flex-1 flex flex-col items-center justify-center p-4 md:p-10 transition-all duration-300 relative ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}`}
      >
        <TopHeader />

        {/* CARD */}
        <section className="w-full max-w-2xl rounded-[32px] md:rounded-[40px] bg-gray-100 dark:bg-[#161b22] p-6 md:p-12 text-gray-900 dark:text-white shadow-2xl border border-gray-300 dark:border-gray-800 mt-16 lg:mt-0">
          <header className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Novo Pedido
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
              Preencha os dados abaixo para solicitar produtos.
            </p>
          </header>

          <div className="space-y-6 md:space-y-7">
            {/* Produto */}
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-blue-500">
                <Icons.Package />
              </div>

              <select className="w-full appearance-none rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0d1117] py-3.5 md:py-4 pl-12 pr-12 text-gray-900 dark:text-gray-200 outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-all cursor-pointer text-sm md:text-base">
                <option value="">Selecione um produto</option>
                <option value="coxinha">Coxinha</option>
                <option value="pastel">Pastel de Frango</option>
                <option value="enroladinho">Enroladinho</option>
              </select>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-600 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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

            {/* Quantidade */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">
                Quantidade
              </label>

              <input
                type="number"
                value={quantidade || ""}
                onChange={(e) => setQuantidade(Number(e.target.value))}
                className="w-full rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0d1117] px-5 py-4 text-gray-900 dark:text-gray-200 outline-none focus:ring-1 focus:ring-blue-500/50 placeholder:text-gray-400 dark:placeholder:text-gray-700"
              />
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider ml-1">
                Descrição
              </label>

              <textarea className="w-full rounded-2xl border border-gray-300 dark:border-gray-800 bg-white dark:bg-[#0d1117] p-5 text-gray-900 dark:text-gray-200 outline-none focus:ring-1 focus:ring-blue-500/50 placeholder:text-gray-400 dark:placeholder:text-gray-700" />
            </div>
          </div>
        </section>

        {/* BOTÕES */}
        <div className="mt-8 flex gap-4 w-full max-w-2xl">
          <button className="w-1/2 bg-gray-200 dark:bg-[#161b22] border border-gray-300 dark:border-gray-800 p-4 rounded-2xl text-gray-700 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-800">
            Cancelar
          </button>

          <button className="w-1/2 bg-blue-600 text-white p-4 rounded-2xl hover:bg-blue-700">
            Confirmar
          </button>
        </div>
      </main>
    </div>
  );
}
