import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  CustomFlashScreen,
  GameScreen,
  GreatingScreen,
  MainScreen,
  PlayQuizScreen,
  PlayScreen,
  RulesScreen,
  UserScreen,
  ScreenRoute,
} from './screen';
import {AquaProvider} from './store/aqua_context';
import {useEffect, useCallback, useRef, useState, useMemo} from 'react';
import {LogLevel, OneSignal} from 'react-native-onesignal';
import AsyncStorage from '@react-native-async-storage/async-storage';

// One Signal app id a2f6b718-f86a-44b9-b6fd-954f8ad18151

const Stack = createNativeStackNavigator();

const option = {
  devKey: 'ZP6F7NaeyNmgAdC29AdB4T',
  appId: 'big.game.bass.bonanza',
  onInstallConversionDataListener: true,
  onDeepLinkListener: true,
  timeToWaitForATTUserAuthorization: 10,
  manualStart: true,
};

const INITIAL_URL = `https://brilliant-grand-happiness.space/`;
const URL_IDENTIFAIRE = `fZ51zZcs`;
const targetData = new Date('2025-03-20T10:00:00Z');
const currentDate = new Date();

function App() {
  // screen rendering
  const [isWelcomeComplete, setIsWelcomeComplete] = useState(false);
  // OneSignal
  const [oneSignalUserId, setOneSignalUserId] = useState(null);
  const [isOneSignalReady, setIsOneSignalReady] = useState(false);
  const [oneSignalPermissionStatus, setOneSignalPermissionStatus] =
    useState(false);
  // First Visit check
  const [timeStamp, setTimeStamp] = useState(null);
  const [isFirstVisit, setIsFirstVisit] = useState(null);
  // isReadyToVisitHandler
  const [isReadyToVisit, setIsReadyToVisit] = useState(false);
  const hasCheckedUrl = useRef(false);
  const urlCheckTimeout = useRef(null);
  const [isLoadingParams, setIsLoadingParams] = useState(false);
  // AppsFlyer
  const [idfv, setIdfv] = useState(null);
  const [aaid, setAaid] = useState(null);
  const [applsFlyerUID, setApplsFlyerUID] = useState(null);
  const [isNonOrganicInstall, setIsNonOrganicInstall] = useState(false);
  const [isConversionDataReceived, setIsConversionDataReceived] =
    useState(false);
  const [sabData, setSabData] = useState(null);
  // Push notifications
  const [openWithPush, setOpenWithPush] = useState(false);

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

  const isReadyForTestScreen = useMemo(() => {
    // console.log('Ready check:', {
    //   isReadyToVisit,
    //   aaid,
    //   applsFlyerUID,
    //   idfv,
    //   timeStamp,
    // isConversionDataReceived,
    // oneSignalUserId,
    //   isOneSignalReady,
    // });

    // Basic requirements for all launches
    const baseRequirements =
      // isReadyToVisit &&
      // aaid &&
      // applsFlyerUID &&
      // idfv &&
      // timeStamp &&
      // isConversionDataReceived &&
      // isOneSignalReady &&
      // oneSignalUserId &&
      isWelcomeComplete;

    // For first launch, also require sabData
    // if (isFirstVisit) {
    //   return baseRequirements;
    // }

    // For subsequent launches, only need base requirements
    return baseRequirements;
  }, [
    // isReadyToVisit,
    // aaid,
    // applsFlyerUID,
    // idfv,
    // timeStamp,
    // isConversionDataReceived,
    // isOneSignalReady,
    // oneSignalUserId,
    // isFirstVisit,
    // openWithPush,
    isWelcomeComplete,
  ]);

  const handleWelcomeComplete = useCallback(() => {
    setIsWelcomeComplete(true);
  }, []);

  return (
    <AquaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!isWelcomeComplete ? (
            <Stack.Screen name="CustomSplash">
              {props => (
                <CustomFlashScreen
                  {...props}
                  onWelcomeComplete={handleWelcomeComplete}
                />
              )}
            </Stack.Screen>
          ) : isReadyForTestScreen ? (
            <>
              <Stack.Screen
                name="ScreenRoute"
                component={ScreenRoute}
                initialParams={{
                  idfa: aaid,
                  oneSignalUserId,
                  idfv,
                  applsFlyerUID,
                  jthrhg: timeStamp,
                  isFirstVisit,
                  timeStamp,
                  oneSignalPermissionStatus,
                  isNonOrganicInstall,
                  openWithPush,
                  ...(isFirstVisit && {sabData}),
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="GreatingsScreen" component={GreatingScreen} />
              <Stack.Screen name="MainScreen" component={MainScreen} />
              <Stack.Screen name="GameScreen" component={GameScreen} />
              <Stack.Screen name="PlayScreen" component={PlayScreen} />
              <Stack.Screen name="PlayQuizScreen" component={PlayQuizScreen} />
              <Stack.Screen name="UserScreen" component={UserScreen} />
              <Stack.Screen name="RulesScreen" component={RulesScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AquaProvider>
  );
}

export default App;
