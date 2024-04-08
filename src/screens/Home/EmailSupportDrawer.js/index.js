import { View, Text, TouchableOpacity, Button, Image,ImageBackground, TextInput,Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import Modal from "react-native-modal"
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../assets/theme';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient';
import BackButton from '../../../components/BackButton';
import { useSelector, useDispatch } from 'react-redux';
import { emailsupportDrawer } from '../../../redux/slices';
import { Toast } from 'toastify-react-native';

const EmailSupportDrawer = () => {

  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const userInfo = useSelector(state => state?.auth?.userInfo)
  const dispatch = useDispatch()
const [fname, setFname] = useState(userInfo?.firstName || '');
const [lastName, setLastName] = useState(userInfo?.lastName || '');
const [role, setRole] = useState(userInfo?.role || '');

useEffect(()=>{
  setFname(userInfo?.firstName || '');
  setLastName(userInfo?.lastName || '');
  setRole(userInfo?.role || '');

}, [userInfo])
  const [inputs , setInputs] = useState({
    email:'',
    message :'',
    firstName: fname,
    lastName: lastName,
    role:role
  });
  console.log(inputs.email);
  console.log(inputs.message);
  const [modalVisible, setModalVisible] =useState(false);
   
  const  toggleModal = () =>{
    setModalVisible(true)
    setTimeout(() => {
      setModalVisible(false)
    }, 3000);


}

    const onChange = (fieldName, value) => {
      setInputs(prevState => ({
        ...prevState,
        [fieldName]: value
      }));
    };

    const onsubmit = () => {
      if (inputs.email.trim() !== '' && inputs.message.trim() !== '' ) {
        dispatch(emailsupportDrawer({...inputs,navigation,}));
        toggleModal()
}else{
  Toast.error("Requid Input Field")
}
        
     


};

  return (
   <>
   
     
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
<BackButton 
onPress={()=> navigation.goBack()}
/>
           <Text style={styles.heading}>Email Support</Text>


           <Text style={styles.inputLabel}>Your Email</Text>

           <View style={styles.inputContainer}>
           <TextInput 
             placeholder="Email"
             selectionColor="#fff"
           placeholderTextColor={"#fff"}
             value={inputs.email}
           onChangeText={(text) => onChange('email', text)}
             type="email"
               id="email"
               name="email"
             style={styles.inputField}
            
           />
         
         </View>


         <Text style={styles.inputLabel}>Your Message</Text>

         <View style={[styles.inputContainer, {height:106}]}>
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

       <TouchableOpacity 
       onPress={onsubmit}
       style={{marginTop:windowHeight *0.25}}>
       <LinearGradient colors={["#BA5DFE", "#5D36FE"]}
       start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
       style={styles.linear}
       >
      <Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Submit</Text>
       </LinearGradient>
       </TouchableOpacity>

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

           </KeyboardAwareScrollView>
           </ImageBackground>
           </SafeAreaView>
   </>
  )
}

export default EmailSupportDrawer