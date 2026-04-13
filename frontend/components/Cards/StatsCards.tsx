import LogoIcon from '@/components/LogoIcon';

export default function StatsCards() {
  const stats = [
    { label: 'Pedidos Hoje', value: '8' },
    { label: 'Em Andamentos', value: '3' },
    { label: 'Concluídos(semana)', value: '100' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {stats.map((stat, i) => (
        <div key={i} className="bg-[#1e293b] p-6 rounded-2xl shadow-xl border border-slate-700 relative overflow-hidden group hover:border-blue-500 transition-colors">
          <div className="flex justify-between items-start mb-4 relative z-10">
            <span className="text-slate-400 font-medium">{stat.label}</span>
            <button className="text-slate-500 hover:text-white">•••</button>
          </div>
          <div className="text-5xl font-bold text-white relative z-10">{stat.value}</div>
          
          {/* Marca d'água com seu componente LogoIcon */}
          <div className="absolute -top-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity">
            <LogoIcon size={120} />
          </div>
        </div>
      ))}
    </div>
  );
};

