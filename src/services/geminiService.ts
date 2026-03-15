import { GoogleGenAI } from "@google/genai";

export async function getMapsGroundingResponse(prompt: string, latitude?: number, longitude?: number) {
  const apiKey = process.env.GEMINI_API_KEY || "";
  
  if (!apiKey) {
    throw new Error("請先在 .env.local 設定 GEMINI_API_KEY 才能使用地圖搜尋功能");
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const model = "gemini-2.5-flash";
    const config: any = {
      tools: [{ googleMaps: {} }],
    };

    if (latitude !== undefined && longitude !== undefined) {
      config.toolConfig = {
        retrievalConfig: {
          latLng: {
            latitude,
            longitude,
          },
        },
      };
    }

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config,
    });

    return {
      text: response.text || "",
      groundingChunks: response.candidates?.[0]?.groundingMetadata?.groundingChunks || [],
    };
  } catch (error) {
    console.error("Error calling Gemini with Maps grounding:", error);
    throw error;
  }
}
