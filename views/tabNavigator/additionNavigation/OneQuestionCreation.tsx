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
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle, vh, vw} from '../../../services/styleSheets';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Shadow} from 'react-native-shadow-2';
import {OneQuestionPageProps} from '../../../services/typeProps';
import {Dropdown} from 'react-native-element-dropdown';
import {cameraIcon1} from '../../../assets/svgXml';
import {launchCamera} from 'react-native-image-picker';
import TextRecognition from '@react-native-ml-kit/text-recognition';
import useStatusBar from '../../../services/useStatusBarCustom';

const OneQuestionCreation = () => {
  useStatusBar('black');
  const [formData, setFormData] = useState<OneQuestionPageProps>({
    subject: '',
    title: '',
    target: '',
    dropdownValue: '',
    solution: '',
    correctAnswer: '',
    answerType: '',
  });
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
        contentContainerStyle={{paddingVertical: vh(2)}}
        style={{paddingHorizontal: vw(5)}}>
        <MainContent formData={formData} setFormData={setFormData} />
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

const MainContent: React.FC<{
  formData: OneQuestionPageProps;
  setFormData: React.Dispatch<React.SetStateAction<OneQuestionPageProps>>;
}> = ({formData, setFormData}) => {
  const handleInputChange = (name: string, value: any) => {
    let newValue;
    if (value && value.target) {
      newValue = value.target.value;
    } else {
      newValue = value;
    }
    setFormData(prevData => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const dropdownData = [
    {label: 'Hình học không gian', value: 'Hình học không gian'},
    {label: 'Cấp số cộng/ Cấp số nhân', value: 'Cấp số cộng/ Cấp số nhân'},
    {label: 'Hình học', value: 'Hình học'},
  ];

  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);

  const dropdownData1 = [
    {label: 'Hóa vô cơ', value: 'Hóa vô cơ'},
    {label: 'Hóa hữu cơ', value: 'Hóa hữu cơ'},
    {label: 'Hóa Phân Tích', value: 'Hóa Phân Tích'},
  ];

  const dropdownType = [
    {label: 'Điền câu trả lời', value: 'Điền câu trả lời'},
    {label: 'Một đáp án', value: 'Một đáp án'},
    {label: 'Nhiều đáp án', value: 'Nhiều đáp án'},
  ];

  const renderItem = (item: any) => {
    const isSelected = item.value === formData.dropdownValue;
    return (
      <View style={[styles.item, isSelected && styles.selectedItem]}>
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {item.label}
        </Text>
      </View>
    );
  };

  const [image, setImage] = useState('');

  const openCamera = async () => {
    launchCamera(
      {
        cameraType: 'back',
        mediaType: 'photo',
      },
      (result1: any) => {
        if (result1 === undefined || result1.assets === undefined) {
          console.log('No image selected');
        } else {
          setImage(result1.assets[0].uri);
        }
      },
    );
  };

  useEffect(() => {
    const recognizeText = async () => {
      if (image !== '') {
        const result = await TextRecognition.recognize(image);
        if (result !== undefined) {
          handleQuestionChange(result.text);
        }
      }
    };
    recognizeText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const handleQuestionChange = (text: string) => {
    // Extract answers labeled "A", "B", "C", and "D"
    const answers =
      text
        .match(/(?:A\.|B\.|C\.|D\.)\s*[^A-D]*/g)
        ?.map(answer => answer.replace(/^[A-D]\.\s*/, '').trim()) || [];

    // Ensure the last answer is captured correctly
    const lastAnswerMatch = text.match(/D\.\s*(.*)$/);
    if (lastAnswerMatch) {
      answers[3] = lastAnswerMatch[1].trim();
    }

    // Update the question and answers in the state
    setFormData(prevFormData => ({
      ...prevFormData,
      title: text,
      answers,
    }));
  };

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionSelect = (letter: string) => {
    setSelectedOptions(prevSelectedOptions =>
      prevSelectedOptions.includes(letter)
        ? prevSelectedOptions.filter(option => option !== letter)
        : [...prevSelectedOptions, letter],
    );
  };

  return (
    <View style={{rowGap: vh(2)}}>
      <RenderRadioGroup
        label="Thuộc môn"
        data={['Hóa', 'Toán']}
        onChange={value => handleInputChange('subject', value)}
        selectedValue={formData.subject}
      />
      <RenderRadioGroup
        label="Dành cho"
        data={['Lớp 10', 'Lớp 11', 'Lớp 12', 'Ôn thi ĐH']}
        onChange={value => handleInputChange('target', value)}
        selectedValue={formData.target}
      />
      <View style={{rowGap: vh(1)}}>
        <Text style={{color: 'white'}}>Đề bài</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nhập đề bài"
            value={formData.title}
            onChangeText={handleQuestionChange}
            multiline={true}
          />
          <TouchableOpacity style={styles.iconContainer} onPress={openCamera}>
            {cameraIcon1(vw(6), vw(6))}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{rowGap: vh(2)}}>
        <Text style={{color: '#F7F9FA'}}>Lưu vào</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'yellowgreen'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          containerStyle={{backgroundColor: 'black'}}
          itemTextStyle={{color: 'white'}}
          data={formData.subject === 'Toán' ? dropdownData : dropdownData1}
          search
          labelField="label"
          valueField="value"
          placeholder={!isFocus1 ? 'Chọn' : '...'}
          value={formData.dropdownValue}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={(item: any) => {
            handleInputChange('dropdownValue', item.value);
            setIsFocus1(false);
          }}
          renderItem={renderItem}
        />
      </View>
      <View style={{rowGap: vh(2)}}>
        <Text style={{color: '#F7F9FA'}}>Loại câu trả lời</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && {borderColor: 'yellowgreen'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          containerStyle={{backgroundColor: 'black'}}
          itemTextStyle={{color: 'white'}}
          data={dropdownType}
          search
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Chọn' : '...'}
          value={formData.answerType}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            handleInputChange('answerType', item.value);
            setIsFocus(false);
          }}
          renderItem={renderItem}
        />
      </View>
      <View style={{rowGap: vh(1)}}>
        <Text style={{color: 'white'}}>Đáp án chính xác</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {['A', 'B', 'C', 'D'].map(letter => (
            <TouchableOpacity
              key={letter}
              style={[
                styles.box,
                selectedOptions.includes(letter)
                  ? {borderColor: '#D2FD7C'}
                  : {
                      borderColor: '#A3A3F2',
                    },
              ]}
              onPress={() => handleOptionSelect(letter)}>
              <Text
                style={[
                  styles.text,
                  selectedOptions.includes(letter) && {color: '#D2FD7C'},
                ]}>
                {letter}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{rowGap: vh(1)}}>
        <Text style={{color: 'white'}}>Lời giải</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập lời giải"
          value={formData.solution}
          onChangeText={text => {
            const updatedFormData = {
              ...formData,
              solution: text,
            };
            setFormData(updatedFormData);
          }}
        />
      </View>
    </View>
  );
};

const RenderRadioGroup: React.FC<{
  label: string;
  data: string[];
  onChange: (value: any) => void;
  selectedValue: string;
}> = ({label, data, onChange, selectedValue}) => {
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
            onPress={() => onChange(item)}
            key={index}
            style={{
              borderWidth: 1,
              borderColor: selectedValue === item ? '#D2FD7C' : '#A3A3F2',
              height: vh(5),
              justifyContent: 'center',
              paddingHorizontal: vw(4),
              alignItems: 'center',
              borderRadius: vw(15),
              marginVertical: vh(1),
            }}>
            <Text
              style={{
                color: selectedValue === item ? '#D2FD7C' : '#A3A3F2',
                fontWeight: '500',
              }}>
              {item}
            </Text>
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
        onPress={() => {
          console.log('Tạo đề');
        }}
        style={{
          backgroundColor: '#D2FD7C',
          width: '45%',
          height: vh(7),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 16,
        }}>
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
        Tạo bài tập
      </Text>
    </View>
  );
};

export default OneQuestionCreation;

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
  iconContainer: {
    position: 'absolute',
    right: vw(4),
    top: '50%',
    transform: [{translateY: -vw(3)}], // Center the icon vertically
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    height: 'auto',
    textAlignVertical: 'center',
    borderWidth: 1,
    padding: 16,
    borderRadius: 20,
    paddingRight: vw(15),
    borderColor: '#7C7C7C',
  },
  box: {
    borderRadius: vw(20),
    borderWidth: 1,
    width: vw(10),
    height: vw(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#A3A3F2',
    fontWeight: '500',
  },
});
