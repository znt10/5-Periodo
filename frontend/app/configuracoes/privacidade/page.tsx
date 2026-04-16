'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const Icons = {
  Trash: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
  ),
  FileLock: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><rect x="10" y="13" width="4" height="4" rx="1"/></svg>
  ),
  ShieldCheck: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
  ),
  AdSignal: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="12" x2="12.01" y1="18" y2="18"/><path d="M16 8h-8"/><path d="M16 12h-8"/></svg>
  ),
  ChevronLeft: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  ),
  ChevronRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6 6-6"/></svg>
  )
};

export default function PrivacidadeSeguranca() {
  const opcoes = [
    { 
      titulo: 'Excluir dados', 
      subtitulo: 'Exclua o histórico, os cookies, o cache e muito mais.', 
      icon: <Icons.Trash /> 
    },
    { 
      titulo: 'Guia de Privacidade', 
      subtitulo: 'Revise os principais controles de privacidade e segurança.', 
      icon: <Icons.FileLock /> 
    },
    { 
      titulo: 'Segurança', 
      subtitulo: 'Navegação segura e outras configurações de segurança.', 
      icon: <Icons.ShieldCheck /> 
    },
    { 
      titulo: 'Privacidade de anúncios', 
      subtitulo: 'Personalize as informações usadas pelo sistema para exibir avisos.', 
      icon: <Icons.AdSignal /> 
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0d1117] text-gray-100 font-sans antialiased">
      <Sidebar />

      {/* Conteúdo Principal com espaçamento responsivo para a Sidebar */}
      <main className="flex-1 lg:ml-64 p-8 md:p-12 transition-all duration-300">
        
        {/* Cabeçalho Profissional */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-14">
          <div>
            <span className="text-blue-500 text-[11px] font-black uppercase tracking-[4px] mb-3 block">
              Proteção de Dados
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Privacidade e Segurança
            </h1>
          </div>
          <Link 
            href="/configuracoes" 
            className="group bg-[#161b22] border border-gray-800 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-[#1f262e] hover:border-gray-700 transition-all flex items-center gap-2 shadow-lg"
          >
            <Icons.ChevronLeft /> Voltar
          </Link>
        </div>

        {/* Busca Refinada (Estilo UniStock) */}
        <div className="relative max-w-2xl mb-16 group">
          <input 
            type="text" 
            placeholder="PESQUISAR PRIVACIDADE..." 
            className="w-full bg-[#161b22] border border-gray-800 rounded-2xl py-5 pl-14 pr-6 text-[13px] font-black text-white focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-600 placeholder:tracking-[2px] shadow-2xl"
          />
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
        </div>

        {/* Lista de Opções Estilizada */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-[3px]">Configurações Críticas</span>
            <div className="h-[1px] flex-1 bg-gray-800/40"></div>
          </div>

          {opcoes.map((item, index) => (
            <button 
              key={index}
              className="w-full bg-[#161b22] border border-gray-800 rounded-[24px] p-6 flex items-center justify-between hover:border-blue-500/30 hover:bg-[#1c222a] transition-all group shadow-xl active:scale-[0.99] outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <div className="flex items-center gap-4 md:gap-7">
                {/* Container do Ícone */}
                <div className="bg-[#0d1117] p-4 rounded-[20px] text-blue-500 border border-gray-800 group-hover:border-blue-500/20 group-hover:scale-105 transition-all shadow-inner shrink-0">
                  {item.icon}
                </div>
                
                <div className="text-left">
                  <h3 className="text-[17px] md:text-[19px] font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">
                    {item.subtitulo}
                  </p>
                </div>
              </div>

              {/* Seta Indicadora */}
              <div className="bg-[#0d1117] p-2 rounded-full text-gray-700 border border-gray-800 group-hover:text-blue-500 group-hover:border-blue-500/30 group-hover:translate-x-1 transition-all shrink-0">
                <Icons.ChevronRight />
              </div>
            </button>
          ))}
        </div>

        {/* Rodapé de Informação */}
        <p className="mt-12 text-gray-600 text-[11px] font-medium max-w-2xl leading-relaxed">
          Suas informações de segurança são protegidas por criptografia de ponta a ponta. 
          A UniStock não compartilha dados sensíveis com terceiros sem sua autorização explícita.
        </p>
      </main>
    </div>
  );
}