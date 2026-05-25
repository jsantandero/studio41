import { supabase } from "@/lib/supabase";

export async function uploadImage(
  file: File,
  bucket: string
) {

  const fileName = `${Date.now()}-${file.name}`;

  console.log("SUBIENDO:", fileName);

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file);

  console.log("UPLOAD DATA:", data);
  console.log("UPLOAD ERROR:", error);

  if (error) {
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);

  console.log("PUBLIC URL:", publicUrlData);

  return publicUrlData.publicUrl;
}