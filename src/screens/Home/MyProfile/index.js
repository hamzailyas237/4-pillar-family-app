
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors } from '../../../assets/theme';
import Modal from "react-native-modal"
import { Avatar } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import Feather from "react-native-vector-icons/Feather"
import { useNavigation } from '@react-navigation/native';
import { updateProfile } from '../../../redux/slices';
const MyProfile = () => {

  const backArrow = require("../../../assets/Images/arrowback3.png");
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const userInfo = useSelector((state) =>  state?.userInfo );
    const token = useSelector((state) => state.token)
    const [fname, setFname] = useState(userInfo?.firstName || '');
    const [lname, setLname] = useState(userInfo?.lastName || '');
    const [email, setEmail] = useState(userInfo?.email || '');
    const [dob, setDob] = useState(userInfo?.dob || '');
    const [isEditable, setIsEditable] = useState(false);

    const [inputs, setInputs] = useState({
      firstName: fname,
      lastName: lname,
      dob: dob,
      token:token
    })
   
 console.log(inputs.firstName);
 console.log(inputs.lastName);
 console.log(inputs.dob);
   
    useEffect(() => {
        setFname(userInfo?.firstName || '');
        setLname(userInfo?.lastName || '');
        setEmail(userInfo?.email || '');
        setDob(userInfo?.dob || '');
      }, [userInfo]);


      const onChange = (fieldName, value) => {
        setInputs(prevState => ({
          ...prevState,
          [fieldName]: value
        }));
      };


      const onsubmit = () => {
            dispatch(updateProfile(inputs))
            toggleModalSec()


};

      const toggleModalSec = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      toggleEditable();
    },  2000); 
  };

      const toggleEditable = () => {
        setIsEditable(!isEditable);
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
                          style={styles.containerArrow}
                          onPress={ ()=> navigation.goBack()}>
                      
                      <Image source={backArrow} style={styles.backArrow}/>
                      </TouchableOpacity>

                          {isEditable ? 
                            <TouchableOpacity
                            onPress={onsubmit} 
                            style={{marginRight:26,}}
                           >
                            <Text style={{color:"#1492E6", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:20}}>Save</Text>
                            </TouchableOpacity>:  
                            <TouchableOpacity
                            onPress={toggleEditable} 
                             style={{flexDirection:"row",alignItems:"center", marginRight:26, alignSelf:"flex-end"}}>
                            <Feather name='edit' color='#1492E6' size={20}/>
                            <Text style={{color:"#1492E6", fontFamily:"Now-Medium-BF6542f7137648d", fontSize:20}}>Edit</Text>
                            </TouchableOpacity> }
                          </View>

                       
                        <Text style={styles.headtext}>My Profile</Text>
                        <View style={{ paddingHorizontal: 15 }} >
                            <View style={{ marginTop: 10 }} />

                            <View style={{flexDirection:"row", alignItems:"center"}}>
                            <TouchableOpacity
                            // onPress={() => props.navigation.navigate('Profile')}
                            style={styles.imgView}>
                            <Avatar.Image
                                size={90}
                                style={styles.image}
                                source={Images.user.userProfile}
                            />
                        </TouchableOpacity>

                        {isEditable && 
                        
                        <Text style={styles.avatarHeading}>Create New Avatar</Text>
                        }
                            </View>
                           

                            
<View style={{marginTop:22}}/>
                            <View  style={styles.inputContainer}>

                            <TextInput 
                            style={styles.inputField}
                            editable={isEditable}
                            selectionColor="#fff"
                            activeUnderlineColor="transparent"
                            underlineColor="transparent"
                            value={inputs.firstName}
                            onChangeText={(text) => onChange('firstName', text)}
                            type="firstname"
                            id="firstname"
                            name="firstname"
                              
                          />
                            </View>


                            <View style={{marginTop:12}}/>
                            <View  style={styles.inputContainer}>

                            <TextInput 
                            style={styles.inputField}
                            editable={isEditable}
                            selectionColor="#fff"
                            activeUnderlineColor="transparent"
                            underlineColor="transparent"
                           value={inputs.lastName}
                           onChangeText={(text)=> onChange('lastName' ,text)}
                            type="lastname"
                            id="lastname"
                            name="lasttname"
                              
                          />
                            </View>

                            <View style={{marginTop:12}}/>
                       

{ !isEditable &&

<>
<View style={styles.emailContainer}>
<Text style={{color:"#fff", fontFamily: "Now-Regular-BF6542f7138c477",}}>{email}</Text>
</View>
  <Text style={{color:"#FF6060", marginLeft:22, marginTop:8,  fontFamily: "Now-Regular-BF6542f7138c477", fontSize:16}}>You can't change the email.</Text>

</>

}
                          


                            <View style={{marginTop:26}}/>
                            <View  style={styles.inputContainer}>

                            <TextInput 
                            style={styles.inputField}
                            editable={isEditable}

                            selectionColor="#fff"
                            activeUnderlineColor="transparent"
                            underlineColor="transparent"
                            value={inputs.dob}
                            onChangeText={(text)=> onChange('dob', text)}
                            type="dob"
                          id="dob"
                          name="dob"
                              
                          />
                            </View>

                        </View>



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


<Text style={styles.modalHeading}>Saved</Text>

<Text style={styles.modalText}>Profile updated successfully.</Text>
</View>

</Modal>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}
export default MyProfile

