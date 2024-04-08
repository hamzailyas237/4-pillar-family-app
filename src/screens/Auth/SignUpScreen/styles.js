import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: Fonts.size.normal,
        color: Colors.gary9,
        lineHeight: 22,
        marginVertical:16,
        fontFamily:"Now-Regular-BF6542f7138c477",
    },
    headtext: {
        fontSize: Fonts.size.xxxLarge,
        color: Colors.text.tertiary,
        marginTop:16,
        fontFamily:"Now-Medium-BF6542f7137648d",
    },
    CameraView: {
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
   
 

    linear:{
        width:"90%",
        paddingVertical:16,
        marginVertical:28,
        borderRadius:8,
        alignSelf:"center"
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
                marginHorizontal:15,
                marginBottom:16,
               
             },
             inputField: {
                backgroundColor: Colors.shadow1,
                // backgroundColor:"black",
                // borderRadius: 10,
               color:"#fff",
                height: 40,
                padding: 0, // Remove any padding
                color: Colors.white, // Set text color (if needed)
                fontFamily: "Now-Regular-BF6542f7138c477",
                flex: 1, // Take up remaining space
                paddingLeft:16
        
             },


             icon: {
                // paddingLeft: 10, 
                marginRight:8
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


     radioBtnContainer:{
         borderWidth:1, borderColor:"#fff", borderRadius:50, width:24, height:24, justifyContent:"center", alignItems:"center",
         marginLeft:18

           },

           radioBtnContainerInner:{
            backgroundColor:"#fff", width:20, height:20, borderRadius:50
           },

})