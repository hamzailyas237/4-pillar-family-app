import { Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Fonts } from '../../../assets/theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'react-native'
import Images from '../../../assets/Images'
import { ScrollView } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import BackArrowButton from "../../../components/BackArrowButton"
import { useNavigation } from '@react-navigation/native';
import { verifyOtp } from '../../../redux/slices';
import { useDispatch } from 'react-redux';

const OtpScreen = ({route}) => {
    const navigation = useNavigation();
    const windowHeight =Dimensions.get("window"). height;
const [otp, setOtp] = useState();
const dispatch = useDispatch();
const userEmail = route.params?.email;


  console.log("userEmail: ==================================>", userEmail);
console.log("code==================================>", otp);

    const handleOtp = () => {
        console.log("email,otp Fun=========================>", userEmail, otp);
       try {
        console.log("email,otp try=========================>", userEmail, otp);
        dispatch(verifyOtp({userEmail, otp}));
        navigation.navigate("ForgetPasswordScreen", {userEmail : userEmail} )
     
       } catch (error) {
        console.log("errorCom============================>", error?.message);
       }


    }
    
       
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, paddingTop: 15, backgroundColor: Colors.green }}>
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                    <BackArrowButton
                    onPress={()=> navigation.goBack()}
                    />
                        
                        <Text style={styles.text}>
                        Enter 4 digit OTP we have sent you on
                        </Text>

                        <Text style={{ color: Colors.emailcolor,  fontFamily:"Now-Regular-BF6542f7138c477",fontSize:16, marginLeft:15, marginTop:6 }}>
                       {userEmail}</Text>

                        <View style={{ marginTop: 5, alignItems: 'center' }} >
                            <OTPInputView
                                style={{ width:"80%", height: 200 }}
                                pinCount={4}
                              
                                onCodeChanged = {setOtp }
                                autoFocusOnLoad
                                secureTextEntry
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                                onCodeFilled = {(code => {
                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                            />
                        </View>




<TouchableOpacity 
onPress={ handleOtp}
style={{marginTop:windowHeight*0.3}}>
<LinearGradient colors={["#BA5DFE", "#5D36FE"]}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.linear}
>
<Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Verify</Text>
</LinearGradient>
</TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView >

    )
}

export default OtpScreen

