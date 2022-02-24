import { Sandpack } from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import "@codesandbox/sandpack-react/dist/index.css";

import { jobbyAppSolutionCode } from "./jobbyAppData";

export const ReactRouteSandPack = () => (
  <>
    <Sandpack
      customSetup={{
        dependencies: {
          lodash: "latest",
          "react-ace": "9.5.0",
        },
        files: jobbyAppSolutionCode,
      }}
      options={{
        editorHeight: "100vh",
        showLineNumbers: true,
        showNavigator: true,
        showInlineErrors: true,
        wrapContent: true,
        codeEditor: {
          extensions: [autocompletion()],
          extensionsKeymap: [completionKeymap],
        },
      }}
      template="react"
      theme="monokai-pro"
    />
    <div className="btn-container">
      <button className="btn" onClick={() => alert("tests")}>
        Submit
      </button>
    </div>
  </>
);
