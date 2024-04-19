import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../../assets/Images';
import {Colors} from '../../../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {resetPassword} from '../../../redux/slices';
import {Toast} from 'toastify-react-native';
import {logoutUser} from '../../../redux/slices/index';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const backArrow = require('../../../assets/Images/arrowback3.png');
  // const token = useSelector((state) => state.token)
  const token = useSelector(state => state?.user?.token);
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordField, setPasswordField] = useState({
    passwordCurrent: '',
    password: '',
    passwordConfirm: '',
    token: token,
  });

  const onChange = (fieldName, value) => {
    setPasswordField(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const onsubmit = () => {
    if (
      passwordField.passwordCurrent !== '' &&
      passwordField.password !== '' &&
      passwordField.passwordConfirm !== ''
    ) {
      dispatch(resetPassword({...passwordField, navigation}));
      toggleModal();
    } else {
      Toast.error('Requid Input Field');
    }
  };
  const toggleModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      dispatch(logoutUser());
    }, 3000);
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
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 26,
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.containerBackBtn}>
              <Image source={backArrow} style={styles.backArrow} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onsubmit} style={{marginRight: 26}}>
              <Text
                style={{
                  color: '#1492E6',
                  fontFamily: 'Now-Medium-BF6542f7137648d',
                  fontSize: 18,
                }}>
                Save
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
            <Text style={styles.heading}>Reset Password</Text>
            <View style={{marginTop: 36}} />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Current Password"
                placeholderTextColor="#fff"
                value={passwordField.passwordCurrent}
                onChangeText={text => onChange('passwordCurrent', text)}
                type="current"
                id="current"
                name="current"
              />
            </View>

            <View style={{marginTop: 22}} />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#fff"
                value={passwordField.password}
                onChangeText={text => onChange('password', text)}
                type="newPassword"
                id="newPassword"
                name="newPassword"
              />
            </View>

            <View style={{marginTop: 22}} />
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="#fff"
                value={passwordField.passwordConfirm}
                onChangeText={text => onChange('passwordConfirm', text)}
                type="passwordConfirm"
                id="passwordConfirm"
                name="passwordConfirm"
              />
            </View>

            <Modal
              isVisible={modalVisible}
              backdropOpacity={0.5}
              // animationIn={false}
              coverScreen={true}>
              <View style={styles.modalContainer}>
                <View style={styles.modalInnerContainer}>
                  <AntDesign name="check" size={50} color="#000" />
                </View>
              </View>
            </Modal>
          </KeyboardAwareScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default ResetPassword;
