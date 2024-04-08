import { Text, TouchableOpacity, View, ScrollView, ImageBackground, Image, FlatList,  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../assets/Images'
import { Colors, Fonts } from '../../../assets/theme';
import styles from './styles'
import Header from '../../../components/header';
import Radiobtns from '../../../components/Radiobtns';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign"
import Modal from "react-native-modal"
import { CheckIcon, QuestionIcon } from "../../../assets/theme/svgimages";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const ChildRewards = () => {
    const navigation = useNavigation();
    const backArrow = require("../../../assets/Images/arrowback3.png");
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ImageBackground
        source={Images.backgroundImages.BackgroundImage}
        resizeMode="cover"
        style={{ flex: 1, backgroundColor: Colors.green }}>
        <View style={{backgroundColor:"rgba(67, 59, 115, 255)", padding:15,  borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,}}>
        
        <TouchableOpacity 
        style={styles.headerBtn}
        onPress={()=> navigation.goBack()}
        >
    
    <Image source={backArrow} style={styles.backArrow}/>
    <Text style={{color:"#fff", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:20, marginLeft:12}}>Back</Text>
    </TouchableOpacity>
        </View>


        <Text style={styles.heading}>Unlock your rewards</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consetetur{'\n'} sadipscing elitr, sed diam nonumy{'\n'} eirmod tempor invidunt ut labore et</Text>
        </ImageBackground>
        
        </SafeAreaView>
  )
}

export default ChildRewards