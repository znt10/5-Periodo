'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';

const Icons = {
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
  ),
  ChevronLeft: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  )
};

export default function PedidosUnidade() {
  const [pagina, setPagina] = useState(1);
  const itensPorPagina = 5;

  const todosPedidos = [
    { id: 1, img: '/images/coxinha.jpg', data: '15/03/26', produto: 'Coxinha', qtd: 150, desc: '-', status: 'Entregue' },
    { id: 2, img: '/images/pasteldefrango.jpg', data: '15/03/26', produto: 'Pastel de Frango', qtd: 50, desc: '-', status: 'Entregue' },
    { id: 3, img: '/images/enroladinho.jpg', data: '15/03/26', produto: 'Enroladinho', qtd: 80, desc: '-', status: 'Entregue' },
    { id: 4, img: '/images/minicoxinhas.jpg', data: '15/03/26', produto: 'Mini Coxinhas', qtd: 1000, desc: 'Encomenda especial para o evento de final de semana na unidade lapa', status: 'Entregue' },
    { id: 5, img: '/images/minienroladinhos.jpg', data: '15/03/26', produto: 'Mini Salsicha', qtd: 500, desc: 'Reposição urgente de estoque devido à alta demanda', status: 'Entregue' },
    { id: 6, img: '/images/minipastel.jpg', data: '15/03/26', produto: 'Mini Pastel', qtd: 500, desc: 'Encomenda final de semana', status: 'Entregue' },
    { id: 7, img: '/images/oleo.jpg', data: '15/03/26', produto: 'Óleo', qtd: 10, desc: 'Falta estoque no depósito central', status: 'Entregue' },
  ];

  const inicio = (pagina - 1) * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const pedidosExibidos = todosPedidos.slice(inicio, fim);
  const totalPaginas = Math.ceil(todosPedidos.length / itensPorPagina);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0d1117] font-sans antialiased">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 lg:ml-64 transition-all">
        {/* Header Padronizado */}
        <div className="flex justify-between items-start mb-10">
          <header>
            <h1 className="text-[40px] font-black tracking-tight text-white leading-none">
              Pedidos da Loja Lapa
            </h1>
            <p className="text-gray-500 text-sm font-medium mt-3">
              Mostrando {inicio + 1}-{Math.min(fim, todosPedidos.length)} de {todosPedidos.length} pedidos
            </p>
          </header>
          <Link href="/gerencia" className="bg-[#161b22] border border-gray-800 px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest text-gray-400 hover:text-white hover:bg-[#1f262e] transition-all flex items-center gap-2">
            <Icons.ChevronLeft /> Voltar 
          </Link>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 items-start">
          
          {/* Tabela Principal */}
          <div className="w-full lg:flex-1 bg-[#161b22] rounded-[32px] overflow-hidden border border-gray-800 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="border-b border-gray-800/60">
                    <th className="px-8 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px] text-center">Ícone</th>
                    <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">Data/Hora</th>
                    <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">Produto</th>
                    <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px] text-center">Qtd</th>
                    <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px]">Descrição</th>
                    <th className="px-6 py-5 text-[10px] font-black text-gray-600 uppercase tracking-[2px] text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/40">
                  {pedidosExibidos.map((item) => (
                    <tr key={item.id} className="hover:bg-[#1f262e]/50 transition-colors group">
                      <td className="px-8 py-5">
                        <div className="flex justify-center">
                          <img src={item.img} alt={item.produto} className="w-12 h-12 rounded-2xl border border-gray-800 object-cover shadow-lg group-hover:scale-110 transition-transform" />
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-gray-500 font-medium">{item.data}</td>
                      <td className="px-6 py-5 text-base font-black text-white tracking-tight">{item.produto}</td>
                      <td className="px-6 py-5 text-center font-black text-blue-500 text-base">{item.qtd}</td>
                      
                      {/* Descrição Corrigida para Leitura */}
                      <td className="px-6 py-5 min-w-[250px]">
                        {item.desc && item.desc !== '-' ? (
                          <p className="text-[12px] text-gray-400 font-medium italic leading-relaxed line-clamp-2 group-hover:text-gray-200 transition-colors">
                            {item.desc}
                          </p>
                        ) : (
                          <span className="text-gray-700 text-lg ml-2">-</span>
                        )}
                      </td>

                      <td className="px-6 py-5 text-center">
                        <div className="flex justify-center">
                          <span className="bg-green-500/10 text-green-500 p-2.5 rounded-xl border border-green-500/20">
                            <Icons.CheckCircle />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Paginação Padronizada */}
            <div className="p-8 border-t border-gray-800/50 flex justify-center items-center gap-3 bg-[#11161d]">
              <button 
                onClick={() => setPagina(p => Math.max(1, p - 1))}
                className="p-2 text-gray-600 hover:text-white transition-colors disabled:opacity-20"
                disabled={pagina === 1}
              >
                <Icons.ChevronLeft />
              </button>
              
              <div className="flex gap-2">
                {[...Array(totalPaginas)].map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setPagina(i + 1)} 
                    className={`w-10 h-10 rounded-full font-black text-sm transition-all ${
                      pagina === i + 1 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                        : 'text-gray-600 hover:bg-gray-800 hover:text-gray-300'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              
              <button 
                onClick={() => setPagina(p => Math.min(totalPaginas, p + 1))}
                className="p-2 text-gray-600 hover:text-white transition-colors disabled:opacity-20"
                disabled={pagina === totalPaginas}
              >
                <Icons.ChevronRight />
              </button>
            </div>
          </div>

          {/* Filtro Lateral */}
          <aside className="w-full lg:w-80 bg-[#161b22] border border-gray-800 rounded-[32px] p-8 shadow-2xl">
            <h2 className="text-lg font-black text-white flex items-center gap-3 mb-8">
              <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
              Filtro
            </h2>

            <div className="space-y-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-[2px] ml-1">Status</label>
                <div className="relative">
                  <select className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl py-4 px-5 text-sm font-bold text-gray-300 outline-none appearance-none focus:border-blue-500/50 transition-all">
                    <option>Entregue</option>
                    <option>Pendente</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-[2px] ml-1">Data</label>
                <input type="date" className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl py-4 px-5 text-sm font-bold text-gray-300 outline-none focus:border-blue-500/50 [color-scheme:dark]" />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-black text-[11px] uppercase tracking-[2px] text-white transition-all shadow-lg shadow-blue-900/20 active:scale-[0.98]">
                Confirmar Filtro
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}