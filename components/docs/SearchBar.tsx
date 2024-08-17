/* eslint-disable prettier/prettier */
import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {alignIconSVG, searchIcon} from '../../assets/svgXml';
import {vw} from '../../services/styleSheets';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchContainer}>
      {searchIcon(vw(5), vw(5))}
      <TextInput
        style={styles.input}
        placeholder="Tìm kiếm"
        placeholderTextColor="#999"
      />
      {alignIconSVG(vw(5), vw(5))}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
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
