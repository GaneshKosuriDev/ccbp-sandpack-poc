import expect from "jest-matchers";
import jestMock from "jest-mock";
import { addEventHandler } from "jest-circus/build/state";
import run from "jest-circus/build/run";

import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import { configure as eConfigure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

/* eslint-disable */

eConfigure({ adapter: new Adapter() });
configure({ testIdAttribute: "testid" });

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

export * from "jest-circus";
export { jestMock as jest, expect, addEventHandler, run };
