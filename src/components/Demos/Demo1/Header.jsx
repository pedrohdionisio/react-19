import { Button } from "@/components/Button";
import { PlusCircleIcon } from "lucide-react";

export function Header({ onAddFile }) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-semibold tracking-tight">
        Uploads
      </h1>

      <Button
        className="gap-1 h-8 border-dashed"
        size="sm"
        variant="outline"
        onClick={onAddFile}
      >
        <PlusCircleIcon className="size-4" />
        Adicionar arquivo
      </Button>
    </header>
  );
}
