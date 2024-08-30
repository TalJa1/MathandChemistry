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
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../../services/useStatusBarCustom';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Shadow} from 'react-native-shadow-2';
import {cameraIcon, searchIcon} from '../../../assets/svgXml';
import {RecommendationDataProps} from '../../../services/typeProps';
import {
  ownerGroup,
  recomendationAdminData,
  recomendationPersonData,
} from '../../../services/renderData';
import {launchImageLibrary} from 'react-native-image-picker';

const GroupCreation = () => {
  useStatusBar('black');
  const [group, setGroup] = useState({
    img: '',
    name: '',
    amount: 0,
    noti: 1,
  });
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const handlePress = (index: number) => {
    setSelectedIndices(prevSelectedIndices => {
      const newSelectedIndices = prevSelectedIndices.includes(index)
        ? prevSelectedIndices.filter(i => i !== index)
        : [...prevSelectedIndices, index];

      setGroup(prevGroup => ({
        ...prevGroup,
        amount: newSelectedIndices.length,
      }));

      return newSelectedIndices;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Shadow
        distance={5}
        startColor={'#5C5C5C'}
        endColor={'black'}
        offset={[3, 2]}
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          backgroundColor: 'black',
          width: '100%',
        }}>
        <Header />
      </Shadow>
      <ScrollView
        style={{paddingHorizontal: vw(5)}}
        contentContainerStyle={{paddingVertical: vh(2)}}>
        <MainContent
          setGroup={setGroup}
          group={group}
          handlePress={handlePress}
          selectedIndices={selectedIndices}
        />
      </ScrollView>
      <Shadow
        distance={10}
        startColor={'#5C5C5C'}
        endColor={'black'}
        offset={[3, 2]}
        style={{
          backgroundColor: 'black',
          width: '100%',
        }}>
        <Footer group={group} />
      </Shadow>
    </SafeAreaView>
  );
};

const MainContent: React.FC<{
  group: {
    img: string;
    name: string;
    amount: number;
    noti: number;
  };
  setGroup: React.Dispatch<
    React.SetStateAction<{
      img: string;
      name: string;
      amount: number;
      noti: number;
    }>
  >;
  handlePress: (index: number) => void;
  selectedIndices: number[];
}> = ({setGroup, group, handlePress, selectedIndices}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setSelectedImage(response.assets[0]?.uri || null);
        setGroup(prev => ({...prev, img: response.assets?.[0]?.uri ?? ''}));
      }
    });
  };

  return (
    <View style={{rowGap: vh(2)}}>
      <View style={[{width: '100%'}, centerAll]}>
        <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
          {selectedImage ? (
            <Image source={{uri: selectedImage}} style={styles.selectedImage} />
          ) : (
            <View style={[{width: '100%', height: '100%'}, centerAll]}>
              {cameraIcon(vw(10), vw(10), 'black')}
            </View>
          )}
        </TouchableOpacity>
        <Text style={{color: '#D2FD7C', fontSize: 18, fontWeight: '700'}}>
          Chọn ảnh đại diện
        </Text>
      </View>
      <TextInputGroup
        label="Tên nhóm"
        placeholder="Nhập tên nhóm"
        setGroup={setGroup}
        group={group}
      />
      <TextInputGroup
        label="Giới thiệu nhóm"
        placeholder="Nhập vài thông tin về nhóm học tập để thu hút thêm thành viên nào!"
      />
      <TextInputGroup
        label="Quy tắc chung"
        placeholder="Nhập quy tắc hoạt động cho các thành viên để tạo nên một cộng đồng lành mạnh."
      />
      <RenderRecommendedMembers
        data={recomendationPersonData}
        label="Mời thành viên"
        handlePress={handlePress}
        selectedIndices={selectedIndices}
      />
      <RenderRecommendedMembers
        data={recomendationAdminData}
        label="Quản trị viên"
        handlePress={handlePress}
        selectedIndices={selectedIndices}
      />
      <View style={{width: '100%', rowGap: vh(1)}}>
        <Text style={{color: '#F7F9FA'}}>Quyền riêng tư</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.textBtnStyle}>Công khai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.textBtnStyle}>Riêng tư</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const RenderRecommendedMembers: React.FC<{
  data: RecommendationDataProps[];
  label: string;
  handlePress: (index: number) => void;
  selectedIndices: number[];
}> = ({data, label, handlePress, selectedIndices}) => {
  return (
    <View>
      <View>
        <Text style={{color: '#F7F9FA'}}>{label}</Text>
        <View
          style={{
            position: 'relative',
            marginTop: vh(1),
          }}>
          <TextInput
            multiline={true}
            placeholder="Tìm kiếm"
            style={{
              borderRadius: 20,
              paddingHorizontal: vw(3),
              paddingVertical: vh(1.5),
              paddingLeft: vw(10), // Add padding to the left to make space for the icon
              borderWidth: 1,
              borderColor: '#7C7C7C',
            }}
          />
          <View style={{position: 'absolute', left: vw(3), top: vh(1.7)}}>
            {searchIcon(vw(6), vw(6))}
          </View>
        </View>
      </View>
      <View style={{marginVertical: vh(1), rowGap: vh(1)}}>
        <Text style={{color: '#7C7C7C'}}>Gợi ý</Text>
        <ScrollView horizontal>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              disabled={label === 'Quản trị viên' ? true : false}
              onPress={() => handlePress(index)}
              style={{
                width: vw(25),
                height: vw(25),
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginHorizontal: vw(2),
                marginVertical: vh(1),
              }}>
              <Image
                style={{
                  borderWidth: 1,
                  borderColor: '#485A24',
                  borderRadius: vw(20),
                }}
                source={item.image}
              />
              <Text
                style={{
                  color: selectedIndices.includes(index) ? 'yellow' : 'white',
                  fontSize: 16,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const TextInputGroup: React.FC<{
  label: string;
  placeholder: string;
  group?: {
    img: string;
    name: string;
    amount: number;
    noti: number;
  };
  setGroup?: React.Dispatch<
    React.SetStateAction<{
      img: string;
      name: string;
      amount: number;
      noti: number;
    }>
  >;
}> = ({label, placeholder, setGroup}) => {
  return (
    <View>
      <Text style={{color: '#F7F9FA'}}>{label}</Text>
      <TextInput
        multiline={true}
        placeholder={placeholder}
        onChange={e => {
          const text = e?.nativeEvent?.text;
          if (label === 'Tên nhóm' && text !== undefined) {
            setGroup && setGroup(prev => ({...prev, name: text}));
          }
        }}
        style={{
          borderRadius: 20,
          paddingHorizontal: vw(3),
          paddingVertical: vh(1.5),
          marginTop: vh(1),
          borderWidth: 1,
          borderColor: '#7C7C7C',
        }}
      />
    </View>
  );
};

const Footer: React.FC<{
  group: {
    img: string;
    name: string;
    amount: number;
    noti: number;
  };
}> = ({group}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const isOk = group.img.length > 0 && group.name.length > 0;

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: vh(10),
        alignItems: 'center',
        paddingHorizontal: vw(5),
      }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          borderWidth: 1,
          borderColor: '#D2FD7C',
          backgroundColor: 'black',
          width: '45%',
          height: vh(7),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
        }}>
        <Text style={{color: '#D2FD7C', fontSize: 16, fontWeight: '500'}}>
          Hủy
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (isOk) {
            ownerGroup.push(group);
            navigation.navigate('NetWork');
          }
        }}
        disabled={!isOk}
        style={[
          {
            width: '45%',
            height: vh(7),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 16,
          },
          isOk ? {backgroundColor: '#D2FD7C'} : {backgroundColor: '#A7A7A7'},
        ]}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
          Lưu
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Header: React.FC = () => {
  return (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: vh(8)}}>
      <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
        Tạo nhóm mới
      </Text>
    </View>
  );
};

export default GroupCreation;

const styles = StyleSheet.create({
  container: containerStyle,
  btnStyle: {
    borderWidth: 1,
    borderColor: '#A3A3F2',
    paddingHorizontal: vw(3),
    paddingVertical: vh(1.5),
    borderRadius: vw(20),
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnStyle: {
    color: '#A3A3F2',
    fontWeight: '500',
  },
  imagePickerButton: {
    backgroundColor: '#D2FD7C',
    borderRadius: vw(20),
    width: vw(30),
    height: vw(30),
    overflow: 'hidden',
  },
  selectedImage: {
    width: vw(30),
    height: vw(30),
    resizeMode: 'cover',
  },
});
