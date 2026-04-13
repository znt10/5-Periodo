'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ESTE OBJETO ESTAVA FALTANDO OU FORA DO LUGAR:
const Icons = {
  Package: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
  ),
  UserCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
  ),
  Bell: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
  ),
  Settings: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  LogOut: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
  ),
  ChevronLeft: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  )
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-[#080b11] text-white shadow-xl">
      {/* Link para Dashboard na Logo */}
      <Link href="/dashboard" className="flex items-center gap-3 border-b border-slate-800/50 p-5 cursor-pointer hover:bg-slate-800/20 transition-colors">
        <div className="flex h-9 w-9 items-center justify-center rounded bg-[#1d4ed8] text-white">
          <Icons.Package />
        </div>
        <span className="text-2xl font-bold tracking-tight">UniStock</span>
      </Link>

      <div className="flex items-center gap-3 px-6 py-6 text-slate-300">
        <Icons.UserCircle />
        <span className="text-[17px] font-semibold text-white">Responsável</span>
      </div>

      <nav className="flex-1 px-4">
        <p className="mb-3 px-2 text-[11px] font-bold tracking-[0.1em] text-slate-500 uppercase">Menu</p>
        <ul className="space-y-2">
          {/* Link: Novo Pedido */}
          <li>
            <Link 
              href="/novopedido_resp" 
              className={`flex items-center rounded-lg px-4 py-3 text-[15px] transition-all ${
                pathname === '/novopedido_resp' 
                ? 'bg-[#1d4ed8] font-bold text-white shadow-lg' 
                : 'font-medium text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Novo Pedido
            </Link>
          </li>
          {/* Link: Meus Pedidos */}
          <li>
            <Link 
              href="/meuspedidos_resp" 
              className={`flex items-center rounded-lg px-4 py-3 text-[15px] transition-all ${
                pathname === '/meuspedidos_resp' 
                ? 'bg-[#1d4ed8] font-bold text-white shadow-lg' 
                : 'font-medium text-slate-400 hover:text-white hover:bg-slate-800/40'
              }`}
            >
              Meus Pedidos
            </Link>
          </li>
        </ul>
      </nav>

      <div className="absolute bottom-0 w-full border-t border-slate-800/50 p-4 bg-[#080b11]">
        <ul className="mb-6 space-y-5 px-2">
          <li className="flex items-center gap-3 cursor-pointer text-[14px] text-slate-300 hover:text-white transition-colors">
            <Icons.Bell /> Notificação
          </li>
          <li className="flex items-center gap-3 cursor-pointer text-[14px] text-slate-300 hover:text-white transition-colors">
            <Icons.Settings /> Configurações
          </li>
          <li>
            {/* Link para a tela de Registro/Sair */}
            <Link href="/registra" className="flex items-center gap-3 cursor-pointer text-[14px] text-slate-400 hover:text-white transition-colors">
              <Icons.LogOut /> Sair
            </Link>
          </li>
        </ul>
        <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-800 bg-transparent py-2.5 text-[12px] font-medium text-slate-400 transition hover:bg-slate-800/40 uppercase tracking-tighter">
          <Icons.ChevronLeft /> Recolher
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;