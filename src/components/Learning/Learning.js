import React, { Component } from "react";
import LearningContext from "../../contexts/LearningContext";
import Button from "../Button/Button";
import { Input, Label } from "../Form/Form";

class Learning extends Component {
  static contextType = LearningContext;

  handleSubmit = e => {
    e.preventDefault();
    console.log('click');
  }

  render() {
    const { nextWord, error } = this.context;
    console.log(nextWord)
    return (
      <>
        <div role="alert">{error && <p>{error}</p>}</div>
        <h2>
        Translate the word:
        </h2><span>{nextWord.nextWord}</span>
        <div>
            <form onSubmit={this.handleSubmit}>
                <Label htmlFor="learn-guess-input">What's the translation for this word?</Label>
                <Input type="text" 
                id="learn-guess-input" required></Input>
                <br />
                <Button type="submit">Submit your answer</Button>
            </form>
        </div>
        <div>
        <p>Your total score is: {nextWord.totalScore}</p>
        <p>You have answered this word correctly {nextWord.wordCorrectCount} times.</p>
        <p>You have answered this word incorrectly {nextWord.wordIncorrectCount} times.</p>
        </div>
      </>
    );
  }
}

export default Learning;
