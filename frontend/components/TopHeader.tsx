"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

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
};

export default function TopHeader() {
  const [showNotifs, setShowNotifs] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const notifications = [
    { id: 1, text: "Pedido #882 realizado com sucesso!", time: "Há 2 min" },
    { id: 2, text: "Novo item adicionado ao estoque", time: "Há 1h" },
    { id: 3, text: "Relatório mensal disponível", time: "Há 5h" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target;

      if (
        dropdownRef.current &&
        target instanceof Node &&
        !dropdownRef.current.contains(target)
      ) {
        setShowNotifs(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full flex justify-end p-4 md:p-6 absolute top-0 right-0 z-50">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowNotifs(!showNotifs)}
          className={`p-2.5 rounded-full transition-all relative border ${
            showNotifs
              ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
              : "bg-gray-100 dark:bg-[#161b22] text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-[#1f262e] border-gray-300 dark:border-gray-800"
          }`}
        >
          <Icons.Bell />

          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white dark:border-[#0d1117]"></span>
          </span>
        </button>

        {showNotifs && (
          <div className="absolute right-0 mt-3 w-72 bg-white dark:bg-[#12171d] border border-gray-300 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden z-50">
            <div className="p-4 border-b border-gray-300 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-[#12171d]">
              <span className="font-semibold text-gray-900 dark:text-gray-100 text-[13px]">
                Notificações
              </span>
              <button className="text-[10px] text-blue-500 hover:underline font-medium">
                Marcar como lida
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto">
              {notifications.map((n) => (
                <div
                  key={n.id}
                  className="p-4 hover:bg-gray-100 dark:hover:bg-[#1c2128] border-b border-gray-300 dark:border-gray-800/40 last:border-0 transition-colors cursor-pointer group"
                >
                  <p className="text-[13px] text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white">
                    {n.text}
                  </p>
                  <span className="text-[11px] text-gray-500 mt-1.5 block">
                    {n.time}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-[#12171d] text-center">
              <Link
                href="/notificacoes"
                className="text-[11px] text-blue-500 hover:text-blue-400 font-bold tracking-wide block w-full"
              >
                Ver todas as notificações
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
