import './style.css';
import scorePost from './modules/score-post.js';
import scoreGet from './modules/score-get.js';

const form = document.getElementById('dataform');
const buttonRefresh = document.getElementById('brefresh');
const scoresList = document.getElementById('scorecards');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  scorePost(name, score);
  form.reset();
});

buttonRefresh.addEventListener('click', async () => {
  const scores = await scoreGet();
  let scoreGenerator = '';
  scores.forEach((score) => {
    scoreGenerator += `
      <li class="scard">
          <p class="name">${score.user}</p>
          <p class="score">${score.score}</p>
      </li>
          `;
    scoresList.innerHTML = scoreGenerator;
  });
});