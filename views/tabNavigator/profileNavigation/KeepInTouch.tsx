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
import React from 'react';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/docs/Header';
import {
  horizontalContactData,
  verticalContactData,
} from '../../../services/renderData';
import useStatusBar from '../../../services/useStatusBarCustom';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {noticeIcon, trashCanIcon} from '../../../assets/svgXml';

const KeepInTouch = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Liên lạc" />
      <ScrollView contentContainerStyle={{paddingVertical: vh(2)}}>
        <HorizontalContent />
        <View style={{paddingHorizontal: vw(5)}}>
          <VerticalContent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const VerticalContent: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const renderRightActions = () => (
    <View style={styles.rightActionContainer}>
      <View style={[styles.actionButton, {backgroundColor: 'transparent'}]}>
        <TouchableOpacity style={[styles.swipeBtn, {backgroundColor: 'white'}]}>
          {noticeIcon(vw(5), vw(5), 'black')}
        </TouchableOpacity>
      </View>
      <View style={[styles.actionButton, {backgroundColor: 'transparent'}]}>
        <TouchableOpacity
          style={[styles.swipeBtn, {backgroundColor: '#ED7234'}]}>
          {trashCanIcon(vw(5), vw(5), 'white')}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{rowGap: vh(2)}}>
        {verticalContactData.map((item, index) => (
          <Swipeable key={index} renderRightActions={renderRightActions}>
            <TouchableOpacity
              disabled={index === 0 ? false : true}
              onPress={() => {
                navigation.navigate('Chat', {index: index});
              }}
              style={{
                flexDirection: 'row',
                columnGap: vw(2),
              }}>
              <Image style={styles.image} source={item.img} />
              <View style={{flex: 1}}>
                <View style={styles.row}>
                  <Text style={styles.nameText}>{item.name}</Text>
                  <Text style={styles.timeText}>{item.time} phút trước</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.descriptionText}>{item.des}</Text>
                  {item.noti > 0 ? (
                    <View style={[styles.notification, centerAll]}>
                      <Text style={styles.notificationText}>{item.noti}</Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </Swipeable>
        ))}
      </View>
    </GestureHandlerRootView>
  );
};

const HorizontalContent: React.FC = () => {
  return (
    <ScrollView horizontal>
      {horizontalContactData.map((item, index) => (
        <TouchableOpacity
          disabled={true}
          key={index}
          style={{
            width: vw(30),
            height: vw(30),
            alignItems: 'center',
            justifyContent: 'flex-start',
            rowGap: vh(1),
          }}>
          <Image
            style={{
              borderWidth: 2,
              borderColor: '#A3A3F2',
              borderRadius: vw(20),
              padding: 10,
            }}
            source={item.img}
          />
          <Text style={{textAlign: 'center'}}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default KeepInTouch;

const styles = StyleSheet.create({
  container: containerStyle,
  rightActionContainer: {
    flexDirection: 'row',
    width: vw(30),
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
  },
  image: {
    width: vw(15),
    height: vw(15),
    resizeMode: 'cover',
    borderRadius: vw(20),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  nameText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  timeText: {
    color: '#7C7C7C',
  },
  descriptionText: {
    color: '#7C7C7C',
  },
  notification: {
    backgroundColor: '#ED7234',
    width: 30,
    height: 30,
    borderRadius: vw(20),
  },
  notificationText: {
    color: 'white',
  },
  swipeBtn: {
    padding: vw(2),
    borderRadius: vw(20),
    overflow: 'hidden',
  },
});
