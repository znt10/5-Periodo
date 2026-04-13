'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simplificação: Dados dos campos de input
  const loginFields = [
    { id: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
    { id: 'password', label: 'Senha', type: 'password', placeholder: 'Digite sua senha' },
  ];

  // Componente de ícone para não repetir código SVG
  const LogoIcon = ({ size = '24' }: { size?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>
    </svg>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.detail || 'Credenciais inválidas');
        setLoading(false);
        return;
      }

     
      router.push('/');
    } catch (err) {
      setError('Erro de rede. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white font-sans text-slate-900">
      {/* Lado Esquerdo: Branding */}
      <div className="hidden w-1/2 flex-col items-center justify-center bg-[#020617] lg:flex">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1d4ed8]">
            <LogoIcon size="48" />
          </div>
          <h1 className="text-6xl font-bold text-white tracking-tight">UniStock</h1>
        </div>
      </div>

      {/* Lado Direito: Formulário */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          {/* Cabeçalho */}
          <header className="flex flex-col items-center text-center mb-10">
            <div className="mb-4 flex items-center gap-2">
               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1d4ed8]">
                <LogoIcon size="24" />
              </div>
              <span className="text-2xl font-bold">UniStock</span>
            </div>
            <h2 className="text-2xl font-bold">Entre na sua conta</h2>
            <p className="mt-2 text-sm text-slate-600">Insira suas credenciais para acessar o sistema</p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              {loginFields.map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label htmlFor={field.id} className="text-sm font-semibold">{field.label}</label>
                  <input 
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.id === 'email' ? email : password}
                    onChange={(e) => (field.id === 'email' ? setEmail(e.target.value) : setPassword(e.target.value))}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              ))}
            </div>

            {/* Opções Extras */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-500 group-hover:text-slate-700 transition">Lembrar de mim</span>
              </label>
              <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Esqueceu a senha?</a>
            </div>

            {error && <div className="text-sm text-red-600">{error}</div>}

            {/* Botão de Ação - Espaçamento 'mt-12' para separar bem */}
            <div className="mt-12">
              <button 
                type="submit" 
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4466f2] py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-md active:scale-[0.98] disabled:opacity-60"
              >
                {loading ? 'Entrando...' : 'Continuar'}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
