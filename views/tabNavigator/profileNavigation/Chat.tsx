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
import {containerStyle, vh, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {cameraIcon, chatBackIcon, phoneIcon} from '../../../assets/svgXml';
import {verticalContactData} from '../../../services/renderData';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Chat = () => {
  useStatusBar('black');
  const route = useRoute();
  const {index} = route.params as {index: number};

  return (
    <SafeAreaView style={styles.container}>
      <Header index={index} />
      <ScrollView>
        <View>
          <Text>Chat</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC<{index: number}> = ({index}) => {
  const data = verticalContactData[index];
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: vw(100),
        paddingHorizontal: vw(5),
        columnGap: vw(5),
        marginVertical: vh(2),
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        {chatBackIcon(vw(5), vw(5))}
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: vw(2),
          flex: 1,
        }}>
        <Image
          style={{
            width: vw(12),
            height: vw(12),
            resizeMode: 'cover',
            borderRadius: vw(20),
          }}
          source={data.img}
        />
        <View>
          <Text>{data.name}</Text>
          <Text>Đang hoạt động</Text>
        </View>
      </View>
      {phoneIcon(vw(6), vw(6))}
      {cameraIcon(vw(6), vw(6))}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: containerStyle,
});
