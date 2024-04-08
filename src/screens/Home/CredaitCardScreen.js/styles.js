import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

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
   

     boldHeading:{
        color:"#FFFFFF",
        fontFamily:"Now-Medium-BF6542f7137648d",
        marginLeft:22,
        fontSize:32,
        marginTop:32
     },

     text:{
      color:"#A6A6A6",
      fontFamily:"Now-Regular-BF6542f7138c477",
      marginLeft:22,
      fontSize:19,
      marginTop:8,
     },

     
     inputContainer: {
      // 
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: Colors.shadow1,
      borderWidth: 0.5,
      borderColor: Colors.white,
      borderRadius: 10,
      padding:6,
      marginHorizontal:15
     
   },
   inputField: {
      backgroundColor: Colors.shadow1,
     paddingLeft:12,
      height: 40,
      padding: 0, 
      color: Colors.white, 
      fontFamily: "Now-Regular-BF6542f7138c477",
      flex: 1, 

   },


   creditCardMin:{
width:34,
height:34,
resizeMode:"contain",
marginRight:16
   },
   paybtnView:{
      backgroundColor: Colors.shadow1,
      width:"90%",
      borderRadius:8,
      alignSelf:"center",
      paddingVertical:16,
   },

   paybtnViewText:{
      color:"#fff",
      fontFamily:"Now-Medium-BF6542f7137648d",
      opacity:0.3,
      fontSize:18,
      textAlign:"center"
   },

   linear:{
      width:"90%",
      paddingVertical:16,
      
      borderRadius:8,
      alignSelf:"center"
          },

  linearBtn:{
  textAlign:"center", 
  color:"#FFFFFF", 
  fontFamily:"Now-Medium-BF6542f7137648d", 
  fontSize:18,
},
   
modalContainer:{
   backgroundColor: "#000000",
   borderWidth: 1,
   borderColor: Colors.placeHolderColor,
   height: "16%",
   borderRadius: 20,
   flexDirection:"row",
alignItems:"center",
width:"90%",
alignSelf:"center"
},


modalText:{
   color:"#A6A6A6",
   fontFamily:"Now-Regular-BF6542f7138c477",
   fontSize:16,
   marginRight:56
},


});




