import { useState } from "react";
import { Button } from "@/components/ui/button";

interface RichTextEditorProps {
  initialContent?: string;
  onChange: (content: string) => void;
}

export const RichTextEditor = ({ initialContent = "", onChange }: RichTextEditorProps) => {
  const [content, setContent] = useState(initialContent);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    onChange(e.target.value);
  };

  const handleFormat = (command: string) => {
    document.execCommand(command, false);
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 border-b p-2 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleFormat("bold")}
        >
          B
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleFormat("italic")}
        >
          I
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleFormat("underline")}
        >
          U
        </Button>
      </div>
      <textarea
        className="w-full p-4 min-h-[400px] focus:outline-none"
        value={content}
        onChange={handleChange}
      />
    </div>
  );
};