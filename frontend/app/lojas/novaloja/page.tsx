'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

// Ícones Premium para o formulário
const Icons = {
    ChevronLeft: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    ),
    Store: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
    ),
    Map: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    User: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )
};

export default function NovaLoja() {
    return (
        <div className="flex min-h-screen bg-[#0d1117] text-gray-100 font-sans antialiased">
            <Sidebar />

            <main className="flex-1 lg:ml-64 p-8 md:p-12 transition-all duration-300 relative overflow-hidden">
                {/* Efeito de iluminação de fundo */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -mr-64 -mt-64 z-0 pointer-events-none" />

                <div className="max-w-3xl mx-auto relative z-10">
                    
                    {/* Header de Navegação */}
                    <div className="mb-12">
                        <Link 
                            href="/lojas" 
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-white mb-6 transition-colors group"
                        >
                            <span className="p-1.5 bg-gray-800/50 rounded-lg group-hover:bg-gray-700 transition-all border border-gray-700/50">
                                <Icons.ChevronLeft />
                            </span>
                            <span className="text-[11px] font-black uppercase tracking-[2px]">Cancelar e Voltar</span>
                        </Link>
                        <h1 className="text-4xl font-black tracking-tighter text-white uppercase">
                            Adicionar Nova Loja
                        </h1>
                        <p className="text-gray-500 font-medium mt-2">Preencha as informações para registrar uma nova unidade no sistema UniStock.</p>
                    </div>

                    {/* Card do Formulário */}
                    <div className="bg-[#161b22] border border-gray-800/60 rounded-[40px] p-10 shadow-2xl">
                        
                        {/* Selector de Tipo (Fabrica/Loja) */}
                        <div className="flex bg-[#0d1117] p-1.5 rounded-2xl border border-gray-800 w-fit mb-10">
                            <button className="px-8 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider text-gray-500 hover:text-gray-300 transition-all">
                                Fábrica
                            </button>
                            <button className="px-8 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider bg-blue-600 text-white shadow-lg shadow-blue-900/20">
                                Loja
                            </button>
                        </div>

                        <form className="space-y-8">
                            {/* Nome da Loja */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-gray-500 uppercase tracking-[2px] ml-1">Nome da Loja</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-500 group-focus-within:text-blue-500 transition-colors">
                                        <Icons.Store />
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Ex: Loja do Centro"
                                        className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Cidade e Endereço */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[2px] ml-1">Cidade</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-500">
                                            <Icons.Map />
                                        </div>
                                        <input 
                                            type="text" 
                                            placeholder="Ex: São Paulo"
                                            className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[11px] font-black text-gray-500 uppercase tracking-[2px] ml-1">Endereço</label>
                                    <input 
                                        type="text" 
                                        placeholder="Rua do Prado, 123"
                                        className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl py-4 px-6 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            {/* Responsável */}
                            <div className="space-y-2">
                                <label className="text-[11px] font-black text-gray-500 uppercase tracking-[2px] ml-1">Responsável</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center text-gray-500">
                                        <Icons.User />
                                    </div>
                                    <select className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl py-4 pl-14 pr-6 text-white focus:outline-none focus:border-blue-500/50 transition-all font-medium appearance-none cursor-pointer">
                                        <option value="" disabled selected>Selecione o Responsável</option>
                                        <option value="1">João Silva</option>
                                        <option value="2">Osmar Filho</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none text-gray-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Ações do Formulário */}
                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <Link 
                                    href="/lojas"
                                    className="flex justify-center items-center py-4 rounded-2xl border border-red-500/30 text-red-500 font-black text-[12px] uppercase tracking-widest hover:bg-red-500/5 transition-all active:scale-95"
                                >
                                    Cancelar
                                </Link>
                                <button 
                                    type="submit"
                                    className="py-4 rounded-2xl bg-green-600 text-white font-black text-[12px] uppercase tracking-widest hover:bg-green-500 shadow-xl shadow-green-900/20 transition-all active:scale-95 border border-green-400/20"
                                >
                                    Confirmar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}