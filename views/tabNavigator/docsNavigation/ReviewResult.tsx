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
          reviewIndex={userAnswer.map((item, i) =>
            item === data.test[i].correctAnswer[0] ? -1 : i,
          )}
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
        userAnswer[index]?.includes(ans),
      );
    } else {
      return userAnswer[index] === data.test[index].correctAnswer[0];
    }
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
                <View
                  key={i}
                  style={{
                    borderBottomWidth:
                      i !== data.test[index].answers.length - 1 ? 1 : 0,
                    borderBottomColor: '#46464680',
                    marginBottom: 10,
                    paddingVertical: vh(1),
                    backgroundColor: isCorrectAnswer(answer)
                      ? '#D2FD7C'
                      : userAnswer &&
                        userAnswer[index] === answer &&
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
                          userAnswer[index] === answer &&
                          !isUserAnswerCorrect()
                        ? {color: 'black'}
                        : {color: 'white'},
                    ]}>
                    {String.fromCharCode(65 + i)}. {'  '}
                    {answer}
                  </Text>
                </View>
              ))}
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
                // backgroundColor: isUserAnswerCorrect() ? '#D2FD7C' : 'red',
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
