import readlineSync from 'readline-sync';

const winCount = 3;

const runGame = (gameDescription, generateGame) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log(gameDescription);

  for (let i = 1; i <= winCount; i += 1) {
    const { question, answer } = generateGame();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
      Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default runGame;
