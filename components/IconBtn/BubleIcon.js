import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {COLOR} from '../../const/colors';

const BubleIcon = ({children, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={require('../../assets/img/icons/btn.png')}
        style={styles.image}
      />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BubleIcon;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 180,
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
    tintColor: COLOR.light,
  },
  text: {
    position: 'absolute',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
    fontSize: 42,
    fontWeight: '700',
    color: COLOR.darkBlue,
  },
});
