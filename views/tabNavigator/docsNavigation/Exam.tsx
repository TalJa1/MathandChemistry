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
import {containerStyle, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {backArrow} from '../../../assets/svgXml';
import {DataDetail} from '../../../services/typeProps';

const Exam = () => {
  useStatusBar('#A3A3F2');
  const [step, setStep] = useState(0);
  //get data from props sent by previous page
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
      <Header title={title} step={step} setStep={setStep} />
      <ScrollView>
        <View>
          <Text>Exam</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Header: React.FC<{
  title: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({title, step, setStep}) => {
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
      }}>
      <TouchableOpacity
        onPress={() => (step === 0 ? navigation.goBack() : setStep(step - 1))}>
        {backArrow(vw(7), vw(7), 'black')}
      </TouchableOpacity>
      <Text style={{color: '#0D0D0D', fontSize: 18, fontWeight: '600'}}>
        {title}
      </Text>
    </View>
  );
};

export default Exam;

const styles = StyleSheet.create({
  container: containerStyle,
});
