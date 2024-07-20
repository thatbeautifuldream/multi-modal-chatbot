import { create } from "zustand";

type SystemPrompt = {
  message: string;
};

export const useSystemPromptStore = create((set) => ({
  prompt: undefined as SystemPrompt | undefined,
  setPrompt: (prompt: SystemPrompt) => set({ prompt }),
}));
