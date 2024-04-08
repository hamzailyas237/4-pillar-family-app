import { View, Text, TextInput, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import Modal from "react-native-modal"
import AntDesign from "react-native-vector-icons/AntDesign";
import { confirmPassword } from '../../../redux/slices';
import { useDispatch } from 'react-redux';
const ForgetPasswordScreen = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userEmail = route?.params?.userEmail;
    const [modalVisible, setModalVisible] =useState(false);
    const [passwordField, setPasswordField] = useState({
email: userEmail,
password:"",
passwordConfirm:""
    });


console.log("userEmailForgetPasswordScreen============================================>", userEmail);

    console.log( "password=============================>",passwordField.password);
    console.log ("passwordConfirm============================> ", passwordField.passwordConfirm);
  
    const backArrow = require("../../../assets/Images/arrowback3.png");


    const onChange = (fieldName, value) => {
        setPasswordField(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
      };

const handelPass = ()=>{
  console.log("passwordField Fun========================>", passwordField.password);
try {
console.log("passwordField try========================>", passwordField.passwordConfirm);

  dispatch(confirmPassword({...passwordField, navigation}));
  toggleModal();  // openModal and navigate to login screen 
 


} catch (error) {
  console.log("errorCom============================>", error?.message);
}

}

      const  toggleModal = () =>{
        setModalVisible(true)
        setTimeout(() => {
            navigation.navigate("Login")
        }, 3000);
    
    
    }


  return (
    <>
    <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    
                    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between",marginTop:26}}>
                    
                    <TouchableOpacity 
                    onPress={()=> navigation.navigate("Login")}
                    style={styles.containerBackBtn}>
                <Image source={backArrow} style={styles.backArrow}/>
                </TouchableOpacity>
<TouchableOpacity 
onPress={handelPass}
style={{marginRight:26}}>
<Text style={{color:"#1492E6", fontFamily:"Now-Medium-BF6542f7137648d",fontSize:18 }}>Save</Text>
</TouchableOpacity>
               
                    </View>


                    <Text style={styles.heading}>Forget Password</Text>
<View style={{marginTop:36}}/>
                    <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder='New Password'
                    placeholderTextColor='#fff'
                    value={passwordField.password}
                     onChangeText={(text) => onChange('password', text)}
                        type="password"
                        id="password"
                        name="password"
                    />
                    
                    </View>

                    <View style={{marginTop:22}}/>
                    <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder='Confirm Password'
                    placeholderTextColor='#fff'
                    value={passwordField.passwordConfirm}
                     onChangeText={(text) => onChange('passwordConfirm', text)}
                        type="passwordConfirm"
                        id="passwordConfirm"
                        name="passwordConfirm"
                    />
                    
                    </View>

                    <Modal
                    isVisible={modalVisible}
                    backdropOpacity={0.5}
                    // animationIn={false}
                    coverScreen={true}
                    >
                    
                    <View style={styles.modalContainer}>
                    <View style={styles.modalInnerContainer}>
                    <AntDesign name='check' size={50} color='#000'/>
                    </View>
                    
                    </View>
                    </Modal>

                    </KeyboardAwareScrollView>
    </ImageBackground>
    </SafeAreaView>
    
    
    </>
  )
}

export default ForgetPasswordScreen
