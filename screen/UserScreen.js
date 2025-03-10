import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import {AquariumContext} from '../store/aqua_context';
import MainLayout from '../components/MainLayout';
import {getProfile, submitProfile} from '../store/utilsUserActions';
import {COLOR} from '../const/colors';
import {PickImage} from '../components/ui';
import UserInformation from '../components/UserScreen/UserInformation';

const UserScreen = () => {
  const {gameScore, totalScore} = useContext(AquariumContext);
  const [profile, setProfile] = useState(null);
  const [profileInputs, setInputs] = useState({name: '', image: ''});

  const genKey = () => Date.now().toString();

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchUser();
    totalScore();
  }, []);

  const saveInputs = (identifier, newValue) => {
    setInputs(prev => ({...prev, [identifier]: newValue}));
  };

  const userImage = image => {
    saveInputs('image', image);
  };

  const submit = async () => {
    const {name, image} = profileInputs;
    if (!name.trim()) {
      Alert.alert('Problem', 'Name is invalid');
      return;
    }

    const submitData = {profileId: genKey(), name, image};
    try {
      await submitProfile(submitData);
      const updatedData = await getProfile();
      setProfile(updatedData);
    } catch (error) {
      console.error('Failed to submit:', error);
    }
  };

  const resetInputs = () => {
    setInputs({name: ''});
  };

  return (
    <MainLayout>
      {/* <SafeAreaView
        style={{flex: 1, justifyContent: 'flex-start'}}> */}
      {profile ? (
        <UserInformation profile={profile} />
      ) : (
        <View
          style={{
            // borderWidth: 1,
            padding: 20,
            borderRadius: 10,
            // marginTop: 60,
            marginHorizontal: 10,
          }}>
          <View style={{margin: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 18, color: COLOR.darkBlue}}>
              Profile Name
            </Text>
            <TextInput
              value={profileInputs.name}
              onChangeText={value => saveInputs('name', value)}
              style={styles.inputForm}
            />
            <View style={styles.btn}>
              <PickImage saveImage={image => userImage(image)}>
                <Text style={{fontSize: 18, color: COLOR.light}}>
                  Choose the photo
                </Text>
              </PickImage>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity onPress={submit} style={styles.btn}>
                <Text style={{fontSize: 18, color: COLOR.light}}>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={resetInputs} style={styles.btn}>
                <Text style={{fontSize: 18, color: COLOR.light}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {/* </SafeAreaView> */}
    </MainLayout>
  );
};

export default UserScreen;

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
    color: COLOR.bamboo,
  },
});
