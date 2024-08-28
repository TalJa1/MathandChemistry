/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useNavigation, useRoute} from '@react-navigation/native';
import {DataDetail} from '../../../services/typeProps';
import {Shadow} from 'react-native-shadow-2';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  tabTimeChemistryDataDetail,
  tabTimeMathDataDetail,
} from '../../../services/renderData';

const Result = () => {
  useStatusBar('black');
  const route = useRoute();
  const {time, timeLeft, isMath, title, data, listAnswer} = route.params as {
    time: number;
    timeLeft: number;
    isMath: boolean;
    title: string;
    data: DataDetail;
    listAnswer: string[];
  };
  const [formattedTime, setFormattedTime] = useState('');
  const [score, setScore] = useState('');
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    const totalSeconds = time * 60;
    const remainingSeconds = totalSeconds - timeLeft;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const formatted = `${String(minutes).padStart(2, '0')}:${String(
      seconds,
    ).padStart(2, '0')}`;
    setFormattedTime(formatted);
  }, [time, timeLeft]);

  useEffect(() => {
    let correct = 0;
    data.test.forEach((testItem, index) => {
      if (listAnswer[index] === testItem.correctAnswer[0]) {
        correct++;
      }
    });
    const wrong = data.test.length - correct;
    const calculatedScore = (correct / data.test.length) * 10;
    setScore(calculatedScore.toFixed(1));
    setCorrectCount(correct);
    setWrongCount(wrong);
  }, [listAnswer, data.test]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal: vw(5), paddingVertical: vh(2)}}>
        <View
          style={{
            flexDirection: 'row',
            columnGap: vw(2),
            alignItems: 'center',
            marginTop: vh(4),
          }}>
          <Image
            style={{height: vw(13), width: vw(13), resizeMode: 'contain'}}
            source={require('../../../assets/docs/img3.png')}
          />
          <Text style={{color: 'white', fontWeight: '500'}}>
            {isMath ? 'Hình học không gian' : 'Vật lý'}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#A3A3F266',
            marginVertical: vh(5),
            padding: vw(5),
            alignItems: 'center',
            borderRadius: 30,
          }}>
          <Image
            style={{
              position: 'absolute',
              width: vw(20),
              height: vw(20),
              resizeMode: 'contain',
              top: -vw(10),
            }}
            source={require('../../../assets/docs/result.png')}
          />
          <View style={{marginTop: vh(3), width: '100%'}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.timeStyle}>Thời gian hoàn thành</Text>
              <Text style={styles.timeStyle}>{formattedTime}</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#FFFFFF', fontSize: 24, fontWeight: '700'}}>
                Điểm của bạn
              </Text>
              <Text style={{color: '#D2FD7C', fontWeight: '700', fontSize: 90}}>
                {score}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={[
                  styles.dataGroup,
                  centerAll,
                  {backgroundColor: '#464646'},
                ]}>
                <Text style={styles.upperText}>{data.test.length}</Text>
                <Text style={styles.lowerText}>câu hỏi</Text>
              </View>
              <View
                style={[
                  styles.dataGroup,
                  centerAll,
                  {backgroundColor: '#D2FD7C'},
                ]}>
                <Text style={styles.upperText}>{correctCount}</Text>
                <Text style={styles.lowerText}>đúng</Text>
              </View>
              <View
                style={[
                  styles.dataGroup,
                  centerAll,
                  {backgroundColor: '#B65A46'},
                ]}>
                <Text style={styles.upperText}>{wrongCount}</Text>
                <Text style={styles.lowerText}>sai</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{rowGap: vh(2)}}>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomTitlebtn}>
              Dạng đề có những câu hỏi tương tự
            </Text>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnTextStyle}>Làm thử</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomTitlebtn}>
              Lưu toàn bộ cách giải bộ đề{' '}
              <Text style={{textDecorationLine: 'underline'}}>{title}</Text>
            </Text>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnTextStyle}>Lưu</Text>
            </TouchableOpacity>
          </View>
        </View>
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
        <BottomNavigator
          data={data}
          userAnswer={listAnswer}
          time={time}
          isMath={isMath}
          correctCount={correctCount}
          wrongCount={wrongCount}
          score={score}
        />
      </Shadow>
    </SafeAreaView>
  );
};

const BottomNavigator: React.FC<{
  data: DataDetail;
  userAnswer: string[];
  time: number;
  isMath: boolean;
  score: string;
  correctCount: number;
  wrongCount: number;
}> = ({data, userAnswer, time, isMath, score, correctCount, wrongCount}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const storage = isMath ? tabTimeMathDataDetail : tabTimeChemistryDataDetail;

  const formatScore = (value: string): number => {
    const num = parseFloat(value);
    return num % 1 === 0 ? parseFloat(num.toFixed(1)) : num;
  };

  const handleBack = () => {
    const timeData = storage.find(item => item.time === time);

    if (timeData) {
      // Find the specific data object by its id
      const dataIndex = timeData.data.findIndex(item => item.id === data.id);

      if (dataIndex !== -1) {
        // Modify the data object at that index
        timeData.data[dataIndex] = {
          ...timeData.data[dataIndex],
          status: 'Đã làm',
          point: formatScore(score),
          rightamount: correctCount,
          wrongamount: wrongCount,
        };
      }
    }
    navigation.navigate('Main');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: vw(10),
        columnGap: vw(2),
        paddingVertical: vh(2),
      }}>
      <TouchableOpacity
        onPress={handleBack}
        style={[
          {
            borderColor: '#D2FD7C',
            borderWidth: 1,
            borderRadius: 15,
            padding: vw(5),
            flex: 0.5,
          },
          centerAll,
        ]}>
        <Text style={{color: '#D2FD7C'}}>Trở về</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ReviewResult', {
            data: data,
            userAnswer: userAnswer,
          });
        }}
        style={[
          {
            backgroundColor: '#D2FD7C',
            borderRadius: 15,
            padding: vw(5),
            flex: 1,
          },
          centerAll,
        ]}>
        <Text style={{color: 'black'}}>Xem lại kết quả</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: containerStyle,
  timeStyle: {
    color: '#1B1B1B',
    fontSize: 16,
    fontWeight: '400',
  },
  dataGroup: {
    height: vw(20),
    width: vw(20),
    borderRadius: 12,
  },
  upperText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
  },
  lowerText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
  btnStyle: {
    backgroundColor: '#A3A3F2',
    height: 44,
    width: 72,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextStyle: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: vw(4),
  },
  bottomTitlebtn: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    flexWrap: 'wrap',
  },
});
