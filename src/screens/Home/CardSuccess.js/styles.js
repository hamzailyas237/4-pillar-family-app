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
   
  daimondImg:{
   // marginTop:-38,
   width: '90%', // Adjust the percentage as needed
   height: undefined, // Let the aspect ratio determine the height
   aspectRatio:  1.6,
alignSelf:"center" ,

},
     boldHeading:{
        color:"#FFC727",
        fontFamily:"Now-Bold-BF6542f7138a8d2",
      //   marginLeft:22,
        fontSize:40,
        marginTop:18,
        textAlign:"center"
     },

     simpleHeading:{
      color:"#FFFFFF",
      fontFamily:"Now-Bold-BF6542f7138a8d2",
    //   marginLeft:22,
      fontSize:44,
      // marginTop:12,
      textAlign:"center"
     },

     
     pointsHeading:{
      color:"#FFFFFF",
      fontFamily:"Now-Bold-BF6542f7138a8d2",
     textAlign:"center",
      fontSize:56,
      marginTop:12,
   },

   bottomHeading:{
textAlign:"center",
color:"#FFFFFF",
   },



   paybtnView:{
      backgroundColor: Colors.shadow1,
      width:"90%",
      borderRadius:8,
      alignSelf:"center",
      paddingVertical:16,
      marginTop:"60%",
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
   // padding: 10,
   justifyContent: 'center',
alignItems:"center",
width:"90%",
alignSelf:"center"
},
modalHeading:{
   fontFamily:"Now-Medium-BF6542f7137648d",
   color:"#fff",
   fontSize:26,
   textAlign:"center",
   marginTop:8
},

modalText:{
   color:"#A6A6A6",
   fontFamily:"Now-Regular-BF6542f7138c477",
   textAlign:"center",
   fontSize:16
},

modalLinear:{
   // width:"50%",
   paddingVertical:12,
   paddingHorizontal:28,
   // marginVertical:28,
   borderRadius:8,
},

modalCloseBtn:{
   borderColor:"#fff",
   borderWidth:1,
   paddingVertical:12,
   paddingHorizontal:28,
   // marginVertical:28,
   borderRadius:8,
}
});




