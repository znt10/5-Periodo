"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/components/navigation";
import { register } from "@/services/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [tipo_usuario, setTipo_usuario] = useState("gerente");
  const [first_name, setFirst_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fields = [
    {
      id: "name",
      label: "Nome completo",
      type: "text",
      placeholder: "Seu nome completo",
    },
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
      placeholder: "Sua senha",
    },
  ];
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await register(first_name, email, password, tipo_usuario);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const LogoIcon = ({ size = "24" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );

  return (
    <div className="flex min-h-screen w-full bg-white font-sans text-slate-900 ">
      <div className="hidden w-1/2 flex-col items-center justify-center dark:bg-[#0a0f1c] lg:flex">
        <div className="flex items-center gap-4 text-white">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1d4ed8]">
            <LogoIcon size="48" />
          </div>
          <h1 className="text-6xl font-bold tracking-tight">UniStock</h1>
        </div>
      </div>

      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="w-full max-w-md">
          <header className="flex flex-col items-center text-center mb-8">
            <div className="mb-4 flex items-center gap-2 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1d4ed8]">
                <LogoIcon size="24" />
              </div>
              <span className="text-2xl font-bold">UniStock</span>
            </div>
            <h2 className="text-2xl font-bold text-black">Crie sua conta</h2>
            <p className="mt-2 text-sm text-slate-600">
              Preencha seus dados para criar uma nova conta
            </p>
          </header>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex w-full overflow-hidden rounded-lg border border-slate-300 mb-8">
              <button
                type="button"
                onClick={() => setTipo_usuario("gerente")}
                className={`w-1/2 py-2.5 text-sm font-medium transition-all ${
                  tipo_usuario === "gerente"
                    ? "bg-[#4466f2] text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                Gerente
              </button>
              <button
                type="button"
                onClick={() => setTipo_usuario("responsavel")}
                className={`w-1/2 py-2.5 text-sm font-medium transition-all ${
                  tipo_usuario === "responsavel"
                    ? "bg-[#4466f2] text-white"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                Responsável
              </button>
            </div>

            <div className="space-y-5">
              {fields.map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label htmlFor={field.id} className="text-sm font-semibold">
                    {field.label}
                  </label>
                  <input
                    {...field}
                    value={
                      field.id === "name"
                        ? first_name
                        : field.id === "email"
                          ? email
                          : password
                    }
                    onChange={(e) => {
                      if (field.id === "name") setFirst_name(e.target.value);
                      if (field.id === "email") setEmail(e.target.value);
                      if (field.id === "password") setPassword(e.target.value);
                    }}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4466f2] py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700 shadow-md active:scale-[0.98]"
              >
                {loading ? "Carregando..." : "Continuar"}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <p className="mt-6 text-center text-sm text-slate-600">
              Já possui uma conta?{" "}
              <Link
                href="/"
                className="font-bold text-blue-600 hover:underline"
              >
                Faça login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
