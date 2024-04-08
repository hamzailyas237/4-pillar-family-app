import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import Images from '../../assets/Images'
import { useNavigation } from '@react-navigation/native';


const PurposeCompo = () => {
    const calanderImg = require("../../assets/Images/calender1.png");
    const mailImg = require("../../assets/Images/envelop1.png");
    const dumbellImg = require("../../assets/Images/dumbells1.png");
const navigation = useNavigation();
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height 
    return (
        <>
        <View style={{ flexDirection: 'row', paddingHorizontal: 5,}}>
        <View>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('DailyHabits')}
        style={styles.containerTopbtn}>
        <Image source={calanderImg} style={{width: windowWidth *0.13, height:windowHeight *0.08, resizeMode:"cover"}} />
    </TouchableOpacity >
    <Text style={styles.textTopbtn} > DailyHabits
    </Text>
        </View>
       
       <View>
       <TouchableOpacity style={styles.containerTopbtn}>
       <Image source={mailImg} style={{width: windowWidth *0.24, height:windowHeight *0.24, resizeMode:"cover"}} />
   </TouchableOpacity >
   <Text style={styles.textTopbtn} > Weekly Tasks
        </Text>
       </View>
  
       <View>
       <TouchableOpacity style={styles.containerTopbtn}>
       <Image source={dumbellImg} style={{width: windowWidth *0.24, height:windowHeight *0.24, resizeMode:"cover"}} />
   </TouchableOpacity >

   <Text style={[styles.textTopbtn, {marginLeft:32}]} > Goals
        </Text>
           </View>
       </View>
   

       
        </>
    )
}

export default PurposeCompo

