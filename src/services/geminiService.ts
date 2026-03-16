import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function getMapsGroundingResponse(prompt: string, latitude?: number, longitude?: number) {
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
