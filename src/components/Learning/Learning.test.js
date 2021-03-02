import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Learning from "./Learning";

describe(`Learning component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <Learning />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
