import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {

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

    return NextResponse.json({
      success: true,
      image: imageBase64,
    });

  } catch (error: any) {

    console.error("OPENAI ERROR:");
    console.error(error);

    return NextResponse.json({
      success: false,
      error: error?.message || "generation failed",
    });
  }
}