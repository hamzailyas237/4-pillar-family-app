
import { Text, TouchableOpacity, View, ScrollView, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Images from '../../../assets/Images'
import { Colors, Fonts } from '../../../assets/theme';
import styles from './styles'
import Header from '../../../components/header';
import Inputs from '../../../components/TextInput';
import { DimondIcon } from '../../../assets/theme/svgimages';
import Radiobtns from '../../../components/Radiobtns';
import Popup from '../../../components/popup';
import DummyData from '../../../components/DummyData';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign"

const PurposeScreen = ({ route }) => {

    const navigation = useNavigation();
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);
    // const { headingText = 'Default Heading', header = false } = params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground
                source={Images.backgroundImages.BackgroundImage}
                resizeMode="cover"
                style={{ flex: 1, backgroundColor: Colors.green }}>
                <Header
                //  onPress={() => navigation.openDrawer()}
                    image={Images.user.userProfile}
                    imgPress={() => navigation.navigate('MyProfile')}
                />
                <ScrollView
                    bounces={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.container}>
                        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems:"center", marginBottom:16}}>
                            <Text style={[styles.text, { fontSize: Fonts.size.xxLarge }]}>Affirmations</Text>
                            
                        </View>
                        <View style={styles.inputContainer}>
                        <AntDesign name='search1' color='#fff' size={12} style={{marginLeft:8}}/>
                        <TextInput  
                        style={styles.inputField}
                        placeholderTextColor='#FFFFFF'
                        placeholder='Search'
                        />
                        </View>
                      
                        <View style={{ marginTop: 5 }} />
                        <Popup
                            icon btn1 icon1 btn2={() => setVisible(false)}
                            btntitle2="Cancel" btntitle1="Confirm"
                            headtext="Confirm"
                            text="Remember you can't uncheck this term again?"
                             />
                        <Popup
                            btn1 btntitle1="Done"
                            headtext="Hurray!"
                            text="You got an 1 point today!"
                            isModalVisible={show} hide={() => {
                                setShow(false)
                                setVisible(false)
                            }} />

                        {selectedOption === 1 ? (
                            <>
                                {DummyData.map((item, index) => {
                                    return (
                                        <>
                                            <View style={{ marginTop: 10 }} />
                                            <View style={{}}>
                                                <Radiobtns btn
                                                    btn1 borderWidth={1}
                                                    backgroundColor={Colors.shadow1}
                                                    Easy="Start your day by waking up at the same"
                                                    Medium="Start your day by waking up at the same" />
                                            </View>
                                        </>
                                    )
                                })}

                            </>
                        ) : (
                            <>
                                {DummyData.map((item, index) => {
                                    return (
                                        <>
                                            <View style={{ marginTop: 10 }} />
                                            <View style={{}}>
                                                <Radiobtns
                                                key={index}
                                                onPressbtn={() => setVisible(!visible)} btn1 borderWidth={1}
                                                    backgroundColor={Colors.shadow1}
                                                    Easy="Start your day by waking up at the same"
                                                    Medium="Start your day by waking up at the same" />

                                            </View>

                                        </>
                                    )
                                })}
                            </>
                        )
                        }
                    
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView >
    )
}

export default PurposeScreen






