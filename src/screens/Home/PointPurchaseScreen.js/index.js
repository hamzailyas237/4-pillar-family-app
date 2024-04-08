import { Text, TouchableOpacity, View, ScrollView, ImageBackground, Image, FlatList, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../../assets/Images';
import styles from './styles';
import { Colors, Fonts } from '../../../assets/theme';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const PointPurchaseScreen = () => {
const [btns, setBtns] =useState(0);
const navigation = useNavigation();
    const daimondImg = require("../../../assets/Images/daimond.png");
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;


  return (
   <>
   
   <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>

                <View style={styles.headingContainer}>
<Text style={styles.heading}>
Purchase
</Text>

<TouchableOpacity 
onPress={()=>   navigation.navigate("Team")}
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
Get Points &{"\n"}Enjoy More
</Text>

<View style={styles.btnContainer}>

<TouchableOpacity 
onPress={()=> setBtns(0)}
style={[styles.btnContainerInner, btns ==0 && styles.updateBtns]}>

<Text style={[styles.btnText, btns ==0 && styles.updateBtnsText]}>$4.99</Text>
</TouchableOpacity>

<TouchableOpacity 
onPress={()=> setBtns(1)}
style={[styles.btnContainerInner, btns ==1 && styles.updateBtns]}>

<Text style={[styles.btnText, btns ==1 && styles.updateBtnsText]}>$4.99</Text>
</TouchableOpacity>

<TouchableOpacity
onPress={()=> setBtns(2)} 
style={[styles.btnContainerInner, btns ==2 && styles.updateBtns]}>

<Text style={[styles.btnText, btns ==2 && styles.updateBtnsText]}>$4.99</Text>
</TouchableOpacity>
</View>


<Text style={styles.pointsHeading}>299 Points</Text>


<TouchableOpacity  
onPress={()=> navigation.navigate("CredaitCardScreen")}
>
<LinearGradient colors={["#BA5DFE", "#5D36FE"]}
start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
style={styles.linear}
>
<Text style={styles.linearBtn}>Buy Now</Text>
</LinearGradient>
</TouchableOpacity>
</ScrollView>

                </ImageBackground>
                </SafeAreaView>
   </>
  )
}

export default PointPurchaseScreen
