import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useContext} from 'react';
import {AquariumContext} from '../../store/aqua_context';
import {COLOR} from '../../const/colors';

const GameStatistic = () => {
  const {gameScore, aquaData} = useContext(AquariumContext);

  function renderScoreTable({item}) {
    console.log(item);
    return (
      <View style={styles.scrollContainer}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <View style={styles.levelTextContainer}>
            <Text style={styles.levelText}>{item.subject}</Text>
          </View>
          <View style={styles.levelScoreContainer}>
            <Text style={styles.levelScore}>{item.levelScore}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Game Total Score</Text>
        <Text style={styles.headerText}>{gameScore}</Text>
      </View>
      <FlatList
        data={aquaData}
        key={item => item.id}
        renderItem={renderScoreTable}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default GameStatistic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: COLOR.darkBlue + 90,
    marginHorizontal: 60,
    borderRadius: 8,
    paddingVertical: 6,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    color: COLOR.light,
    fontWeight: '700',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // gap: 5,
    // height:'60%'
    // flexGrow:1
    flex: 1,
  },
  levelContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  levelTextContainer: {
    backgroundColor: COLOR.darkBlue + 90,
    padding: 5,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelText: {
    fontSize: 20,
    color: COLOR.light,
    fontWeight: '700',
    textAlign: 'center',
  },
  levelScoreContainer: {
    backgroundColor: COLOR.ocean,
    borderRadius: 8,
    paddingVertical: 15,
    width: '10%',
    alignItems: 'center',
  },
  levelScore: {
    fontWeight: '700',
  },
});
