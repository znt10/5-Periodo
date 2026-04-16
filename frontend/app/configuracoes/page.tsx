'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const Icons = {
    User: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
    Lock: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
    ),
    Shield: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
    Bell: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
    ),
    ChevronRight: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
    ),
    Search: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
    )
};

export default function Configuracoes() {
    const secoes = [
        {
            titulo: 'Gerenciar conta UniStock',
            subtitulo: 'Informações de acesso e segurança da conta.',
            icon: <Icons.User />,
            tag: 'CONTA',
            href: '/configuracoes/conta'
        },
        {
            titulo: 'Privacidade e Segurança',
            subtitulo: 'Controle seus dados e configurações de proteção.',
            icon: <Icons.Lock />,
            tag: 'PROTEÇÃO',
            href: '/configuracoes/privacidade'
        },
        {
            titulo: 'Personalização do Perfil',
            subtitulo: 'Preferências de visualização e interface.',
            icon: <Icons.Shield />,
            tag: 'SISTEMA',
            href: '/configuracoes/personalizacao'
        },
        {
            titulo: 'Notificações e Alertas',
            subtitulo: 'Configurações de avisos de estoque e pedidos.',
            icon: <Icons.Bell />,
            tag: 'AVISOS',
            href: '/configuracoes/notificacoes' 
        },
    ];

    return (
        <div className="flex min-h-screen bg-[#0d1117] text-gray-100 font-sans antialiased">
            <Sidebar />

            <main className="flex-1 lg:ml-64 p-8 md:p-12 transition-all">
                {/* Header */}
                <div className="mb-14">
                    <span className="text-blue-500 text-[11px] font-black uppercase tracking-[4px] mb-3 block">
                        Painel Administrativo
                    </span>
                      <h1 className="text-3xl font-bold tracking-tight text-white">
                        Configurações
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Ajuste os parâmetros do sistema e gerencie suas preferências de segurança.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mb-16 group">
                    <input
                        type="text"
                        placeholder="O QUE VOCÊ ESTÁ PROCURANDO?"
                        className="w-full bg-[#161b22] border border-gray-800 rounded-2xl py-5 pl-14 pr-6 text-[13px] font-black text-white focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-600 placeholder:tracking-[2px]"
                    />
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors">
                        <Icons.Search />
                    </div>
                </div>

                {/* Seção de Opções */}
                <div className="max-w-5xl">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-[11px] font-black text-gray-600 uppercase tracking-[3px]">Preferências Gerais</span>
                        <div className="h-[1px] flex-1 bg-gray-800/50"></div>
                    </div>

                    <div className="grid gap-5">
                        {secoes.map((secao, index) => (
                            <Link
                                href={secao.href}
                                key={index}
                                className="w-full bg-[#161b22] border border-gray-800 rounded-[28px] p-7 flex items-center justify-between hover:border-blue-500/40 hover:bg-[#1c222a] transition-all group shadow-2xl active:scale-[0.985] text-left cursor-pointer"
                            >
                                <div className="flex items-center gap-8">
                                    <div className="bg-[#0d1117] p-5 rounded-[22px] text-blue-500 border border-gray-800 group-hover:border-blue-500/20 group-hover:scale-105 transition-all shadow-inner shrink-0">
                                        {secao.icon}
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-xl font-black text-white tracking-tight group-hover:text-blue-400 transition-colors">
                                                {secao.titulo}
                                            </h3>
                                            <span className="bg-blue-500/10 text-blue-500 text-[9px] font-black px-2 py-0.5 rounded-md tracking-tighter uppercase">
                                                {secao.tag}
                                            </span>
                                        </div>
                                        <p className="text-gray-500 text-[15px] font-medium leading-relaxed">
                                            {secao.subtitulo}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-[#0d1117] p-3 rounded-full text-gray-700 border border-gray-800 group-hover:text-blue-500 group-hover:border-blue-500/30 group-hover:translate-x-1 transition-all shrink-0">
                                    <Icons.ChevronRight />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}