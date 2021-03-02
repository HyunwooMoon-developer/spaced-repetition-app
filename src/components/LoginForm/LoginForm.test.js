import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

describe(`Login component`, () => {
  it(`Renders without crashing`, () => {
    const div = document.createElement("div");

    ReactDom.render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });
});
