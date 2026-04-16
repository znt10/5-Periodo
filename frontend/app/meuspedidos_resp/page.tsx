'use client';

import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link'; // Importação necessária para a navegação

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export default function MeusPedidosPage() {
  const [showNotifs, setShowNotifs] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const pedidos = [
    { id: 1, img: '/images/coxinha.jpg', data: '30/03/26', produto: 'Coxinha', qtd: 150, obs: 'Preciso, pois não tem para amanhã', status: 'pendente' },
    { id: 2, img: '/images/pasteldefrango.jpg', data: '30/03/26', produto: 'Pastel de Frango', qtd: 50, obs: '', status: 'pendente' },
    { id: 3, img: '/images/enroladinho.jpg', data: '30/03/26', produto: 'Enroladinho', qtd: 80, obs: '', status: 'pendente' },
  ];

  const [notifications] = useState([
    { id: 1, text: "Pedido #882 realizado com sucesso!", time: "Há 2 min" },
    { id: 2, text: "Novo item adicionado ao estoque", time: "Há 1h" },
    { id: 3, text: "Relatório mensal disponível", time: "Há 5h" },
  ]);

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
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0d1117]">
      <Sidebar />

      <main className="flex-1 p-4 md:p-10 lg:ml-64 transition-all relative">

        <div className="flex justify-between items-start mb-8 mt-12 lg:mt-0">
          <header>
            <h1 className="text-3xl font-bold text-gray-100">Meus Pedidos</h1>
            <p className="text-gray-500 text-sm mt-1">Bem-vindo a tela dos seus pedidos.</p>
          </header>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowNotifs(!showNotifs)}
              className={`p-2.5 rounded-full transition-all relative border ${showNotifs
                ? 'bg-blue-600 text-white border-blue-500 shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                : 'bg-[#161b22] text-gray-400 hover:bg-[#1f262e] border-gray-800'
                }`}
            >
              <BellIcon />
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
                  {/* ALTERADO: Agora usando Link para redirecionar */}
                  <Link
                    href="/notificacoes"
                    className="text-[11px] text-blue-500 hover:text-blue-400 font-bold block w-full transition-colors"
                  >
                    Ver todas as notificações
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabela e Filtros seguem aqui... */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-8 items-start">
          {/* O restante do seu código da tabela permanece igual */}
          <div className="w-full lg:flex-1 bg-[#161b22] rounded-[24px] p-1 shadow-2xl border border-gray-800">
            {/* ... conteúdo da tabela ... */}
            <div className="overflow-hidden rounded-[23px]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-[#1c2128] border-b border-gray-800">
                    <tr className="text-gray-400 font-semibold text-sm">
                      <th className="px-6 py-4 text-center">Ícone</th>
                      <th className="px-6 py-4">Data/Hora</th>
                      <th className="px-6 py-4">Produto</th>
                      <th className="px-6 py-4 text-center">Qtd</th>
                      <th className="px-6 py-4">Descrição</th>
                      <th className="px-6 py-4 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300 text-sm">
                    {pedidos.map((item) => (
                      <tr key={item.id} className="border-b border-gray-800/50 last:border-0 hover:bg-[#1f262e] transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex justify-center">
                            <img src={item.img} alt={item.produto} className="w-10 h-10 rounded-lg border border-gray-700 object-cover" />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-400">{item.data}</td>
                        <td className="px-6 py-4 font-bold text-gray-100">{item.produto}</td>
                        <td className="px-6 py-4 text-center font-mono text-blue-400">{item.qtd}</td>
                        <td className="px-6 py-4 text-xs text-gray-500 max-w-[200px] truncate">{item.obs || "-"}</td>
                        <td className="px-6 py-4 text-center">
                          <div className="flex justify-center">
                            <span className="bg-orange-500/10 text-orange-500 p-2 rounded-lg border border-orange-500/20 shadow-inner">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <aside className="w-full lg:w-72 bg-[#161b22]/80 backdrop-blur-sm rounded-[20px] p-6 text-white shadow-2xl border border-gray-800 sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-100 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                Filtro
              </h2>
              <button className="text-[10px] text-gray-500 hover:text-blue-400 uppercase font-bold transition-colors">
                Limpar
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {/* Status - Estilo Dark Moderno */}
              <div className="group space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-[1px] ml-1 group-focus-within:text-blue-500 transition-colors">
                  Status do Pedido
                </label>
                <div className="relative">
                  <select className="w-full bg-[#0d1117] border border-gray-800 rounded-xl py-3 px-4 text-sm text-gray-300 outline-none appearance-none cursor-pointer focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all">
                    <option>Todos os Status</option>
                    <option>✅ Entregue</option>
                    <option>⏳ Pendente</option>
                    <option>❌ Cancelado</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600 group-hover:text-blue-500 transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
                </div>
              </div>

              {/* Período - Input com Ícone Interno */}
              <div className="group space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-[1px] ml-1 group-focus-within:text-blue-500 transition-colors">
                  Data de Registro
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full bg-[#0d1117] border border-gray-800 rounded-xl py-3 px-4 text-sm text-gray-300 outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 transition-all [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Botão com Gradiente e Glow */}
              <div className="pt-2">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:to-blue-400 py-3.5 rounded-xl font-bold text-white transition-all active:scale-[0.96] shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                  Confirmar
                </button>
              </div>
            </div>

            {/* Pequeno Card de Ajuda ou Info Opcional */}
            <div className="mt-8 p-4 bg-blue-500/5 border border-blue-500/10 rounded-xl">
              <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                Mostrando dados baseados na última atualização de hoje.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}