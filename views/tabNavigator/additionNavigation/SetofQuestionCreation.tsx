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
import {containerStyle, vh, vw} from '../../../services/styleSheets';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Dropdown} from 'react-native-element-dropdown';

const SetofQuestionCreation = () => {
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
      <ScrollView>
        <MainContent />
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
        <Footer />
      </Shadow>
    </SafeAreaView>
  );
};

const MainContent: React.FC = () => {
  const dropdownData = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderItem = (item: any) => {
    const isSelected = item.value === value;
    return (
      <View style={[styles.item, isSelected && styles.selectedItem]}>
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {item.label}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{marginVertical: vh(2), paddingHorizontal: vw(5), rowGap: vh(2)}}>
      <RenderRadioGroup label="Thuộc môn" data={['Hóa', 'Toán']} />
      <RenderTextInput label="Tên bộ đề" placeholder="Nhập tên bộ đề" />
      <RenderTextInput label="Mô tả bộ đề" placeholder="Nhập mô tả bộ đề" />
      <RenderRadioGroup
        label="Thời gian làm đề"
        data={['15 phút', '60 phút', '90 phút']}
      />
      <RenderRadioGroup
        label="Dành cho"
        data={['Lớp 10', 'Lớp 11', 'Lớp 12', 'Ôn thi ĐH']}
      />
      <View style={{rowGap: vh(2)}}>
        <Text style={{color: '#F7F9FA'}}>Loại đề</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'yellowgreen'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          containerStyle={{backgroundColor: 'black'}}
          itemTextStyle={{color: 'white'}}
          data={dropdownData}
          search
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Chọn' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const RenderTextInput: React.FC<{label: string; placeholder: string}> = ({
  label,
  placeholder,
}) => {
  return (
    <View>
      <Text style={{color: '#F7F9FA'}}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#7C7C7C'}
        style={{
          borderWidth: 1,
          borderColor: '#7C7C7C',
          color: '#F7F9FA',
          borderRadius: 16,
          height: vh(7),
          paddingHorizontal: vw(4),
          marginVertical: vh(1),
        }}
      />
    </View>
  );
};

const RenderRadioGroup: React.FC<{label: string; data: string[]}> = ({
  label,
  data,
}) => {
  return (
    <View>
      <Text style={{color: '#F7F9FA'}}>{label}</Text>
      <View
        style={{
          flexDirection: 'row',
          columnGap: vw(2),
          width: '100%',
          flexWrap: 'wrap',
        }}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              borderWidth: 1,
              borderColor: '#A3A3F2',
              height: vh(5),
              justifyContent: 'center',
              paddingHorizontal: vw(4),
              alignItems: 'center',
              borderRadius: vw(15),
              marginVertical: vh(1),
            }}>
            <Text style={{color: '#A3A3F2', fontWeight: '500'}}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const Footer: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
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
        disabled={true}
        style={{
          backgroundColor: '#464646',
          width: '45%',
          height: vh(7),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
        }}>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
          Tạo đề
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
        Tạo đề
      </Text>
    </View>
  );
};

export default SetofQuestionCreation;

const styles = StyleSheet.create({
  container: containerStyle,
  dropdown: {
    height: vh(7),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 8,
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
});
