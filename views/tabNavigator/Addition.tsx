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
import {useFocusEffect} from '@react-navigation/native';

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
        />
        <NavigationTab
          icon={questionIcon(vw(6), vw(6), '#D2FD7C')}
          label="Tạo câu hỏi lẻ"
        />
        <NavigationTab
          icon={groupIcon(vw(6), vw(6), '#D2FD7C')}
          label="Tạo nhóm"
        />
        <NavigationTab
          icon={createContentIcon(vw(6), vw(6), '#D2FD7C')}
          label="Tạo bài viết"
        />
        <NavigationTab
          icon={livestreamIcon(vw(6), vw(6), '#D2FD7C')}
          label="Phát trực tiếp"
        />
        <NavigationTab
          icon={tradeIcon(vw(6), vw(6), '#D2FD7C')}
          label="Trao đổi"
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const NavigationTab: React.FC<{icon: any; label: string}> = ({icon, label}) => {
  return (
    <TouchableOpacity
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
    marginBottom: vh(4),
    rowGap: vh(1),
  },
});
