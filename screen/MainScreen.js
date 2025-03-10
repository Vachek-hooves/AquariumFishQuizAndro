import {StyleSheet, View} from 'react-native';
import {BubleIcon, UserFishIcon} from '../components/IconBtn';
import MainLayout from '../components/MainLayout';

const MainScreen = ({navigation}) => {
  return (
    <MainLayout>
      <View style={styles.pageLayout}>
        <UserFishIcon />
        <View>
          <BubleIcon onPress={() => navigation.navigate('GameScreen')}>
            Game
          </BubleIcon>
          <BubleIcon onPress={() => navigation.navigate('RulesScreen')}>
            Rules
          </BubleIcon>
        </View>
      </View>
    </MainLayout>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  pageLayout: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    
  },
});
