import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  GameScreen,
  GreatingScreen,
  MainScreen,
  PlayQuizScreen,
  PlayScreen,
  RulesScreen,
  UserScreen,
} from './screen';
import {AquaProvider} from './store/aqua_context';
import {useEffect, useCallback, useRef, useState} from 'react';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import AsyncStorage from '@react-native-async-storage/async-storage';

// One Signal app id a2f6b718-f86a-44b9-b6fd-954f8ad18151

const Stack = createNativeStackNavigator();

function App() {
  // OneSignal
  const [oneSignalUserId, setOneSignalUserId] = useState(null);
  const [isOneSignalReady, setIsOneSignalReady] = useState(false);
  const [oneSignalPermissionStatus, setOneSignalPermissionStatus] =
    useState(false);

  useEffect(() => {
    // console.log('OneSignal in  useEffect');
    const initOneSignal = async () => {
      // console.log('initOneSignal');
      // Remove this method to stop OneSignal Debugging
      OneSignal.Debug.setLogLevel(LogLevel.Verbose);
      // OneSignal Initialization
      OneSignal.initialize('a2f6b718-f86a-44b9-b6fd-954f8ad18151');

      try {
        // Request permission and get user ID
        const permissionResult =
          await OneSignal.Notifications.requestPermission(true);
        setOneSignalPermissionStatus(permissionResult);
        console.log('OneSignal permission result:', permissionResult);

        // if (permissionResult) {
        const userId = await OneSignal.User.getOnesignalId();
        console.log('OneSignal: user id:', userId);

        if (userId) {
          setOneSignalUserId(userId);
          await AsyncStorage.setItem('oneSignalUserId', userId);
          // console.log(userId);
          setIsOneSignalReady(true);
        } else {
          // If no userId, set up a listener for when it becomes available
          const userStateChangedListener = OneSignal.User.addEventListener(
            'change',
            async event => {
              const newUserId = await OneSignal.User.getOnesignalId();
              if (newUserId) {
                // console.log('OneSignal: got delayed user id:', newUserId);
                setOneSignalUserId(newUserId);
                await AsyncStorage.setItem('oneSignalUserId', newUserId);
                setIsOneSignalReady(true);
                userStateChangedListener.remove();
              }
            },
          );
        }
        // }
      } catch (error) {
        console.error('Error initializing OneSignal:', error);
        // Fallback: try to get stored userId
        const storedUserId = await AsyncStorage.getItem('oneSignalUserId');
        if (storedUserId) {
          setOneSignalUserId(storedUserId);
          setIsOneSignalReady(true);
        }
      }
    };

    initOneSignal();
  }, []);
  
  return (
    <AquaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="GreatingsScreen" component={GreatingScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="GameScreen" component={GameScreen} />
          <Stack.Screen name="PlayScreen" component={PlayScreen} />
          <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
          <Stack.Screen name="UserScreen" component={UserScreen} />
          <Stack.Screen name="RulesScreen" component={RulesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AquaProvider>
  );
}

export default App;
