import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const CustomTimer = ({setTimeOut, time}) => {
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        setTimeOut(false);
      } else {
        setTimeOut(true);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  return (
    <View>
      <Text style={styles.numStyle}>
        Remain{' '}
        <Text style={{color: COLORS.red, fontWeight: '600', fontSize: 30}}>
          {' '}
          {timer}{' '}
        </Text>
        <Text>sec</Text>
      </Text>
    </View>
  );
};

export default CustomTimer;

const styles = StyleSheet.create({
  numStyle: {
    fontSize: 24,
    textAlign: 'center',
    // color: COLORS.bamboo,
  },
});
