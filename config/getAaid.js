import ReactNativeIdfaAaid from '@sparkfabrik/react-native-idfa-aaid';

export const handleGetAaid = async () => {
  // for android
  try {
    const aaid = await ReactNativeIdfaAaid.getAdvertisingInfo();
    return aaid.id;
  } catch (err) {
    console.log('err', err);
    return null;
  }
};
