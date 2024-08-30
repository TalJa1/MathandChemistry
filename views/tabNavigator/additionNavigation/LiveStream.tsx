/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  Modal,
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
import {
  cameraIcon,
  cancelIcon,
  downArrowIcon,
  frontBackCameraIcon,
  liveStreamBackIcon,
  liveStreamHandRaiseIcon,
  liveStreamRecordIcon,
  liveStreamScreenShareIcon,
  liveStreamStopIcon,
  liveStreamViewerIcon,
  menuIcon,
  micIcon,
  pinIcon,
  upArrowIcon,
  vertical3dotsIcon,
  viewIcon,
  voiceIcon,
} from '../../../assets/svgXml';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SearchBar from '../../../components/docs/SearchBar';
import {liveStreamViewersData} from '../../../services/renderData';
import {loadData, saveData} from '../../../services/storage';
import {LoginAccountProps} from '../../../services/typeProps';
import {
  loginAccountStorage,
  loginIndexStorage,
} from '../../../data/rootStorage';

const LiveStream = () => {
  useStatusBar('black');
  const route = useRoute();
  const {data} = route.params as {data: string[]};
  const [loginIndex, setLoginIndex] = useState(-1);
  const [userName, setUserName] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [viewerModalVisible, setViewerModalVisible] = useState(false);

  data.push('Nguyễn Văn A');

  useEffect(() => {
    loadData<number>(loginIndexStorage)
      .then(loadedData => {
        setLoginIndex(loadedData);
      })
      .catch(() => {
        saveData(loginIndexStorage, 0);
        setLoginIndex(0);
      });
  }, []);

  useEffect(() => {
    if (loginIndex !== -1) {
      loadData<LoginAccountProps[]>(loginAccountStorage)
        .then(accounts => {
          const currentUser = accounts[loginIndex];
          if (currentUser) {
            setUserName(currentUser.accInfor.infor.name || 'Hello');
          }
        })
        .catch(error => {
          console.error('Failed to load user data:', error);
        });
    }
  }, [loginIndex]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: vw(5), flex: 1}}>
        <View style={{flex: 1}}>
          <MainContent data={data} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: vh(2),
          }}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={[
              {
                backgroundColor: '#B65A46',
                borderRadius: 10,
                width: vw(10),
                height: vw(10),
              },
              centerAll,
            ]}>
            {liveStreamBackIcon(vw(5), vw(5))}
          </TouchableOpacity>
          {micIcon(vw(5), vw(5))}
          {cameraIcon(vw(5), vw(5))}
          {frontBackCameraIcon(vw(5), vw(5))}
          <TouchableOpacity onPress={() => setMenuModalVisible(true)}>
            {menuIcon(vw(5), vw(5))}
          </TouchableOpacity>
        </View>
      </View>
      <ModalBack
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
      <MenuModal
        menuModalVisible={menuModalVisible}
        setMenuModalVisible={setMenuModalVisible}
        setViewerModalVisible={setViewerModalVisible}
      />
      <ViewerModal
        viewerModalVisible={viewerModalVisible}
        setViewerModalVisible={setViewerModalVisible}
        data={data}
        username={userName}
      />
    </SafeAreaView>
  );
};

const ViewerModal: React.FC<{
  viewerModalVisible: boolean;
  setViewerModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: string[];
  username: string;
}> = ({viewerModalVisible, setViewerModalVisible, data, username}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={viewerModalVisible}
      onRequestClose={() => setViewerModalVisible(false)}>
      <View style={styles.fullScreenModalContainer}>
        <View style={styles.fullScreenModalContent}>
          <View
            style={[
              {backgroundColor: '#0D0D0D', height: vh(8), width: vw(100)},
              centerAll,
            ]}>
            <Text style={{color: '#D2FD7C', fontSize: 18, fontWeight: '600'}}>
              Người tham gia
            </Text>
          </View>
          <ScrollView
            style={{width: '100%', paddingHorizontal: vw(5)}}
            contentContainerStyle={{paddingVertical: vh(2)}}>
            <View style={{rowGap: vh(1)}}>
              <SearchBar />
              <ToggleContentLayout
                label="Chủ phiên phát trực tiếp"
                listUsers={[username]}
              />
              <ToggleContentLayout
                listUsers={data.slice(0, 3)}
                label="Đang trên phiên live"
              />
              <ToggleContentLayout
                label="Người xem (9)"
                listUsers={liveStreamViewersData}
              />
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => setViewerModalVisible(false)}
            style={[styles.closeButton, centerAll]}>
            <Text style={{color: '#0D0D0D', fontSize: 16, fontWeight: '500'}}>
              Lưu thay đổi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const ToggleContentLayout: React.FC<{
  label: string;
  listUsers: string[];
}> = ({label, listUsers}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <View style={styles.toggleContentLayout}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '700'}}>
          {label}
        </Text>
        <TouchableOpacity
          onPress={() => setIsContentVisible(!isContentVisible)}>
          {isContentVisible ? (
            <>{upArrowIcon(vw(5), vw(5), '#FFFFFF')}</>
          ) : (
            <>{downArrowIcon(vw(5), vw(5), '#FFFFFF')}</>
          )}
        </TouchableOpacity>
      </View>
      {isContentVisible && (
        <View style={styles.content}>
          {listUsers.map((user, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: vh(1),
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#FFFFFF', fontSize: 16}}>{user}</Text>
              <View style={{flexDirection: 'row', columnGap: vw(1)}}>
                {label === 'Đang trên phiên live' && index === 0 ? (
                  <>{voiceIcon(vw(5), vw(5))}</>
                ) : (
                  <></>
                )}
                {micIcon(vw(5), vw(5))}
                {vertical3dotsIcon(vw(5), vw(5))}
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const MenuModal: React.FC<{
  menuModalVisible: boolean;
  setMenuModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setViewerModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({menuModalVisible, setMenuModalVisible, setViewerModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={menuModalVisible}
      onRequestClose={() => setMenuModalVisible(false)}>
      <View style={styles.menuModalContainer}>
        <View style={styles.menuModalContent}>
          <View
            style={{
              paddingVertical: vh(1),
              height: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: '35%',
                borderBottomWidth: 1,
                borderBottomColor: '#1B1B1B',
                paddingHorizontal: vw(5),
              }}>
              <Text style={{color: '#EFF0FA', fontSize: 16, fontWeight: '700'}}>
                Lựa chọn
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setMenuModalVisible(false);
                }}>
                {cancelIcon(vw(5), vw(5), '#EFF0FA')}
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: vh(1),
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                height: '65%',
                paddingHorizontal: vw(5),
              }}>
              <RenderItemMenuModal
                icon={liveStreamViewerIcon(vw(7), vw(7))}
                label="Người xem"
                onPress={() => {
                  setMenuModalVisible(false);
                  setViewerModalVisible(true);
                }}
              />
              <RenderItemMenuModal
                icon={liveStreamScreenShareIcon(vw(7), vw(7))}
                label="Chia sẻ màn hình"
              />
              <RenderItemMenuModal
                icon={liveStreamHandRaiseIcon(vw(7), vw(7))}
                label="Dơ tay"
              />
              <RenderItemMenuModal
                icon={liveStreamRecordIcon(vw(7), vw(7))}
                label="Ghi lại"
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const RenderItemMenuModal: React.FC<{
  icon: any;
  label: string;
  onPress?: () => void;
}> = ({icon, label, onPress}) => {
  return (
    <TouchableOpacity
      disabled={label === 'Người xem' ? false : true}
      style={{alignItems: 'center', width: '25%'}}
      onPress={onPress}>
      <View style={{position: 'relative'}}>
        {icon}
        {label === 'Người xem' && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>12</Text>
          </View>
        )}
      </View>
      <Text style={{textAlign: 'center', color: '#FFFFFF'}}>{label}</Text>
    </TouchableOpacity>
  );
};

const ModalBack: React.FC<{
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  navigation?: NativeStackNavigationProp<any>;
}> = ({modalVisible, setModalVisible, navigation}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity
            style={styles.modalBtnBackStyle}
            onPress={() => {
              navigation?.navigate('Add');
            }}>
            {liveStreamBackIcon(vw(5), vw(5))}
            <View style={{flex: 1}}>
              <Text style={{color: '#EFF0FA', fontSize: 18}}>Rời</Text>
              <Text style={styles.modalBackTextbutton}>
                Những thành viên còn lại sẽ tiếp tục phiên phát trực tiếp
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={[styles.modalBtnBackStyle, {backgroundColor: '#B65A46'}]}>
            {liveStreamStopIcon(vw(5), vw(5))}
            <View style={{flex: 1}}>
              <Text style={{color: '#EFF0FA', fontSize: 18}}>
                Dừng phát trực tiếp
              </Text>
              <Text style={styles.modalBackTextbutton}>
                Phiên phát sẽ dừng ngay lập tức, mọi người trong phiên cũng phải
                dừng lại.
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const MainContent: React.FC<{data: string[]}> = ({data}) => {
  return (
    <View style={{flex: 1, rowGap: vh(1), justifyContent: 'center'}}>
      <View
        style={{flexDirection: 'row', alignItems: 'center', columnGap: vw(2)}}>
        {viewIcon(vw(5), vw(5))}
        <Text style={{color: 'white'}}>12 đang xem</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '40%',
          borderRadius: 20,
          overflow: 'hidden',
        }}>
        <Image
          source={require('../../../assets/liveStream/live1.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 20,
          }}
        />
        <View
          style={[
            {
              position: 'absolute',
              bottom: vh(1),
              backgroundColor: '#000000A3',
              left: vw(5),
              padding: vw(1),
              flexDirection: 'row',
              borderRadius: 8,
              columnGap: vw(1),
            },
            centerAll,
          ]}>
          {pinIcon(vw(4), vw(4))}
          <Text>{data[0]}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          columnGap: vw(1),
          height: '20%',
          width: '100%',
        }}>
        <View
          style={{
            width: '50%',
            height: '100%',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../../assets/liveStream/live2.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 20,
            }}
          />
          <View
            style={[
              {
                position: 'absolute',
                bottom: vh(1),
                backgroundColor: '#000000A3',
                left: vw(5),
                padding: vw(1),
                flexDirection: 'row',
                borderRadius: 8,
                columnGap: vw(1),
              },
              centerAll,
            ]}>
            <Text>{data[1]}</Text>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            height: '100%',
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <Image
            source={require('../../../assets/liveStream/live3.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 20,
            }}
          />
          <View
            style={[
              {
                position: 'absolute',
                bottom: vh(1),
                backgroundColor: '#000000A3',
                left: vw(5),
                padding: vw(1),
                flexDirection: 'row',
                borderRadius: 8,
                columnGap: vw(1),
              },
              centerAll,
            ]}>
            <Text>{data[2]}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LiveStream;

const styles = StyleSheet.create({
  container: containerStyle,
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: '30%',
    width: '100%',
    backgroundColor: '#1B1B1B',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    backgroundColor: '#D2FD7C',
    borderRadius: 15,
    width: vw(90),
    height: vh(7),
    position: 'absolute',
    bottom: vh(2),
  },
  modalBtnBackStyle: {
    padding: vw(5),
    flexDirection: 'row',
    height: '50%',
    alignItems: 'flex-start',
    columnGap: vw(5),
  },
  modalBackTextbutton: {color: '#EFF0FA', flexWrap: 'wrap'},
  menuModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuModalContent: {
    height: '20%',
    width: '100%',
    backgroundColor: '#11131A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -15,
    backgroundColor: '#1B1B1B',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  fullScreenModalContainer: {
    flex: 1,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    borderTopLeftRadius: 20,
    backgroundColor: '#11131A',
  },
  fullScreenModalContent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  toggleContentLayout: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#464646',
  },
  content: {
    marginTop: 10,
  },
});
