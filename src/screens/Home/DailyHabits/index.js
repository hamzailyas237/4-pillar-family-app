import { Text, TouchableOpacity, View, TextInput, ImageBackground, Image,} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../assets/Images'
import { Colors, Fonts } from '../../../assets/theme';
import styles from './styles'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Radiobtns from '../../../components/Radiobtns';
import AntDesign from "react-native-vector-icons/AntDesign"
import Modal from "react-native-modal"
import BackButton from '../../../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const DailyHabits = () => {
  const navigation = useNavigation();
  const daimondImg = require("../../../assets/Images/daimond.png");
  const [selectedOption, setSelectedOption] = useState(0);
const [input, setInput] = useState()
console.log("🚀 ~ DailyHabits ~ input:", input)

  return (
    <SafeAreaView style={styles.container}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode='cover' style={{ flex: 1, }}>
                <BackButton 
onPress={()=> navigation.navigate('Purpose')}
/>
                <KeyboardAwareScrollView

                    keyboardShouldPersistTaps="handled"
                    enableOnAndroid={true}
                    enableAutomaticScroll={true}
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    
                    
                    <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Daily Habits</Text>

<View style={styles.pointContainer}>
<Image source={daimondImg} style={styles.daimondImg}  resizeMode="contain"/>
<Text style={styles.pointText}>145 Pts</Text>
</View>
                    </View>
                    <View style={styles.btnrow}>
                   
                    <TouchableOpacity
                    style={[styles.btntext, {backgroundColor:selectedOption === 0 ? '#5D36FE' : null }]}
                    onPress={() => setSelectedOption(0)} >
                   
                    <Text  style={styles.rowBtnText}>
                    Recent Tasks
                        </Text>
                
                        
                    </TouchableOpacity>
                    
                   
                    <TouchableOpacity 
                    style={[styles.btntext, {backgroundColor:selectedOption === 1 ? '#5D36FE' : null }]}
                    onPress={() => setSelectedOption(1)} >
                   
                    <Text  style={styles.rowBtnText}>
                    Completed Tasks
                        </Text>
                
                        
                    </TouchableOpacity>
                    </View>

                    <View  style={styles.inputContainer}>

                    <TextInput 
                    style={styles.inputField}
                    placeholder="Type something..."
                    placeholderTextColor={'#fff'}
                    selectionColor="#fff"
                   
                    value={input}
                    onChangeText={setInput}
                    type="input"
                    name="input"
                    id="input"
                      
                  />
                    </View>
                    </KeyboardAwareScrollView>
                </ImageBackground>
                </SafeAreaView>
  )
}

export default DailyHabits