"use client";

import React from "react";

interface Props {
  onSearch?: (value: string) => void;
}

export default function FiltersBar({ onSearch }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Selects */}
      <div className="flex gap-3">
        <select className="bg-[#111827] border border-blue-900/20 text-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500/50 transition-colors cursor-pointer">
          <option>Data: Últimos 7 dias</option>
          <option>Hoje</option>
          <option>Este mês</option>
        </select>

        <select className="bg-[#111827] border border-blue-900/20 text-gray-300 px-4 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500/50 transition-colors cursor-pointer">
          <option>Todas Categorias</option>
        </select>
      </div>

      {/* Search */}
      <div className="relative flex-1 md:max-w-md md:ml-auto group">
        <input
          type="text"
          placeholder="Pesquisar pedidos..."
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full bg-[#0f172a] border border-blue-900/20 text-white pl-10 pr-4 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-gray-500"
        />

        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors">
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
  );
}
