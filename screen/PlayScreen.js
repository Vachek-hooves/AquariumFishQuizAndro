import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {AquariumContext} from '../store/aqua_context';
import MainLayout from '../components/MainLayout';
import {COLOR} from '../const/colors';

const PlayScreen = ({route, navigation}) => {
  const quizPlayIds = route.params;
  const {aquaData} = useContext(AquariumContext);

  const quizLevelData = aquaData.filter(item => quizPlayIds.includes(item.id));

  return (
    <MainLayout customStyle={styles.mainLayout}>
      {quizLevelData.map((quizLevel, i) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('PlayQuizScreen', quizLevel)}
          activeOpacity={0.6}
          key={i}
          style={styles.itemContainer}>
          <Text style={styles.itemText}>{quizLevel.subject}</Text>
        </TouchableOpacity>
      ))}
    </MainLayout>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  mainLayout: {alignItems: 'center', justifyContent: 'center', gap: 40},
  itemContainer: {
    backgroundColor: COLOR.ocean + 90,
    padding: 10,
    borderRadius: 8,
    width: '90%',
  },
  itemText: {
    fontSize: 30,
    textAlign: 'center',
    color: COLOR.white,
    fontWeight: '700',
  },
});
