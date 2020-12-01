import runGame from '../index.js';
import getRandomInt from '../randomInt.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateGame = () => {
  const randomInt = getRandomInt(1, 100);

  const question = randomInt.toString();
  const answer = isEven(randomInt) ? 'yes' : 'no';

  return { question, answer };
};

const runEvenGame = () => {
  runGame(gameDescription, generateGame);
};

export default runEvenGame;
