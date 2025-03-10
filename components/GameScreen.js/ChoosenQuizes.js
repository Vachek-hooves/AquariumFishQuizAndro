import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../const/colors';

const ChoosenQuizes = ({data}) => {
  const navigation = useNavigation();
  const isData = data.length > 0;
  const itemsIds = data.map(quiz => quiz.id);

  const handlePlayScreenNavigation = () => {
    navigation.navigate('PlayScreen', itemsIds);
  };

  return (
    <View style={styles.rootContainer}>
      {isData ? (
        <>
          <RenderItem data={data} />
          <Play onPress={handlePlayScreenNavigation} />
        </>
      ) : (
        <View style={styles.viewContainer}>
          <Text style={styles.text}>Choose the Quizes Please</Text>
        </View>
      )}
    </View>
  );
};

export const RenderItem = ({data}) => {
  if (!data) {
    return null;
  }
  return (
    <View style={styles.viewContainer}>
      {data.map((item, index) => (
        <View key={index} style={styles.renderItemView}>
          <Text style={styles.renderItemText}>
            {item.subject.toUpperCase()}:
            <Text style={styles.description}> {item.description}</Text>
          </Text>
        </View>
      ))}
    </View>
  );
};

export const Play = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={{
        backgroundColor: COLOR.light,
        borderRadius: 8,
        marginTop: 15,
        paddingVertical: 5,
        paddingHorizontal: 20,
      }}>
      <Text style={{fontSize: 26, fontWeight: '800', color: COLOR.ocean}}>
        PLAY
      </Text>
    </TouchableOpacity>
  );
};

export default ChoosenQuizes;

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    margin: 10,
    borderRadius: 16,
    borderColor: COLOR.ocean,
    backgroundColor: COLOR.ocean + 90,
  },
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: 'red',
    fontSize: 32,
    textAlign: 'center',
  },
  renderItemView: {
    // backgroundColor: COLOR.blue+90,
    padding: 5,
    borderRadius: 10,
    // backgroundColor: COLOR.darkBlue+90,
  },
  renderItemText: {
    fontSize: 26,
    color: COLOR.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    fontSize: 20,
  },
});
