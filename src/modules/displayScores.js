function displayScores(array, docpart) {
  let scoreGenerator = '';
  array.forEach((arr) => {
    scoreGenerator += `
    <li class="scard">
        <p class="name">${arr.name}</p>
        <p class="score">${arr.score}</p>
    </li>
        `;
  });
  docpart.innerHTML = scoreGenerator;
}

export default displayScores;