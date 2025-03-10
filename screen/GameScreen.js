import {StyleSheet, View, Text} from 'react-native';
import MainLayout from '../components/MainLayout';
import {useContext, useEffect, useState} from 'react';
import {AquariumContext} from '../store/aqua_context';
import {ChoosenQuizes, GridItem} from '../components/GameScreen.js';
import {COLOR} from '../const/colors.js';

const GameScreen = () => {
  const {aquaData, gameScore, totalScore} = useContext(AquariumContext);
  const [choosenQuizes, setChoosenQuizes] = useState([]);
  console.log(aquaData);
  // console.log(choosenQuizes);
  console.log(gameScore);

  useEffect(() => {
    totalScore();
  }, []);

  const choosenQuiz = item => {
    const isChoosen = choosenQuizes.some(quiz => quiz.id === item.id);
    if (isChoosen) {
      // if already choosen, then remove from array
      setChoosenQuizes(prevState =>
        prevState.filter(quiz => quiz.id !== item.id),
      );
    } else if (choosenQuizes.length < 1) {
      // if element not choosen and length less then 3
      setChoosenQuizes(prevState => [...prevState, item]);
    }
  };
  // check if selected element is in array if true elemet will change bg color.
  const isSelected = item => {
    return choosenQuizes.some(quiz => quiz.id === item.id);
  };

  return (
    <MainLayout>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontSize: 26,
            color: 'red',
            paddingTop: '10%',
          }}>
          Total Game Score {gameScore}
        </Text>
      </View>
      <View style={styles.gridContainer}>
        {aquaData.map((item, index) => (
          <GridItem
            subject={item.subject}
            key={index}
            onPress={() => choosenQuiz(item)}
            isSelected={isSelected(item)}
            gameScore={gameScore}
            accessScore={item.accessScore}
            prevScore={item.levelScore}
          />
        ))}
      </View>
      <ChoosenQuizes data={choosenQuizes} />
    </MainLayout>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
});
