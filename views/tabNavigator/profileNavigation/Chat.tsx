/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
  const guest = [
    'Xin chào',
    'Có việc gì không vậy?',
    'Gửi đề bài đi, biết đâu t giải được',
  ];

  const [ownChat, setOwnChat] = useState([
    'Hellooo',
    'Tôi đang vướng một chút ở bài tập này',
  ]);

  console.log('ownChat', ownChat);

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
        <MainChat guestChat={guest} ownChat={ownChat} />
      </ScrollView>
      <InputText setChat={setOwnChat} />
    </SafeAreaView>
  );
};

const MainChat: React.FC<{guestChat: string[]; ownChat: string[]}> = ({
  guestChat,
  ownChat,
}) => {
  return (
    <View style={{marginTop: vh(2), rowGap: vh(2)}}>
      <View style={styles.rightChatContainer}>
        <Text style={styles.chatRight}>{ownChat[0]}</Text>
      </View>
      <View style={styles.leftChatContainer}>
        <Text style={styles.chatleft}>{guestChat[0]}</Text>
        <Text style={styles.chatleft}>{guestChat[1]}</Text>
      </View>
      <View style={styles.rightChatContainer}>
        <Text style={styles.chatRight}>{ownChat[1]}</Text>
      </View>
      <View style={styles.leftChatContainer}>
        <Text style={styles.chatleft}>{guestChat[2]}</Text>
      </View>
      <View style={styles.rightChatContainer}>
        <Image
          style={{width: '60%', resizeMode: 'contain'}}
          source={require('../../../assets/chat/imgg1.png')}
        />
      </View>
      {ownChat.length > 2 &&
        ownChat.slice(2).map((message, index) => (
          <View key={index} style={styles.rightChatContainer}>
            <Text style={styles.chatRight}>{message}</Text>
          </View>
        ))}
    </View>
  );
};

const InputText: React.FC<{
  setChat: React.Dispatch<React.SetStateAction<string[]>>;
}> = ({setChat}) => {
  const [text, setText] = useState('');

  const handleTextChange = (input: string) => {
    setText(input);
  };

  const handleTextSubmit = () => {
    if (text.trim()) {
      setChat(prevChat => [...prevChat, text]);
      setText('');
    }
  };
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
          onChangeText={handleTextChange}
          onSubmitEditing={handleTextSubmit}
          returnKeyType="done"
          value={text}
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
  chatRight: {
    color: 'black',
    backgroundColor: '#69CB84',
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  chatleft: {
    color: 'black',
    backgroundColor: '#A7A7A7',
    padding: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  rightChatContainer: {
    alignItems: 'flex-end',
    rowGap: vh(1),
  },
  leftChatContainer: {
    alignItems: 'flex-start',
    rowGap: vh(1),
  },
});
