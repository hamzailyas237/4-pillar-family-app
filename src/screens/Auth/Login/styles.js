import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
   
    
    headtext: {
        paddingLeft: 18,
      
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary
    },
    inputContainer: {
       marginBottom:22,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.shadow1,
       
        borderWidth: 0.5,
        borderColor: Colors.white,
        borderRadius: 10,
        padding:6
       
     },
     inputField: {
        backgroundColor: Colors.shadow1,
        
       paddingLeft:14,
        height: 40,
        padding: 0, 
        color: Colors.white, 
        fontFamily: "Now-Regular-BF6542f7138c477",
        flex: 1, 
        fontSize:16

     },
     icon: {
        marginRight:8
     },

     forgetBtn:{
alignSelf:"center",
marginTop:4
     },

     forgetText:{
        fontFamily: "Now-Regular-BF6542f7138c477",
        color:"#fff",
        fontSize:18
     },

     linear:{
        width:"98%",
        paddingVertical:16,
        borderRadius:8,
        alignSelf:"center"
            },

            backArrowcontainer:{
               marginTop:18,
               marginLeft:26
                   },
               
                   backArrow:{
                       width:26,
                       height:26,
                       resizeMode:"center"
                   },
})