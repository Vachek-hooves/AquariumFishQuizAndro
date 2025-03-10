import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStoredData = async data => {
  try {
    await AsyncStorage.setItem('aqua', JSON.stringify(data));
  } catch (error) {
    console.log('data saving error', error);
  }
};

export const getStoredData = async () => {
  try {
    const data = await AsyncStorage.getItem('aqua');
    // console.log('ASYNC STORAGE HANDLER',data);
    return data !== null ? JSON.parse(data) : [];
  } catch (error) {
    console.log('Data fetching error-', error);
  }
};
