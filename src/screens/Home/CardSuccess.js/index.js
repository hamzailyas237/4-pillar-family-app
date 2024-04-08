import { Text, TouchableOpacity, View, ScrollView, ImageBackground, Image, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../../assets/Images';
import styles from './styles';
import { Colors, Fonts } from '../../../assets/theme';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export const CardSuccess = () => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const daimondImg = require("../../../assets/Images/daimond.png");
  return (
    <>
    
    
    <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>


                <View style={styles.headingContainer}>
<Text style={styles.heading}>
Successfull
</Text>

<TouchableOpacity 
onPress={()=> navigation.navigate("MyTabs")}
style={{marginRight:26,}}>
<AntDesign name='closecircleo' color='#FFFFFF' size={28}/>
</TouchableOpacity>
</View>

<ScrollView 
bounces={false}
showsVerticalScrollIndicator={false}
contentContainerStyle={{ flexGrow: 1 }}
>




<Image source={daimondImg} style={[styles.daimondImg, {marginTop:windowHeight* 0.1}]}  resizeMode="contain"/>
<Text style={styles.boldHeading}>
HURRAY! 
</Text>


<Text style={styles.simpleHeading}>You Bought</Text>

<Text style={styles.pointsHeading}>299 Points</Text>

<Text style={{color:"#fff", textAlign:"center",marginTop:38, fontSize:20}}>

<Text style={{fontFamily:"Now-Regular-BF6542f7138c477",}}>Your total points are now </Text>
<Text style={{fontFamily:"Now-Bold-BF6542f7138a8d2"}}>580</Text>
</Text>


<TouchableOpacity  
onPress={()=> navigation.navigate("AvailabelPoint")}
style={{marginVertical:48}}
>
<LinearGradient colors={["#BA5DFE", "#5D36FE"]}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.linear}
>
<Text style={styles.linearBtn}>Transfer Coins</Text>
</LinearGradient>
</TouchableOpacity>
</ScrollView>

</ImageBackground>
</SafeAreaView>
</>
  )
}
