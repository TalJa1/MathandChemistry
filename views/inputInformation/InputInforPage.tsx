/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import NavigationHeaderComponent from '../../components/login/NavigationHeaderComponent';
import {vw} from '../../services/styleSheets';

const InputInforPage: React.FC = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: '15%'}}>
        <NavigationHeaderComponent isSkip={false} isback={true} process={0.1} />
      </View>
      <View>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
};

const SearchBar: React.FC = () => {
  return (
    <View>
      <Text>SearchBar</Text>
    </View>
  );
};

export default InputInforPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: vw(5),
  },
});
