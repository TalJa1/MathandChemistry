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
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import NavigationHeaderComponent from '../../components/login/NavigationHeaderComponent';
import {
  centerAll,
  scrollContainernotCenter,
  textSubTitle,
  textTitle,
  vh,
  vw,
} from '../../services/styleSheets';
import {searchIcon} from '../../assets/svgXml';
import {languageOptions, whoOptions} from '../../services/renderData';
import {languageOptionsProps} from '../../services/typeProps';
import CheckBox from '@react-native-community/checkbox';

const InputInforPage: React.FC = () => {
  useStatusBar('black');
  const [step, setStep] = useState(0);
  const handleNextStep = () => {
    if (step <= 6) {
      setStep(step + 1);
    }
  };

  const switchLayout = () => {
    switch (step) {
      case 0:
        return <LanguageOptionsGroup />;
      case 1:
        return <WhoOptionsGroup />;

      default:
        return <LanguageOptionsGroup />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={scrollContainernotCenter}>
        <View style={{height: vh(15)}}>
          <NavigationHeaderComponent
            isSkip={false}
            isback={true}
            process={0}
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
        <SearchBar />
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

const SearchBar: React.FC = () => {
  return (
    <View style={styles.searchBarContainer}>
      {searchIcon(vw(5), vw(5))}
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm ngôn ngữ"
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
});
