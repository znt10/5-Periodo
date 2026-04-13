'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';

// Ícone local para o input de produto
const IconPackage = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" /></svg>
);

export default function NovoPedidoPage() {
    const [quantidade, setQuantidade] = useState(0);

    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            {/* Sidebar idêntica à do Dashboard */}
            <Sidebar />


            {/* Área Centralizada do Formulário */}
            <div className="flex flex-1 flex-col items-center justify-center py-10">

                {/* Card Dark do Formulário */}
                <section className="w-full max-w-2xl rounded-[40px] bg-[#111827] p-12 text-white shadow-2xl border border-white/5">
                    <h1 className="mb-10 text-center text-5xl font-bold tracking-tight">Novo Pedido</h1>

                    <div className="space-y-8">
                        {/* Campo Produto */}
                        <div className="space-y-3">
                            <label className="text-xl font-bold px-1">Produto</label>
                            <div className="relative group cursor-pointer">
                                {/* Ícone de Pacote à Esquerda */}
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                                    <IconPackage />
                                </div>

                                {/* Adicionei cursor-pointer para reforçar que é clicável */}
                                <input
                                    type="text"
                                    readOnly // Se for apenas para selecionar, use readOnly. Se puder digitar, remova.
                                    placeholder="Selecione o produto"
                                    className="w-full rounded-2xl border border-slate-700 bg-[#1F2937] py-4 pl-12 pr-12 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all cursor-pointer"
                                />

                                {/* A SETINHA (Chevron Down) à Direita */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Campo Quantidade */}
                        <div className="space-y-3">
                            <label className="text-xl font-bold px-1">Quantidade</label>
                            <input
                                type="number"
                                value={quantidade}
                                onChange={(e) => setQuantidade(Number(e.target.value))}
                                className="w-full rounded-2xl border border-slate-700 bg-[#1F2937] px-5 py-4 text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                            />
                        </div>

                        {/* Campo Descrição */}
                        <div className="space-y-3">
                            <label className="text-xl font-bold px-1">Descrição (opcional)</label>
                            <textarea
                                placeholder="Ex: estou precisando para esta semana"
                                className="h-32 w-full resize-none rounded-2xl border border-slate-700 bg-[#1F2937] p-5 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                            />
                        </div>
                    </div>
                </section>

                {/* Botões de Ação */}
                <div className="mt-12 flex flex-wrap justify-center gap-6">
                    <button className="rounded-2xl bg-[#B91C1C] px-12 py-4 text-xl font-bold text-white transition hover:brightness-110 active:scale-95 shadow-lg min-w-[180px]">
                        Cancelar
                    </button>
                    <button className="rounded-2xl bg-[#4A88C2] px-12 py-4 text-xl font-bold text-white transition hover:brightness-110 active:scale-95 shadow-lg min-w-[180px]">
                        Confirmar
                    </button>
                    <button className="rounded-2xl bg-[#15803D] px-10 py-4 text-xl font-bold text-white transition hover:brightness-110 active:scale-95 shadow-lg">
                        Confirmar e Continuar
                    </button>
                </div>

            </div>
        </div>
    );
}