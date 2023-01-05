const scorePost = async (name, score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZCwiAPb8hOtHFOUFMMmy/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ user: name, score }),
  });
  const data = await response.json();
  return data.result;
};

export default scorePost;