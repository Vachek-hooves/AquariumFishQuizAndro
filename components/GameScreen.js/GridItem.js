import {StyleSheet, Text, Pressable, Alert} from 'react-native';
import {COLOR} from '../../const/colors';
import {useState} from 'react';

const GridItem = ({
  subject,
  onPress,
  isSelected,
  gameScore,
  accessScore,
  prevScore,
}) => {
  // const [isPressed, setIsPressed] = useState(false);

  const handlePressed = () => {
    if (gameScore < parseInt(accessScore, 10)) {
      Alert.alert(
        'Notice',
        `To access this level game score shoul be more then ${accessScore}`,
      );
    } else {
      onPress();
      console.log(accessScore);
    }
    // setIsPressed(prevState => !prevState);
    // console.log(gameScore);
    // console.log(gameScore<parseInt(accessScore,10))
  };
  return (
    <Pressable
      // disabled={gameScore < parseInt(accessScore, 10)}
      onPress={handlePressed}
      // style={[styles.gridItem, isPressed ? styles.btnPressed : null]}
      style={[styles.gridItem, isSelected ? styles.btnPressed : null]}>
      <Text style={styles.text}>{subject}</Text>
      <Text style={{fontSize: 16, marginTop: 5}}>( {prevScore} )</Text>
    </Pressable>
  );
};

export default GridItem;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  gridItem: {
    width: '32%', // each element width
    aspectRatio: 1, // aspect ratio 1:1
    borderWidth: 2,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: COLOR.light + 90,
    borderColor: COLOR.ocean,
  },
  text: {
    color: COLOR.darkBlue,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
  btnPressed: {
    backgroundColor: COLOR.ocean + 90,
    borderWidth: 2,
    borderColor: COLOR.white,
  },
});
