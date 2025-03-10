import {
  StyleSheet,
  Text,
  View,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {useEffect, useRef} from 'react';
import {COLOR} from '../const/colors';

const GreatingScreen = ({navigation}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [animation]);

  return (
    <ImageBackground
      source={require('../assets/img/bg/Aquabg4.jpg')}
      style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.darkBlue + 30,
          padding: 10,
          paddingTop: 20,
        }}>
        <SafeAreaView
          style={{
            // justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Animated.View
            style={[
              {opacity: animation},
              {justifyContent: 'space-between', flex: 1},
            ]}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.text}>Sooo Excited</Text>
              <Text style={styles.text}>To see you</Text>
              <Text style={styles.text}>in our</Text>
            </View>
            <Text style={styles.quizText}>Aquarium Fish Quiz! </Text>
          </Animated.View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default GreatingScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 62,
  },
  quizText: {
    fontSize: 66,
    color: COLOR.light,
    textAlign: 'center',
    fontWeight: '800',
  },
});
