import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../../assets/Images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Entypo from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { loginUser, loginUserChild } from '../../../redux/slices';
import { Toast } from 'toastify-react-native';

const Login = ({ route }) => {
  const backArrow = require('../../../assets/Images/arrowback3.png');
  const type = route.params?.usertType;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [showIcon, setShowIcon] = useState(true);

  const toggelPass = () => {
    setShowIcon(!showIcon);
  };

  const onChange = (fieldName, value) => {
    setCredentials(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const toggleModalSec = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };

  const onsubmit = () => {
    if (credentials.email.trim() !== '' && credentials.password.trim() !== '') {
      dispatch(loginUser({ ...credentials, navigation }));
      toggleModalSec();
      console.log('credentialsSucsses', credentials);
    } else {
      Toast.error('Requid Input Field');
    }
  };

  const onsubmitChild = () => {
    if (credentials.email.trim() !== '' && credentials.password.trim() !== '') {
      dispatch(loginUserChild({ ...credentials, navigation }));
      toggleModalSec();
      console.log('credentialsSucsses', credentials);
    } else {
      Toast.error('Requid Input Field');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.backgroundImages.BackgroundImage}
        resizeMode="cover"
        style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.backArrowcontainer}
            onPress={() => navigation.goBack()}>
            <Image source={backArrow} style={styles.backArrow} />
          </TouchableOpacity>
          {type == 'parent' && (
            <TouchableOpacity
              style={{ marginRight: 26, alignSelf: 'flex-end' }}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  fontFamily: 'Now-Medium-BF6542f7137648d',
                  color: '#fff',
                  fontSize: 17,
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          enableAutomaticScroll={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ marginTop: 5 }} />
          <Text style={styles.headtext}>Login</Text>

          <View style={{ paddingTop: 20, paddingHorizontal: 15 }}>
            <View style={{ marginTop: 8 }}>
              <View style={[styles.inputContainer]}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Email"
                  selectionColor="#fff"
                  placeholderTextColor={'#fff'}
                  value={credentials.email}
                  onChangeText={text => onChange('email', text)}
                  type="email"
                  id="email"
                  name="email"
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.inputField}
                  placeholder="Password"
                  selectionColor="#fff"
                  placeholderTextColor={'#fff'}
                  value={credentials.password}
                  onChangeText={text => onChange('password', text)}
                  type="password"
                  id="password"
                  name="password"
                  secureTextEntry={showIcon}
                />
                <TouchableOpacity onPress={toggelPass}>
                  <Entypo
                    name={showIcon ? 'eye' : 'eye-with-line'}
                    color="#fff"
                    size={22}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.forgetBtn}
              onPress={() => navigation.navigate('EmailEnter')}>
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </TouchableOpacity>

            {type == 'child' && (
              <TouchableOpacity onPress={onsubmitChild} style={{ marginTop: 26 }}>
                <LinearGradient
                  colors={['#BA5DFE', '#5D36FE']}
                  start={{ x: 0.2, y: 0.25 }}
                  end={{ x: 0.9, y: 2.0 }}
                  style={styles.linear}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'Now-Medium-BF6542f7137648d',
                      fontSize: 18,
                    }}>
                    Login
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}

            {type == 'parent' && (
              <TouchableOpacity onPress={onsubmit} style={{ marginTop: 26 }}>
                <LinearGradient
                  colors={['#BA5DFE', '#5D36FE']}
                  start={{ x: 0.2, y: 0.25 }}
                  end={{ x: 0.9, y: 2.0 }}
                  style={styles.linear}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'Now-Medium-BF6542f7137648d',
                      fontSize: 18,
                    }}>
                    Login
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            )}

            <Modal
              isVisible={modalVisible}
              backdropOpacity={0.5}
              coverScreen={true}>
              <View
                style={{
                  backgroundColor: '#fff',
                  width: '50%',
                  height: '20%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 8,
                }}>
                <ActivityIndicator size={60} color="#BA5DFE" />
              </View>
            </Modal>
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
