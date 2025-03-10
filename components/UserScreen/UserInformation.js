import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';
import {PickImage} from '../ui';
import {COLOR} from '../../const/colors';
import {setNewProfileName} from '../../store/utilsUserActions';
import GameStatistic from './GameStatistic';

const UserInformation = ({profile}) => {
  const [activeRename, setActiveRename] = useState(false);
  const [profileName, setNewName] = useState(profile.name);
  const [profileImage, setNewImage] = useState(profile.image);

  const nameChange = async () => {
    await setNewProfileName('name', profileName);
    setActiveRename(false);
  };

  const replaceImage = async image => {
    setNewImage(image);
    await setNewProfileName('image', image);
  };

  return (
    <SafeAreaView style={{flex:1}}>
      {activeRename ? (
        <View style={{alignItems: 'center'}}>
          <TextInput
            value={profileName}
            onChangeText={setNewName}
            style={styles.inputForm}
          />
          <TouchableOpacity onPress={nameChange} style={styles.btn}>
            <Text style={{fontSize: 18, color: COLOR.light}}>
              Save new name
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{alignItems: 'center', gap: 30}}>
          <TouchableOpacity onPress={() => setActiveRename(true)}>
            <Text style={styles.profileName}>{profileName}</Text>
          </TouchableOpacity>
          <PickImage saveImage={image => replaceImage(image)}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri: profileImage}} style={styles.image} />
              <Text style={{fontSize: 18, position: 'absolute'}}>
                Choose Photo
              </Text>
            </View>
          </PickImage>
        </View>
      )}
      <GameStatistic />
    </SafeAreaView>
  );
};

export default UserInformation;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 3,
    backgroundColor: COLOR.darkBlue + 90,
    borderColor: COLOR.blue,
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  inputForm: {
    borderWidth: 3,
    // backgroundColor: COLOR.slateGray,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 22,
    borderRadius: 10,
    paddingVertical: 10,
    minWidth: 170,
    maxWidth: 250,
    borderColor: COLOR.blue,
  },
  profileName: {
    fontSize: 32,
    color: COLOR.darkBlue,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
    borderWidth: 1,
    position: 'relative',
    zIndex: 2,
  },
});
