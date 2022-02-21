import { useSandpack, useActiveCode } from "@codesandbox/sandpack-react";
import { useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-textmate";

export const CustomRefreshButton = () => {
  const { dispatch, listen } = useSandpack();

  const handleRefresh = () => {
    // sends the refresh message to the bundler, should be logged by the listener
    dispatch({ type: "refresh" });
  };

  useEffect(() => {
    // listens for any message dispatched between sandpack and the bundler
    const stopListening = listen((msg) => console.log(msg));

    return () => {
      // unsubscribe
      stopListening();
    };
  }, [listen]);

  return (
    <button type="button" onClick={handleRefresh}>
      Refresh
    </button>
  );
};

export const CustomReactSandPack = () => {
  const { sandpack } = useSandpack();
  const { files, activePath } = sandpack;

  const code = files[activePath].code;
  return <pre>{code}</pre>;
};

export const CustomAceEditor = () => {
  const { code, updateCode } = useActiveCode();

  return (
    <AceEditor
      mode="javascript"
      defaultValue={code}
      onChange={updateCode}
      fontSize={14}
      height="300px"
      width="100%"
    />
  );
};
