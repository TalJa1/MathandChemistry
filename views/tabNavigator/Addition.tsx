/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Animated, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useStatusBar from '../../services/useStatusBarCustom';
import {
  createContentIcon,
  groupIcon,
  livestreamIcon,
  questionIcon,
  tradeIcon,
} from '../../assets/svgXml';
import {vh, vw} from '../../services/styleSheets';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Addition = () => {
  useStatusBar('black');
  const translateY = useRef(new Animated.Value(vh(100))).current;

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();

      return () => {
        translateY.setValue(vh(100)); // Reset the animation value when the screen is unfocused
      };
    }, [translateY]),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[styles.contentContainer, {transform: [{translateY}]}]}>
        <NavigationTab
          icon={groupIcon(vw(6), vw(6), '#D2FD7C')}
          label="Tạo đề"
          handleNavigate="SetofQuestionCreation"
        />
        <NavigationTab
          icon={questionIcon(vw(6), vw(6), '#D2FD7C')}
          label="Tạo câu hỏi lẻ"
          handleNavigate="OneQuestionCreation"
        />
        <NavigationTab
          icon={groupIcon(vw(6), vw(6), '#D2FD7C')}
          label="Tạo nhóm"
          handleNavigate="GroupCreation"
        />
        <NavigationTab
          icon={createContentIcon(vw(6), vw(6), '#D2FD7C')}
          label="Tạo bài viết"
          handleNavigate=""
        />
        <NavigationTab
          icon={livestreamIcon(vw(6), vw(6), '#D2FD7C')}
          label="Phát trực tiếp"
          handleNavigate="LiveStreamSetup"
        />
        <NavigationTab
          icon={tradeIcon(vw(6), vw(6), '#D2FD7C')}
          label="Trao đổi"
          handleNavigate=""
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const NavigationTab: React.FC<{
  icon: any;
  label: string;
  handleNavigate: string;
}> = ({icon, label, handleNavigate}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableOpacity
      disabled={handleNavigate === '' ? true : false}
      onPress={() => navigation.navigate(handleNavigate)}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        backgroundColor: '#464646',
        borderRadius: 12,
        padding: 15,
      }}>
      {icon}
      <Text style={{color: 'white'}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Addition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: vh(6),
    rowGap: vh(1),
  },
});
