'use client';

import React from 'react';
import LogoIcon from './LogoIcon';

const Sidebar = () => {
  // Simulação de itens. Em um app real, o 'active' viria da URL (ex: via usePathname)
  const menuItems = [
    { label: 'Painel', active: true },
    { label: 'Novo Pedido', active: false },
    { label: 'Meus Pedidos', active: false },
    { label: 'Lojas', active: false },
  ];

  return (
    <aside className="w-64 bg-[#020617] text-slate-400 flex flex-col fixed h-full z-10">
      {/* Branding */}
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <LogoIcon size={32} stroke="white" />
        <span className="text-xl font-bold text-white tracking-tight">UniStock</span>
      </div>

      {/* User Perfil */}
      <div className="p-4 flex items-center gap-3 border-b border-slate-800 hover:bg-slate-900 cursor-pointer transition mb-2">
        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <span className="font-semibold text-white">User</span>
      </div>

      {/* Menu de Navegação */}
      <nav className="flex-1 px-3 space-y-1">
        <div className="text-[15px] font-bold text-slate-500 p-3 tracking-widest uppercase">
          Menu
        </div>
        
        {menuItems.map((item) => (
          <div 
            key={item.label}
            className={`relative flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 group ${
              item.active 
                ? 'bg-[#1e293b] text-white font-bold' 
                : 'hover:text-white hover:bg-slate-900/50 text-slate-400'
            }`}
          >
            {/* O Indicador Azul (Barra lateral) */}
            {item.active && (
              <div className="absolute left-1 w-1.5 h-8 bg-[#4466f2] rounded-full shadow-[0_0_10px_rgba(68,102,242,0.5)]" />
            )}
            
            <span className={item.active ? 'ml-4' : 'ml-4 group-hover:translate-x-1 transition-transform'}>
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      {/* Footer Sidebar */}
      <div className="p-4 space-y-1 border-t border-slate-800 text-sm">
        <div className="p-3 hover:text-white transition cursor-pointer">Notificação</div>
        <div className="p-3 hover:text-white transition cursor-pointer">Configurações</div>
        <div className="p-3 text-red-400 hover:text-red-300 transition cursor-pointer">Sair</div>
        
        <button className="w-full mt-4 pt-4 border-t border-slate-800 text-[10px] font-bold text-center text-slate-500 hover:text-white transition uppercase tracking-tighter">
          Recolher
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;