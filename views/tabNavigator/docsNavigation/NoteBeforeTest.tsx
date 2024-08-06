/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useRoute} from '@react-navigation/native';
import {vw} from '../../../services/styleSheets';
import {backArrow} from '../../../assets/svgXml';

const NoteBeforeTest = () => {
  useStatusBar('#A3A3F2');
  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {title, time} = route.params as {title: string; time: number};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header title={title} />
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC<{title: string}> = ({title}) => {
  return (
    <View
      style={{
        backgroundColor: '#A3A3F2',
        padding: vw(5),
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
      }}>
      {backArrow(vw(7), vw(7), 'black')}
      <Text style={{color: '#0D0D0D', fontSize: 18, fontWeight: '600'}}>
        {title}
      </Text>
    </View>
  );
};

export default NoteBeforeTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
