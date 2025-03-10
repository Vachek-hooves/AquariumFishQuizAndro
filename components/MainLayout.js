import {StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import {COLOR} from '../const/colors';

const MainLayout = ({children, customStyle, mainBg}) => {
  return (
    <ImageBackground
      source={require('../assets/img/bg/Aquabg5.jpg')}
      style={[mainBg, {flex: 1}]}>
      <SafeAreaView style={[customStyle, styles.safeArea]}>
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default MainLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLOR.darkBlue + 40,
  },
});
