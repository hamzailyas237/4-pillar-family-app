import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import {Colors, Fonts} from '../../../assets/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPoints} from '../../../redux/slices/PointsAndStreaksSlice';
import {setUser} from '../../../redux/slices';
import {Toast} from 'toastify-react-native';

const AvailabelPoint = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const backArrow = require('../../../assets/Images/arrowback3.png');
  const faxGirl = require('../../../assets/Images/faxGirl.png');
  const daimondImg = require('../../../assets/Images/daimond.png');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').width;
  const navigation = useNavigation();
  const pointsData = useSelector(state => state?.points?.data);
  const userInfo = useSelector(state => state?.user?.userInfo);
  const token = useSelector(state => state?.user?.token);
  const dispatch = useDispatch();

  const [selectedUserId, setSelectedUserId] = useState('');

  const inputHandler = (fieldName, text) => {
    setTransferPointsData({
      ...transferPointsData,
      [fieldName]: text,
    });
  };

  const [transferPointsData, setTransferPointsData] = useState({
    userId: userInfo?._id,
    childId: selectedUserId,
    qty: 0,
    msg: '',
  });

  const transferPointsHandler = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/points/transfer-points',
      {
        method: 'POST',
        body: JSON.stringify(transferPointsData),
        ...config,
      },
    );
    const data = await response.json();

    if (!response.ok) {
      Toast.error(data?.message);
    } else {
      dispatch(fetchPoints(userInfo?._id));
      dispatch(setUser(data));
      setModalVisible(true);
      setTimeout(() => {
        navigation.navigate('Team');
      }, 2000);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Images.backgroundImages.BackgroundImage}
          resizeMode="cover"
          style={{flex: 1, backgroundColor: Colors.green}}>
          <View
            style={{
              backgroundColor: 'rgba(67, 59, 115, 255)',
              padding: 15,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}>
            <TouchableOpacity
              style={styles.headerBtn}
              onPress={() => navigation.navigate('Team')}>
              <Image source={backArrow} style={styles.backArrow} />
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Now-Medium-BF6542f7137648d',
                  fontSize: 20,
                  marginLeft: 8,
                }}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.container}>
              <Text style={styles.heading}>
                You have{' '}
                <Text
                  style={{
                    fontFamily: 'Now-Bold-BF6542f7138a8d2',
                    fontSize: 24,
                  }}>
                  {pointsData?.totalCompletedPoints}
                </Text>{' '}
                points available{'\n'} in your account.
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 18,
                }}>
                <Text style={styles.text}>Selected Child</Text>
                <TouchableOpacity
                  style={{marginRight: 20}}
                  onPress={() => navigation.navigate('Team')}>
                  <Text style={styles.changeBtnText}>Change</Text>
                </TouchableOpacity>
              </View>

              {userInfo?.children?.map((user, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      setSelectedUserId(user?._id),
                        setTransferPointsData({
                          ...transferPointsData,
                          childId: user?._id,
                        });
                    }}>
                    <View
                      style={[
                        styles.dataContainer,
                        {
                          backgroundColor:
                            selectedUserId == user?._id
                              ? Colors.background.primary
                              : null,
                        },
                      ]}>
                      <Image source={faxGirl} style={styles.faxGirl} />
                      <View>
                        <Text
                          style={{
                            fontFamily: 'Now-Regular-BF6542f7138c477',
                            color: '#fff',
                            fontSize: 18,
                          }}>
                          {user?.firstName}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Now-Regular-BF6542f7138c477',
                            color: '#fff',
                          }}>
                          {user?.email}
                        </Text>
                      </View>
                      <View
                        style={{
                          marginLeft: windowWidth * 0.04,
                          alignItems: 'center',
                        }}>
                        <Image source={daimondImg} style={styles.daimondImg} />
                        <Text style={{color: '#fff'}}>
                          {user?.childrenPoints}
                        </Text>
                      </View>

                      <MaterialCommunityIcons
                        name="delete"
                        color="tomato"
                        size={28}
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
              <Text style={[styles.text, {marginTop: 18}]}>
                How many coins do you want to give?
              </Text>
              <View style={styles.pointContainer}>
                <TextInput
                  onChangeText={text => inputHandler('qty', parseInt(text))}
                  name="qty"
                  style={{
                    color: '#fff',
                    fontFamily: 'Now-Regular-BF6542f7138c477',
                    marginLeft: 14,
                    fontSize: 15,
                  }}
                />

                <Image
                  source={daimondImg}
                  style={[styles.daimondImg, {marginRight: 8}]}
                />
              </View>
              <Text style={[styles.text, {marginTop: 12}]}>Your Message</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  onChangeText={text => inputHandler('msg', text)}
                  name="msg"
                  style={styles.input}
                  placeholder="Write..."
                  placeholderTextColor="#fff"
                />
              </View>
              <TouchableOpacity onPress={transferPointsHandler}>
                <LinearGradient
                  colors={['#BA5DFE', '#5D36FE']}
                  start={{x: 0.2, y: 0.25}}
                  end={{x: 0.9, y: 2.0}}
                  style={styles.linear}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'Now-Medium-BF6542f7137648d',
                      fontSize: 18,
                    }}>
                    Transfer Points
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <Modal
                isVisible={modalVisible}
                backdropOpacity={0.5}
                // animationIn={false}
                coverScreen={true}>
                <View style={styles.modalContainer}>
                  <Image
                    source={daimondImg}
                    style={{
                      width: windowWidth * 0.37,
                      height: windowHeight * 0.37,
                      marginTop: -windowHeight * 0.14,
                    }}
                  />
                  <Text style={styles.modalText}>
                    Points transferred successfully
                  </Text>
                </View>
              </Modal>
            </View>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default AvailabelPoint;
