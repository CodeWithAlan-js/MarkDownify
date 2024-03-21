import React from "react";
import { useAreaValueContext } from "../../context/AreaValueContext";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TextAreaOutput = () => {
  const { value } = useAreaValueContext();

  if (value === null) {
    return null; 
  }
  const lines = value.split("\n");

  return (
    <div className="w-full md:w-1/2 min-h-screen bg-blue-gray-50 p-8">
      <div className="w-full h-full">
        <pre>

      <Markdown className="prose" remarkPlugins={[remarkGfm]}>
          {value}
        </Markdown>
        </pre>
      </div>
    </div>
  );
};

export default TextAreaOutput;
