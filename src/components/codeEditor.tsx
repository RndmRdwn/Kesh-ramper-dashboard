import { Editor,  } from "@monaco-editor/react";

export const CodeEditor = ({ value, onChange, height, width }) => (
        <div style={{ borderRadius: "8px", overflow: "hidden", border: "1px solid #ddd" }}>
            <Editor
              height={height}
              width={width}
              language="javascript"
              theme="vs-dark"
              value={value}
              options={{
                readOnly: true,
              }}
            className="shadow-md"
              onChange={(value) => onChange && onChange(value)}
            />
        </div>
);
