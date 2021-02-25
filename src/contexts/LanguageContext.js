/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import LanguageApiService from "../services/language-api-service";

const LanguageContext = React.createContext({
  language: {},
  words: [],
  error: null,
});

export default LanguageContext;

export class LanguageProvider extends Component {
  state = {
    language: {},
    words: [],
    error: null,
  };

  componentDidMount() {
    LanguageApiService.getLanguage()
      .then((res) => {
        this.setState({
          language: res.language,
          words: res.words,
        });
      })
      .catch((error) => {
        this.setState(error);
      });
  }

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
