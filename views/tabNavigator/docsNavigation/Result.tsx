/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
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

const Result = () => {
  useStatusBar('black');
  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      <ScrollView>
        <View>
          <Text>{formattedTime}</Text>
          <Text>{score}</Text>
          <Text>{correctCount}</Text>
          <Text>{wrongCount}</Text>
          <Text>{data.test.length}</Text>
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
        <BottomNavigator />
      </Shadow>
    </SafeAreaView>
  );
};

const BottomNavigator: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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
        onPress={() => navigation.navigate('Main')}
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
          console.log('Xem lại kết quả');
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
});
