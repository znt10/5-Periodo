'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';

export default function MeusPedidosPage() {
  const pedidos = [
    { id: 1, img: '/images/coxinha.jpg', data: '30/03/26', produto: 'Coxinha', qtd: 150, obs: 'Preciso, pois não tem para amanhã', status: 'pendente' },
    { id: 2, img: '/images/pasteldefrango.jpg', data: '30/03/26', produto: 'Pastel de Frango', qtd: 50, obs: '', status: 'pendente' },
    { id: 3, img: '/images/enroladinho.jpg', data: '30/03/26', produto: 'Enroladinho', qtd: 80, obs: '', status: 'pendente' },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />

      <main className="ml-64 flex-1 p-10">
        <div className="flex gap-8 items-start">
          {/* TABELA CENTRAL (Card Dark) */}
          <div className="flex-1 bg-[#111827] rounded-[32px] p-8 shadow-2xl border border-white/5">
            <div className="bg-white rounded-2xl overflow-hidden min-h-[400px]">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr className="text-slate-900 font-bold text-sm">
                    <th className="px-4 py-4 text-center">Ícone</th>
                    <th className="px-4 py-4">Data/Hora</th>
                    <th className="px-4 py-4">Produto</th>
                    <th className="px-4 py-4">Quantidade</th>
                    <th className="px-4 py-4">Descriçao(opcional)</th>
                    <th className="px-4 py-4 text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 text-sm font-medium">
                  {pedidos.map((item) => (
                    <tr key={item.id} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3">
                        <div className="flex justify-center">
                          <img src={item.img} alt={item.produto} className="w-10 h-10 rounded-lg border border-slate-200 object-cover" />
                        </div>
                      </td>
                      <td className="px-4 py-3">{item.data}</td>
                      <td className="px-4 py-3">{item.produto}</td>
                      <td className="px-4 py-3 text-center">{item.qtd}</td>
                      <td className="px-4 py-3 text-xs text-slate-500 max-w-[200px]">{item.obs}</td>
                      <td className="px-4 py-3">
                        <div className="flex justify-center">
                          <span className="bg-orange-100 text-orange-700 p-1.5 rounded-lg border border-orange-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINAÇÃO */}
            <div className="mt-6 flex justify-center items-center gap-2">
              <button className="p-2 bg-white rounded-lg hover:bg-slate-100 transition shadow-sm border border-slate-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <span className="w-10 h-10 flex items-center justify-center bg-white rounded-lg font-bold text-slate-900 border border-slate-200 shadow-sm">1</span>
              <button className="p-2 bg-white rounded-lg hover:bg-slate-100 transition shadow-sm border border-slate-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          {/* CARD DE FILTRO (Direita) */}
          <aside className="w-72 bg-[#1F2937] rounded-[24px] p-6 text-white shadow-xl border border-white/5">
            <h2 className="text-3xl font-bold mb-8">Filtro</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Status</label>
                <div className="relative">
                  <select className="w-full bg-[#111827] border border-slate-700 rounded-xl py-3 px-4 text-sm outline-none appearance-none focus:ring-2 focus:ring-blue-500/50 transition-all">
                    <option>(Entregue, Esperando)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-300">Periodo</label>
                <div className="relative">
                  <input 
                    type="text" 
                    defaultValue="15/03/2026" 
                    className="w-full bg-[#111827] border border-slate-700 rounded-xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 bg-[#4A88C2] hover:bg-[#3d71a1] py-3 rounded-xl font-bold text-white transition-all active:scale-95 shadow-lg">
                Confirmar
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}