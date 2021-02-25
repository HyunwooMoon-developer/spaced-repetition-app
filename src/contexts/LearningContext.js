import React, { Component } from "react";
import LanguageApiService from "../services/language-api-service";

const LearningContext = React.createContext({
  nextWord: {},
  error: null,
});

export default LearningContext;

export class LearningProvider extends Component {
  state = {
    nextWord: {},
    error: null,
  };

  componentDidMount() {
    LanguageApiService.getNextWord()
      .then((res) => {
        this.setState({
          nextWord: res
        });
      })
      .catch((error) => {
        this.setState(error);
      });
  }
  render() {
    const learningValue = {
      nextWord: this.state.nextWord,
      error: this.state.error,
    };

    return (
      <LearningContext.Provider value={learningValue}>
        {this.props.children}
      </LearningContext.Provider>
    );
  }
}
