import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles';

const BackButton = ({onPress}) => {

    const backArrow = require("../../assets/Images/arrowback3.png");
  return (
    <View style={styles.container}>
    
    <TouchableOpacity 
    style={styles.headerBtn}
    onPress={onPress}
    >

<Image source={backArrow} style={styles.backArrow}/>

</TouchableOpacity>
<Text style={styles.text}>Back</Text>
    </View>
  )
}

export default BackButton