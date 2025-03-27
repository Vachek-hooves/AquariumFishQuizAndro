import {useEffect, useCallback, useRef, useState} from 'react';
import {BackHandler, Linking, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const INITIAL_URL = `https://brilliant-grand-happiness.space/`;
const URL_IDENTIFAIRE = `fZ51zZcs`;

const ScreenRoute = ({route}) => {
  const navigation = useNavigation();
  const webViewRef = useRef(null);
  const [sabData, setSabData] = useState(null);
  const [isNonOrganicInstall, setIsNonOrganicInstall] = useState(false);
  const hasHandledPush = useRef(false);
  const [isUrlReady, setIsUrlReady] = useState(false);
  const [localOpenWithPush, setLocalOpenWithPush] = useState(false);
  const [webViewUrl, setWebViewUrl] = useState(null);
  const isFirstLoad = useRef(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isPushStateInitialized, setIsPushStateInitialized] = useState(false);

  const {
    idfa,
    oneSignalUserId,
    idfv,
    applsFlyerUID,
    jthrhg,
    isFirstVisit,
    timeStamp,
    naming,
    oneSignalPermissionStatus,
    openWithPush,
  } = route.params;

  const retriveSabData = useCallback(async () => {
    try {
      const storedSabData = await AsyncStorage.getItem('sabData');
      const storedIsNonOrganic = await AsyncStorage.getItem(
        'isNonOrganicInstall',
      );
      const storedMediaSource = await AsyncStorage.getItem('media_source');
      const storedAfSiteid = await AsyncStorage.getItem('af_siteid');
      const storedAfAd = await AsyncStorage.getItem('af_ad');
      const storedAfChannel = await AsyncStorage.getItem('af_channel');

      setSabData(storedSabData);
      setIsNonOrganicInstall(storedIsNonOrganic === 'true');

      return {
        sabData: storedSabData,
        isNonOrganic: storedIsNonOrganic === 'true',
        mediaSource: storedMediaSource ?? '',
        afSiteid: storedAfSiteid ?? '',
        afAd: storedAfAd ?? '',
        afChannel: storedAfChannel ?? '',
      };
    } catch (error) {
      console.error('Error in retriveSabData:', error);
      return {sabData: null, isNonOrganic: false};
    }
  }, []);

  useEffect(() => {
    // console.log('HANDLE BACK BTN');
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Get current URL from WebView
        const currentUrl = webViewUrl;

        // If we're already on a blank page, navigate to base URL
        if (currentUrl === 'about:blank') {
          const baseUrl = `${INITIAL_URL}${URL_IDENTIFAIRE}?${URL_IDENTIFAIRE}=1`;
          setWebViewUrl(baseUrl);
          return true;
        }

        // If we can go back, check the previous page after a small delay
        if (webViewRef.current && webViewRef.current.canGoBack) {
          setTimeout(() => {
            const previousUrl = webViewRef.current?.url;
            if (previousUrl === 'about:blank') {
              // If previous page is blank, navigate to base URL
              const baseUrl = `${INITIAL_URL}${URL_IDENTIFAIRE}?${URL_IDENTIFAIRE}=1`;
              setWebViewUrl(baseUrl);
              return true;
            }
            // If previous page is not blank, allow navigation
            webViewRef.current.goBack();
          }, 100);
          return true;
        }

        // If we can't go back anywhere, navigate to base URL
        const baseUrl = `${INITIAL_URL}${URL_IDENTIFAIRE}?${URL_IDENTIFAIRE}=1`;
        setWebViewUrl(baseUrl);
        return true;
      },
    );

    return () => backHandler.remove();
  }, [navigation, webViewUrl]);

  useEffect(() => {
    fetch(
      `${INITIAL_URL}${URL_IDENTIFAIRE}?utretg=webview_open&jthrhg=${timeStamp}`,
    );
  }, []);

  useEffect(() => {
    if (isFirstVisit && oneSignalPermissionStatus) {
      fetch(
        `${INITIAL_URL}${URL_IDENTIFAIRE}?utretg=push_subscribe&jthrhg=${timeStamp}`,
      );
    }
  }, [isFirstVisit, oneSignalPermissionStatus]);

  useEffect(() => {
    const sendUniqVisit = async () => {
      if (isFirstVisit) {
        const storedTimeStamp = await AsyncStorage.getItem('timeStamp');

        fetch(
          `${INITIAL_URL}${URL_IDENTIFAIRE}?utretg=uniq_visit&jthrhg=${storedTimeStamp}`,
        );
      }
    };
    sendUniqVisit();
  }, [isFirstVisit]);

  const constructUrl = useCallback(
    (
      currentSabData,
      currentIsNonOrganic,
      currentMediaSource,
      currentAfSiteid,
      currentAfAd,
      currentAfChannel,
    ) => {
      const baseUrl = `${INITIAL_URL}${URL_IDENTIFAIRE}?${URL_IDENTIFAIRE}=1`;
      const params = new URLSearchParams();

      params.append('idfa', idfa);
      params.append('oneSignalId', oneSignalUserId);
      params.append('idfv', idfv);
      params.append('uid', applsFlyerUID);
      params.append('customerUserId', idfv);
      params.append('jthrhg', jthrhg);
      params.append('media_source', currentMediaSource);
      params.append('af_siteid', currentAfSiteid);
      params.append('af_ad', currentAfAd);
      params.append('af_channel', currentAfChannel);

      let finalUrl = `${baseUrl}&${params.toString()}`;

      // Handle push notification parameter regardless of visit type
      if (localOpenWithPush) {
        console.log('Adding push notification parameter to URL');
        finalUrl += '&yhugh=true';
      }

      if (isFirstVisit) {
        if (currentIsNonOrganic) {
          finalUrl += '&testParam=NON-ORGANIC';
          if (!currentSabData) {
            finalUrl += '&testParam=CONVERT-SUBS-MISSING-SPLITTER';
          } else if (currentSabData.includes('_')) {
            const sabParams = currentSabData
              .split('_')
              .map((item, index) => (item ? `subId${index + 1}=${item}` : ''))
              .join('&');
            finalUrl += `&testParam=NON-ORGANIC&${sabParams}`;
          } else {
            finalUrl += '&testParam=CONVERT-SUBS-MISSING-SPLITTER';
          }
        } else {
          finalUrl += '&testParam=ORGANIC';
        }
      } else {
        if (currentIsNonOrganic && currentSabData?.includes('_')) {
          const sabParams = currentSabData
            .split('_')
            .map((item, index) => (item ? `subId${index + 1}=${item}` : ''))
            .join('&');
          finalUrl += `&${sabParams}`;
        }
      }

      // Handle non-organic install for subsequent visits
      if (!isFirstVisit) {
        if (currentIsNonOrganic && currentSabData?.includes('_')) {
          const sabParams = currentSabData
            .split('_')
            .map((item, index) => (item ? `subId${index + 1}=${item}` : ''))
            .join('&');
          finalUrl += `&${sabParams}`;
        }
      }

      console.log('Final URL constructed:', finalUrl);
      return finalUrl;
    },
    [
      idfa,
      oneSignalUserId,
      idfv,
      applsFlyerUID,
      jthrhg,
      isFirstVisit,
      localOpenWithPush,
    ],
  );

  // Initialize push state
  useEffect(() => {
    const initPushState = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        const storedPushState = await AsyncStorage.getItem('openedWithPush');
        console.log('Initial push state check:', {
          storedPushState,
          routeOpenWithPush: route.params.openWithPush,
        });

        const shouldEnablePush =
          storedPushState === 'true' || route.params.openWithPush;
        if (shouldEnablePush) {
          console.log('Setting localOpenWithPush to true');
          setLocalOpenWithPush(true);
          // Clear the push state immediately after reading
          await AsyncStorage.removeItem('openedWithPush');
          console.log('Cleared push state from storage');
        }
        setIsPushStateInitialized(true);
        setIsUrlReady(true);
      } catch (error) {
        console.error('Error checking push state:', error);
        setIsPushStateInitialized(true);
        setIsUrlReady(true);
      }
    };

    initPushState();
  }, [route.params.openWithPush]);

  // Modify the initialization effect
  useEffect(() => {
    const initializeWebView = async () => {
      if (isFirstLoad.current && isPushStateInitialized) {
        try {
          const {
            sabData: currentSabData,
            isNonOrganic: currentIsNonOrganic,
            mediaSource: currentMediaSource,
            afSiteid: currentAfSiteid,
            afAd: currentAfAd,
            afChannel: currentAfChannel,
          } = await retriveSabData();

          const generatedUrl = constructUrl(
            currentSabData,
            currentIsNonOrganic,
            currentMediaSource,
            currentAfSiteid,
            currentAfAd,
            currentAfChannel,
          );
          setWebViewUrl(generatedUrl);
          isFirstLoad.current = false;
        } catch (error) {
          console.error('Error initializing WebView:', error);
          Alert.alert('Error', String(error.message));
        }
      }
    };

    initializeWebView();
  }, [constructUrl, retriveSabData, isPushStateInitialized]);

  const handleLoadStart = useCallback(() => {
    setIsLoading(true);
  }, []);

  const handleLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Modify the navigation state change handler
  const handleNavigationStateChange = navState => {
    // Update WebView's canGoBack state
    if (webViewRef.current) {
      webViewRef.current.canGoBack = navState.canGoBack;
    }

    // Only handle blank pages if we're not in initial loading
    if (navState.url === 'about:blank' && !isFirstLoad.current) {
      const baseUrl = `${INITIAL_URL}${URL_IDENTIFAIRE}?${URL_IDENTIFAIRE}=1`;
      setWebViewUrl(baseUrl);
    }
  };

  // Modify the URL monitoring effect
  useEffect(() => {
    if (webViewUrl === 'about:blank' && !isFirstLoad.current) {
      const baseUrl = `${INITIAL_URL}${URL_IDENTIFAIRE}?${URL_IDENTIFAIRE}=1`;
      setWebViewUrl(baseUrl);
    }
  }, [webViewUrl]);

  const renderContent = () => {
    if (!webViewUrl) {
      return null;
    }

    // Wrapper function to handle the async nature of handleCustomUrl
    const onShouldStartLoadWithRequest = event => {
      // console.log('onShouldStartLoadWithRequest started');
      const {url} = event;
      // console.log('Intercepted URL:', url);
      // Handle RBC intent URL
      if (url.startsWith('intent://rbcbanking')) {
        console.log('RBC URL detected:', url);
        // Extract the scheme and package from the intent URL
        const scheme = 'rbcbanking';
        const packageName = 'com.rbc.mobile.android';

        try {
          // Try to open with custom scheme first
          console.log(
            'scheme',
            `${scheme}://${url.split('?')[1].split('#')[0]}`,
          );
          Linking.openURL(
            `${scheme}://${url.split('?')[1].split('#')[0]}`,
          ).catch(() => {
            // If custom scheme fails, try using intent
            Linking.sendIntent('android.intent.action.VIEW', [
              {key: 'package_name', value: packageName},
            ]).catch(error => {
              console.error('Error opening RBC app:', error);
              Alert.alert(
                'App Not Found',
                'The RBC banking app is not installed.',
                [{text: 'OK'}],
              );
            });
          });
        } catch (error) {
          console.error('Error parsing RBC URL:', error);
        }
        return false;
      }

      // if (url.startsWith('https://app.revolut.com')) {
      //   console.log('THIS SHOULD BE REVOLUT');
      //   const scheme = 'app.revolut.com';
      //   const packageName = 'app.revolut.com';
      //   console.log(`${scheme}://${url.split('?')[1].split('#')[0]}`);
      //   try {
      //     Linking.openURL(
      //       `${scheme}://${url.split('?')[1].split('#')[0]}`,
      //     ).catch(() => {
      //       Linking.sendIntent('android.intent.action.VIEW', [
      //         {key: 'package_name', value: packageName},
      //       ]).catch(error => {
      //         console.error('Error opening RBC app:', error);
      //         Alert.alert(
      //           'App Not Found',
      //           'The RBC banking app is not installed.',
      //           [{text: 'OK'}],
      //         );
      //       });
      //     });
      //   } catch (error) {
      //     console.error('Error parsing RBC URL:', error);
      //   }
      //   return false;
      // }

      if (
        url.startsWith('mailto:') ||
        url.startsWith('intent://') ||
        url.startsWith('scotiabank://') ||
        url.startsWith('cibcbanking://') ||
        url.startsWith('intent://rbcbanking') ||
        url.startsWith('bncmobile:/') ||
        url.startsWith('tdct://') ||
        url.startsWith('bmoolbb://') ||
        url.startsWith('bmo://') ||
        url.startsWith('rbc://') ||
        url.startsWith('https://m.facebook.com/') ||
        url.startsWith('https://www.facebook.com/') ||
        url.startsWith('https://www.instagram.com/') ||
        url.startsWith('https://twitter.com/') ||
        url.startsWith('https://www.whatsapp.com/') ||
        url.startsWith('fb://') ||
        url.startsWith('googlepay://') ||
        url.startsWith('https://t.me/candyspinz') ||
        url.startsWith('https://t.me/') ||
        // Netherlands
        url.startsWith('https://betalen.rabobank.nl/') ||
        url.startsWith('nl-asnbank-sign://') ||
        url.startsWith('nl-snsbank-sign://') ||
        url.startsWith('https://sso.revolut.com/') ||
        // url.startsWith('https://app.revolut.com/') ||
        url.startsWith('https://myaccount.ing.com/') ||
        url.startsWith('https://oba.revolut.com/') ||
        url.startsWith('nl-abnamro-deeplink.psd2.consent://') ||
        url.startsWith('https://www.abnamro.nl/') ||
        url.startsWith('nl-regiobank-sign://')
        // url.startsWith('https://67crystalroll23.com/')

        // url.startsWith('https://www.payzoff.com/')
      ) {
        // Handle banking apps
        console.log('app url', url);

        Linking.openURL(url).catch(error => {
          Alert.alert(
            'App Not Found',
            'The requested banking app is not installed.',
            [{text: 'OK'}],
          );
        });
        return false;
      }
      // console.log('onShouldStartLoadWithRequest finished');
      // Handle regular web URLs to be opened in the webview ,logic to be added ....
      return true;
    };

    return (
      // <View style={{flex: 1}}>
      <WebView
        ref={webViewRef}
        source={{uri: webViewUrl}}
        // source={{uri: 'https://www.dou.ua'}}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        // style={{flex: 1, opacity: isLoading ? 0 : 1}}
        style={{flex: 1}}
        originWhitelist={[
          '*',
          'http://*',
          'https://*',
          'intent://*',
          'tel:*',
          'mailto:*',
          'scotiabank://',
          'bmo://',
          'td://',
          'nbc://',
          'cibc://',
          'bmoolbb://*',
          'scotiabank://',
          'rbcbanking://',
          'tdct://',
          'cibcbanking://',
          'www.cibconline.cibc.com://',
          'secure.scotiabank.com',
          'rbc://*',
          // ' https://app.revolut.com',
        ]}
        onLoad={() => {
          // console.log('WebView fully loaded');
          // handleWebViewLoad(); // Uncomment if prefer onLoad over onLoadStart
        }}
        onError={syntheticEvent => {
          // Alert.alert('WebView Error', syntheticEvent.nativeEvent.description);
        }}
        onLoadError={syntheticEvent => {
          // Alert.alert('Load Error', syntheticEvent.nativeEvent.description);
        }}
        thirdPartyCookiesEnabled={true}
        allowsBackForwardNavigationGestures={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        allowFileAccess={true}
        javaScriptCanOpenWindowsAutomatically={true}
        setSupportMultipleWindows={false} // prevent opening external browser
        onMessage={event => {
          console.log('WebView Message:', event.nativeEvent.data);
        }}
        onNavigationStateChange={navState => {
          // Updates webview's canGoBack state
          //   console.log('navState', navState.url);
          if (webViewRef.current) {
            // console.log('webViewRef.current', webViewRef.current);
            webViewRef.current.canGoBack = navState.canGoBack;
          }
          handleNavigationStateChange(navState);
        }}
        onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
      />
      // </View>
    );
  };

  return renderContent();
};

export default ScreenRoute;
