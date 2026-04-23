"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

const Icons = {
  Bell: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
  Trash: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  ),
  // NOVO ÍCONE: Engrenagem (Settings)
  Settings: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

export default function NotificacoesPage() {
  const [notificacoes, setNotificacoes] = useState([
    {
      id: 1,
      titulo: "Pedido realizado com sucesso!",
      msg: "O pedido #882 foi processado.",
      data: "Há 3 horas atrás",
      lida: false,
    },
    {
      id: 2,
      titulo: "Pedido pendente!",
      msg: "Um novo pedido aguarda sua revisão.",
      data: "Há 13 horas atrás",
      lida: false,
    },
    {
      id: 3,
      titulo: "Pedido enviado!",
      msg: "A remessa saiu para entrega.",
      data: "Há 1 dia atrás",
      lida: true,
    },
  ]);

  const marcarLida = (id: number) => {
    setNotificacoes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, lida: true } : n)),
    );
  };

  const excluir = (id: number) => {
    setNotificacoes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-[#0a0f1c] font-sans antialiased text-gray-300">
      <Sidebar />
      <main className="flex-1 p-6 lg:ml-64 transition-all">
        <div className="max-w-4xl mx-auto mt-10">
          {/* HEADER COM A ENGRENAGEM */}
          <header className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-white flex items-center gap-3 tracking-tight">
                <Icons.Bell /> Notificações
              </h1>
              <p className="text-gray-400 mt-1">
                Histórico completo de notificações do sistema.
              </p>
            </div>

            {/* Botão da Engrenagem */}
            <Link
              href="/configuracoes"
              className="text-gray-500 hover:text-blue-500 transition-all hover:rotate-45 duration-300"
            >
              <Icons.Settings />
            </Link>
          </header>

          {/* Container da Lista de Notificações */}
          <div className="space-y-1 border border-[#1f2a44] rounded-2xl overflow-hidden bg-[#121826] shadow-2xl">
            {notificacoes.map((n) => (
              <div
                key={n.id}
                className={`p-6 border-b border-[#1f2a44] last:border-0 transition-all hover:bg-[#1a2238] group ${
                  n.lida ? "opacity-60" : "bg-[#121826]"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div
                    className="flex items-center gap-5 flex-1 cursor-pointer"
                    onClick={() => marcarLida(n.id)}
                  >
                    {/* Ícone de sino lateral */}
                    <div
                      className={`${n.lida ? "text-gray-600" : "text-blue-500"}`}
                    >
                      <Icons.Bell />
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold tracking-tight ${n.lida ? "text-gray-400" : "text-white"}`}
                      >
                        {n.titulo}
                      </h3>
                      <span className="text-xs text-gray-500 mt-1 block tracking-wide">
                        {n.data}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => excluir(n.id)}
                    className="text-gray-500 hover:text-red-400 p-2 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Icons.Trash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
