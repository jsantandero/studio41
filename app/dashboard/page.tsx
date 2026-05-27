"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Comedor Nórdico",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    date: "21 Mayo",
  },
  {
    id: 2,
    name: "Rack Industrial",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e",
    date: "21 Mayo",
  },
  {
    id: 3,
    name: "Mesa Atelier",
    image:
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a",
    date: "20 Mayo",
  },
];

export default function DashboardPage() {

  return (

    <main className="min-h-screen bg-[#F5F5F3] text-[#111111]">

      <section className="border-b border-black/5 bg-white">

        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">

          <div>
            <p className="text-sm text-black/40">
              STUDIO41
            </p>

            <h1 className="text-3xl font-semibold mt-1">
              Dashboard
            </h1>
          </div>

          <a
            href="/"
            className="px-5 py-3 rounded-2xl bg-black text-white text-sm"
          >
            Nuevo Proyecto
          </a>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-white rounded-[28px] overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300"
            >

              <div className="relative aspect-square">

                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h2 className="text-xl font-medium">
                    {project.name}
                  </h2>

                  <span className="text-sm text-black/40">
                    {project.date}
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

          ))}

        </div>

      </section>

    </main>
  );
}