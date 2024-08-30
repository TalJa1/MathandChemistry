/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/useStatusBarCustom';
import {centerAll, vh, vw} from '../../../services/styleSheets';
import {useNavigation, useRoute} from '@react-navigation/native';
import {DocsChosenTopicProps} from '../../../services/typeProps';
import {
  docsChemistryTopicData,
  docsMathTopicData,
} from '../../../services/renderData';
import SearchBar from '../../../components/docs/SearchBar';
import Header from '../../../components/docs/Header';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const DocsChosenTopic = () => {
  useStatusBar('black');
  const route = useRoute();
  const {title, isMath} = route.params as {title: string; isMath: boolean};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginBottom: vh(1),
            elevation: 10,
            shadowColor: 'yellow',
            backgroundColor: 'black',
          }}>
          <Header title={title} />
          <SearchGrp isMath={isMath} />
        </View>
        <TopicNavigation
          data={isMath ? docsMathTopicData : docsChemistryTopicData}
          isMath={isMath}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const TopicNavigation: React.FC<DocsChosenTopicProps & {isMath: boolean}> = ({
  data,
  isMath,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: vh(5),
        marginHorizontal: vw(5),
      }}>
      {data.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <TouchableOpacity
            disabled={index < 2 ? true : false}
            style={[centerAll, {rowGap: vh(1)}]}
            onPress={() =>
              navigation.navigate('TopicDetail', {
                title: item.label,
                isMath: isMath,
              })
            }>
            <Image style={styles.image} source={item.img} />
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const SearchGrp: React.FC<{isMath: boolean}> = ({isMath}) => {
  return (
    <View
      style={{
        paddingHorizontal: vw(5),
        marginVertical: vh(1),
        flexDirection: 'row',
        columnGap: vw(2),
      }}>
      <View style={{flex: 1}}>
        <SearchBar />
      </View>
      <View
        style={[
          centerAll,
          {
            padding: vw(2),
            backgroundColor: '#D2FD7C',
            flexDirection: 'row',
            borderRadius: vw(20),
            columnGap: vw(1),
          },
        ]}>
        {isMath ? (
          <Text style={{color: 'black'}}>Toán</Text>
        ) : (
          <Text style={{color: 'black'}}>Hóa</Text>
        )}
        <View
          style={[
            {
              backgroundColor: 'black',
              borderRadius: vw(20),
              height: vw(6),
              width: vw(6),
            },
            centerAll,
          ]}>
          <Text style={{color: '#D2FD7C'}}>11</Text>
        </View>
      </View>
    </View>
  );
};

export default DocsChosenTopic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  itemContainer: {
    flex: 1,
  },
  image: {
    width: vw(20),
    height: vw(20),
    resizeMode: 'contain',
  },
  label: {
    textAlign: 'center', // Center text horizontally
    flexWrap: 'wrap', // Wrap text if it overflows
    color: 'white',
  },
});
