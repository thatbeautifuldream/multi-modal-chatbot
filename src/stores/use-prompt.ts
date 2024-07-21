import { create } from "zustand";

type State = {
  prompt: string;
};

type Action = {
  updatePrompt: (prompt: State["prompt"]) => void;
};

export const usePromptStore = create<State & Action>((set) => ({
  prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.`,
  updatePrompt: (prompt) => set(() => ({ prompt: prompt })),
}));
