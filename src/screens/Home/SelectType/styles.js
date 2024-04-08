import { StyleSheet, Dimensions } from "react-native";
import {Colors} from "../../../assets/theme/Colors"
const windowWidth = Dimensions.get("window"). width;
const windowHeight = Dimensions.get("window"). height;


export default StyleSheet.create({
    container: {
        width:windowWidth,
        height:windowHeight,
    },
    
    heading:{
        color:"#FFFFFF",
        textAlign:"center",
        marginTop:32,
        fontSize:32,
        fontWeight:"700",
        fontFamily:"Now-Medium-BF6542f7137648d",
    },
    
    
    blurType:{
        
        backgroundColor:'rgba(67, 59, 120, 25)',
        alignSelf:"center",
        borderRadius:12,
        width:"80%",
        height:"12%",
        marginTop:windowHeight*0.12,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        
    },

    text:{color:"#fff", fontSize:28, fontFamily:"Now-Medium-BF6542f7137648d", fontWeight:"700"}
})