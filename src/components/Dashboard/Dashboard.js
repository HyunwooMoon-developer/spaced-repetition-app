import React, { Component } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../../contexts/LanguageContext";
import Button from "../Button/Button";
import "./Dashboard.css";

class Dashboard extends Component {

  static contextType = LanguageContext;



  render() {
    const { language, words, error } = this.context;

    const wordList = words.map((word) => {
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
        <h2>{language.name}</h2>
        <h3>Words to practice</h3>
        <Link to="/learn">
          <Button>Start practicing</Button>
        </Link>
        <ul className="word-list">{wordList}</ul>
        <p>Total correct answers: {language.total_score}</p>
      </div>
    );
  }
}

export default Dashboard;
