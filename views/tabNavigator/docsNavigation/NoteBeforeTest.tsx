/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import useStatusBar from '../../../services/useStatusBarCustom';
import {useNavigation, useRoute} from '@react-navigation/native';
import {vh, vw} from '../../../services/styleSheets';
import {backArrow} from '../../../assets/svgXml';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  noteBeforeStart,
  tabTimeChemistryDataDetail,
  tabTimeMathDataDetail,
} from '../../../services/renderData';
import {
  docsMainDataChemistryStorage,
  docsMainDataMathStorage,
} from '../../../data/rootStorage';
import {loadData} from '../../../services/storage';
import {DataDetail, TabTimeDataDetail} from '../../../services/typeProps';

const NoteBeforeTest = () => {
  useStatusBar('#A3A3F2');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [step, setStep] = useState(0);
  const route = useRoute();
  const {title, time, isMath} = route.params as {
    title: string;
    time: number;
    isMath: boolean;
  };
  const [mainData, setMainData] = useState<DataDetail>({
    id: '',
    title: '',
    point: 0,
    status: '',
    total: 0,
    amount: 0,
    rightamount: 0,
    wrongamount: 0,
    review: [],
    test: [],
    time: undefined,
  });

  useEffect(() => {
    if (isMath) {
      const get = tabTimeMathDataDetail.filter(item => item.time === time)[0]
        .data;
      const index = get.findIndex(item => item.title.trim() === title.trim());
      setMainData(get[index] as DataDetail);
    } else {
      const get = tabTimeChemistryDataDetail.filter(
        item => item.time === time,
      )[0].data;
      const index = get.findIndex(item => item.title.trim() === title.trim());
      setMainData(get[index] as DataDetail);
    }
  }, [isMath, time, title]);

  // useEffect(() => {
  //   const initData = isMath
  //     ? docsMainDataMathStorage
  //     : docsMainDataChemistryStorage;

  //   loadData<TabTimeDataDetail[]>(initData)
  //     .then(data => {
  //       const validData = data.filter(item => item.time === time);
  //       let getIndex = -1;
  //       validData[0].data.forEach((item, index) => {
  //         if (item.title.trim() === title.trim() && getIndex === -1) {
  //           getIndex = index;
  //         }
  //       });

  //       setMainData(validData[0].data[getIndex]);
  //     })
  //     .catch(() => {
  //       const get = isMath
  //         ? tabTimeMathDataDetail.filter(item => item.time === time)[0].data
  //         : tabTimeChemistryDataDetail.filter(item => item.time === time)[0]
  //             .data;

  //       const index = get.findIndex(item => item.title.trim() === title.trim());

  //       setMainData(get[index] as DataDetail);
  //     });
  // }, [isMath, time, title]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title={title} step={step} setStep={setStep} />
      <ScrollView>
        {step === 0 ? (
          <NoteRender />
        ) : (
          <NoteRenderLast data={mainData} isMath={isMath} time={time} />
        )}
      </ScrollView>
      {step === 1 && (
        <View
          style={{
            width: '100%',
            padding: vw(5),
          }}>
          <Text style={{fontSize: 14, color: '#ED7234', fontWeight: '700'}}>
            Lưu ý:
          </Text>
          <Text style={{fontStyle: 'italic', color: '#A7A7A7'}}>
            Chuẩn bị sẵn giấy, bút, nháp, máy tính cầm tay. Giữ ý thức tự giác
            như trong 1 kỳ thi chính thức, không mở tài liệu trong thời gian làm
            bài để đánh giá đúng khả năng học tập.
          </Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() =>
          step < 1
            ? setStep(step + 1)
            : navigation.navigate('Exam', {
                time: time,
                title: title,
                isMath: isMath,
                data: mainData,
              })
        }
        style={{
          backgroundColor: '#D2FD7C',
          marginHorizontal: vw(5),
          marginBottom: vh(1),
          padding: vw(4),
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
          {step === 0 ? 'Tiếp tục' : 'Bắt đầu làm đề'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const NoteRenderLast: React.FC<{
  data: DataDetail;
  isMath: boolean;
  time: number;
}> = ({data, isMath, time}) => {
  console.log('data', data);

  return (
    <View style={{padding: vw(5), rowGap: vh(1)}}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', columnGap: vw(3)}}>
        <Image
          style={{width: vw(15), height: vw(15), resizeMode: 'contain'}}
          source={require('../../../assets/docs/img3.png')}
        />
        <Text style={{fontWeight: '500', fontSize: 14}}>
          {isMath ? 'Hình học không gian' : 'Hóa phân tích'}
        </Text>
      </View>
      <View style={{rowGap: vh(1)}}>
        <NoteRenderLastdetail
          title="Thời gian làm bài: "
          data={`${time} phút`}
        />
        <NoteRenderLastdetail
          title="Tổng số câu: "
          data={`${data.total ?? 10} câu`}
        />
        <NoteRenderLastdetail title="Câu đúng: " data={`${data.rightamount}`} />
        <NoteRenderLastdetail title="Câu sai: " data={`${data.wrongamount}`} />
        <NoteRenderLastdetail
          title="Điểm: "
          data={`${data.status === 'Đã làm' ? data.point : data.status}`}
        />
      </View>
    </View>
  );
};

const NoteRenderLastdetail: React.FC<{title: string; data: string}> = ({
  title,
  data,
}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', columnGap: vw(2)}}>
      <Text style={{color: 'white', fontSize: 14, fontWeight: '700'}}>
        {title}
      </Text>
      <Text style={{color: '#FFFFFF', fontSize: 14}}>{data}</Text>
    </View>
  );
};

const NoteRender: React.FC = () => {
  return (
    <View
      style={{paddingHorizontal: vw(5), paddingVertical: vh(2), rowGap: vh(2)}}>
      {noteBeforeStart.map((item, index) => (
        <View key={index}>
          {index !== 2 ? (
            <RenderNote01 title={item.title} data={item.data} />
          ) : (
            <RenderNote02
              title={item.title}
              sub={item.subTitle}
              data={item.data}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const RenderNote02: React.FC<{title: string; data: string[]; sub?: string}> = ({
  title,
  data,
  sub,
}) => {
  return (
    <View>
      <Text style={{color: '#A3A3F2', fontSize: 18, fontWeight: '600'}}>
        {title}
      </Text>
      <View style={styles.textGap}>
        {data.map((item, index) => (
          <View key={index} style={styles.containerText}>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.dataText}>{item}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.dataText}>{sub ?? ''}</Text>
    </View>
  );
};

const RenderNote01: React.FC<{title: string; data: string[]}> = ({
  title,
  data,
}) => {
  return (
    <View>
      <Text style={{color: '#A3A3F2', fontSize: 18, fontWeight: '600'}}>
        {title}
      </Text>
      <View style={styles.textGap}>
        {data.map((item, index) => (
          <View key={index}>
            <Text style={styles.dataText}>- {item}</Text>
          </View>
        ))}
      </View>
    </View>
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

export default NoteBeforeTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    marginRight: 5,
  },
  dataText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  textGap: {
    rowGap: vh(1),
  },
});
