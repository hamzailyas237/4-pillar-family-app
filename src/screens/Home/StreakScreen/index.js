
import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageBackground } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import { Colors, Fonts } from '../../../assets/theme';
import Header from '../../../components/header';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const StreakScreen = (props) => {
    const navigation = useNavigation()
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
                    <Header 
                    // onPress={() => navigation.navigate("DrawerNavigator")}
                    // onPress={()=>  navigation.navigate("MyDrawer")  }
                    // onPress={()=> props.navigation.openDrawer()}
                        image={Images.user.userProfile}
                        imgPress={() => navigation.navigate('MyProfile')}
                    />
                        <View style={{ marginTop: 25 }} />

                        <View style={{width:"34%", backgroundColor:"#000", borderRadius:16, borderWidth:1, borderColor:"#fff", marginLeft:16, marginBottom:16, paddingLeft:14, padding:3}}>
                        <Text style={{fontFamily:"Now-Regular-BF6542f7138c477", color:"#fff"}}>Jan 23, 2024</Text>
                        </View>
                        <Text style={styles.headtext}>Welcome back,{"\n"}Ronald Cook!</Text>
                        <View style={{ paddingHorizontal: 15, marginTop: 10, flex: 1 }} >
                          
                      
                            <View style={{ marginVertical: 10, marginTop: 25 }}>
                                <Button button1 btn1 onPress={() => navigation.navigate('WriteGratitude')} title={'My Streak'}
                                    borderRadius={10}
                                />
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default StreakScreen


