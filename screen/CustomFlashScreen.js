import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomFlashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <Text>Splash screen</Text>
      <ActivityIndicator color="blue" size="large" />
    </View>
  );
};

export default CustomFlashScreen;

const styles = StyleSheet.create({});
