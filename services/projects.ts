import { supabase } from "@/lib/supabase";

export async function createProject(
  name: string,
  coverImage: string
) {

  const { data, error } = await supabase
    .from("projects")
    .insert({
      name,
      cover_image: coverImage,
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function createGeneration(
  projectId: string,
  imageUrl: string,
  prompt: string
) {

  const { data, error } = await supabase
    .from("generations")
    .insert({
      project_id: projectId,
      type: "technical-sheet",
      image_url: imageUrl,
      prompt,
    });

  if (error) {
    throw error;
  }

  return data;
}