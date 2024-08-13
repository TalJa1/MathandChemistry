/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle, vh, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FormDataProps, FormDataQuestion} from '../../../services/typeProps';
import {Shadow} from 'react-native-shadow-2';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {examBack, examNext, saveDraftIcon} from '../../../assets/svgXml';

const QuestionCreation = () => {
  useStatusBar('black');
  const route = useRoute();
  const {data} = route.params as {data: FormDataProps};

  const [currentQuestion, setCurrentQuestion] = useState(1);

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
      <ScrollView>
        <View>
          <Text>QuestionCreation</Text>
        </View>
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
        />
      </Shadow>
    </SafeAreaView>
  );
};

const Footer: React.FC<{
  formData: FormDataQuestion;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}> = ({formData, setCurrentQuestion, currentQuestion}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  console.log(formData);

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
            console.log('done');
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
});
