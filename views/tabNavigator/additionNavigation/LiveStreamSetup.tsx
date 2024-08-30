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
  cancelIcon,
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
import {MultiSelect} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
}> = ({form, setForm}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [liveAtOpen, setLiveAtOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isFocus, setIsFocus] = useState(false);

  const dropDItemData = [
    {label: 'Nguyễn Văn C', value: 'Nguyễn Văn C'},
    {label: 'Trần Thị B', value: 'Trần Thị B'},
  ];

  const renderItem = (item: any) => {
    const isSelected = item.value === form.invite;
    return (
      <View style={[styles.item, isSelected && styles.selectedItem]}>
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {item.label}
        </Text>
      </View>
    );
  };

  const handleInputChange = (value: string[]) => {
    setForm({
      ...form,
      invite: value,
    });
  };

  const isDisabled =
    form.description === '' ||
    form.invite.length === 0 ||
    form.liveAt.name === ''
      ? true
      : false;

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
            onPress={() => {
              setLiveAtOpen(false);
              if (selectedIndex !== null) {
                setForm({
                  ...form,
                  liveAt: {
                    active: liveAtData[selectedIndex].active,
                    image: liveAtData[selectedIndex].image,
                    name: liveAtData[selectedIndex].name,
                    numberofPeople: liveAtData[selectedIndex].numberofPeople,
                  },
                });
              }
            }}
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
              value={form.description}
              onChange={e =>
                setForm({...form, description: e.nativeEvent.text})
              }
              style={styles.inputStyle}
            />
          </View>
          {selectedIndex !== null ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                columnGap: vw(2),
              }}>
              <Image source={liveAtData[selectedIndex].image} />
              <View style={{flex: 1, paddingHorizontal: vw(3)}}>
                <Text>{liveAtData[selectedIndex].name}</Text>
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
                    <Text>{liveAtData[selectedIndex].numberofPeople}</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={[
                        styles.dotStyle,
                        {
                          backgroundColor: liveAtData[selectedIndex].active
                            ? '#D2FD7C'
                            : '#7C7C7C',
                        },
                      ]}
                    />
                    <Text style={{color: '#D2FD7C'}}>
                      Đang hoạt động: {liveAtData[selectedIndex].active}
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={() => setLiveAtOpen(true)}>
                {examNext(vw(7), vw(7), '#7C7C7C')}
              </TouchableOpacity>
            </View>
          ) : (
            <>
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
            </>
          )}
          <View style={{rowGap: vh(1)}}>
            <Text style={{color: 'white'}}>Mời bạn bè phát trực tiếp</Text>
            <MultiSelect
              style={[styles.dropdown, isFocus && {borderColor: 'yellowgreen'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              containerStyle={{backgroundColor: 'black'}}
              itemTextStyle={{color: 'white'}}
              data={dropDItemData}
              search
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Nhập tên' : '...'}
              onFocus={() => setIsFocus(true)}
              value={form.invite}
              onBlur={() => setIsFocus(false)}
              mode="modal"
              onChange={(item: any) => {
                handleInputChange(item);
                setIsFocus(false);
              }}
              renderItem={renderItem}
              selectedStyle={{borderRadius: 20}}
              renderSelectedItem={(item, unSelect) => (
                <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                  <View style={styles.selectedStyle}>
                    <Text style={styles.textSelectedStyle}>{item.label}</Text>
                    <View
                      style={[
                        {
                          width: vw(6),
                          height: vw(6),
                          backgroundColor: 'black',
                          borderRadius: vw(20),
                        },
                        centerAll,
                      ]}>
                      {cancelIcon(vw(3), vw(3), '#7C7C7C')}
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <TouchableOpacity
            disabled={isDisabled}
            onPress={() => {
              navigation.navigate('LiveStream', {data: form.invite});
            }}
            style={[
              centerAll,
              {
                borderRadius: 16,
                backgroundColor: isDisabled ? '#464646' : '#B65A46',
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
  dropdown: {
    height: vh(7),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedItem: {
    backgroundColor: 'white',
  },
  itemText: {
    fontSize: 16,
    color: 'white',
  },
  selectedItemText: {
    color: 'black',
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: vw(20),
    backgroundColor: '#69CB84',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
    color: 'black',
  },
});
