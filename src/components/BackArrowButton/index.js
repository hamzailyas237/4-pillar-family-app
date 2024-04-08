import React from 'react';
import {  Image, TouchableOpacity,  } from 'react-native';
import styles from "../../components/BackArrowButton/styles";



const BackArrowButton = ({onPress}) => {

    const backArrow = require("../../assets/Images/arrowback3.png")

  return (
    <>
    <TouchableOpacity 
    style={styles.container}
    onPress={ onPress}>

<Image source={backArrow} style={styles.backArrow}/>
</TouchableOpacity>
    </>
  )
}

export default BackArrowButton
