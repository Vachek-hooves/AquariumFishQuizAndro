import {TouchableOpacity, Image} from 'react-native';
import {COLOR} from '../../const/colors';
import {useNavigation} from '@react-navigation/native';

const UserFishIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{position: 'absolute', top: 50, right: 30}}
      onPress={() => navigation.navigate('UserScreen')}>
      <Image
        source={require('../../assets/img/icons/fishDark.png')}
        style={{
          height: 70,
          width: 70,
          tintColor: COLOR.light,
        }}
      />
    </TouchableOpacity>
  );
};

export default UserFishIcon;
