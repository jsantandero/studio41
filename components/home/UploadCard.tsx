"use client";

import {
  Upload,
  LoaderCircle,
} from "lucide-react";

interface Props {
  preview: string | null;
  loading: boolean;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerate: () => void;
}

export default function UploadCard({
  preview,
  loading,
  onImageChange,
  onGenerate,
}: Props) {

  return (
    <>
      <label className="block cursor-pointer">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageChange}
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

      {preview && (
        <button
          onClick={onGenerate}
          disabled={loading}
          className="w-full mt-5 bg-black text-white rounded-[24px] py-5 font-medium flex items-center justify-center gap-3 active:scale-[0.99]"
        >
          {loading ? (
            <>
              <LoaderCircle className="animate-spin" size={20} />
              Generando...
            </>
          ) : (
            <>Generar ficha premium</>
          )}
        </button>
      )}
    </>
  );
}