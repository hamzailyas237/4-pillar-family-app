
import { View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import LinearGradient from 'react-native-linear-gradient';
import BackArrowButton from"../../../components/BackArrowButton"
import Modal from "react-native-modal"
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';
import { sendOTP } from '../../../redux/slices';
import { useDispatch } from 'react-redux';
const EmailEnter = () => {
const navigation = useNavigation();
const dispatch = useDispatch()
    const windowHeight =Dimensions.get("window"). height;
    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] =useState(false)



    const onsubmit = ({e, value}  ) => {
        // e.preventDefault();
try {

        
    dispatch(sendOTP(email));
    console.log("email=================================>", email);
    navigation.navigate("OtpScreen" , {email : value})



} catch (error) {
    console.log("credentialsError", email);
    console.log("error", error);
}

};

const  toggleModal = () =>{
    setModalVisible(true)
    setTimeout(() => {
        navigation.navigate("OtpScreen")
    }, 3000);


}
    console.log(email);
 
    return (
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
                    <View style={styles.container}>
                     
                    <BackArrowButton
                    onPress={()=> navigation.goBack()}
                    />
                      
<Text style={styles.heading}>Enter your email</Text>
<Text style={styles.text}>we will send you OTP</Text>
<View style={{marginTop:26}}/>
<View style={styles.inputContainer}>
<TextInput
style={styles.input}
placeholder='Email address'
placeholderTextColor='#fff'
value={email}
onChangeText={setEmail}
type="email"
name= "email"
id="email"
/>

</View>


{email !=='' ? <TouchableOpacity 
onPress={ ()=> onsubmit( {value: email}) }
style={{marginTop:windowHeight*0.54}}>
<LinearGradient colors={["#BA5DFE", "#5D36FE"]}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.linear}
>
<Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Send OTP</Text>
</LinearGradient>
</TouchableOpacity> : 

<View 

style={[styles.planView ,  {marginTop:windowHeight*0.54}]}>

<Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Send OTP</Text>
</View>}



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

                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}
export default EmailEnter;