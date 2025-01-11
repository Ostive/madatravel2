import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Bold, 
  Italic, 
  Underline, 
  Link2, 
  Image as ImageIcon,
  ListOrdered,
  List,
  Quote
} from "lucide-react";

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

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const handleImageUpload = () => {
    const url = prompt("Enter image URL:");
    if (url) {
      handleFormat("insertImage", url);
    }
  };

  const handleLink = () => {
    const url = prompt("Enter URL:");
    if (url) {
      handleFormat("createLink", url);
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-emerald-50 border-b p-2 flex flex-wrap gap-2">
        <div className="flex gap-1 border-r pr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleFormat("bold")}
            className="hover:bg-emerald-100"
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleFormat("italic")}
            className="hover:bg-emerald-100"
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleFormat("underline")}
            className="hover:bg-emerald-100"
          >
            <Underline className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="flex gap-1 border-r pr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleFormat("justifyLeft")}
            className="hover:bg-emerald-100"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleFormat("justifyCenter")}
            className="hover:bg-emerald-100"
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleFormat("justifyRight")}
            className="hover:bg-emerald-100"
          >
            <AlignRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-1 border-r pr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleFormat("insertOrderedList")}
            className="hover:bg-emerald-100"
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleFormat("insertUnorderedList")}
            className="hover:bg-emerald-100"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleFormat("formatBlock", "<blockquote>")}
            className="hover:bg-emerald-100"
          >
            <Quote className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLink}
            className="hover:bg-emerald-100"
          >
            <Link2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleImageUpload}
            className="hover:bg-emerald-100"
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div
        className="w-full p-4 min-h-[400px] focus:outline-none"
        contentEditable
        onInput={(e) => onChange(e.currentTarget.innerHTML)}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};