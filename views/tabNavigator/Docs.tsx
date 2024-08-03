/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {vh, vw} from '../../services/styleSheets';
import {
  alignIconSVG,
  backArrow,
  finishDocsIcon,
  noticeIcon,
  pendingDocsIcon,
  searchIcon,
} from '../../assets/svgXml';
import SwitchTabComponent from '../../components/SwitchTabComponent';
import {
  BoxDataProps,
  DocsMainDataProps,
  RenderBoxGroupProps,
  RenderDocsMainDataProps,
} from '../../services/typeProps';
import {
  mainDocsChemistryData,
  mainDocsMathData,
  renderBoxChemistryGroupData,
  renderBoxMathGroupData,
} from '../../services/renderData';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Docs = () => {
  useStatusBar('black');
  const [isMath, setIsMath] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <View style={{paddingHorizontal: vw(5), marginVertical: vh(1)}}>
          <SearchBar />
        </View>
        <View
          style={{
            paddingHorizontal: vw(5),
            width: '100%',
            backgroundColor: '#202020',
            borderRadius: vw(7),
          }}>
          <SwitchTabComponent isMath={isMath} setIsMath={setIsMath} />
        </View>
        {isMath ? (
          <View>
            <RenderBoxGroup data={renderBoxMathGroupData} />
            <MainData data={mainDocsMathData} isMath={isMath} />
          </View>
        ) : (
          <View>
            <RenderBoxGroup data={renderBoxChemistryGroupData} />
            <MainData data={mainDocsChemistryData} isMath={isMath} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const MainData: React.FC<RenderDocsMainDataProps & {isMath: boolean}> = ({
  data,
  isMath,
}) => {
  return (
    <View style={{rowGap: vh(2), marginHorizontal: vw(5)}}>
      {data.map((item, index) => (
        <View key={index}>
          <MainDataBox
            amount={item.amount}
            title={item.title}
            total={item.total}
            isMath={isMath}
          />
        </View>
      ))}
    </View>
  );
};

const MainDataBox: React.FC<DocsMainDataProps & {isMath: boolean}> = ({
  amount,
  title,
  total,
  isMath,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DocsChosenTopic', {title: title, isMath: isMath});
      }}
      style={[
        {width: '100%', padding: vw(5), borderRadius: vw(5), rowGap: vh(2)},
        isMath
          ? {backgroundColor: '#A7A7A726'}
          : {backgroundColor: '#A3A3F21A'},
      ]}>
      <Text>{title}</Text>
      <View
        style={{flexDirection: 'row', columnGap: vw(2), alignItems: 'center'}}>
        {finishDocsIcon(vw(6), vw(6), '#D2FD7C')}
        <Text>
          {amount}/{total}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const RenderBoxGroup: React.FC<RenderBoxGroupProps> = ({data}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: vh(2),
      }}>
      {data.map((item, index) => (
        <View key={index}>
          <BoxData
            color={item.color}
            content={item.content}
            title={item.title}
          />
        </View>
      ))}
    </View>
  );
};

const BoxData: React.FC<BoxDataProps> = ({color, content, title}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        width: vw(40),
        height: vh(12),
        padding: vw(4),
        justifyContent: 'space-between',
        borderRadius: vw(5),
      }}>
      <Text style={{color: '#0D0D0D', fontSize: 16, fontWeight: '600'}}>
        {title}
      </Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', columnGap: vw(2)}}>
        {title === 'Đang làm' ? (
          <View>{pendingDocsIcon(vw(6), vw(6))}</View>
        ) : (
          <View>{finishDocsIcon(vw(6), vw(6))}</View>
        )}
        <Text style={{color: '#464646', fontSize: 16, fontWeight: '500'}}>
          {content}
        </Text>
      </View>
    </View>
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
      <TouchableOpacity>{backArrow(vw(8), vw(8))}</TouchableOpacity>
      <View style={{flex: 1, marginHorizontal: 10}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#A7A7A7',
            fontSize: 16,
            fontWeight: '500',
          }}>
          Đề thi
        </Text>
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

export default Docs;

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
