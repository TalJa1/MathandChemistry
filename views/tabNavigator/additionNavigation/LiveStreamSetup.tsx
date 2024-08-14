/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {
  examNext,
  filmingIcon,
  frontBackCameraIcon,
  micIcon,
  optionIcon,
  smallStarIcon,
} from '../../../assets/svgXml';
import {LiveStreamFormProps} from '../../../services/typeProps';

const LiveStreamSetup = () => {
  useStatusBar('black');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [form, setForm] = useState<LiveStreamFormProps>({
    description: '',
    invite: [],
    liveAt: {
      active: 0,
      image: null,
      name: '',
      numberofPeople: 0,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{resizeMode: 'cover', opacity: 0.2}}
        source={require('../../../assets/liveStream/background.png')}
        style={{flex: 1, paddingHorizontal: vw(5)}}>
        <ScrollView contentContainerStyle={{paddingVertical: vh(2)}}>
          <MainContentTop />
        </ScrollView>
        <View>
          <MainContentBottom />
          <TouchableOpacity
            disabled={true}
            style={[
              centerAll,
              {
                borderRadius: 16,
                backgroundColor: '#464646',
                paddingVertical: vh(2),
                marginVertical: vh(1),
              },
            ]}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
              Phát trực tiếp
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const MainContentBottom: React.FC = () => {
  return (
    <View style={{rowGap: vh(4), marginBottom: vh(3)}}>
      <View style={{rowGap: vh(1)}}>
        <Text style={{color: 'white'}}>Mô tả</Text>
        <TextInput
          multiline={true}
          placeholderTextColor={'#7C7C7C'}
          placeholder="Nhập mô tả"
          style={styles.inputStyle}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: vw(2),
          }}>
          {optionIcon(vw(7), vw(7), '#7C7C7C')}
          <Text style={{color: '#7C7C7C', fontSize: 16}}>
            Phát trực tiếp tại
          </Text>
        </View>
        <TouchableOpacity>{examNext(vw(7), vw(7), '#7C7C7C')}</TouchableOpacity>
      </View>
      <View style={{rowGap: vh(1)}}>
        <Text style={{color: 'white'}}>Mời bạn bè phát trực tiếp</Text>
        <TextInput
          multiline={true}
          placeholderTextColor={'#7C7C7C'}
          placeholder="Nhập tên"
          style={styles.inputStyle}
        />
      </View>
    </View>
  );
};

const MainContentTop: React.FC = () => {
  return (
    <View style={{flex: 1, height: '100%'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: vw(3),
          }}>
          <Image source={require('../../../assets/liveStream/acc1.png')} />
          <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}>
            Nguyễn Văn A
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: vh(2),
          }}>
          {micIcon(vw(7), vw(7))}
          {filmingIcon(vw(7), vw(7))}
          {frontBackCameraIcon(vw(7), vw(7))}
          {smallStarIcon(vw(7), vw(7))}
        </View>
      </View>
    </View>
  );
};

export default LiveStreamSetup;

const styles = StyleSheet.create({
  container: containerStyle,
  inputStyle: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#7C7C7C80',
    color: 'white',
    paddingHorizontal: vw(3),
  },
});
