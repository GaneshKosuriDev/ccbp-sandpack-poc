import { Sandpack } from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import "@codesandbox/sandpack-react/dist/index.css";

import { musicPlaylistSolutionCode } from "./data.js";

export const ReactExamSandPack = () => (
  <Sandpack
    customSetup={{
      dependencies: {
        lodash: "latest",
        "react-ace": "9.5.0",
      },
      files: musicPlaylistSolutionCode,
    }}
    options={{
      editorHeight: "100vh",
      showLineNumbers: true,
      showNavigator: true,
      showInlineErrors: true,
      codeEditor: {
        extensions: [autocompletion()],
        extensionsKeymap: [completionKeymap],
      },
    }}
    template="react"
    theme="monokai-pro"
  />
);
