import React, { useState } from 'react'
import { Text, TouchableOpacity, View, ScrollView, ImageBackground, Image, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../../assets/Images';
import styles from "./styles";
import { Colors, Fonts } from '../../../assets/theme';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
const CredaitCardScreen = () => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    
    const [modalVisible, setModalVisible] = useState(false);
    const [cardData, setCardData] = useState({
        cardName:"",
        cardNum:"",
        monthYear:"",
        cvv:"",
    });

const creditCardImg = require("../../../assets/Images/creditCards.png");
const creditCardMin = require("../../../assets/Images/creditCardMin.png");
   console.log("cardName", cardData.cardName);
   console.log("cardNum", cardData.cardNum);
   console.log("monthYear", cardData.monthYear);
   console.log("cvv", cardData.cvv);

    const onChange = (fieldName, value) => {
        setCardData(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
      };
  
      const onsubmit = (e) => {
        e.preventDefault();
        console.log("singup data", userSingUpAuth);
  try {
    dispatch(singupUser(userSingUpAuth))
  } catch (error) {
    console.log("error", error);
  }
  };
  
  const toggleModalSec = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate("CardSuccess")
    },  3000); // Close the modal after  3 seconds
  };


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
                
                <TouchableOpacity onPress={()=>   navigation.navigate("Team")}
                style={{marginRight:26,}}>
                <AntDesign name='closecircleo' color='#FFFFFF' size={28}/>
                </TouchableOpacity>
                </View>
<KeyboardAwareScrollView
keyboardShouldPersistTaps="handled"
enableOnAndroid={true}
enableAutomaticScroll={true}
bounces={false}
showsVerticalScrollIndicator={false}
contentContainerStyle={{ flexGrow: 1 }}>



<Text style={styles.boldHeading}>Credit/Debit Card</Text>
<Text style={styles.text}>Enter your card details</Text>

<View style={{marginTop:24}}/>
<View  style={styles.inputContainer}>

<TextInput 
style={styles.inputField}
placeholder="Name on Card"
selectionColor="#fff"
placeholderTextColor={"#fff"}
value={cardData.cardName}
onChangeText={(text) => onChange('cardName', text)}
type="cardName"
id="cardName"
name="cardName"
  
/>
</View>


<View style={{marginTop:18}}/>
<View  style={styles.inputContainer}>

<TextInput 
style={styles.inputField}
placeholder="Card Number"
selectionColor="#fff"
placeholderTextColor={"#fff"}
value={cardData.cardNum}
onChangeText={(text) => onChange('cardNum', text)}
type="cardNum"
id="cardNum"
name="cardNum"
  
/>

{cardData.cardNum !== '' && <Image source={creditCardMin} style={styles.creditCardMin}/>}

</View>

<View style={{marginTop:18}}/>
<View style={{flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
<View  style={[styles.inputContainer, {width:"36%"}]}>

<TextInput 
style={styles.inputField}
placeholder="MM/YY"
selectionColor="#fff"
placeholderTextColor={"#fff"}
value={cardData.monthYear}
onChangeText={(text) => onChange('monthYear', text)}
type="monthYear"
id="monthYear"
name="monthYear"
  
/>
</View>


<View  style={[styles.inputContainer, {width:"36%"}]}>

<TextInput 
style={styles.inputField}
placeholder="CVV"
selectionColor="#fff"
placeholderTextColor={"#fff"}
value={cardData.cvv}
onChangeText={(text) => onChange('cvv', text)}
type="cvv"
id="cvv"
name="cvv"
  
/>
</View>
</View>

<Image source={creditCardImg} 
style={{width:"54%",height:"14%",
resizeMode:"contain", alignSelf:"center",
marginTop:windowHeight*0.15
}}/>


{
    Object.values(cardData).every(val => val !== "") ?
    <TouchableOpacity
    onPress={toggleModalSec  }
    style={{marginTop:windowHeight*0.056}}
    >
    <LinearGradient colors={["#BA5DFE", "#5D36FE"]}
    start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
    style={styles.linear}
    >
    <Text style={styles.linearBtn}>Pay Now</Text>
    </LinearGradient>
    </TouchableOpacity> :
    <View style={[styles.paybtnView, {marginVertical: windowHeight *0.06}]}>
    <Text style={styles.paybtnViewText}>
    Pay Now
    </Text>
    
    
    </View>
  }
  

  
  <Modal 

  isVisible={modalVisible}
  backdropOpacity={0.5}
  coverScreen={true}
  >
  <View style={styles.modalContainer}>
  <BarIndicator color='#5D36FE' size={30} style={{marginLeft:46}}/>
  <Text style={styles.modalText}>Verifying Card Details</Text>
 
  </View>
  
  </Modal>

</KeyboardAwareScrollView>
                </ImageBackground>
                </SafeAreaView>
    </>
  )
}

export default CredaitCardScreen
