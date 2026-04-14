'use client';

import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

// --- Ícones Locais (SVG Puro) ---
const Icons = {
    Bell: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
    ),
    Package: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
    )
};

// --- Componente de Header com Notificações ---
function TopHeader() {
    const [showNotifs, setShowNotifs] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const notifications = [
        { id: 1, text: "Pedido #882 realizado com sucesso!", time: "Há 2 min" },
        { id: 2, text: "Novo item adicionado ao estoque", time: "Há 1h" },
        { id: 3, text: "Relatório mensal disponível", time: "Há 5h" },
    ];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowNotifs(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="w-full flex justify-end p-4 md:p-6 absolute top-0 right-0 z-50">
            <div className="relative" ref={dropdownRef}>
                <button 
                    onClick={() => setShowNotifs(!showNotifs)}
                    className={`p-2.5 rounded-full transition-all relative border ${
                        showNotifs 
                        ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]' 
                        : 'bg-[#161b22] text-gray-400 hover:bg-[#1f262e] border-gray-800'
                    }`}
                >
                    <Icons.Bell />
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-[#0d1117]"></span>
                    </span>
                </button>

                {showNotifs && (
                    <div className="absolute right-0 mt-3 w-72 bg-[#12171d] border border-gray-800/60 rounded-xl shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in duration-200">
                        <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#12171d]">
                            <span className="font-semibold text-gray-100 text-[13px]">Notificações</span>
                            <button className="text-[10px] text-blue-500 hover:underline font-medium">Marcar como lida</button>
                        </div>
                        
                        <div className="max-h-[300px] overflow-y-auto">
                            {notifications.map((n) => (
                                <div key={n.id} className="p-4 hover:bg-[#1c2128] border-b border-gray-800/40 last:border-0 transition-colors cursor-pointer group">
                                    <p className="text-[13px] text-gray-200 group-hover:text-white transition-colors leading-tight">{n.text}</p>
                                    <span className="text-[11px] text-gray-500 mt-1.5 block">{n.time}</span>
                                </div>
                            ))}
                        </div>

                        <div className="p-3 border-t border-gray-800 bg-[#12171d] text-center">
                            {/* AJUSTE AQUI: Transformado em Link do Next.js */}
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

export default function NovoPedidoPage() {
    const [quantidade, setQuantidade] = useState(0);
    // Aqui você pode integrar com o estado real da sua Sidebar se necessário
    const isCollapsed = false; 

    return (
        <div className="flex min-h-screen bg-[#0d1117] relative">
            <Sidebar />

            <main className={`flex-1 flex flex-col items-center justify-center p-4 md:p-10 transition-all duration-300 relative ${isCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
                
                <TopHeader />

                {/* Card do Formulário */}
                <section className="w-full max-w-2xl rounded-[32px] md:rounded-[40px] bg-[#161b22] p-6 md:p-12 text-white shadow-2xl border border-gray-800 mt-16 lg:mt-0">
                    <header className="mb-10 text-center">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-100">
                            Novo Pedido
                        </h1>
                        <p className="text-gray-500 mt-2 text-sm md:text-base">Preencha os dados abaixo para solicitar produtos.</p>
                    </header>

                    <div className="space-y-6 md:space-y-7">
                        {/* Campo Produto */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Produto</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-blue-500">
                                    <Icons.Package />
                                </div>

                                <select
                                    className="w-full appearance-none rounded-2xl border border-gray-800 bg-[#0d1117] py-3.5 md:py-4 pl-12 pr-12 text-gray-200 outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-all cursor-pointer text-sm md:text-base"
                                >
                                    <option value="">Selecione um produto</option>
                                    <option value="coxinha">Coxinha</option>
                                    <option value="pastel">Pastel de Frango</option>
                                    <option value="enroladinho">Enroladinho</option>
                                </select>

                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Campo Quantidade */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Quantidade</label>
                            <input
                                type="number"
                                placeholder="0"
                                value={quantidade || ''}
                                onChange={(e) => setQuantidade(Number(e.target.value))}
                                className="w-full rounded-2xl border border-gray-800 bg-[#0d1117] px-5 py-3.5 md:py-4 text-gray-200 outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm md:text-base placeholder:text-gray-700"
                            />
                        </div>

                        {/* Campo Descrição */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Descrição (opcional)</label>
                            <textarea
                                placeholder="Ex: estou precisando para esta semana..."
                                className="h-28 md:h-32 w-full resize-none rounded-2xl border border-gray-800 bg-[#0d1117] p-5 text-gray-200 placeholder:text-gray-700 outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm md:text-base"
                            />
                        </div>
                    </div>
                </section>

                {/* Botões de Ação */}
                <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-2xl px-4">
                    <button className="w-full sm:w-1/2 rounded-2xl bg-[#161b22] border border-gray-800 px-8 py-3.5 md:py-4 text-lg font-bold text-gray-400 transition hover:bg-gray-800 hover:text-white active:scale-95 shadow-lg">
                        Cancelar
                    </button>
                    <button className="w-full sm:w-1/2 rounded-2xl bg-blue-600 px-8 py-3.5 md:py-4 text-lg font-bold text-white transition hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-900/20">
                        Confirmar Pedido
                    </button>
                </div>
            </main>
        </div>
    );
}