import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const image = body.image;

    const prompt = `
premium editorial furniture photography,
architectural composition,
minimalist luxury visual language,
clean Scandinavian aesthetic,
professional catalog composition,
soft natural lighting,
high-end furniture editorial style,
preserve exact furniture geometry,
maintain original proportions,
keep original materials and structure,
do not redesign furniture
`;

    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024",
    });

    return NextResponse.json({
      success: true,
      image: result.data?.[0]?.b64_json || null,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
    });
  }
}