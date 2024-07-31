/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import NavigationHeaderComponent from '../../components/login/NavigationHeaderComponent';
import {
  centerAll,
  scrollContainernotCenter,
  textTitle,
  vh,
  vw,
} from '../../services/styleSheets';
import {searchIcon} from '../../assets/svgXml';
import {
  chemistryContents,
  classNumbers,
  goalOptions,
  languageOptions,
  mathContents,
  whoOptions,
} from '../../services/renderData';
import {languageOptionsProps, searchBarProps} from '../../services/typeProps';
import CheckBox from '@react-native-community/checkbox';
import Slider from '@react-native-community/slider';
import {launchImageLibrary} from 'react-native-image-picker';

const InputInforPage: React.FC = () => {
  useStatusBar('black');
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const handleNextStep = () => {
    if (step <= 6) {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    switch (step) {
      case 0:
        setProgress(0);
        break;
      case 1:
        setProgress(0.2);
        break;
      case 2:
        setProgress(0.4);
        break;
      case 3:
        setProgress(0.5);
        break;
      case 4:
        setProgress(0.7);
        break;
      case 5:
        setProgress(0.9);
        break;
      case 6:
        setProgress(1);
        break;
    }
  }, [step]);

  const switchLayout = () => {
    switch (step) {
      case 0:
        return <LanguageOptionsGroup />;
      case 1:
        return <WhoOptionsGroup />;
      case 2:
        return <ClassOptionsGroup />;
      case 3:
        return <AbilityCheckGroup />;
      case 4:
        return <GoalCheckGroup />;
      case 5:
        return <Difficulty />;
      case 6:
        return <SeftInfor />;
      default:
        return <View />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={scrollContainernotCenter}>
        <View style={{height: vh(15)}}>
          <NavigationHeaderComponent
            isSkip={step === 0 ? false : true}
            isback={true}
            process={progress}
            step={step}
            setStep={setStep}
          />
        </View>
        {switchLayout()}
      </ScrollView>
      <View style={{marginBottom: vh(1)}}>
        <TouchableOpacity
          onPress={handleNextStep}
          style={[
            centerAll,
            {backgroundColor: '#D2FD7C', height: 56, borderRadius: 10},
          ]}>
          <Text style={{color: '#1B1B1B', fontSize: 16, fontWeight: '600'}}>
            Tiếp tục
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const SeftInfor: React.FC = () => {
  const [image, setImage] = React.useState<Array<string>>([]);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{rowGap: vh(2)}}>
        <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>
          Hãy cung cấp một số thông tin để trải nghiệm ứng dụng của bạn hiệu quả
          hơn nha!
        </Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          onPress={async () => {
            try {
              setImage([]);
              const result: any = await launchImageLibrary({
                mediaType: 'photo',
                selectionLimit: 8,
              });
              if (result.assets.length > 0) {
                for (let i = 0; i < result.assets.length; i++) {
                  setImage(pre => {
                    return [...pre, result.assets[i].uri];
                  });
                }
              }
            } catch (error) {
              console.log(error);
            }
          }}>
          <Image
            source={
              image.length > 0
                ? {uri: image[0]}
                : require('../../assets/inputInfo/imgPicker.png')
            }
            style={{
              width: vw(40),
              height: vw(40),
              resizeMode: 'cover',
              borderRadius: vw(40),
            }}
          />
        </TouchableOpacity>
        <Text style={{color: '#D2FD7C', fontSize: 18, fontWeight: '700'}}>
          Học sinh
        </Text>
      </View>
    </View>
  );
};

const Difficulty: React.FC = () => {
  const [isMath, setIsMath] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState<boolean[]>([]);

  const handleSwitch = (value: boolean) => {
    setIsMath(value);
  };

  const handleCheckboxChange = (index: number) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[index] = !updatedSelectedOptions[index];
    setSelectedOptions(updatedSelectedOptions);
  };

  const options = isMath ? mathContents : chemistryContents;

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{rowGap: vh(2)}}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '700',
          }}>
          Bạn đang gặp khó khăn trong phần kiến thức nào của môn học?
        </Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: vh(3),
            }}>
            <TouchableOpacity
              onPress={() => handleSwitch(true)}
              style={[
                styles.subjectBox,
                centerAll,
                isMath ? {backgroundColor: '#A3A3F2'} : {},
              ]}>
              <Text
                style={[{color: '#7C7C7C'}, isMath ? {color: '#0D0D0D'} : {}]}>
                Toán
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleSwitch(false)}
              style={[
                styles.subjectBox,
                centerAll,
                isMath ? {} : {backgroundColor: '#A3A3F2'},
              ]}>
              <Text
                style={[{color: '#7C7C7C'}, isMath ? {} : {color: '#0D0D0D'}]}>
                Hóa
              </Text>
            </TouchableOpacity>
          </View>
          <SearchBar placeholder="Tìm kiếm nội dung" />
          <View>
            {options.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#1B1B1B',
                  padding: vw(3),
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: 12,
                  marginVertical: vh(1),
                }}>
                <Text style={{width: '80%', color: 'white'}}>{item}</Text>
                <CheckBox
                  value={selectedOptions[index]}
                  onValueChange={() => handleCheckboxChange(index)}
                  tintColors={{
                    true: '#A3A3F2',
                    false: '#A3A3F2',
                  }}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const GoalCheckGroup: React.FC = () => {
  const [selectedGoals, setSelectedGoals] = useState<boolean[]>(
    new Array(goalOptions.length).fill(false),
  );

  const handleCheckboxChange = (index: number) => {
    const updatedSelectedGoals = [...selectedGoals];
    updatedSelectedGoals[index] = !updatedSelectedGoals[index];
    setSelectedGoals(updatedSelectedGoals);
  };

  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{rowGap: vh(2)}}>
        <Text style={[textTitle, {color: 'white', textAlign: 'center'}]}>
          Mục tiêu của bạn:
        </Text>
      </View>
      <View style={{rowGap: vh(2), marginVertical: vh(3)}}>
        {goalOptions.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              backgroundColor: '#1B1B1B',
              padding: vw(3),
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: 12,
            }}>
            <Text style={{width: '80%', color: '#DCE1E8'}}>{item}</Text>
            <CheckBox
              value={selectedGoals[index]}
              onValueChange={() => handleCheckboxChange(index)}
              tintColors={{
                true: '#A3A3F2',
                false: '#A3A3F2',
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const AbilityCheckGroup: React.FC = () => {
  const [math, setMath] = useState(50);
  const [chemistry, setChemistry] = useState(50);
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{rowGap: vh(2)}}>
        <Text style={[textTitle, {color: 'white', textAlign: 'center'}]}>
          Tự đánh giá học lực:
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: vh(3),
          }}>
          <View style={[styles.subjectBox, centerAll]}>
            <Text style={{color: '#7C7C7C'}}>Toán</Text>
          </View>
          <View style={[styles.subjectBox, centerAll]}>
            <Text style={{color: '#7C7C7C'}}>Hóa</Text>
          </View>
        </View>
        <View style={{rowGap: vh(4)}}>
          <View>
            <Text style={[textTitle, {color: 'white', fontSize: 20}]}>
              Toán
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 48,
                textAlign: 'center',
                fontWeight: '700',
              }}>
              {math}
            </Text>
            <Slider
              style={{width: '100%'}}
              minimumValue={0}
              maximumValue={100}
              value={math}
              onValueChange={value => setMath(value)}
              step={1}
              minimumTrackTintColor="#A3A3F2"
              maximumTrackTintColor="#A3A3F24D"
              thumbTintColor="#FFFFFF"
            />
          </View>
          <View>
            <Text style={[textTitle, {color: 'white', fontSize: 20}]}>Hóa</Text>
            <Text
              style={{
                color: 'white',
                fontSize: 48,
                textAlign: 'center',
                fontWeight: '700',
              }}>
              {chemistry}
            </Text>
            <Slider
              style={{width: '100%'}}
              minimumValue={0}
              maximumValue={100}
              value={chemistry}
              onValueChange={value => setChemistry(value)}
              step={1}
              minimumTrackTintColor="#A3A3F2"
              maximumTrackTintColor="#A3A3F24D"
              thumbTintColor="#FFFFFF"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const ClassOptionsGroup: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(11);

  const handlePress = (number: number) => {
    setSelectedNumber(number);
  };
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{rowGap: vh(2)}}>
        <Text style={[textTitle, {color: 'white', textAlign: 'center'}]}>
          Bạn đang học lớp:
        </Text>
      </View>
      <View style={[centerAll, {marginVertical: vh(2)}]}>
        {classNumbers.map(number => (
          <TouchableOpacity key={number} onPress={() => handlePress(number)}>
            <View
              style={[
                styles.numberBox,
                selectedNumber === number && styles.selectedNumberBox,
              ]}>
              <Text
                style={[
                  styles.numberText,
                  selectedNumber === number && styles.selectedNumberText,
                ]}>
                {number}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const WhoOptionsGroup: React.FC = () => {
  const [choice, setChoice] = useState('');
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{rowGap: vh(2)}}>
        <Text style={[textTitle, {color: 'white', textAlign: 'center'}]}>
          Bạn là:
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          rowGap: vh(5),
          marginTop: vh(5),
        }}>
        {whoOptions.map((item, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => setChoice(item.name)}>
              <Image
                source={item.img}
                style={[
                  {width: 100, height: 100, resizeMode: 'contain'},
                  choice === item.name
                    ? {
                        borderWidth: 2,
                        borderColor: '#D2FD7C',
                        borderRadius: 200,
                      }
                    : {},
                ]}
              />
            </TouchableOpacity>
            <Text
              style={[
                {color: '#A7A7A7', fontSize: 16, textAlign: 'center'},
                choice === item.name ? {color: '#D2FD7C'} : {},
              ]}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const LanguageOptionsGroup: React.FC = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <View style={{rowGap: vh(2)}}>
        <Text style={[textTitle, {color: 'white'}]}>Chọn ngôn ngữ</Text>
      </View>
      <View style={{rowGap: vh(1), marginVertical: vh(2)}}>
        <SearchBar placeholder="Tìm kiếm ngôn ngữ" />
        {languageOptions.map((item, index) => (
          <View key={index}>
            <LanguageOptionsLayout name={item.name} img={item.img} />
          </View>
        ))}
      </View>
    </View>
  );
};

const LanguageOptionsLayout: React.FC<languageOptionsProps> = ({name, img}) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View
      style={[
        styles.languageOptionContainer,
        isSelected ? {backgroundColor: '#A3A3F2'} : {},
      ]}>
      <Image source={img} style={styles.languageOptionImage} />
      <Text style={styles.languageOptionText}>{name}</Text>
      <CheckBox
        value={isSelected}
        onValueChange={name === 'Việt Nam' ? setSelection : () => {}}
        tintColors={{
          true: '#0D0D0D',
          false: name === 'Việt Nam' ? '#A3A3F2' : '#7C7C7C',
        }}
      />
    </View>
  );
};

const SearchBar: React.FC<searchBarProps> = ({placeholder}) => {
  return (
    <View style={styles.searchBarContainer}>
      {searchIcon(vw(5), vw(5))}
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#7C7C7C"
      />
    </View>
  );
};

export default InputInforPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: vw(5),
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B1B1B',
    borderRadius: 70,
    paddingHorizontal: vw(5),
    height: 60,
    borderColor: '#7C7C7C',
    borderWidth: 1,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: 'white',
  },
  languageOptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: vw(4),
    backgroundColor: '#1B1B1B',
    borderRadius: 12,
  },
  languageOptionImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  languageOptionText: {
    flex: 1,
    color: 'white',
  },
  numberBox: {
    borderRadius: 24,
    backgroundColor: 'transparent',
    padding: vw(4),
  },
  selectedNumberBox: {
    backgroundColor: '#D2FD7C',
    borderWidth: 3, // Added border width
    borderColor: '#464646',
  },
  numberText: {
    fontSize: 60,
  },
  selectedNumberText: {
    fontSize: 128,
    color: '#0D0D0D',
    fontWeight: '800',
  },
  subjectBox: {
    height: 56,
    width: '45%',
    backgroundColor: '#464646',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#464646',
  },
});
