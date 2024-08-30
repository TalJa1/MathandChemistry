/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useNavigation, useRoute} from '@react-navigation/native';
import {DataDetail} from '../../../services/typeProps';
import {
  backArrow,
  examBack,
  examNext,
  saveIcon,
  solutionIcon,
  xIcon,
} from '../../../assets/svgXml';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Shadow} from 'react-native-shadow-2';

const ReviewResult = () => {
  useStatusBar('#A3A3F2');
  const route = useRoute();
  const {data, userAnswer} = route.params as {
    data: DataDetail;
    userAnswer: string[];
  };
  const [step, setStep] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={data.title} step={step} total={data.test.length} />
      <ScrollView>
        <ExamGroup data={data} index={step} userAnswer={userAnswer} />
      </ScrollView>
      <Shadow
        distance={15}
        startColor={'#FEFAAD33'}
        endColor={'black'}
        offset={[3, 4]}
        style={{
          marginTop: vh(1),
          backgroundColor: 'black',
          width: '100%',
        }}>
        <ExamNavigator
          step={step}
          setStep={setStep}
          last={data.test.length}
          data={data}
        />
      </Shadow>
    </SafeAreaView>
  );
};

const ExamGroup: React.FC<{
  data: DataDetail;
  index: number;
  userAnswer?: string[];
}> = ({data, index, userAnswer}) => {
  const isCorrectAnswer = (answer: string) => {
    return data.test[index].correctAnswer.includes(answer);
  };

  const isUserAnswerCorrect = () => {
    if (!userAnswer) {
      return false;
    }
    if (data.test[index].correctAnswer.length > 1) {
      return data.test[index].correctAnswer.every(ans =>
        userAnswer.includes(ans),
      );
    } else {
      return userAnswer[index] === data.test[index].correctAnswer[0];
    }
  };

  const isMultipleChoice = data.test[index].correctAnswer.length > 1;

  return (
    <View>
      <View
        style={{
          paddingHorizontal: vw(5),
          paddingVertical: vh(2),
          backgroundColor: '#1B1B1B',
          rowGap: vh(2),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text
              style={[styles.textQuestion, {fontWeight: '700', fontSize: 16}]}>
              Câu {index + 1}
            </Text>
          </View>
        </View>
        <Text style={{color: '#FFFFFF'}}>{data.test[index].question}</Text>
      </View>
      <View style={{paddingHorizontal: vw(5)}}>
        {data.test[index].answers.length > 0 ? (
          <View style={{marginVertical: vh(2), rowGap: vh(2)}}>
            <Text style={styles.answerStyle}>
              Chọn đáp án{' '}
              {data.test[index].correctAnswer.length > 1 ? '(MC)' : '(SC)'}
            </Text>
            <View style={{rowGap: vh(1)}}>
              {isMultipleChoice ? (
                <MultipleChoiceQuestion
                  answers={data.test[index].answers}
                  userAnswer={userAnswer}
                  isCorrectAnswer={isCorrectAnswer}
                  isUserAnswerCorrect={isUserAnswerCorrect}
                  questionIndex={index}
                />
              ) : (
                <SingleChoiceQuestion
                  answers={data.test[index].answers}
                  userAnswer={userAnswer}
                  isCorrectAnswer={isCorrectAnswer}
                  isUserAnswerCorrect={isUserAnswerCorrect}
                />
              )}
            </View>
          </View>
        ) : (
          <View style={{marginVertical: vh(2), rowGap: vh(2)}}>
            <Text style={styles.answerStyle}>Ghi đáp án</Text>
            <TextInput
              placeholder="Đáp án"
              multiline
              value={userAnswer ? userAnswer[index] : ''}
              editable={false}
              style={{
                borderWidth: 2,
                borderColor: isUserAnswerCorrect() ? '#D2FD7C' : 'red',
                paddingHorizontal: vw(4),
                paddingVertical: vh(2),
                height: vh(15),
                textAlignVertical: 'top',
                borderRadius: vw(5),
                color: 'white',
              }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const SingleChoiceQuestion: React.FC<{
  answers: string[];
  userAnswer?: string[];
  isCorrectAnswer: (answer: string) => boolean;
  isUserAnswerCorrect: () => boolean;
}> = ({answers, userAnswer, isCorrectAnswer, isUserAnswerCorrect}) => (
  <>
    {answers.map((answer, i) => (
      <View
        key={i}
        style={{
          borderBottomWidth: i !== answers.length - 1 ? 1 : 0,
          borderBottomColor: '#46464680',
          marginBottom: 10,
          paddingVertical: vh(1),
          backgroundColor: isCorrectAnswer(answer)
            ? '#D2FD7C'
            : userAnswer &&
              userAnswer.includes(answer) &&
              !isUserAnswerCorrect()
            ? 'red'
            : 'transparent',
          paddingHorizontal: vw(2),
          borderRadius: 10,
        }}>
        <Text
          style={[
            {fontSize: 18},
            isCorrectAnswer(answer)
              ? {color: 'black'}
              : userAnswer &&
                userAnswer.includes(answer) &&
                !isUserAnswerCorrect()
              ? {color: 'black'}
              : {color: 'white'},
          ]}>
          {String.fromCharCode(65 + i)}. {'  '}
          {answer}
        </Text>
      </View>
    ))}
  </>
);

const MultipleChoiceQuestion: React.FC<{
  answers: string[];
  userAnswer?: string[];
  isCorrectAnswer: (answer: string) => boolean;
  isUserAnswerCorrect: () => boolean;
  questionIndex: number;
}> = ({
  answers,
  userAnswer,
  isCorrectAnswer,
  isUserAnswerCorrect,
  questionIndex,
}) => {
  const userAnswersArray = userAnswer
    ? userAnswer[questionIndex].split('|')
    : [];
  return (
    <>
      {answers.map((answer, i) => (
        <View
          key={i}
          style={{
            borderBottomWidth: i !== answers.length - 1 ? 1 : 0,
            borderBottomColor: '#46464680',
            marginBottom: 10,
            paddingVertical: vh(1),
            backgroundColor: isCorrectAnswer(answer)
              ? '#D2FD7C'
              : userAnswersArray.includes(answer) && !isUserAnswerCorrect()
              ? 'red'
              : 'transparent',
            paddingHorizontal: vw(2),
            borderRadius: 10,
          }}>
          <Text
            style={[
              {fontSize: 18},
              isCorrectAnswer(answer)
                ? {color: 'black'}
                : userAnswersArray.includes(answer) && !isUserAnswerCorrect()
                ? {color: 'black'}
                : {color: 'white'},
            ]}>
            {String.fromCharCode(65 + i)}. {'  '}
            {answer}
          </Text>
        </View>
      ))}
    </>
  );
};

const ExamNavigator: React.FC<{
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  last: number;
  data: DataDetail;
}> = ({step, setStep, last, data}) => {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const togglePopUp = () => {
    setPopUpVisible(!popUpVisible);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: vw(10),
          paddingVertical: vh(2),
        }}>
        <TouchableOpacity
          disabled={step === 0 ? true : false}
          onPress={() => setStep(step - 1)}
          style={[
            {
              backgroundColor: '#D2FD7C',
              borderRadius: vw(20),
              padding: vw(5),
            },
            centerAll,
            step === 0 && {backgroundColor: '#464646'},
          ]}>
          {examBack(vw(7), vw(7), 'black')}
        </TouchableOpacity>
        <TouchableOpacity style={centerAll} onPress={() => togglePopUp()}>
          {solutionIcon(vw(7), vw(7), '#FFFFFF')}
          <Text style={{color: 'white', fontWeight: '500'}}>Xem cách giải</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setStep(step + 1)}
          disabled={step === last - 1 ? true : false}
          style={[
            {
              backgroundColor: '#D2FD7C',
              borderRadius: vw(20),
              padding: vw(5),
            },
            centerAll,
            step === last - 1 && {backgroundColor: '#464646'},
          ]}>
          {examNext(vw(7), vw(7), 'black')}
        </TouchableOpacity>
      </View>
      <PopUp
        visible={popUpVisible}
        onClose={togglePopUp}
        data={data}
        questionIndex={step}
      />
    </View>
  );
};

const {height: screenHeight} = Dimensions.get('window');

const PopUp: React.FC<{
  visible: boolean;
  onClose: () => void;
  data: DataDetail;
  questionIndex: number;
}> = ({visible, onClose, data, questionIndex}) => {
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;
  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true, // Set to true
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true, // Set to true
      }).start();
    }
  }, [visible, slideAnim]);

  if (!visible) {
    return null;
  }

  const questionData = data.test[questionIndex];
  const answerLetters = ['A', 'B', 'C', 'D'];
  return (
    <Animated.View
      style={[styles.popUp, {transform: [{translateY: slideAnim}]}]}>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View
          style={{
            backgroundColor: '#1B1B1B',
            padding: vw(5),
          }}>
          <View
            style={{
              width: '100%',
              marginVertical: vh(1),
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity onPress={onClose}>
              {xIcon(vw(5), vw(5), 'white')}
            </TouchableOpacity>
          </View>
          <View
            style={{
              rowGap: vh(1),
            }}>
            <Text style={{color: '#A3A3F2', fontSize: 16, fontWeight: '700'}}>
              Câu {questionIndex + 1}
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 14,
                fontWeight: '400',
              }}>
              {questionData.question}
            </Text>
          </View>
        </View>
        <ScrollView
          style={{flex: 1, paddingHorizontal: vw(5), paddingVertical: vh(2)}}>
          <View style={{rowGap: vh(2)}}>
            <Text style={{color: '#A3A3F2', fontSize: 14, fontWeight: '700'}}>
              Lời giải
            </Text>
            <Text style={{color: '#FFFFFF', marginBottom: vh(2)}}>
              {questionData.solution}
            </Text>
            <Text style={{color: '#D2FD7C', fontSize: 18, fontWeight: 'bold'}}>
              Chọn
            </Text>
            <View style={{flexDirection: 'column', width: '100%'}}>
              {questionData.correctAnswer.map((answer, index) => {
                const answerIndex = questionData.answers.indexOf(answer);
                const answerLetter = answerLetters[answerIndex];
                return (
                  <View
                    key={index}
                    style={{
                      backgroundColor: '#D2FD7C',
                      borderRadius: 8,
                      padding: 10,
                      marginVertical: 5,
                      width: '100%',
                    }}>
                    <Text
                      style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
                      {answerLetter !== undefined ? `${answerLetter}. ` : ''}{' '}
                      {answer}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            width: vw(100),
            alignItems: 'center',
            marginVertical: vh(2),
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: vw(5),
          }}>
          <TouchableOpacity
            style={[
              {
                borderColor: '#D2FD7C',
                borderWidth: 1,
                height: vh(7),
                borderRadius: 16,
                width: '60%',
              },
              centerAll,
            ]}>
            <Text style={{color: '#D2FD7C', fontSize: 16, fontWeight: '500'}}>
              Lưu lời giải toàn bộ đề
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#D2FD7C',
                height: vh(7),
                borderRadius: 16,
                width: '35%',
              },
              centerAll,
            ]}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
              Lưu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const Header: React.FC<{
  title: string;
  step: number;
  total: number;
}> = ({title, step, total}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View
      style={{
        backgroundColor: '#A3A3F2',
        padding: vw(5),
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        columnGap: vw(5),
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        {backArrow(vw(7), vw(7), 'black')}
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text style={{color: '#0D0D0D', fontSize: 18, fontWeight: '600'}}>
          {title}
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: vw(2),
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#565CE7',
              borderRadius: vw(20),
              paddingHorizontal: vw(3),
              paddingVertical: vw(1),
            }}>
            <Text style={{color: '#0D0D0D', fontSize: 18, fontWeight: '600'}}>
              {(step + 1).toString().padStart(2, '0')}/{total}
            </Text>
          </View>
          <TouchableOpacity>
            {saveIcon(vw(7), vw(7), '#565CE7')}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReviewResult;

const styles = StyleSheet.create({
  container: containerStyle,
  popUp: {
    position: 'absolute',
    bottom: 0,
    width: vw(100),
    height: vh(100),
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    overflow: 'hidden',
    shadowRadius: 2,
    elevation: 5,
  },
  popUpText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0D0D0D',
  },
  textQuestion: {
    color: '#A3A3F2',
  },
  answerStyle: {
    color: '#A3A3F2',
    fontSize: 16,
    fontWeight: '700',
  },
});
