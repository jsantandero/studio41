import { createClient } from "@supabase/supabase-js";

import ProjectCard from "@/components/dashboard/ProjectCard";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function DashboardPage() {

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

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

        {!projects?.length && (

          <div className="bg-white rounded-[28px] p-12 text-center border border-black/5">

            <h2 className="text-2xl font-medium">
              Aún no hay proyectos
            </h2>

            <p className="mt-3 text-black/50">
              Genera tu primera ficha premium
            </p>

          </div>

        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects?.map((project) => (

            <ProjectCard
              key={project.id}
              name={project.name || "Proyecto"}
              image={project.cover_image}
              date={
                new Date(
                  project.created_at
                ).toLocaleDateString()
              }
            />

          ))}

        </div>

      </section>

    </main>
  );
}