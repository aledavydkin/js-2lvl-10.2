import GameSavingLoader from './components/GameSavingLoader';

(async () => {
  try {
    const game = await GameSavingLoader.load();
    console.log(game);
    return game;
  } catch (error) {
    console.log(error);
    return error;
  }
})();

// GameSavingLoader.load().then((saving) => {
//   console.log(saving);
// }, (error) => {
//   console.log(error);
// });
