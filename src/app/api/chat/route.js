import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    // 1. Get the message and the history from the frontend
    const { message, history } = await req.json();

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `You are the AI Virtual Producer for Naires Media (nairesmedia.com). 
      Who We Are: High-end media production in Kenya (Luxury Real Estate).
      Slogan: ' We combine cinematic media with high-performance websites to sell listings faster..'
      Services: Cinematic property tours, 4K/8K photography, drone coverage.
      Locations: Nairobi (Runda, Muthaiga, Karen, Westlands) & East Africa.
      Tone: Professional and sophisticated.
      Goal: Guide users to 'Book a Session'. For prices, ask for property details first.`
    });

    // 2. Pass 'history' so the AI remembers previous parts of the conversation
    const chat = model.startChat({
      history: history || [], 
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();
    
    return new Response(JSON.stringify({ text: responseText }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Gemini API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to connect to AI" }), { status: 500 });
  }
}