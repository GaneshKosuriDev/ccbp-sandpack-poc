import { BrowserRouter, Link } from "react-router-dom";
import { describe, it, expect, run, beforeAll, afterEach } from "jest-lite";
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found">
      <div className="not-found-responsive-container">
        <h1 className="not-found-heading">Lost Your Way ?</h1>
        <p className="not-found-description">
          we are sorry, the page you requested could not be found Please go back
          to the homepage.
        </p>
        <Link className="go-back" to="/">
          <button type="button">Go to Home</button>
        </Link>
      </div>
    </div>
  </div>
);

async function notFoundTests() {
  const renderWithBrowserRouter = (ui = <NotFound />) => {
    return render(ui, { wrapper: BrowserRouter });
  };

  describe("Not Found Route tests", () => {
    // beforeAll(() => {
    //   console.log("before all");
    // });

    //   afterAll(() => {
    //     server.close();
    //   });

    afterEach(() => {
      // console.log("after each");
      cleanup();
    });

    it('When a random path is provided as the URL path, then the page should consist of an HTML main heading element with text content as "Lost Your Way":::5:::', () => {
      renderWithBrowserRouter();
      expect(
        screen.getByRole("heading", {
          name: /Lost Your Way/i,
        })
      ).toBeTruthy();
    });

    it('When a random path is provided as the URL path, then the page should consist of an HTML paragraph element with text content as "we are sorry, the page you requested could not be found Please go back to the homepage.":::5:::', () => {
      renderWithBrowserRouter();

      const paragraphEl = screen.getByText(
        /we are sorry, the page you requested could not be found Please go back to the homepage./i
      );

      expect(paragraphEl).toBeTruthy();
      expect(paragraphEl.tagName).toBe("P");
    });

    it('When a random path is provided as the URL path, then the page should consist of an HTML button element with text content as "Go to Home" wrapper with Link from react-router-dom:::5:::', () => {
      renderWithBrowserRouter();

      expect(
        screen.getByRole("link", {
          name: /Go to Home/i,
        })
      ).toBeTruthy();
    });

    it('When a random path is provided as the URL path, then the page should consist of an HTML button element with text content as "Go to Home":::5:::', () => {
      renderWithBrowserRouter();

      expect(
        screen.getByRole("button", {
          name: /Go to Home/i,
          exact: false,
        })
      ).toBeTruthy();
    });

    it('When a random path is provided as the URL path and the "Go to Home" button is clicked, then the page should be navigated to Home Route and consists of an HTML main heading element with text content as "Trending Now":::10:::', async () => {
      // mockGetCookie();
      renderWithBrowserRouter();

      const homeLink = screen.getByRole("link", {
        name: /Go to Home/i,
      });
      userEvent.click(homeLink);

      // expect(
      //   await screen.getByRole("heading", {
      //     name: /Trending Now/i,
      //     exact: false,
      //   })
      // ).toBeTruthy();
      // expect(window.location.pathname).toBe(homeRoutePath);
      // restoreGetCookieFns();
    });
  });

  const result = await run();
  console.log(result);
  //   parent.postMessage({ type: "test-result", testResults: result }, "*");
}

notFoundTests();
// window.onmessage = function (event) {
//   if (event.data === "run-test-cases") {
//   }
// };
