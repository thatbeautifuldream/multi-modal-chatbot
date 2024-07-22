import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    messages: [
      {
        role: "system",
        content:
          "You're a skilled AI bot that has knowledge of the UI UX Design and can help with design queries.",
      },
      ...convertToCoreMessages(messages),
    ],
  });

  return result.toAIStreamResponse();
}
