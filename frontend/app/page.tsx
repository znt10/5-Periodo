"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser, login } from "@/services/auth";
import { CubeIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "@/stores/authStore";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setUser = useAuthStore((state) => state.setUser);

  // Simplificação: Dados dos campos de input
  const loginFields = [
    {
      id: "email",
      label: "E-mail",
      type: "email",
      placeholder: "seu@email.com",
    },
    {
      id: "password",
      label: "Senha",
      type: "password",
      placeholder: "Digite sua senha",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    if (loading) return;
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await login(email, password);

      const user = await getCurrentUser();

      if (!user) throw new Error("Erro ao carregar usuário");

      setUser(user);

      router.push("/dashboard");
    } catch (err: any) {
      setError("Email ou senha inválidos");
    } finally {
      setLoading(false); // 🔥 sempre executa
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white font-sans text-slate-900">
      {/* LADO ESQUERDO */}
      <div className="hidden w-1/2 flex-col items-center justify-center bg-[#020617] lg:flex">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1d4ed8]">
            {/* Usando o Ícone do Heroicons aqui */}
            <CubeIcon className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-white">
            UniStock
          </h1>
        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          {/* Cabeçalho */}
          <header className="mb-10 flex flex-col items-center text-center">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1d4ed8]">
                {/* Usando o Ícone menor aqui */}
                <CubeIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">UniStock</span>
            </div>
            <h2 className="text-2xl font-bold">Entre na sua conta</h2>
            <p className="mt-2 text-sm text-slate-600">
              Insira suas credenciais para acessar o sistema
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
              {loginFields.map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label
                    htmlFor={field.id}
                    className={`text-sm font-semibold transition-colors ${
                      error ? "text-red-500" : "text-slate-900"
                    }`}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={field.id === "email" ? email : password}
                    onChange={(e) => {
                      // Limpa o erro caso o usuário comece a digitar novamente
                      if (error) setError(null);

                      field.id === "email"
                        ? setEmail(e.target.value)
                        : setPassword(e.target.value);
                    }}
                    className={`w-full rounded-lg border px-4 py-2.5 outline-none transition 
                        autofill:shadow-[0_0_0_30px_white_inset] autofill:[-webkit-text-fill-color:#0f172a]
                        ${
                          error
                            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                            : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                        }`}
                  />
                </div>
              ))}
            </div>

            {/* Opções Extras */}
            <div className="flex items-center justify-between">
              <label className="group flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-500 transition group-hover:text-slate-700">
                  Lembrar de mim
                </span>
              </label>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Esqueceu a senha?
              </a>
            </div>

            {/* Renderização da Mensagem de Erro Centralizada */}
            {error && (
              <div className="rounded-md bg-red-50 p-3 text-center text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Botão de Ação */}
            <div className="mt-12">
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4466f2] py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98] disabled:opacity-60"
              >
                {loading ? "Entrando..." : "Continuar"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
