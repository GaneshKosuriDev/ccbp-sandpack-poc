import { Sandpack } from "@codesandbox/sandpack-react";
import "@codesandbox/sandpack-react/dist/index.css";

import "./index.css";

const APP_CODE = `
import { sum } from 'lodash';
import Button from "./src/components/Button"

export default function App() {
  return <>
    <h1>Hello Sandpack!</h1>
    <h2>{sum([2, 3])}</h2>
    <Button />
  </>
}
`.trim();

const BUTTON_CODE_1 = `
import "./index.css"

export default function Button(){
    return (
        <button className="sample-btn">
            Sample Button
        </button>
    )
}
`.trim();

const BUTTON_CODE_CSS = `
.sample-btn{
    border:none;
    padding: 10px 24px;
    color: #ffffff;
    background: #3e416d;
}
`.trim();

export const CustomSandpack = () => (
  <Sandpack
    customSetup={{
      dependencies: {
        lodash: "latest",
        "react-ace": "9.5.0",
      },
      files: {
        "/App.js": {
          code: APP_CODE,
        },
        "/src/components/Button/index.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/Button/index.css": {
          code: BUTTON_CODE_CSS,
        },
        "/src/components/button2.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button3.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button4.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button5.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button6.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button7.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button8.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button9.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button10.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button11.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button12.js": {
          code: BUTTON_CODE_1,
        },
        "/src/components/button13.js": {
          code: BUTTON_CODE_1,
        },
      },
    }}
    options={{ editorHeight: "100vh" }}
    template="react"
  />
);
