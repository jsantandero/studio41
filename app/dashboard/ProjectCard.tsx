import Image from "next/image";

interface Props {
  name: string;
  image: string;
  date: string;
}

export default function ProjectCard({
  name,
  image,
  date,
}: Props) {

  return (

    <div className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300">

      <div className="relative aspect-square">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />

      </div>

      <div className="p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-xl font-medium">
            {name}
          </h2>

          <span className="text-sm text-black/40">
            {date}
          </span>

        </div>

        <div className="mt-6 flex gap-3">

          <button className="flex-1 h-12 rounded-2xl bg-black text-white text-sm">
            Abrir
          </button>

          <button className="h-12 px-5 rounded-2xl border border-black/10 text-sm">
            Exportar
          </button>

        </div>

      </div>

    </div>
  );
}