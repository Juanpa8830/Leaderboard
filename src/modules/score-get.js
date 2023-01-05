const scoreGet = async () => {
  const apiArray = [];
  const apiResult = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZCwiAPb8hOtHFOUFMMmy/scores')
    .then((response) => response.json());
  apiResult.result.forEach((element) => {
    apiArray.push(element);
  });
  apiArray.sort((a, b) => b.score - a.score);
  return apiArray;
};

export default scoreGet;