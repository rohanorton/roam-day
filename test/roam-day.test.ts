import "@testing-library/jest-dom";
import fs from "fs";
import { JSDOM } from "jsdom";

describe("roam-day script", () => {
  it("day is added to page", async () => {
    // HTML fixture with title "February 21st, 2022"
    const dom = await loadFixture("1.html");
    // Check that day has been added page
    expect(header(dom)).toHaveTextContent("Monday");
  });
});

// Helpers...

const script = fs.readFileSync("./dist/main.js", { encoding: "utf8" });

const loadFixture = async (filename: string) => {
  const dom = await JSDOM.fromFile(`./test/fixtures/${filename}`, {
    runScripts: "dangerously",
  });
  const document = dom.window.document;

  const $script = document.createElement("script");
  $script.type = "text/javascript";
  $script.innerHTML = script;
  const [$head] = document.getElementsByTagName("head");
  $head.appendChild($script);

  return dom;
};

const header = (dom: JSDOM) =>
  dom.window.document.querySelector(".rm-title-display");
