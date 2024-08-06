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

const Exam = () => {
  useStatusBar('#A3A3F2');
  const [step, setStep] = useState(0);
  const route = useRoute();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {title, time, isMath, data} = route.params as {
    time: number;
    title: string;
    isMath: boolean;
    data: DataDetail;
  };

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
        <View>
          <Text>Exam</Text>
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
        <ExamNavigator step={step} setStep={setStep} />
      </Shadow>
    </SafeAreaView>
  );
};

const ExamNavigator: React.FC<{
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}> = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: vw(10),
        paddingVertical: vh(2),
      }}>
      <TouchableOpacity
        style={[
          {
            backgroundColor: '#D2FD7C',
            borderRadius: vw(20),
            padding: vw(5),
          },
          centerAll,
        ]}>
        {examBack(vw(7), vw(7), 'black')}
      </TouchableOpacity>
      <TouchableOpacity style={centerAll}>
        {docsIconSVG(vw(7), vw(7), '#FFFFFF')}
        <Text style={{color: 'white', fontWeight: '500'}}>Xem lại</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {
            backgroundColor: '#D2FD7C',
            borderRadius: vw(20),
            padding: vw(5),
          },
          centerAll,
        ]}>
        {examNext(vw(7), vw(7), 'black')}
      </TouchableOpacity>
    </View>
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
});
