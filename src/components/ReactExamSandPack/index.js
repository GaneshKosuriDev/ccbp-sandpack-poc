import { Sandpack } from "@codesandbox/sandpack-react";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import "@codesandbox/sandpack-react/dist/index.css";

import { musicPlaylistSolutionCode } from "./data.js";

import "./index.css";

import { useRunTestsListener } from "./useRunTestsListener.js";

export const ReactExamSandPack = () => {
  const [runTests, testResults] = useRunTestsListener();
  console.log("Test Results in the component", testResults);
  const onClickSubmit = async () => {
    runTests();
  };

  return (
    <>
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
          wrapContent: true,
          codeEditor: {
            extensions: [autocompletion()],
            extensionsKeymap: [completionKeymap],
          },
          activePath: "/src/components/MusicPlaylist/index.css",
        }}
        template="react"
        theme="monokai-pro"
      />
      <div className="btn-container">
        <button className="btn" onClick={() => onClickSubmit()}>
          Run Tests
        </button>
      </div>
    </>
  );
};
