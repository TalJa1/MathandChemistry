/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../services/useStatusBarCustom';
import {vh, vw} from '../services/styleSheets';
import {alignIconSVG, noticeIcon, searchIcon} from '../assets/svgXml';

const Home = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC = () => {
  return (
    <View
      style={{
        width: vw(100),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: vw(5),
        justifyContent: 'space-between',
        marginVertical: vh(2),
      }}>
      <View
        style={[
          {
            backgroundColor: '#3E6280',
            borderWidth: 2,
            borderColor: '#3E6280',
            borderRadius: 50,
            overflow: 'hidden',
          },
        ]}>
        <Image
          style={{width: vw(10), height: vw(10), resizeMode: 'contain'}}
          source={require('../assets/home/profileDefault.png')}
        />
      </View>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <SearchBar />
      </View>
      {noticeIcon(vw(8), vw(8))}
    </View>
  );
};

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchContainer}>
      {searchIcon(vw(5), vw(5))}
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#999"
      />
      {alignIconSVG(vw(5), vw(5))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#E5F55426',
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: vw(5),
  },
  input: {
    fontSize: 16,
    marginHorizontal: 10,
    flex: 1,
  },
});
