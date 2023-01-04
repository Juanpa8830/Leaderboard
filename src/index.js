import './style.css';
import displayScores from './modules/displayScores.js';
import addScore from './modules/addScore.js';

const scores = [];

const scoresList = document.getElementById('scorecards');

class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const form = document.getElementById('add-score');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const newscore = new Score(name, score);
  addScore(scores, newscore);
  form.reset();
  displayScores(scores, scoresList);
});