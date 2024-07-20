import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { CogIcon } from "lucide-react";

export default function SystemPromptDialog() {
  return (
    <div className="fixed bottom-0 right-0 p-4">
      <Dialog>
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
            className="w-full"
            placeholder="Type your system prompt here..."
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
