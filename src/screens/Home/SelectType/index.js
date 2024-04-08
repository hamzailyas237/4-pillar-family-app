import React ,{useState}from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity, Dimensions  } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import styles from '../SelectType/styles';
import BackArrowButton from '../../../components/BackArrowButton';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get("window"). width;
const windowHeight = Dimensions.get("window"). height;


const SelectType = ({  route}) => {
  const navigation = useNavigation();
const  bgImg  = require("../../../assets/Images/bg3.png");
const type = route.params?.type;
  console.log("Type: ", type);
 
 
    
    

  const navigationHande =({value}) =>{
    console.log("value=====================>", value);
    const type = route.params?.type;
    console.log("Type: ", type);
    switch(type) {
         case "signin":
           navigation.navigate("Login" , {usertType: value})
           break;
         case "creataccount":
           navigation.navigate("SignUpScreen", {usertType: value})
           break;
         default:
           alert("bug")
       }


  }

 

 
  return (
    <>
  <ImageBackground 
  style={styles.container}
  source={bgImg}>

<BackArrowButton 
onPress={()=> navigation.navigate("Onboarding")}
/>
 
<Text style={styles.heading}>Select Type</Text>

<TouchableOpacity 
 style={styles.blurType}
 onPress={()=>  navigationHande({ value: "parent"})}
>
 <Text style={styles.text}>Parent</Text>
 <AntDesign name='arrowright' size={30} color="#fff"/>
</TouchableOpacity>

{type == 'signin' &&
<TouchableOpacity style={[styles.blurType, {marginTop:windowHeight*0.06}]}  onPress={ ()=> navigationHande ({ value:"child"})}>
<Text style={styles.text}>Child</Text>
<AntDesign name='arrowright' size={30} color="#fff"/>
</TouchableOpacity>

}


  </ImageBackground>
    </>
  )
}

export default SelectType;
