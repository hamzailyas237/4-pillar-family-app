import { View, Text, TouchableOpacity, Button, Image,ImageBackground, TextInput,  } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../../../assets/Images';
import Modal from "react-native-modal"
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../assets/theme';
import AntDesign from "react-native-vector-icons/AntDesign"
import LinearGradient from 'react-native-linear-gradient';
import Feather from "react-native-vector-icons/Feather"
import { useSelector } from 'react-redux';
import axios from 'axios';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const MyJournalsDrawerEdit = ({route}) => {

    const navigation = useNavigation();
    const backArrow = require("../../../assets/Images/arrowback3.png");
    const [modalVisible, setModalVisible] = useState(false);
    const { datetime } = route.params;
    const formattedDateTime = new Date(datetime).toLocaleString();
    const toggleModal = () => {
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
            navigation.navigate("MyJournalsDrawer")
        }, 3000);
        
      };

  return (
   
   <SafeAreaView style={styles.container}>
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
       <Text style={{color:"#fff", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:20, marginLeft:8}}>Back</Text>
       </TouchableOpacity>
           </View>

           <KeyboardAwareScrollView>
           <TouchableOpacity 
           onPress={toggleModal}
           style={styles.doneBtn}>
           <Text style={styles.doneBtnText}>Done</Text>
           </TouchableOpacity>
           

           <Text style={styles.timeHeading}>TimeStamp</Text>

           <View style={styles.timeContainer}>
           <AntDesign name='calendar' size={22} color='#fff' style={styles.icon}/>
           <Text style={styles.time}>{formattedDateTime}</Text>
           <TouchableOpacity style={{width:20, height:20, backgroundColor:"#fff", borderRadius:50, justifyContent:"center", alignItems:"center"}}>
           <AntDesign name='close' color={"#000"} size={14}/>
           </TouchableOpacity>
           </View>


           <Text style={styles.timeHeading}>Entry:1</Text>
           <View style={styles.inputContainer}>
                        <TextInput 
                          placeholder="Entry1"
                          selectionColor="#fff"
                        placeholderTextColor={"#fff"}
                        //   value={credentials.password}
                        // onChangeText={(text) => onChange('password', text)}
                          type="password"
                            id="password"
                            name="password"
                          style={styles.inputField}
                         
                        />
                      
                      </View>
                      <Text style={styles.timeHeading}>Entry:2</Text>
                      <View style={styles.inputContainer}>
                      <TextInput 
                        placeholder="Entry2"
                        selectionColor="#fff"
                      placeholderTextColor={"#fff"}
                      //   value={credentials.password}
                      // onChangeText={(text) => onChange('password', text)}
                        type="password"
                          id="password"
                          name="password"
                        style={styles.inputField}
                       
                      />
                    
                    </View>
                    <Text style={styles.timeHeading}>Entry:3</Text>
                    <View style={styles.inputContainer}>
                    <TextInput 
                      placeholder="Entry3"
                      selectionColor="#fff"
                    placeholderTextColor={"#fff"}
                    //   value={credentials.password}
                    // onChangeText={(text) => onChange('password', text)}
                      type="password"
                        id="password"
                        name="password"
                      style={styles.inputField}
                     
                    />
                  
                  </View>

                  <TouchableOpacity >
                  <LinearGradient colors={["#BA5DFE", "#5D36FE"]}
                  start={{x: 0.2, y: 0.25}} end={{x: 0.9, y: 2.0}}
                  style={styles.linear}
                  >
                 <Text style={{textAlign:"center", color:"#FFFFFF", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:18}}>Delete Item</Text>
                  </LinearGradient>
                  </TouchableOpacity>

                  <Modal 

                  isVisible={modalVisible}
                  backdropOpacity={0.5}
                  // animationIn={false}
                  coverScreen={true}
                  >
                  <View style={styles.modalContainer}>
                  <View style={{alignItems:"center", justifyContent:"center",  width:60, height:60, borderRadius:50, backgroundColor:"#4EE681",}}>
                  <Feather name='check' size={40} color='#000'/>
                  </View>
                  
                  
                  
                  </View>
                  
                  </Modal>
           </KeyboardAwareScrollView>
           </ImageBackground>
           </SafeAreaView>
  )
}

export default MyJournalsDrawerEdit