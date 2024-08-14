/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {centerAll, containerStyle, vh, vw} from '../../../services/styleSheets';
import useStatusBar from '../../../services/useStatusBarCustom';
import {
  filmingIcon,
  frontBackCameraIcon,
  micIcon,
  smallStarIcon,
} from '../../../assets/svgXml';

const LiveStreamSetup = () => {
  useStatusBar('black');
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        imageStyle={{resizeMode: 'cover', opacity: 0.5}}
        source={require('../../../assets/liveStream/background.png')}
        style={{flex: 1, paddingHorizontal: vw(5)}}>
        <ScrollView contentContainerStyle={{paddingVertical: vh(2)}}>
          <MainContentTop />
        </ScrollView>
        <View>
          <MainContentBottom />
          <TouchableOpacity
            disabled={true}
            style={[
              centerAll,
              {
                borderRadius: 16,
                backgroundColor: '#464646',
                paddingVertical: vh(2),
                marginVertical: vh(1),
              },
            ]}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
              Phát trực tiếp
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const MainContentBottom: React.FC = () => {
  return <View></View>;
};

const MainContentTop: React.FC = () => {
  return (
    <View style={{flex: 1, height: '100%'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: vw(3),
          }}>
          <Image source={require('../../../assets/liveStream/acc1.png')} />
          <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}>
            Nguyễn Văn A
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: vh(2),
          }}>
          {micIcon(vw(7), vw(7))}
          {filmingIcon(vw(7), vw(7))}
          {frontBackCameraIcon(vw(7), vw(7))}
          {smallStarIcon(vw(7), vw(7))}
        </View>
      </View>
    </View>
  );
};

export default LiveStreamSetup;

const styles = StyleSheet.create({
  container: containerStyle,
});
