import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";

describe(`Dashboard component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
