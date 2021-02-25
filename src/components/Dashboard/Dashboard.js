import React, { Component } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../../contexts/LanguageContext";
import LanguageApiService from "../../services/language-api-service";
import Button from "../Button/Button";
import "./Dashboard.css";

class Dashboard extends Component {
  state = {
    error: null,
    language: {},
    words: [],
  };

  static contextType = LanguageContext;

  componentDidMount() {
    LanguageApiService.getLanguage()
      .then((res) => {
        this.setState({
          language: res.language,
          words: res.words,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          err,
        });
      });
  }

  render() {
    const { error } = this.state;
    console.log(this.state.language);
    const wordList = this.state.words.map((word) => {
      return (
        <li key={word.id} className="dashboard-list">
          <h4>{word.original}</h4>
          <div>
            <span>correct answer count: {word.correct_count}</span>
            <span>incorrect answer count: {word.incorrect_count}</span>
          </div>
        </li>
      );
    });
    return (
      <div className="dashboard-container">
        <div role="alert">{error && <p>{error}</p>}</div>
        <h2>{this.state.language.name}</h2>
        <h3>Words to practice</h3>
        <Link to="/learn"><Button>Start practicing</Button></Link>
          <ul className="word-list">{wordList}</ul>
          <p>Total correct answers: {this.state.language.total_score}</p>
      </div>
    );
  }
}

export default Dashboard;
