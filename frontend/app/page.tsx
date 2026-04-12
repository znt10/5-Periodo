export default function Home() {

  return (
    <div className="flex min-h-screen w-full bg-white font-sans">
  
  <div className="hidden w-1/2 flex-col items-center justify-center bg-[#020617] lg:flex">
    <div className="flex items-center gap-4">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1d4ed8]">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
      </div>
      <h1 className="text-6xl font-bold text-white tracking-tight">UniStock</h1>
    </div>
  </div>

  <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
    <div className="w-full max-w-md space-y-8">
      
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex items-center gap-2">
           <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1d4ed8]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          </div>
          <span className="text-2xl font-bold text-slate-900">UniStock</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">Entre na sua conta</h2>
        <p className="mt-2 text-sm text-slate-600">Insira suas credenciais para acessar o sistema</p>
      </div>

      <form className="mt-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label form="email" className="text-sm font-semibold text-slate-900">E-mail</label>
            <input 
              id="email" 
              type="email" 
              placeholder="seu@email.com" 
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <div className="space-y-1.5">
            <label form="password" className="text-sm font-semibold text-slate-900">Senha</label>
            <input 
              id="password" 
              type="password" 
              placeholder="Digite sua senha" 
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input 
              id="remember" 
              type="checkbox" 
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <label form="remember" className="text-sm text-slate-500">Lembrar de mim</label>
          </div>
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Esqueceu a senha?</a>
        </div>

        <button 
          type="submit" 
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4466f2] py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Continuar
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
      </form>

    </div>
  </div>
</div>
  );
}