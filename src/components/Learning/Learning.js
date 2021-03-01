import React, { Component } from "react";
import LearningContext from "../../contexts/LearningContext";
import LanguageApiService from "../../services/language-api-service";
import Button from "../Button/Button";
import { Input, Label } from "../Form/Form";

class Learning extends Component {
  state = {
    error: null,
  };

  static contextType = LearningContext;

  componentDidMount() {
    LanguageApiService.getNextWord()
      .then((res) => {
        this.context.setTotalScore(res.totalScore);
        this.context.setWordCorrectCount(res.wordCorrectCount);
        this.context.setWordIncorrectCount(res.wordIncorrectCount);
        this.context.setNextWord(res.nextWord);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleGuessSubmit = (e) => {
    e.preventDefault();
    const { guess } = e.target;

    this.context.setGuess(guess.value);

    LanguageApiService.getGuess(guess.value)
      .then((res) => {
        this.context.setPreviousWord(this.context.nextWord);
        this.context.setTotalScore(res.totalScore);
        this.context.setWordCorrectCount(res.wordCorrectCount);
        this.context.setWordIncorrectCount(res.wordIncorrectCount);
        this.context.setNextWord(res.nextWord);
        this.context.setIsCorrect(res.isCorrect);
        this.context.setAnswer(res.answer);
        console.log(res.answer)
        guess.value = "";
      })
      .catch((error) => {
        this.setState({
          error: error,
        });
      });
  };

  nextQuestion = () => {
    this.context.setIsCorrect(null);
  };

  renderGuessPage() {
    return (
      <>
      <div className="DisplayWord">
          <h2>Translate the word:</h2>
          <span>{this.context.nextWord}</span>
        </div>
        <form onSubmit={this.handleGuessSubmit}>
          <Label htmlFor="learn-guess-input">
            What's the translation for this word?
          </Label>
          <br />
          <Input
            type="text"
            id="learn-guess-input"
            name="guess"
            required
          ></Input>
          <br />
          <Button type="submit">Submit your answer</Button>
        </form>
      </>
    );
  }

  renderFeedBackPage() {
    return (
      <>
          {this.context.isCorrect ? (
            <div>
              <h2>You were correct! :D</h2>
            </div>
          ) : (
            <div>
              <h2>Good try, but not quite right :(</h2>
            </div>
          )}
        <div className="DisplayFeedback">
          <p>
            The correct translation for <span>{this.context.previousWord}</span>{" "}
            was {this.context.answer} and you chose {this.context.guess}!
          </p>
        </div>
        <button type="button" onClick={this.nextQuestion}>
          Try another word!
        </button>
      </>
    );
  }

  render() {
    const { error } = this.state;
    const display = this.context.isCorrect == null;
    return (
      <>
        <div role="alert">{error && <p>{error}</p>}</div>
        {display && this.renderGuessPage()}
        {!display && this.renderFeedBackPage()}
        <div>
        <div className="DisplayScore">
          <p>
            Your total score is: <span>{this.context.totalScore}</span>
          </p>
          </div>
          <p>
            You have answered this word correctly{" "}
            <span>{this.context.wordCorrectCount}</span> times.
          </p>
          <br />
          <p>
            You have answered this word incorrectly{" "}
            {this.context.wordIncorrectCount} times.
          </p>
        </div>
      </>
    );
  }
}

export default Learning;
