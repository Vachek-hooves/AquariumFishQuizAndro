import {createContext, useEffect, useState} from 'react';
import {AQUARIUM} from '../data/aquaData';
import {getStoredData, setStoredData} from './utilsAsyncStorage';

export const AquariumContext = createContext({
  gameScore: 0,
  aquaData: [],
  setLevelScoreHandle: () => {},
});

export const AquaProvider = ({children}) => {
  const [aquaData, setAquaData] = useState([]);
  const [gameScore, setGameScore] = useState(0);
  console.log(gameScore);

  useEffect(() => {
    initData();
  }, []);

  const initData = async () => {
    try {
      let aquaQuizz = await getStoredData();
      if (aquaQuizz.length === 0) {
        await setStoredData(AQUARIUM);
        aquaQuizz = await getStoredData();
      }
      setAquaData(aquaQuizz);
    } catch (error) {
      console.error('Error initializing data:', error);
    }
  };

  const setLevelScoreHandle = async (id, score) => {
    // console.log('context-setLevelScoreHandle id-', id, score);
    try {
      const updatedQuiz = aquaData.map(quiz => {
        if (quiz.id === id) {
          return {...quiz, levelScore: score};
        }
        return quiz;
      });
      await setStoredData(updatedQuiz);
      totalScore();
      setAquaData(updatedQuiz);
      // console.log('updatedQuiz---', updatedQuiz);
    } catch (error) {
      console.log('Level Quiz Score Updating error', error);
    }
  };

  const totalScore = async () => {
    try {
      const data = await getStoredData();
      const userScore = data.reduce((acc, quiz) => {
        return acc + (parseInt(quiz.levelScore, 10) || 0); // Parse string to number, add 0 if NaN
      }, 0);
      setGameScore(userScore);
      console.log('Total Score:', userScore);
    } catch (error) {
      console.error('Error calculating total score:', error);
      return 0;
    }
  };

  const values = {gameScore, aquaData, setLevelScoreHandle, totalScore};
  return (
    <AquariumContext.Provider value={values}>
      {children}
    </AquariumContext.Provider>
  );
};
