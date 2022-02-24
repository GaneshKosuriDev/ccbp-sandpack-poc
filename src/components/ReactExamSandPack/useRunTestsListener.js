import { useState } from "react";

export const useRunTestsListener = () => {
  const [testResults, setTestResults] = useState([]);

  const runTests = () => {
    document
      .querySelector(".sp-preview-iframe")
      .contentWindow.postMessage("run-test-cases", "*");

    let eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    let eventer = window[eventMethod];
    let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    // Listen to message from child window
    eventer(
      messageEvent,
      function (event) {
        if (event.data.type === "test-result") {
          setTestResults(event.data.testResults);
        }
      },
      false
    );
  };

  return [runTests, testResults];
};
