import {ActivityIndicator, ImageBackground} from 'react-native';
import {useEffect} from 'react';

const CustomFlashScreen = props => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (props.onWelcomeComplete) {
        props.onWelcomeComplete();
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [props.onWelcomeComplete]);

  return (
    <ImageBackground
      style={{width: '100%', height: '100%', justifyContent: 'center'}}
      source={require('../assets/img/bg/loader.png')}>
      <ActivityIndicator color="yellow" size="large" />
    </ImageBackground>
  );
};

export default CustomFlashScreen;
