"use client";

import { useState } from "react";

import { uploadImage } from "@/services/upload";
import {
  createProject,
  createGeneration,
} from "@/services/projects";
import Hero from "@/components/home/Hero";
import UploadCard from "@/components/home/UploadCard";
import ResultPreview from "@/components/home/ResultPreview";
import BottomNav from "@/components/home/BottomNav";

export default function HomePage() {

  const [preview, setPreview] = useState<string | null>(null);

  const [generated, setGenerated] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);

    const imageUrl = URL.createObjectURL(selectedFile);

    setPreview(imageUrl);
  };

  const generateImage = async () => {

    try {

      if (!file) return;

      setLoading(true);

      const uploadedImageUrl = await uploadImage(
        file,
        "product-originals"
      );
      const project = await createProject(
        file.name,
        uploadedImageUrl
      );
      console.log(uploadedImageUrl);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: uploadedImageUrl,
        }),
      });

      const data = await response.json();

      if (data.success && data.image) {

        setGenerated(
          `data:image/png;base64,${data.image}`
        );
        await createGeneration(
          project.id,
          data.imageUrl,
          "technical sheet"
        );
      } else {

        alert(data.error || "Error generando imagen");
      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F5F5F3] text-[#111111] pb-32">

      <section className="px-6 pt-10">
        <div className="rounded-[32px] bg-white shadow-sm p-6">

          <Hero />

          <UploadCard
            preview={preview}
            loading={loading}
            onImageChange={handleImage}
            onGenerate={generateImage}
          />

        </div>
      </section>

      {generated && (
        <ResultPreview image={generated} />
      )}

      <BottomNav />

    </main>
  );
}