/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  attachmentIcon,
  cameraIcon,
  chatBackIcon,
  chatCameraIcon,
  chatNoteIcon,
  micIcon,
  phoneIcon,
} from '../../../assets/svgXml';
import {verticalContactData} from '../../../services/renderData';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Shadow} from 'react-native-shadow-2';

const Chat = () => {
  useStatusBar('black');
  const route = useRoute();
  const {index} = route.params as {index: number};
  const [guest, setGuest] = useState([
    'Xin chào',
    'Có việc gì không vậy?',
    'Gửi đề bài đi, biết đâu t giải được',
  ]);

  const [ownChat, setOwnChat] = useState([
    'Hellooo',
    'Tôi đang vướng một chút ở bài tập này',
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Shadow
        distance={10}
        startColor={'#191919'}
        endColor={'black'}
        offset={[3, 2]}
        style={{
          backgroundColor: 'black',
          width: '100%',
        }}>
        <Header index={index} />
      </Shadow>
      <ScrollView
        style={{paddingHorizontal: vw(5)}}
        contentContainerStyle={{paddingVertical: vh(2)}}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              backgroundColor: '#464646',
              paddingHorizontal: 10,
              padding: 5,
              borderRadius: vw(20),
              color: '#FFFFFF',
            }}>
            Hôm nay
          </Text>
        </View>
      </ScrollView>
      <InputText setChat={setOwnChat} />
    </SafeAreaView>
  );
};

const InputText: React.FC<{
  setChat: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({setChat}) => {
  return (
    <View
      style={{
        paddingHorizontal: vw(5),
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        columnGap: vw(2),
        paddingVertical: vh(2),
        borderTopWidth: 1,
        borderTopColor: '#242E2E',
      }}>
      {attachmentIcon(vw(6), vw(6))}
      <View style={[{flex: 1, flexDirection: 'row'}, centerAll]}>
        <TextInput
          placeholder="Write your message"
          style={{
            backgroundColor: '#192222',
            borderRadius: 12,
            paddingHorizontal: 10,
            color: '#FFFFFF',
            flex: 1,
            paddingRight: 30,
          }}
        />
        <View style={{position: 'absolute', right: 5}}>
          {chatNoteIcon(vw(6), vw(6))}
        </View>
      </View>
      {chatCameraIcon(vw(6), vw(6))}
      {micIcon(vw(6), vw(6))}
    </View>
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
          <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>
            {data.name}
          </Text>
          <Text style={{color: '#797C7B'}}>Đang hoạt động</Text>
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
