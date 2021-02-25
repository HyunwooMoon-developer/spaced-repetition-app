/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
});

export default LanguageContext;

export class LanguageProvide extends Component {
  state = {
    language: {},
    words: [],
    error: null,
  };
  render() {
    const languageValue = {
      language: this.state.language,
      words: this.state.words,
      error: this.state.error,
    };

    return (
      <LanguageContext.Provider value={languageValue}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
