/* eslint-disable prettier/prettier */
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const useStatusBar = (backgroundColor: string) => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBackgroundColor(backgroundColor);
    }, [backgroundColor]),
  );
};

export default useStatusBar;
