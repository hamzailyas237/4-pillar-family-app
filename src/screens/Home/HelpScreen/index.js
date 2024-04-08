
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../components/BackButton';
import { useSelector, useDispatch } from 'react-redux';
import { helpMessage } from '../../../redux/slices';
import LinearGradient from 'react-native-linear-gradient'
import { Toast } from 'toastify-react-native';


const HelpScreen = () => {
    const navigation = useNavigation();
    const userInfo = useSelector(state => state?.auth?.userInfo)
    const dispatch = useDispatch()
  const [fname, setFname] = useState(userInfo?.firstName || '');
  const [lastName, setLastName] = useState(userInfo?.lastName || '');
  const [email, setEmail] = useState(userInfo?.email)
  const [role, setRole] = useState(userInfo?.role || '');
  
  useEffect(()=>{
    setFname(userInfo?.firstName || '');
    setLastName(userInfo?.lastName || '');
    setRole(userInfo?.role || '');
    setEmail(userInfo?.role || '');
  
  }, [userInfo])
    const [inputs , setInputs] = useState({
      email:email,
      message :'',
      firstName: fname,
      lastName: lastName,
      role:role
    });


    const onChange = (fieldName, value) => {
        setInputs(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
      };


      const onsubmit = () => {
        if (inputs.message.trim() !=='' ) {
          dispatch(helpMessage({...inputs,navigation, }))
        }else{
          Toast.error("Requid Input Field")
        }
            

      };
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, paddingTop: 5, backgroundColor: Colors.green }}>
                <BackButton
                onPress={()=> navigation.goBack()}
                />
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                       
                        <Text style={styles.headtext}>Help</Text>

                        <View style={styles.inputContainer}>
                        <TextInput 
                          placeholder="Write..."
                          selectionColor="#fff"
                        placeholderTextColor={"#fff"}
                          value={inputs.message}
                        onChangeText={(text) => onChange('message', text)}
                          type="message"
                            id="message"
                            name="message"
                          style={styles.inputField}
                         
                        />
                   
</View>
<TouchableOpacity onPress={onsubmit }
style={{marginTop:26}}
>
<LinearGradient colors={["#BA5DFE", "#5D36FE"]}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.linear}
>
<Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Submit</Text>
</LinearGradient>
</TouchableOpacity>

                        <View style={{marginTop:26}}>
                        <Image source={Images.backgroundImages.bg1} style={styles.img} />
                        <Image source={Images.backgroundImages.bg2}  style={styles.img}/>
                        <Image source={Images.backgroundImages.bg3}  style={styles.img}/>
                        </View>
                            

                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}


export default HelpScreen

