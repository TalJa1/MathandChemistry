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
import useStatusBar from '../../../services/useStatusBarCustom';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  FormDataProps,
  FormDataQuestion,
  Test,
} from '../../../services/typeProps';
import {Shadow} from 'react-native-shadow-2';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {examBack, examNext, saveDraftIcon} from '../../../assets/svgXml';
import {Dropdown} from 'react-native-element-dropdown';

const QuestionCreation = () => {
  useStatusBar('black');
  const route = useRoute();
  const {data} = route.params as {data: FormDataProps};

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [questionGroup, setQuestionGroup] = useState<Test[]>(
    Array(10).fill({
      question: '',
      answers: [],
      correctAnswer: [],
      solution: '',
    }),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Shadow
        distance={5}
        startColor={'#5C5C5C'}
        endColor={'black'}
        offset={[3, 2]}
        style={{
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: 'black',
          width: '100%',
        }}>
        <Header currentQuestion={currentQuestion} totalQuestions={10} />
      </Shadow>
      <ScrollView
        contentContainerStyle={{paddingBottom: vh(3)}}
        style={{
          paddingHorizontal: vw(5),
          paddingTop: vh(2),
          marginBottom: vh(1),
        }}>
        <MainContent
          questionGroup={questionGroup}
          setQuestionGroup={setQuestionGroup}
          currentQuestion={currentQuestion}
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
        <Footer
          formData={data}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          questionGroup={questionGroup}
        />
      </Shadow>
    </SafeAreaView>
  );
};

const MainContent: React.FC<{
  questionGroup: Test[];
  setQuestionGroup: React.Dispatch<React.SetStateAction<Test[]>>;
  currentQuestion: number;
}> = ({questionGroup, setQuestionGroup, currentQuestion}) => {
  const handleQuestionChange = (text: string) => {
    const updatedQuestions = [...questionGroup];
    updatedQuestions[currentQuestion - 1].question = text;
    setQuestionGroup(updatedQuestions);
  };
  const [formData, setFormData] = useState({dropdownValue: ''});
  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value});
  };

  const dropdownData = [
    {label: 'Một lựa chọn', value: '1'},
    {label: 'Điền câu trả lời', value: '2'},
    {label: 'Nhiều lựa chọn', value: '3'},
  ];
  const [isFocus, setIsFocus] = useState(false);

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

  return (
    <View style={{rowGap: vh(3)}}>
      <View style={{rowGap: vh(1)}}>
        <Text style={{color: 'white'}}>Đề bài</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập đề bài"
          value={questionGroup[currentQuestion - 1].question}
          onChangeText={handleQuestionChange}
        />
      </View>
      <View style={{rowGap: vh(1)}}>
        <Text style={{color: 'white'}}>Loại câu trả lời</Text>
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
          onFocus={() => setIsFocus(true)}
          value={formData.dropdownValue}
          onBlur={() => setIsFocus(false)}
          onChange={(item: any) => {
            handleInputChange('dropdownValue', item.value);
            setIsFocus(false);
          }}
          renderItem={renderItem}
        />
      </View>
      <View style={{rowGap: vh(1)}}>
        <Text style={{color: 'white'}}>Đáp án chính xác</Text>
        <View style={styles.row}>
          {['A', 'B', 'C', 'D'].map(letter => (
            <TouchableOpacity key={letter} style={styles.box}>
              <Text style={styles.text}>{letter}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{rowGap: vh(1)}}>
        <Text style={{color: 'white'}}>Lời giải</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập lời giải"
          value={questionGroup[currentQuestion - 1].question}
          onChangeText={handleQuestionChange}
        />
      </View>
    </View>
  );
};

const Footer: React.FC<{
  formData: FormDataQuestion;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  questionGroup: Test[];
}> = ({formData, setCurrentQuestion, currentQuestion, questionGroup}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        height: vh(10),
        alignItems: 'center',
        paddingHorizontal: vw(5),
      }}>
      <TouchableOpacity
        disabled={currentQuestion === 1}
        onPress={() => setCurrentQuestion(currentQuestion - 1)}
        style={{
          padding: vw(5),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: vw(20),
          backgroundColor: currentQuestion === 1 ? '#464646' : '#D2FD7C',
        }}>
        {examBack(vw(5), vw(5), 'black')}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={true}
        style={{
          alignItems: 'center',
        }}>
        {saveDraftIcon(vw(7), vw(7), 'white')}
        <Text>Lưu vào bản nháp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          if (currentQuestion < 10) {
            setCurrentQuestion(currentQuestion + 1);
          } else {
            console.log('questionGroup', questionGroup);
            console.log('formData', formData);
          }
        }}
        style={{
          padding: vw(5),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: vw(20),
          backgroundColor: '#D2FD7C',
        }}>
        {examNext(vw(5), vw(5), 'black')}
      </TouchableOpacity>
    </View>
  );
};

const Header: React.FC<{currentQuestion: number; totalQuestions: number}> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const renderDots = () => {
    let dots = [];
    for (let i = 1; i <= totalQuestions; i++) {
      dots.push(
        <View
          key={i}
          style={[
            styles.dot,
            {backgroundColor: i <= currentQuestion ? '#A3A3F2' : '#464646'},
          ]}
        />,
      );
    }
    return dots;
  };

  return (
    <View style={{paddingVertical: vh(2)}}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#A7A7A7', fontSize: 16, fontWeight: '500'}}>
          Tạo đề
        </Text>
      </View>
      <View style={{paddingHorizontal: vw(5)}}>
        <Text style={{color: '#A3A3F2', fontSize: 20, fontWeight: '700'}}>
          Câu {currentQuestion}
        </Text>
        <View style={styles.dotsContainer}>{renderDots()}</View>
      </View>
    </View>
  );
};

export default QuestionCreation;

const styles = StyleSheet.create({
  container: containerStyle,
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(2),
  },
  dot: {
    flex: 1,
    height: vw(3),
    borderRadius: vw(1.5),
    marginHorizontal: 0.5,
  },
  input: {
    height: 62,
    borderWidth: 1,
    padding: 16,
    borderRadius: 20,
    borderColor: '#7C7C7C',
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    borderRadius: vw(20),
    borderWidth: 1,
    borderColor: '#A3A3F2',
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
