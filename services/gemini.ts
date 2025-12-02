import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction to give the AI context about Jenil
const SYSTEM_INSTRUCTION = `
You are an AI assistant for Jenil Kalariya's personal portfolio website. 
Your goal is to answer visitor questions about Jenil professionally and kindly.

Here is the context about Jenil Kalariya:
- Name: Jenil Kalariya
- Phone Number: 7069835429
- Profession: Web Developer & WordPress Specialist
- Key Skills: WordPress (Custom Themes, Plugins, Elementor), React.js, Tailwind CSS, TypeScript, JavaScript, PHP, MySQL.
- Services: Website Development, E-commerce Stores (WooCommerce), Speed Optimization, SEO Friendly Design, Custom Web Applications.
- Availability: Open to freelance projects and full-time opportunities.
- Personality: Dedicated, detail-oriented, and passionate about creating clean, efficient code.

If asked about something not in this list, answer politely that you don't have that specific information but suggest they contact Jenil directly at 7069835429.
Keep answers concise (under 100 words unless asked for detail).
`;

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try again later or contact Jenil directly.";
  }
};