import {
  Text, View, SafeAreaView,
  ImageBackground,  
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import React, { useState } from 'react';
import { ProgressBar } from 'react-native-paper';
import styles from './styles';
import { Colors, Fonts } from '../../../assets/theme';
import Images from '../../../assets/Images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { signupUser } from '../../../redux/slices';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";
import { Toast } from 'toastify-react-native';
import CalendarPicker from 'react-native-calendar-picker';

const SignUpScreen = ({route,props}) => {
  const [showIcon, setShowIcon] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [calendarModalVisible, setCalanderModalVisible] = useState(false);
  const [radioBtn, setRadioBtn] = useState('Easy');
  console.log("🚀 ~ SignUpScreen ~ radioBtn:", radioBtn)
  
  const backArrow = require("../../../assets/Images/arrowback3.png")
  const userType = route?.params?.usertType;
  console.log("User Type:=========================>", userType); 
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const [userSingUpAuth, setUserSingUpAuth]= useState({
      role:userType,
      firstName:"",
      lastName:"",
      email:"",
      dob:"",
      password:"",
      scoringLevel:radioBtn

  });
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height

//   const handleDateChange = (date) => {
//     setSelectedDate(date.toISOString().split('T')[0]); // Format as YYYY-MM-DD
//     setModalVisible(false); // Close the modal after selecting a date
//  };
const handleDateChange = (date) => {
  const formattedDate = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  setUserSingUpAuth(prevState => ({
     ...prevState,
     dob: formattedDate
  }));
  setModalVisible(false); // Close the modal after selecting a date
 };
 

  const toggleModalSec = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    },  2000); 
  };

  const onChange = (fieldName, value) => {
      setUserSingUpAuth(prevState => ({
        ...prevState,
        [fieldName]: value
      }));
    };

    const onsubmit = (e) => {
      e.preventDefault();
     
      if (userSingUpAuth.firstName.trim() !== '' && 
           userSingUpAuth.lastName.trim() !== '' && 
           userSingUpAuth.email.trim() !== '' && 
           userSingUpAuth.dob.trim() !== '' && 
           userSingUpAuth.password.trim() !== '') {
         dispatch(signupUser({...userSingUpAuth, navigation}))
           .unwrap() // This will return the payload if the promise is resolved, or throw an error if the promise is rejected
           .then(() => {
             toggleModalSec(); // This will be called if the signup is successful
           })
           .catch((error) => {
             // This will be called if there's an error, including if the user already exists
            //  console.error(error);
             if (error.message === 'A user with this email already exists.') {
               Toast.error(error.message);
               // Optionally, call toggleModalSec() here if you want to close the modal or show an error message
             }
           });
      } else {
         Toast.error("Empty Field");
      }
     };
     


  const toggelPass = () =>{
      setShowIcon(!showIcon)
  };


  

  return (
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
                  <View style={styles.container}>
                    

                       <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                       
                         <TouchableOpacity 
                         style={styles.backArrowcontainer}
                         onPress={()=> navigation.goBack()}
                         >
                     <Image source={backArrow} style={styles.backArrow}/>
                     </TouchableOpacity>

                     <TouchableOpacity style={{marginRight:26,alignSelf:"flex-end",}} onPress={()=> navigation.navigate("Login")}>
                     <Text style={{fontFamily:"Now-Medium-BF6542f7137648d", color:"#fff",  fontSize:17}}>Login</Text>
                     </TouchableOpacity>

                       </View>
                      
<View style={{marginTop:8}}/>


                      <View style={{ paddingHorizontal: 15, marginTop:16 }}>
                          <ProgressBar progress={0.5} color={Colors.background.secondary} />
                      </View>
                      <Text style={[styles.headtext, {paddingLeft:15}]}>Set up your profile</Text>
                      <Text style={[styles.text, {paddingHorizontal:15}]}>Create an account so you can manage your{"\n"} 4 pillars of the family.</Text>
                      <View  style={styles.inputContainer}>

                      <TextInput 
                      style={styles.inputField}
                      placeholder="First Name"
                      selectionColor="#fff"
                      placeholderTextColor={"#fff"}
                      value={userSingUpAuth.firstName}
                      onChangeText={(text) => onChange('firstName', text)}
                      type="firstname"
                      id="firstname"
                      name="firstname"
                        
                    />
                      </View>

                      <View  style={styles.inputContainer}>

                      <TextInput 
                      style={styles.inputField}
                      placeholder="Last Name"
                      selectionColor="#fff"
                      placeholderTextColor={"#fff"}
                      value={userSingUpAuth.lastName}
                      onChangeText={(text) => onChange('lastName', text)}
                      type="lastname"
                      id="lastname"
                      name="lasttname"
                        
                    />
                      </View>


                      <View  style={styles.inputContainer}>

                      <TextInput 
                      style={styles.inputField}
                      placeholder="Email"
                      selectionColor="#fff"
                      placeholderTextColor={"#fff"}
                      value={userSingUpAuth.email}
                      onChangeText={(text) => onChange('email', text)}
                      type="email"
                      id="email"
                      name="email"
                        
                    />
                      </View>


                      <View style={styles.inputContainer}>
                      <TextInput 
                        placeholder="Date of Birth"
                        selectionColor="#fff"
                        placeholderTextColor={"#fff"}
                        value={userSingUpAuth.dob}
                        onChangeText={(text) => onChange('dob', text)}
                        style={styles.inputField}
                        type="dob"
                        id="dob"
                        name="dob"
                      />
<TouchableOpacity  onPress={() => setCalanderModalVisible(true)}>
<AntDesign name='calendar' size={22} color='#BA5DFE' style={styles.icon}/>
</TouchableOpacity>

                      
                     
                    </View>


                    <View style={styles.inputContainer}>
                    <TextInput 
                      placeholder="Password"
                      selectionColor="#fff"
                    placeholderTextColor={"#fff"}
                      value={userSingUpAuth.password}
                      onChangeText={(text) => onChange('password', text)}
                      secureTextEntry={showIcon}
                      style={styles.inputField}
                      type="password"
                      id="password"
                      name="password"
                    />
                    <TouchableOpacity onPress={toggelPass}>
                    <Entypo name={showIcon ? "eye" : "eye-with-line"} color='#fff' size={22} style={styles.icon}/>

                    
                    </TouchableOpacity>
                  </View>

                 


                      <View style={{ marginTop: 10, padding: 15, }}>
                         
                        
                       
                     
                       
                          <Text style={[styles.headtext, { fontSize: Fonts.size.xLarge,  }]}>Account Scoring Level</Text>
                          <Text style={styles.text}>This can be change in your user profile later. </Text>

<View style={{flexDirection:"row", alignItems:"center",  marginVertical:12}}>

<TouchableOpacity onPress={()=> setRadioBtn('Easy')}
style={styles.radioBtnContainer}
>


{radioBtn == 'Easy' && <View style={styles.radioBtnContainerInner}/>}



</TouchableOpacity>
<Text style={{color:"#fff", marginHorizontal:8}}>Easy</Text>





<TouchableOpacity onPress={()=> setRadioBtn('Medium')}
style={styles.radioBtnContainer}
>


{radioBtn == 'Medium' && <View style={styles.radioBtnContainerInner}/>}

</TouchableOpacity>
<Text style={{color:"#fff", marginHorizontal:8}}>Medium</Text>



<TouchableOpacity onPress={()=> setRadioBtn('Hard')}
style={styles.radioBtnContainer}
>


{radioBtn == 'Hard' && <View style={styles.radioBtnContainerInner}/>}

</TouchableOpacity>
<Text style={{color:"#fff", marginHorizontal:8}}>Hard</Text>

</View>


                        
                          <Text style={{color:"#A6A6A6", lineHeight:21, fontFamily:"Now-Regular-BF6542f7138c477",  fontSize: Fonts.size.normal,}}>
                          You are signing up for a 14 day trial. At anytime {"\n"}you pick a plan, refer a friend and invite family members.{"\n"}{"\n"} When you refer 2 friends that sign up you will{"\n"} receive 1 year free! Sign up is by picking a plan{"\n"} or referring a friend.
                          </Text>

                         <TouchableOpacity onPress={onsubmit} >
                         <LinearGradient colors={["#BA5DFE", "#5D36FE"]}
                         start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
                         style={styles.linear}
                         >
                        <Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Sign Up</Text>
                         </LinearGradient>
                         </TouchableOpacity>
                      </View>
                      <Modal isVisible={calendarModalVisible} >
                      <View style={{ backgroundColor: 'white', borderRadius:8, borderWidth:1.6, borderColor:"#5D36FE", 
                    height:"50%" }}>
                        <CalendarPicker 
                        
                        previousTitle={"Previous"}
                        previousTitleStyle={{color:"#000", marginLeft:12, }}
                        nextTitle={"Next"}
                        nextTitleStyle={{color:"#000", marginRight:14 }}
                        todayBackgroundColor="#5D36FE"
                        textStyle={{fontFamily:"Now-Medium-BF6542f7137648d"}}
                        todayTextStyle={{fontFamily:"Now-Bold-BF6542f7138a8d2", color:"#fff"}}
                        onDateChange={handleDateChange}
                        // monthTitle="Month" // Assuming the library uses monthTitle
                        // yearTitle="Year" 
                       
                        selectMonthTitle="Month"
 selectYearTitle="Year"
                        />
                        <TouchableOpacity 
                        style={{ alignSelf:"center", borderBlockColor:"#5D36FE", borderWidth:1, borderRadius:8, paddingHorizontal:62, paddingVertical:6}}
                        onPress={() => setCalanderModalVisible(false)}>
                          <Text style={{color:"#000", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:15 }}>Select</Text>
                        </TouchableOpacity>
                      </View>
                    </Modal>
                     
                      <Modal 

                      isVisible={modalVisible}
                      backdropOpacity={0.5}
                      // animationIn={false}
                      coverScreen={true}
                      >
                      <View style={{backgroundColor:"#fff", width:"50%", height:"20%", alignSelf:"center", justifyContent:"center", alignItems:"center" , borderRadius:8}}>
                      <ActivityIndicator size={60} color="#BA5DFE"/>
                      
                      </View>
                      
                      </Modal>
                  </View>
              </KeyboardAwareScrollView>
          </ImageBackground>
      </SafeAreaView>
  )
}

export default SignUpScreen

