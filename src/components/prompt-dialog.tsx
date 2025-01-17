"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { usePromptStore } from "@/stores";
import { CogIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function PromptDialog() {
  const [open, setOpen] = useState(false);
  const prompt = usePromptStore((state) => state.prompt);
  const updatePrompt = usePromptStore((state) => state.updatePrompt);

  return (
    <div className="fixed right-0 p-4 top-0 md:bottom-0 md:top-auto">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <CogIcon className="w-6 h-6" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update the system prompt.</DialogTitle>
            <DialogDescription>
              The system prompt is the message that the AI will see when it
              starts a conversation
            </DialogDescription>
          </DialogHeader>
          <Textarea
            className="w-full h-64"
            value={prompt}
            onChange={(event) => {
              updatePrompt(event.target.value);
            }}
          />
          <Button
            type="submit"
            onClick={() => {
              setOpen(false);
            }}
          >
            Update Prompt
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
