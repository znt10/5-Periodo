'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const Icons = {
  Palette: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
  ),
  Layout: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
  ),
  Languages: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
  ),
  Eye: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  ChevronLeft: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  ),
  ChevronRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  )
};

export default function PersonalizacaoPerfil() {
  const opcoesPersonalizacao = [
    { titulo: 'Tema da Interface', subtitulo: 'Alternar entre modo escuro, claro ou automático.', icon: <Icons.Palette /> },
    { titulo: 'Layout do Painel', subtitulo: 'Personalize a disposição dos cards e tabelas.', icon: <Icons.Layout /> },
    { titulo: 'Idioma e Região', subtitulo: 'Português (Brasil) - UTC-3', icon: <Icons.Languages /> },
    { titulo: 'Modo de Visualização', subtitulo: 'Ajuste a densidade das informações na tela.', icon: <Icons.Eye /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#0d1117] text-gray-100 font-sans antialiased">
      <Sidebar />
      <main className="flex-1 lg:ml-64 p-8 md:p-12 transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-14">
          <div>
            <span className="text-blue-500 text-[11px] font-black uppercase tracking-[4px] mb-3 block">Interface do Sistema</span>
            <h1 className="text-3xl font-bold tracking-tight text-white">
                Personalização do Perfil
            </h1>
          </div>
          <Link href="/configuracoes" className="group bg-[#161b22] border border-gray-800 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-[#1f262e] transition-all flex items-center gap-2">
            <Icons.ChevronLeft /> Voltar
          </Link>
        </div>

        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-black text-gray-600 uppercase tracking-[3px]">Aparência Atual</span>
            <div className="h-[1px] flex-1 bg-gray-800/40"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Escuro', 'Claro', 'Sistema'].map((tema) => (
              <div key={tema} className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${tema === 'Escuro' ? 'bg-[#0d1117] border-blue-500' : 'bg-[#161b22] border-gray-800 hover:border-gray-700'}`}>
                <div className={`w-full h-20 rounded-lg mb-4 ${tema === 'Claro' ? 'bg-gray-200' : 'bg-[#1c222a] border border-gray-800'}`}></div>
                <span className="text-sm font-black uppercase tracking-wider">{tema}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl space-y-4">
          {opcoesPersonalizacao.map((item, index) => (
            <button key={index} className="w-full bg-[#161b22] border border-gray-800 rounded-[24px] p-6 flex items-center justify-between hover:border-blue-500/30 hover:bg-[#1c222a] transition-all group shadow-xl active:scale-[0.99]">
              <div className="flex items-center gap-4 md:gap-7">
                <div className="bg-[#0d1117] p-4 rounded-[20px] text-blue-500 border border-gray-800 group-hover:border-blue-500/20 transition-all">{item.icon}</div>
                <div className="text-left">
                  <h3 className="text-[17px] md:text-[19px] font-black text-white tracking-tight group-hover:text-blue-400">{item.titulo}</h3>
                  <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">{item.subtitulo}</p>
                </div>
              </div>
              <div className="bg-[#0d1117] p-2 rounded-full text-gray-700 border border-gray-800 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"><Icons.ChevronRight /></div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}