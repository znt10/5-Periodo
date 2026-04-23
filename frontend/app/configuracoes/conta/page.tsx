"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

const Icons = {
  User: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Mail: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Key: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
      <path d="m21 2-9.6 9.6" />
      <circle cx="7.5" cy="15.5" r="5.5" />
    </svg>
  ),
  LogOut: () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  ),
  ChevronLeft: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  ChevronRight: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
};

export default function GerenciarConta() {
  const opcoesConta = [
    {
      titulo: "Informações Pessoais",
      subtitulo: "Nome, foto de perfil e cargo na unidade.",
      icon: <Icons.User />,
    },
    {
      titulo: "E-mail de Acesso",
      subtitulo: "usuario@unistock.com.br",
      icon: <Icons.Mail />,
    },
    {
      titulo: "Senha e Autenticação",
      subtitulo: "Altere sua senha ou ative o 2FA.",
      icon: <Icons.Key />,
    },
    {
      titulo: "Encerrar Sessão",
      subtitulo: "Sair da sua conta em todos os dispositivos.",
      icon: <Icons.LogOut />,
      danger: true,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a0f1c] text-gray-300 font-sans antialiased">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-8 md:p-12 transition-all duration-300">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-14">
          <div>
            <span className="text-blue-500 text-[11px] font-black uppercase tracking-[4px] mb-3 block">
              Perfil do Usuário
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Gerenciar Conta
            </h1>
          </div>

          <Link
            href="/configuracoes"
            /* Botão adaptado para tons escuros */
            className="group bg-[#121826] border border-[#1f2a44] px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-[#1a2238] transition-all flex items-center gap-2 shadow-xl"
          >
            <Icons.ChevronLeft /> Voltar
          </Link>
        </div>

        {/* Card Perfil - Fundo #121826 e Borda #1f2a44 */}
        <div className="max-w-4xl bg-[#121826] border border-[#1f2a44] rounded-[32px] p-8 mb-10 flex items-center gap-6 shadow-2xl">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-3xl font-black text-white shadow-lg border-4 border-[#0a0f1c]">
            U
          </div>
          <div>
            <h2 className="text-2xl font-black text-white">Usuário UniStock</h2>
            <p className="text-gray-400 font-medium">
              Administrador de Unidade
            </p>
          </div>
        </div>

        {/* Lista */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[3px]">
              Segurança e Acesso
            </span>
            <div className="h-[1px] flex-1 bg-[#1f2a44]"></div>
          </div>

          {opcoesConta.map((item, index) => (
            <button
              key={index}
              className={`w-full bg-[#121826] border rounded-[24px] p-6 flex items-center justify-between transition-all group shadow-xl active:scale-[0.99] ${
                item.danger
                  ? "border-red-500/20 hover:bg-red-500/10 hover:border-red-500/30"
                  : "border-[#1f2a44] hover:border-blue-500/40 hover:bg-[#1a2238]"
              }`}
            >
              <div className="flex items-center gap-4 md:gap-7">
                <div
                  className={`p-4 rounded-[20px] border transition-all ${
                    item.danger
                      ? "bg-[#0f1629] text-red-500 border-red-500/20 group-hover:border-red-500/30"
                      : "bg-[#0f1629] text-blue-500 border-[#1f2a44] group-hover:border-blue-500/30"
                  }`}
                >
                  {item.icon}
                </div>

                <div className="text-left">
                  <h3
                    className={`text-[17px] md:text-[19px] font-black tracking-tight transition-colors ${
                      item.danger
                        ? "text-red-500"
                        : "text-white group-hover:text-blue-400"
                    }`}
                  >
                    {item.titulo}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm font-medium mt-1">
                    {item.subtitulo}
                  </p>
                </div>
              </div>

              <div
                className={`p-2 rounded-full border transition-all ${
                  item.danger
                    ? "text-red-400 border-red-500/20 group-hover:translate-x-1"
                    : "text-gray-500 border-[#1f2a44] group-hover:text-blue-500 group-hover:border-blue-500/30 group-hover:translate-x-1"
                }`}
              >
                <Icons.ChevronRight />
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
