'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

// Ícones Premium com traços definidos
const Icons = {
    ChevronLeft: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
    ),
    MapPin: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
    User: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
    Phone: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
    ),
    Mail: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
    ),
    Edit: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
    )
};

export default function DetalheLoja() {
    // Dados simulados da unidade
    const loja = {
        nome: "Loja Centro",
        status: "Ativa",
        cidade: "Patos-PB",
        endereco: "Rua Central, 120",
        responsavel: "João Silva",
        telefone: "(83) 99999-9999",
        email: "joaosilva@gmail.com"
    };

    return (
        <div className="flex min-h-screen bg-[#0d1117] text-gray-100 font-sans antialiased">
            <Sidebar />

            <main className="flex-1 lg:ml-64 p-6 md:p-12 transition-all duration-300 relative overflow-hidden">
                {/* Efeito Glow de fundo para profundidade visual conforme padrão Premium */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64 z-0 pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    
                    {/* Header com Navegação e Ações */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div>
                            {/* Link configurado para voltar à rota /lojas */}
                            <Link 
                                href="/lojas" 
                                className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-4 transition-colors group"
                            >
                                <span className="p-1.5 bg-gray-800/50 rounded-lg group-hover:bg-gray-700 transition-all border border-gray-700/50">
                                    <Icons.ChevronLeft />
                                </span>
                                <span className="text-[11px] font-black uppercase tracking-[2px]">Voltar para Lojas</span>
                            </Link>
                            
                            <div className="flex items-center gap-4">
                                <h1 className="text-[44px] font-black tracking-tighter text-white leading-none uppercase">
                                    {loja.nome}
                                </h1>
                                <span className="mt-2 px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-lg text-[10px] font-black uppercase tracking-wider">
                                    {loja.status}
                                </span>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-2xl font-black text-[12px] uppercase tracking-widest transition-all shadow-xl shadow-blue-900/20 active:scale-95 border border-blue-400/20">
                            <Icons.Edit /> Editar Unidade
                        </button>
                    </div>

                    {/* Grid de Informações - Estilo Moderno Assimétrico */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Bloco de Localização */}
                        <div className="md:col-span-2 bg-[#161b22] border border-gray-800/60 rounded-[32px] p-8 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                                <Icons.MapPin />
                            </div>
                            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[3px] mb-6 block">Localização</span>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-gray-500 text-[11px] font-bold uppercase tracking-wider block mb-1">Cidade</label>
                                    <p className="text-xl font-black text-white">{loja.cidade}</p>
                                </div>
                                <div>
                                    <label className="text-gray-500 text-[11px] font-bold uppercase tracking-wider block mb-1">Endereço Completo</label>
                                    <p className="text-xl font-black text-white leading-tight">{loja.endereco}</p>
                                </div>
                            </div>
                        </div>

                        {/* Bloco de Responsável */}
                        <div className="bg-[#1c2128] border border-gray-800/60 rounded-[32px] p-8 shadow-2xl flex flex-col justify-between border-l-4 border-l-blue-600 transition-all hover:bg-[#1e252e]">
                            <span className="text-gray-500 text-[10px] font-black uppercase tracking-[3px] mb-4 block">Responsável</span>
                            <div>
                                <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-500 mb-4">
                                    <Icons.User />
                                </div>
                                <h3 className="text-2xl font-black text-white tracking-tighter mb-1">{loja.responsavel}</h3>
                                <p className="text-gray-500 text-sm font-medium italic">Gerente de Unidade</p>
                            </div>
                        </div>
                    </div>

                    {/* Bloco de Contatos Rápidos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#161b22] border border-gray-800/40 rounded-[24px] p-6 flex items-center gap-6 hover:border-gray-700 transition-all group">
                            <div className="p-4 bg-gray-800/50 rounded-2xl text-gray-400 group-hover:text-blue-500 transition-colors">
                                <Icons.Phone />
                            </div>
                            <div>
                                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block">Telefone de Contato</label>
                                <p className="text-lg font-black text-white font-mono">{loja.telefone}</p>
                            </div>
                        </div>

                        <div className="bg-[#161b22] border border-gray-800/40 rounded-[24px] p-6 flex items-center gap-6 hover:border-gray-700 transition-all group">
                            <div className="p-4 bg-gray-800/50 rounded-2xl text-gray-400 group-hover:text-blue-500 transition-colors">
                                <Icons.Mail />
                            </div>
                            <div>
                                <label className="text-gray-500 text-[10px] font-bold uppercase tracking-widest block">E-mail Corporativo</label>
                                <p className="text-lg font-black text-white">{loja.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Zona de Perigo/Remoção */}
                    <div className="mt-20 pt-8 border-t border-gray-800/50 flex justify-center">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-all font-black text-[11px] uppercase tracking-[2px] group">
                            <span className="w-8 h-8 rounded-lg border border-gray-800 flex items-center justify-center group-hover:border-red-500/50 group-hover:bg-red-500/5 transition-all text-lg leading-none">×</span>
                            Remover Unidade do Sistema
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}