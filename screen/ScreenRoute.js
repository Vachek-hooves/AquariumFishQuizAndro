import {useEffect, useCallback, useRef, useState} from 'react';
import {BackHandler, Linking, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const ScreenRoute = () => {
  return <WebView source={{uri: 'https://www.google.com'}} />;
};

export default ScreenRoute;
