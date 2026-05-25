import { NextResponse } from "next/server";

import OpenAI from "openai";

import { createClient } from "@supabase/supabase-js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    console.log(body.image);

    const result = await openai.images.generate({
      model: "gpt-image-1",

      prompt: `
premium editorial furniture technical sheet,
minimalist layout,
architectural presentation,
clean typography,
white background,
luxury furniture catalog style,
professional composition,
preserve exact furniture geometry,
maintain original proportions,
keep original materials and structure,
do not redesign the product
      `,

      size: "1024x1024",
    });

    const imageBase64 = result.data?.[0]?.b64_json;

    if (!imageBase64) {
      throw new Error("No image generated");
    }

    const buffer = Buffer.from(
      imageBase64,
      "base64"
    );

    const fileName = `generated-${Date.now()}.png`;

    const { error } = await supabase.storage
      .from("generated-images")
      .upload(fileName, buffer, {
        contentType: "image/png",
      });

    if (error) {
      throw error;
    }

    const { data } = supabase.storage
      .from("generated-images")
      .getPublicUrl(fileName);

    return NextResponse.json({
      success: true,
      image: imageBase64,
      imageUrl: data.publicUrl,
    });

  } catch (error: any) {

    console.error(error);

    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}