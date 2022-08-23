import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Paragraph from "@tiptap/extension-paragraph";
import Document from "@tiptap/extension-document";
import Gapcursor from "@tiptap/extension-gapcursor";
import Heading from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import TextAlign from "@tiptap/extension-text-align";
import React, { useCallback } from "react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "lowlight";
import Image from "@tiptap/extension-image";
import {
  ImBold,
  ImItalic,
  ImStrikethrough,
  ImSubscript2,
  ImSuperscript2,
} from "react-icons/im";
import { TbHeading } from "react-icons/tb";
import {
  FaCode,
  FaParagraph,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaListUl,
  FaListOl,
} from "react-icons/fa";
import {
  Button,
  IconButton,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Control from "./controls";
import HeadingControl from "./headingcontrol";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";

const MenuBar = ({ editor }) => {
  const addImage = useCallback(() => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <Box
      sx={{
        padding: "0.5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Control
        icon={<ImBold />}
        editor={editor}
        action={() => editor.chain().focus().toggleBold().run()}
        name="bold"
        activeName="bold"
      />
      <Control
        icon={<ImItalic />}
        editor={editor}
        action={() => editor.chain().focus().toggleItalic().run()}
        name="italic"
        activeName="italic"
      />
      <Control
        icon={<ImStrikethrough />}
        editor={editor}
        action={() => editor.chain().focus().toggleStrike().run()}
        name="strike"
        activeName="strike"
      />
      <Control
        icon={<FaCode />}
        editor={editor}
        action={() => editor.chain().focus().toggleCodeBlock().run()}
        name="codeBlock"
        activeName="codeBlock"
      />
      <Control
        icon={<FaAlignLeft />}
        editor={editor}
        action={() => editor.chain().focus().setTextAlign("left").run()}
        name="left align"
        activeName={{ textAlign: "left" }}
      />
      <Control
        icon={<FaAlignCenter />}
        editor={editor}
        action={() => editor.chain().focus().setTextAlign("center").run()}
        name="center align"
        activeName={{ textAlign: "center" }}
      />
      <Control
        icon={<FaAlignRight />}
        editor={editor}
        action={() => editor.chain().focus().setTextAlign("right").run()}
        name="right align"
        activeName={{ textAlign: "right" }}
      />
      <Control
        icon={<FaAlignJustify />}
        editor={editor}
        action={() => editor.chain().focus().setTextAlign("justify").run()}
        name="justify"
        activeName={{ textAlign: "justify" }}
      />
      <HeadingControl editor={editor} icon={<TbHeading />} />
      <Control
        icon={<FaListUl />}
        editor={editor}
        action={() => editor.chain().focus().toggleBulletList().run()}
        name="bullet list"
        activeName="bulletList"
      />
      <Control
        icon={<FaListOl />}
        editor={editor}
        action={() => editor.chain().focus().toggleOrderedList().run()}
        name="ordered list"
        activeName="orderedList"
      />
      <Control
        icon={<ImSubscript2 />}
        editor={editor}
        action={() => editor.chain().focus().toggleSubscript().run()}
        name="subscript"
        activeName="subscript"
      />
      <Control
        icon={<ImSuperscript2 />}
        editor={editor}
        action={() => editor.chain().focus().toggleSuperscript().run()}
        name="superscript"
        activeName="superscript"
      />
    </Box>
  );
};

const Editor = () => {
  const content = null;
  const editor = useEditor({
    extensions: [
      StarterKit,
      Document,
      Paragraph,
      Gapcursor,
      Text,
      Subscript,
      Superscript,
      Heading,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: `
      Hello
    `,
  });

  return (
    <Box
      sx={{
        marginTop: "2rem",
      }}
    >
      <Typography variant="h4">Create A Post</Typography>

      <Box sx={{ marginTop: "2vh" }}>
        <TextField type="text" fullWidth placeholder="Title of the post..." />
        <Box
          sx={{
            marginTop: "5vh",
            backgroundColor: "#eee",
          }}
        >
          <MenuBar editor={editor} />
        </Box>
        <Box
          sx={{
            marginTop: "2vh",
            minHeight: "50vh",
          }}
        >
          <EditorContent editor={editor} />
        </Box>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          console.log(editor.getHTML());
        }}
      >
        Save
      </Button>
    </Box>
  );
};

export default Editor;
