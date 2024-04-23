import {Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Avatar} from 'react-native-paper';
import Images from '../../assets/Images';
import {
  BAckICon,
  DimondIcon,
  DrawerIcon,
  FireICon,
  Help,
  Lock,
  LogOut,
  Message,
  QuestionMark,
  User,
  Doc,
} from '../../assets/theme/svgimages';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors, Fonts} from '../../assets/theme';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../../redux/slices/index';
import axios from 'axios';
import {err} from 'react-native-svg/lib/typescript/xml';

const Header = props => {
  const navigation = useNavigation();
  const drawerIcon = require('../../assets/Images/drawericon.png');
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  // const userInfo = useSelector(state => state?.userInfo);
  const userInfo = useSelector(state => state?.user?.userInfo);
  // const token = useSelector(state => state.token);
  const token = useSelector(state => state?.user?.token);
  const pointsData = useSelector(state => state?.points?.data);

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSec, setModalVisibleSEc] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleModalSec = () => {
    setModalVisibleSEc(!modalVisibleSec);
  };
  const onsubmit = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      {props.header ? (
        <View
          style={[
            styles.container,
            {
              backgroundColor: props.backgroundColor,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            },
          ]}>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={props.onPress1}>
            <BAckICon />
            <Text
              style={{
                paddingLeft: 10,
                color: Colors.text.tertiary,
                fontSize: Fonts.size.small,
              }}>
              {props.back}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={props.onPress2}>
            <Icon
              name={props.Iconname}
              size={18}
              color={props.Icolor}
              style={{padding: 2}}
            />
            <Text
              style={{
                color: props.color,
                paddingHorizontal: 4,
                fontFamily: 'Now-Medium-BF6542f7137648d',
                fontSize: Fonts.size.normal,
                fontWeight: '600',
              }}>
              {props.headtitle}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.homeHeader}>
          <TouchableOpacity onPress={toggleModal}>
            <Image source={drawerIcon} style={styles.drawerIcon} />
          </TouchableOpacity>
          <View style={styles.iconsRowView}>
            <Text style={[styles.counttext, {fontSize: 16}]}>Home</Text>
            <View style={styles.boderView} />
            <DimondIcon />
            <Text style={styles.counttext}>
              {pointsData?.totalCompletedPoints} Pts
            </Text>

            <View style={styles.boderView} />
            <FireICon />
            <Text style={styles.counttext}>{pointsData?.streaks}</Text>
            <View style={styles.boderView} />
            <TouchableOpacity onPress={props.imgPress}>
              <Image
                source={props.image}
                resizeMode="contain"
                style={styles.img}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      <Modal
        isVisible={modalVisibleSec}
        coverScreen={true}
        animationInTiming={600}
        animationOutTiming={600}>
        <View
          style={{
            width: '96%',
            height: '40%',
            backgroundColor: '#000',
            alignSelf: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#fff',
          }}>
          <View
            style={{
              backgroundColor: '#4EE681',
              width: 56,
              height: 56,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 24,
            }}>
            <AntDesign name="question" size={38} color={'#000'} />
          </View>
          <Text style={[styles.modalHeading, {marginTop: 22}]}>Sign Out?</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 24,
            }}>
            <TouchableOpacity onPress={onsubmit}>
              <LinearGradient
                colors={['#BA5DFE', '#5D36FE']}
                start={{x: 0.2, y: 0.25}}
                end={{x: 0.9, y: 2.0}}
                style={{
                  paddingHorizontal: 40,
                  paddingVertical: 16,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#E2E2E2',
                    fontFamily: 'Now-Medium-BF6542f7137648d',
                    fontSize: 18,
                  }}>
                  Confirm
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleModalSec}
              style={{
                paddingHorizontal: 40,
                paddingVertical: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#fff',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#E2E2E2',
                  fontFamily: 'Now-Medium-BF6542f7137648d',
                  fontSize: 18,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        isVisible={modalVisible}
        backdropOpacity={0.5}
        coverScreen={true}
        animationIn={'slideInLeft'}
        animationOut={'slideOutLeft'}
        onBackdropPress={toggleModal}
        animationInTiming={900}
        animationOutTiming={900}>
        <View
          style={[
            styles.modalContainer,
            {width: windowWidth * 0.7, height: windowHeight},
          ]}>
          <View
            style={[
              styles.modalInnerContainer,
              {width: windowWidth * 0.7, height: windowHeight},
            ]}>
            <TouchableOpacity style={styles.userView} onPress={toggleModal}>
              <Avatar.Image
                size={40}
                style={styles.avtar}
                source={Images.user.userProfile}
              />
              <View style={styles.textView}>
                <Text style={styles.name}>{userInfo?.firstName}</Text>
                <Text style={styles.email}>{userInfo?.email}</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.hrLine} />

            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => navigation.navigate('MyProfile')}>
              <User />
              <Text style={styles.modalBtnText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => navigation.navigate('MyJournalsDrawer')}>
              <Doc />
              <Text style={styles.modalBtnText}>My Journals</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => navigation.navigate('ResetPassword')}>
              <Lock />
              <Text style={styles.modalBtnText}>Reset Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => navigation.navigate('EmailSupportDrawer')}>
              <Message />
              <Text style={styles.modalBtnText}>Email Support</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalBtn}
              onPress={() => navigation.navigate('HelpScreen')}>
              <QuestionMark />
              <Text style={styles.modalBtnText}>Help</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={toggleModalSec}
              style={[styles.modalBtn, {position: 'absolute', bottom: 26}]}>
              <LogOut />
              <Text style={styles.modalBtnText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Header;
