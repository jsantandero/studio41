"use client";

import { useState } from "react";
import {
  Home,
  Layers3,
  ImageIcon,
  History,
  Upload,
} from "lucide-react";

export default function HomePage() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F3] text-[#111111] pb-28">

      {/* HERO */}
      <section className="px-6 pt-10">
        <div className="rounded-[32px] bg-white shadow-sm p-6">

          <div className="mb-6">
            <p className="text-sm tracking-[0.25em] text-neutral-400 mb-2">
              STUDIO41
            </p>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight">
              Producción visual premium para mobiliario.
            </h1>
          </div>

          {/* UPLOAD */}
          <label className="block cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />

            {!preview ? (
              <div className="rounded-[28px] border border-dashed border-neutral-300 bg-[#FAFAF8] h-[360px] flex flex-col items-center justify-center text-center p-6 transition hover:border-black">
                <Upload size={40} className="mb-4 text-neutral-400" />

                <h2 className="text-xl font-semibold mb-2">
                  Subir producto
                </h2>

                <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
                  Selecciona una imagen real para generar fichas y ambientes.
                </p>
              </div>
            ) : (
              <div className="rounded-[28px] overflow-hidden">
                <img
                  src={preview}
                  alt=""
                  className="w-full h-[360px] object-cover"
                />
              </div>
            )}
          </label>

        </div>
      </section>

      {/* ACTIONS */}
      <section className="px-6 mt-8">
        <div className="grid grid-cols-1 gap-4">

          <button className="bg-black text-white rounded-[28px] p-6 text-left transition active:scale-[0.98]">
            <p className="text-sm text-neutral-400 mb-2">
              MÓDULO 01
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Generar Ficha
            </h2>

            <p className="text-neutral-400 text-sm leading-relaxed">
              Crear ficha técnica visual premium.
            </p>
          </button>

          <button className="bg-white rounded-[28px] p-6 text-left shadow-sm transition active:scale-[0.98]">
            <p className="text-sm text-neutral-400 mb-2">
              MÓDULO 02
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              Ambientar Producto
            </h2>

            <p className="text-neutral-500 text-sm leading-relaxed">
              Insertar producto en ambientes editoriales.
            </p>
          </button>

        </div>
      </section>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-md">
        <div className="bg-white/90 backdrop-blur-xl border border-black/5 rounded-full px-6 py-4 shadow-xl">

          <div className="flex items-center justify-between">

            <button className="flex flex-col items-center gap-1 text-black">
              <Home size={20} />
              <span className="text-[11px]">
                Inicio
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 text-neutral-400">
              <Layers3 size={20} />
              <span className="text-[11px]">
                Fichas
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 text-neutral-400">
              <ImageIcon size={20} />
              <span className="text-[11px]">
                Ambientes
              </span>
            </button>

            <button className="flex flex-col items-center gap-1 text-neutral-400">
              <History size={20} />
              <span className="text-[11px]">
                Historial
              </span>
            </button>

          </div>

        </div>
      </nav>

    </main>
  );
}