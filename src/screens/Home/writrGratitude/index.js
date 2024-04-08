import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, } from 'react-native';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { writeGrtitude } from '../../../redux/slices';
import { Toast } from 'toastify-react-native';
import Entypo from "react-native-vector-icons/Entypo";
import { useDispatch } from 'react-redux';
const WriteGratitude = () => {
  const backArrow = require("../../../assets/Images/arrowback3.png");
   const navigation = useNavigation();
   const [modalVisible, setModalVisible] = useState(false);
   
   const dispatch = useDispatch();
   const userInfo = useSelector((state) =>  state?.userInfo );
   const [id, setId] = useState(userInfo?.id || '');
    const [inputs, setInputs] = useState({

      userId: id,
      gratitudeInput1: "",
      gratitudeInput2: "",
      gratitudeInput3: ""
    });
    console.log("userId===================>", inputs);
useEffect(()=>{
setId(userInfo?.id || '')

}, [userInfo])

    const onChange = (fieldName, value) => {
        setInputs(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
      };

      const toggleModalSec = () => {
        setModalVisible(true);
        setTimeout(() => {
          setModalVisible(false);
        
        },  3000); 
      };
      const onsubmit = (e) => {
        e.preventDefault();
       
        // Check if all inputs are not empty
        if (inputs.gratitudeInput1.trim() !== '' && inputs.gratitudeInput2.trim() !== '' && inputs.gratitudeInput3.trim() !== '' ) {
           dispatch(writeGrtitude({...inputs, navigation, }))
            toggleModalSec(); // This will be called if the signup is successful

            
           console.log("credentialsSuccess", inputs);
        } else {
          Toast.error("Empty Field");
        }
       };
       



    return (
        // <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}
            >
                <KeyboardAwareScrollView
                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
             <View style={{backgroundColor: 'rgba(67, 59, 115, 255)',
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            flexDirection:"row",
            alignItems:"center",
            padding: 15,
            }}>
              <TouchableOpacity 
                    onPress={()=> navigation.goBack()}
                    style={styles.containerBackBtn}>
                <Image source={backArrow} style={styles.backArrow}/>
                </TouchableOpacity>
             <Text style={{fontFamily:"Now-Medium-BF6542f7137648d", color:"#fff",fontSize:18, marginLeft:8}}>Back</Text>
             </View>


            <Text style={styles.inputsHeading}>1. What are you grateful for?</Text>
<View style={{marginTop:16}}/>
            <View  style={styles.inputContainer}>

            <TextInput 
            style={styles.inputField}
            // placeholder="Email"
            selectionColor="#fff"
            activeUnderlineColor="transparent"
            underlineColor="transparent"
            value={inputs.gratitudeInput1}
            onChangeText={(text) => onChange('gratitudeInput1', text)}
            type="gratitudeInput1"
            id="gratitudeInput1"
            name="gratitudeInput1"
              
          />
            </View>

            <Text style={styles.inputsHeading}>2. What are you grateful for?</Text>
            <View style={{marginTop:16}}/>
                        <View  style={styles.inputContainer}>
            
                        <TextInput 
                        style={styles.inputField}
                        // placeholder="Email"
                        selectionColor="#fff"
                        activeUnderlineColor="transparent"
                        underlineColor="transparent"
                        value={inputs.gratitudeInput2}
            onChangeText={(text) => onChange('gratitudeInput2', text)}
                        type="gratitudeInput2"
                        id="gratitudeInput2"
                        name="gratitudeInput2"
                          
                      />
                        </View>

                        <Text style={styles.inputsHeading}>3. What are you grateful for?</Text>
                        <View style={{marginTop:16}}/>
                                    <View  style={styles.inputContainer}>
                        
                                    <TextInput 
                                    style={styles.inputField}
                                    // placeholder="Email"
                                    selectionColor="#fff"
                                    activeUnderlineColor="transparent"
                                    underlineColor="transparent"
                                    value={inputs.gratitudeInput3}
                                    onChangeText={(text) => onChange('gratitudeInput3', text)}
                                    type="gratitudeInput3"
                                    id="gratitudeInput3"
                                    name="gratitudeInput3"
                                      
                                  />
                                    </View>


                                    <TouchableOpacity onPress={onsubmit}>
                                    <LinearGradient colors={["#BA5DFE", "#5D36FE"]}
                                    start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
                                    style={styles.linear}
                                    >
                                   <Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:20}}>Submit</Text>
                                    </LinearGradient>
                                    </TouchableOpacity>



                                    <Modal 

                                    isVisible={modalVisible}
                                    backdropOpacity={0.5}
                                    // animationIn={false}
                                    coverScreen={true}
                                    >
                                    <View style={{backgroundColor:"#000", width:"50%", height:"20%", alignSelf:"center", justifyContent:"center", alignItems:"center" , borderRadius:12, borderColor:"#fff", borderWidth:1}}>
                                    <View style={{ width:"60%", height:"70%", backgroundColor:"#4EE681", borderRadius:50, justifyContent:"center", alignItems:"center"}}>
                                    <Entypo name='check' color={"#000"} size={36}/>
                                    </View>
                                    </View>
                                    
                                    </Modal>
                </KeyboardAwareScrollView>
            </ImageBackground>
        // </SafeAreaView>
    );
};

export default WriteGratitude;
