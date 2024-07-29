/* eslint-disable prettier/prettier */
import {Dimensions, TextStyle} from 'react-native';
export const vw = (number: number) =>
  Dimensions.get('window').width * (number / 100);
export const vh = (number: number) =>
  Dimensions.get('window').height * (number / 100);
export const vmin = (number: number) =>
  Math.min(
    Dimensions.get('window').width * (number / 100),
    Dimensions.get('window').height * (number / 100),
  );
export const vmax = (number: number) =>
  Math.max(
    Dimensions.get('window').width * (number / 100),
    Dimensions.get('window').height * (number / 100),
  );

export const textTitle: TextStyle = {
  fontSize: 28,
  color: '#0D0D0D',
  fontWeight: '700',
};

export const textSubTitle: TextStyle = {
  fontSize: 16,
  color: '#1B1B1B',
  fontWeight: '400',
};

export const signInTitle: TextStyle = {
  fontSize: 28,
  color: '#F7F9FA',
  fontWeight: '700',
};
