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
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  backArrow,
  docsIconSVG,
  examBack,
  examNext,
  saveIcon,
} from '../../../assets/svgXml';
import {DataDetail} from '../../../services/typeProps';
import {Shadow} from 'react-native-shadow-2';

let globalData: any = {};

const Exam = () => {
  useStatusBar('#A3A3F2');
  const [step, setStep] = useState(0);
  const route = useRoute();
  const {title, time, isMath, data} = route.params as {
    time: number;
    title: string;
    isMath: boolean;
    data: DataDetail;
  };
  const [reviewIndex, setReviewIndex] = useState([] as number[]);

  globalData.title = title;
  globalData.time = time;
  globalData.isMath = isMath;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={title}
        step={step}
        setStep={setStep}
        time={time}
        total={data.total}
      />
      <ScrollView>
        <ExamGroup data={data} index={step} setReview={setReviewIndex} />
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
          last={data.total}
          reviewIndex={reviewIndex}
          data={data}
        />
      </Shadow>
    </SafeAreaView>
  );
};

const ExamGroup: React.FC<{
  data: DataDetail;
  index: number;
  setReview: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({data, index, setReview}) => {
  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(data.test.length).fill(''),
  );

  useEffect(() => {
    globalData.userAnswers = userAnswers;
  }, [userAnswers]);

  const handleAnswerChange = (
    answer: string,
    questionIndex: number,
    isMultipleChoice: boolean,
  ) => {
    const newAnswers = [...userAnswers];
    if (isMultipleChoice) {
      if (newAnswers[questionIndex].includes(answer)) {
        newAnswers[questionIndex] = newAnswers[questionIndex]
          .split('|')
          .filter(a => a !== answer)
          .join('|');
      } else {
        newAnswers[questionIndex] = newAnswers[questionIndex]
          ? `${newAnswers[questionIndex]}|${answer}`
          : answer;
      }
    } else {
      newAnswers[questionIndex] = answer;
    }
    setUserAnswers(newAnswers);
  };

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
          <TouchableOpacity
            onPress={() => {
              setReview(prev => [...prev, index]);
            }}
            style={{
              borderWidth: 1,
              borderColor: '#A3A3F2',
              padding: vw(2),
              borderRadius: vw(10),
            }}>
            <Text style={styles.textQuestion}>Xem lại</Text>
          </TouchableOpacity>
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
              {data.test[index].answers.map((answer, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    handleAnswerChange(
                      answer,
                      index,
                      data.test[index].correctAnswer.length > 1,
                    )
                  }
                  style={{
                    borderBottomWidth:
                      i !== data.test[index].answers.length - 1 ? 1 : 0,
                    borderBottomColor: '#46464680',
                    marginBottom: 10,
                    paddingVertical: vh(1),
                    backgroundColor:
                      data.test[index].correctAnswer.length > 1
                        ? userAnswers[index].includes(answer)
                          ? '#A3A3F2'
                          : 'transparent'
                        : userAnswers[index] === answer
                        ? '#A3A3F2'
                        : 'transparent',
                    paddingHorizontal: vw(2),
                    borderRadius: 10,
                  }}>
                  <Text
                    style={[
                      {fontSize: 18},
                      data.test[index].correctAnswer.length > 1
                        ? userAnswers[index].includes(answer)
                          ? {color: 'black'}
                          : {color: 'white'}
                        : userAnswers[index] === answer
                        ? {color: 'black'}
                        : {color: 'white'},
                    ]}>
                    {String.fromCharCode(65 + i)}. {'  '}
                    {answer}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ) : (
          <View style={{marginVertical: vh(2), rowGap: vh(2)}}>
            <Text style={styles.answerStyle}>Ghi đáp án</Text>
            <TextInput
              placeholder="Đáp án"
              placeholderTextColor={'#7C7C7C'}
              multiline
              value={userAnswers[index]}
              onChangeText={text => handleAnswerChange(text, index, false)}
              style={{
                borderWidth: 2,
                borderColor: '#7C7C7C',
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

const ExamNavigator: React.FC<{
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  last: number;
  reviewIndex: number[];
  data: DataDetail;
}> = ({step, setStep, last, reviewIndex, data}) => {
  const [popUpVisible, setPopUpVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const togglePopUp = () => {
    setPopUpVisible(!popUpVisible);
  };

  const handleNavigate = () => {
    navigation.navigate('Result', {
      time: globalData.time,
      timeLeft: globalData.timeLeft,
      isMath: globalData.isMath,
      title: globalData.title,
      data: data,
      listAnswer:
        globalData.userAnswers === undefined
          ? new Array(data.test.length).fill('')
          : globalData.userAnswers,
    });
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
        {step === last - 1 ? (
          <>
            <TouchableOpacity
              disabled={step === 0 ? true : false}
              onPress={() => setStep(step - 1)}
              style={[
                {
                  borderColor: '#D2FD7C',
                  borderWidth: 1,
                  borderRadius: 15,
                  padding: vw(5),
                },
                centerAll,
                step === 0 && {backgroundColor: '#464646'},
              ]}>
              <Text style={{color: '#D2FD7C'}}>Xem lại bài trước khi nộp</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleNavigate}
              style={[
                {
                  backgroundColor: '#D2FD7C',
                  borderRadius: 15,
                  padding: vw(5),
                },
                centerAll,
              ]}>
              <Text style={{color: 'black'}}>Nộp bài</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
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
              {docsIconSVG(vw(7), vw(7), '#FFFFFF')}
              <Text style={{color: 'white', fontWeight: '500'}}>Xem lại</Text>
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
          </>
        )}
      </View>
      <PopUp
        visible={popUpVisible}
        onClose={togglePopUp}
        data={data}
        saveIndex={reviewIndex}
      />
    </View>
  );
};

const {height: screenHeight} = Dimensions.get('window');

const PopUp: React.FC<{
  visible: boolean;
  onClose: () => void;
  data: DataDetail;
  saveIndex: number[];
}> = ({visible, onClose, data, saveIndex}) => {
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

  return (
    <Animated.View
      style={[styles.popUp, {transform: [{translateY: slideAnim}]}]}>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <View
          style={[
            {backgroundColor: '#7EA8CA', width: vw(100), height: vh(10)},
            centerAll,
          ]}>
          <Text style={styles.popUpText}>Các câu cần xem lại</Text>
        </View>
        <ScrollView
          style={{flex: 1, paddingHorizontal: vw(5), paddingVertical: vh(2)}}>
          {data.test.map((item, i) => (
            <View key={i}>
              {saveIndex.includes(i) && (
                <View
                  style={[
                    {
                      flexDirection: 'row',
                      columnGap: vw(3),
                      alignItems: 'flex-start',
                      marginBottom: vh(2),
                    },
                  ]}>
                  <Text
                    style={{color: '#A3A3F2', fontSize: 16, fontWeight: '700'}}>
                    Câu {i + 1}
                  </Text>
                  <Text style={{color: 'white'}}>{data.test[i].question}</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
        <View
          style={{width: vw(100), alignItems: 'center', marginVertical: vh(2)}}>
          <TouchableOpacity
            onPress={onClose}
            style={[
              {
                width: vw(70),
                backgroundColor: '#D2FD7C',
                height: vh(6),
                borderRadius: 16,
              },
              centerAll,
            ]}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
              Xem lại lần lượt
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
  time: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({title, step, setStep, time, total}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [countdown, setCountdown] = useState(time * 60);

  globalData.timeLeft = countdown;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          clearInterval(intervalId);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };

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
      <TouchableOpacity
        onPress={() => (step === 0 ? navigation.goBack() : setStep(step - 1))}>
        {backArrow(vw(7), vw(7), 'black')}
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <Text style={{color: '#0D0D0D', fontSize: 18, fontWeight: '600'}}>
          {title}
        </Text>
        <Text style={{color: '#B65A46', fontSize: 16, fontWeight: '400'}}>
          {formatTime(countdown)}
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

export default Exam;

const styles = StyleSheet.create({
  container: containerStyle,
  textQuestion: {
    color: '#A3A3F2',
  },
  answerStyle: {
    color: '#A3A3F2',
    fontSize: 16,
    fontWeight: '700',
  },
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
});
