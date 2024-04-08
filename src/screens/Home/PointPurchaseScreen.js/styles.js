import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";
import {} from "react-native"

export default StyleSheet.create({
    headingContainer:{

flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
marginTop:38,
    },

    heading:{

        color:"#FFFFFF",
        fontFamily:"Now-Regular-BF6542f7138c477",
        fontSize:24,
        marginLeft:22,
        

    },
    daimondImg:{
        // marginTop:-38,
        width: '90%', // Adjust the percentage as needed
        height: undefined, // Let the aspect ratio determine the height
        aspectRatio:  1.6,
alignSelf:"center" ,

     },

     boldHeading:{
        color:"#FFFFFF",
        fontFamily:"Now-Bold-BF6542f7138a8d2",
        marginLeft:22,
        fontSize:36,
     },

     btnContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:14,marginTop:22

     },

     btnContainerInner:{
paddingVertical:10,
paddingHorizontal:16,
borderColor:"#fff",
borderWidth:1,
borderRadius:36,
marginHorizontal:6,
backgroundColor:'rgba(67, 59, 115, 255)'
     },

     btnText:{
fontFamily:"Now-Regular-BF6542f7138c477",
color:"#fff",
fontSize:18
     },

     updateBtns:{
        borderColor:"#3CFFBE",
        borderWidth:1
     },
     updateBtnsText:{
color:"#3CFFBE"

     },
     
     pointsHeading:{
        color:"#FFFFFF",
        fontFamily:"Now-Bold-BF6542f7138a8d2",
        marginLeft:34,
        fontSize:56,
        marginTop:18
     },

     linear:{
        width:"90%",
        paddingVertical:16,
        marginVertical:38,
        borderRadius:8,
        alignSelf:"center"
            },

    linearBtn:{
    textAlign:"center", 
    color:"#FFFFFF", 
    fontFamily:"Now-Medium-BF6542f7137648d", 
    fontSize:18,
},
});




