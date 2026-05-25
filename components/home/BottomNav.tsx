"use client";

import {
  Home,
  Layers3,
  ImageIcon,
  History,
} from "lucide-react";

export default function BottomNav() {
  return (
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
  );
}