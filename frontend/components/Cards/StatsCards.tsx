"use client";

import React from "react";

const stats = [
  {
    label: "Pedidos Hoje",
    value: "8",
  },
  {
    label: "Em Andamentos",
    value: "3",
  },
  {
    label: "Concluídos (semana)",
    value: "100",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="
            bg-white dark:bg-[#161b22]
            border border-gray-300 dark:border-gray-800
            rounded-[22px] p-8 flex justify-between items-center
            relative overflow-hidden group
            hover:border-blue-500/40 transition-all duration-300
            shadow-sm dark:shadow-none
          "
        >
          {/* Glow suave */}
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="z-10">
            {/* 🔥 descrição MAIS ESCURA no modo claro */}
            <p className="text-gray-700 dark:text-gray-500 text-sm font-medium mb-2">
              {stat.label}
            </p>

            {/* valor */}
            <h3 className="text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              {stat.value}
            </h3>
          </div>

          {/* Ícone decorativo */}
          <div className="z-10 opacity-20 group-hover:scale-110 transition-transform duration-500">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-gray-400 dark:text-gray-700"
            >
              <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
              <path d="m3.3 7 8.7 5 8.7-5" />
              <path d="M12 22V12" />
            </svg>
          </div>

          {/* Linha animada */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  );
}
