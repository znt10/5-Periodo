export default function OrdersTable() {
  const pedidos = [
    { id: 'Rep-2026-1', loja: 'Lapa', qtd: '150', status: 'Pendente', data: '28/02/2026' },
    { id: 'Rep-2026-2', loja: 'Limao', qtd: '100', status: 'Pendente', data: '28/02/2026' },
    { id: 'Rep-2026-3', loja: 'Centro', qtd: '60', status: 'Pendente', data: '28/02/2026' },
    { id: 'Rep-2026-4', loja: 'Norte', qtd: '50', status: 'Enviado', data: '28/02/2026' },
  ];

  return (
    <div className="bg-[#1e293b] rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
      <div className="p-6 border-b border-slate-700">
        <h3 className="text-white font-bold text-lg">Pedidos Recentes</h3>
        <p className="text-slate-400 text-xs">Últimas solicitações de reposição</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 text-xs uppercase border-b border-slate-700">
              <th className="p-4 font-semibold">Código pedido</th>
              <th className="p-4 font-semibold">Loja</th>
              <th className="p-4 font-semibold text-center">Quantidade</th>
              <th className="p-4 font-semibold text-center">Status</th>
              <th className="p-4 font-semibold">Data</th>
            </tr>
          </thead>
          <tbody className="text-slate-300 text-sm">
            {pedidos.map((p, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition">
                <td className="p-4 font-medium text-white">{p.id}</td>
                <td className="p-4">{p.loja}</td>
                <td className="p-4 text-center">{p.qtd}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase flex items-center justify-center gap-1 w-fit mx-auto ${
                    p.status === 'Pendente' 
                      ? 'bg-orange-500/10 text-orange-500 border border-orange-500/20' 
                      : 'bg-green-500/10 text-green-500 border border-green-500/20'
                  }`}>
                    {p.status === 'Pendente' ? '⚠️' : '✔️'} {p.status}
                  </span>
                </td>
                <td className="p-4">{p.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

