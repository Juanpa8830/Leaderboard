const postScore = async (user, score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nYpK4VZNS45ZELeCnGP3/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await response.json();
  return data.result;
};

const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/nYpK4VZNS45ZELeCnGP3/scores');
  const data = await response.json();
  return data.result;
};

export { postScore, getScore };