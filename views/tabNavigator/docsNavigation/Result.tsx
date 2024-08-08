/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {containerStyle} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useRoute} from '@react-navigation/native';
import {DataDetail} from '../../../services/typeProps';

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
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: containerStyle,
});
