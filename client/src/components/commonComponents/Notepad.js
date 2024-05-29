import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
export const Notepad = () => {
  const [text, setText] = useState("");
  return <ReactQuill theme="snow" value={text} onChange={setText} className="h-[90%]"/>;
};
