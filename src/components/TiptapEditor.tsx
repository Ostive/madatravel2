import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link as LinkIcon,
  Image as ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from "lucide-react";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export const TiptapEditor = ({ content, onChange }: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'rounded-lg max-w-full h-auto',
        },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-emerald-50 border-b p-2 flex flex-wrap gap-2">
        <div className="flex gap-1 border-r pr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`hover:bg-emerald-100 ${editor.isActive('bold') ? 'bg-emerald-200' : ''}`}
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`hover:bg-emerald-100 ${editor.isActive('italic') ? 'bg-emerald-200' : ''}`}
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`hover:bg-emerald-100 ${editor.isActive('strike') ? 'bg-emerald-200' : ''}`}
          >
            <Strikethrough className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={`hover:bg-emerald-100 ${editor.isActive('code') ? 'bg-emerald-200' : ''}`}
          >
            <Code className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-1 border-r pr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`hover:bg-emerald-100 ${editor.isActive('heading', { level: 1 }) ? 'bg-emerald-200' : ''}`}
          >
            <Heading1 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`hover:bg-emerald-100 ${editor.isActive('heading', { level: 2 }) ? 'bg-emerald-200' : ''}`}
          >
            <Heading2 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`hover:bg-emerald-100 ${editor.isActive('heading', { level: 3 }) ? 'bg-emerald-200' : ''}`}
          >
            <Heading3 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-1 border-r pr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`hover:bg-emerald-100 ${editor.isActive({ textAlign: 'left' }) ? 'bg-emerald-200' : ''}`}
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`hover:bg-emerald-100 ${editor.isActive({ textAlign: 'center' }) ? 'bg-emerald-200' : ''}`}
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`hover:bg-emerald-100 ${editor.isActive({ textAlign: 'right' }) ? 'bg-emerald-200' : ''}`}
          >
            <AlignRight className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={`hover:bg-emerald-100 ${editor.isActive({ textAlign: 'justify' }) ? 'bg-emerald-200' : ''}`}
          >
            <AlignJustify className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-1 border-r pr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`hover:bg-emerald-100 ${editor.isActive('bulletList') ? 'bg-emerald-200' : ''}`}
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`hover:bg-emerald-100 ${editor.isActive('orderedList') ? 'bg-emerald-200' : ''}`}
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`hover:bg-emerald-100 ${editor.isActive('blockquote') ? 'bg-emerald-200' : ''}`}
          >
            <Quote className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-1 border-r pr-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().undo().run()}
            className="hover:bg-emerald-100"
          >
            <Undo className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => editor.chain().focus().redo().run()}
            className="hover:bg-emerald-100"
          >
            <Redo className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={setLink}
            className={`hover:bg-emerald-100 ${editor.isActive('link') ? 'bg-emerald-200' : ''}`}
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={addImage}
            className="hover:bg-emerald-100"
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <EditorContent 
        editor={editor} 
        className="prose prose-emerald max-w-none p-4 min-h-[400px] focus:outline-none"
      />
    </div>
  );
};