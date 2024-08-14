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
  groupIcon,
  micIcon,
  optionIcon,
  smallStarIcon,
} from '../../../assets/svgXml';
import {LiveStreamFormProps} from '../../../services/typeProps';
import {liveAtData} from '../../../services/renderData';

const LiveStreamSetup = () => {
  useStatusBar('black');
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
          <MainContentBottom form={form} setForm={setForm} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const MainContentBottom: React.FC<{
  form: LiveStreamFormProps;
  setForm: React.Dispatch<React.SetStateAction<LiveStreamFormProps>>;
}> = (form, setForm) => {
  const [liveAtOpen, setLiveAtOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <View style={{rowGap: vh(4), marginBottom: vh(3)}}>
      {liveAtOpen ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: vw(2),
            }}>
            {optionIcon(vw(7), vw(7), '#D2FD7C')}
            <Text style={{color: '#D2FD7C', fontSize: 16}}>
              Phát trực tiếp tại
            </Text>
          </View>
          {liveAtData.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                columnGap: vw(2),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={item.image} />
                <View style={{flex: 1, paddingHorizontal: vw(3)}}>
                  <Text>{item.name}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: vw(2),
                      }}>
                      {groupIcon(vw(5), vw(5), '#A7A7A7')}
                      <Text>{item.numberofPeople}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={[
                          styles.dotStyle,
                          {
                            backgroundColor: item.active
                              ? '#D2FD7C'
                              : '#7C7C7C',
                          },
                        ]}
                      />
                      <Text style={{color: '#D2FD7C'}}>
                        Đang hoạt động: {item.active}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setSelectedIndex(index)}
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 5,
                  borderColor:
                    selectedIndex === index ? 'greenyellow' : '#7C7C7C',
                  borderWidth: 2,
                  backgroundColor:
                    selectedIndex === index ? 'greenyellow' : 'transparent',
                }}
              />
            </View>
          ))}
          <TouchableOpacity
            disabled={selectedIndex === null ? true : false}
            style={[
              centerAll,
              {
                borderRadius: 16,
                backgroundColor: selectedIndex === null ? '#7C7C7C' : '#D2FD7C',
                paddingVertical: vh(2),
                marginVertical: vh(1),
              },
            ]}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
              Chọn
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
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
            <TouchableOpacity onPress={() => setLiveAtOpen(true)}>
              {examNext(vw(7), vw(7), '#7C7C7C')}
            </TouchableOpacity>
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
        </>
      )}
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
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});
