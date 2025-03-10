import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export const optionsHeightAdjust = () => {
  if (height < 670) {
    return 70;
  } else if (height < 820) {
    return 70;
  } else {
    return 85;
  }
};

export const optionsFontSize = () => {
  if (height < 670) {
    return 16;
  } else if (height < 820) {
    return 20;
  } else {
    return 24;
  }
};
