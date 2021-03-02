import React, { Component } from "react";

const LearningContext = React.createContext({
  totalScore: 0,
  wordCorrectCount: 0,
  wordIncorrectCount: 0,
  nextWord: null,
  guess: null,
  previousWord: null,
  isCorrect: null,
  answer: null,
  error: null,
  setTotalScore: () => {},
  setWordCorrectCount: () => {},
  setWordIncorrectCount: () => {},
  setNextWord: () => {},
  setGuess: () => {},
  setPreviousWord: () => {},
  setIsCorrect: () => {},
  setAnswer: () => {},
});

export default LearningContext;

export class LearningProvider extends Component {
  state = {
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    nextWord: null,
    guess: null,
    previousWord: null,
    isCorrect: null,
    answer: null,
    error: null,
  };

  setTotalScore = (totalScore) => {
    this.setState({
      totalScore,
    });
  };

  setWordCorrectCount = (wordCorrectCount) => {
    this.setState({
      wordCorrectCount,
    });
  };
  setWordIncorrectCount = (wordIncorrectCount) => {
    this.setState({
      wordIncorrectCount,
    });
  };

  setNextWord = (nextWord) => {
    this.setState({
      nextWord,
    });
  };

  setGuess = (guess) => {
    this.setState({
      guess,
    });
  };

  setPreviousWord = (previousWord) => {
    this.setState({
      previousWord,
    });
  };

  setIsCorrect = (isCorrect) => {
    this.setState({
      isCorrect,
    });
  };

  setAnswer = (answer) => {
    this.setState({
      answer,
    });
  };
  render() {
    const learningValue = {
      totalScore: this.state.totalScore,
      wordCorrectCount: this.state.wordCorrectCount,
      wordIncorrectCount: this.state.wordIncorrectCount,
      nextWord: this.state.nextWord,
      guess: this.state.guess,
      previousWord: this.state.previousWord,
      isCorrect: this.state.isCorrect,
      answer: this.state.answer,
      error: this.state.error,
      setTotalScore: this.setTotalScore,
      setWordCorrectCount: this.setWordCorrectCount,
      setWordIncorrectCount: this.setWordIncorrectCount,
      setNextWord: this.setNextWord,
      setGuess: this.setGuess,
      setPreviousWord: this.setPreviousWord,
      setIsCorrect: this.setIsCorrect,
      setAnswer: this.setAnswer,
    };
    return (
      <LearningContext.Provider value={learningValue}>
        {this.props.children}
      </LearningContext.Provider>
    );
  }
}
