import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
    },

    headingContainer:{
        flexDirection:"row",
        alignItems:'center',
        marginTop:26,
        justifyContent:"space-between"
    },

    heading:{
        color:'#fff',
        fontFamily:'Now-Medium-BF6542f7137648d',
        fontSize:32,
        marginLeft:26
    },

    pointContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:26
},

    daimondImg:{
  width: 56,
     height: undefined, 
   aspectRatio:  1.8,
 
   },

    pointText:{
fontFamily:'Now-Regular-BF6542f7138c477',
color:'#fff',
    },

    btntext: {
        padding: 12,
        paddingHorizontal: 15,
        borderRadius: 10,
      
        
    },
    btnrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
        backgroundColor: Colors.shadow1,
        borderWidth: 0.7,
        borderColor:"#fff",
        borderRadius: 10,
        marginHorizontal:12,
        // padding:4
        
    },

    rowBtnText:{ 
        fontFamily:'Now-Regular-BF6542f7138c477', 
        fontSize:18,
         color:"#fff",
    },

    inputContainer: {
        borderWidth: 0.5,
        borderColor: Colors.white,
        borderRadius: 10,
        padding:6,
        marginHorizontal:15,
        marginTop:26,
       
     },
     inputField: {
       paddingLeft:16,
       fontSize:16,
        padding: 0, // Remove any padding
        fontFamily: "Now-Regular-BF6542f7138c477",
color:'#fff'
     },
})