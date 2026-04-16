'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const Icons = {
  Bell: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
  ),
  Mail: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  ),
  Smartphone: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  ),
  AlertTriangle: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  ),
  ChevronLeft: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  ),
  ChevronRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  )
};

export default function NotificacoesAlertas() {
  const opcoesNotificacoes = [
    { 
      titulo: 'Alertas de Stock Baixo', 
      subtitulo: 'Receber avisos quando produtos atingirem o limite mínimo.', 
      icon: <Icons.AlertTriangle />,
      active: true
    },
    { 
      titulo: 'Notificações por E-mail', 
      subtitulo: 'Relatórios diários e resumos de movimentação.', 
      icon: <Icons.Mail />,
      active: true
    },
    { 
      titulo: 'Push no Navegador', 
      subtitulo: 'Alertas em tempo real sobre novos pedidos.', 
      icon: <Icons.Bell />,
      active: false
    },
    { 
      titulo: 'Mensagens SMS', 
      subtitulo: 'Alertas críticos enviados para o telemóvel registado.', 
      icon: <Icons.Smartphone />,
      active: false
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0d1117] text-gray-100 font-sans antialiased">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-8 md:p-12 transition-all duration-300">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-14">
          <div>
            <span className="text-blue-500 text-[11px] font-black uppercase tracking-[4px] mb-3 block">
              Comunicações do Sistema
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Notificações
            </h1>
          </div>
          <Link 
            href="/configuracoes" 
            className="group bg-[#161b22] border border-gray-800 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-[#1f262e] transition-all flex items-center gap-2"
          >
            <Icons.ChevronLeft /> Voltar
          </Link>
        </div>

        {/* Lista de Opções */}
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-[3px]">Configurações de Avisos</span>
            <div className="h-[1px] flex-1 bg-gray-800/40"></div>
          </div>

          {opcoesNotificacoes.map((item, index) => (
            <div 
              key={index}
              className="w-full bg-[#161b22] border border-gray-800 rounded-[24px] p-6 flex items-center justify-between hover:border-blue-500/30 hover:bg-[#1c222a] transition-all group shadow-xl"
            >
              <div className="flex items-center gap-4 md:gap-7">
                <div className="bg-[#0d1117] p-4 rounded-[20px] text-blue-500 border border-gray-800 group-hover:border-blue-500/20 transition-all">
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

              {/* Toggle Switch Simulado */}
              <div className={`w-12 h-6 rounded-full p-1 transition-all duration-300 ${item.active ? 'bg-blue-600' : 'bg-gray-800'}`}>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transition-all duration-300 ${item.active ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}