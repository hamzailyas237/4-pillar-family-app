import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.secondary,
    },

    backArrow:{
        width:26,
        height:26,
        resizeMode:"center"
    },
    heading: {
       color:"#fff",
       fontFamily:"Now-Medium-BF6542f7137648d",
       marginLeft:22,
       marginTop:16,
       fontSize:24
    },

   

    inputContainer:{
        backgroundColor:"'rgba(67, 59, 115, 255)'",
        borderRadius:8,
        width:"90%",
        alignSelf:"center",
        borderWidth: 0.5,
        borderColor: Colors.white,
        padding:8
        
        
            },
        
            input:{
                padding:2,
                fontFamily:"Now-Regular-BF6542f7138c477",
                color:"#fff",
                paddingLeft:10,
                fontSize:16
            },

     text:{
        fontFamily:"Now-Medium-BF6542f7137648d",
        color:"#fff",
        marginLeft:22,
        marginTop:16,
        fontSize:17
     },

     radioBtnConatiner:{
        width:24, height:24,   
        borderRadius:50, borderColor:"#fff", 
        borderWidth:1, justifyContent:"center", 
        alignItems:"center",
    },
    radioBtnConatinerInner:{width:20, height:20, backgroundColor:"#fff", borderRadius:50},

    radioBtnText:{
        fontFamily: "Now-Regular-BF6542f7138c477",
        color:"#fff",
        fontSize:16,
        marginLeft:16
    },

    linear:{
        width:"90%",
        paddingVertical:16,
        marginTop:58,
        borderRadius:8,
        alignSelf:"center"
            },

            modalContainer:{
                backgroundColor: Colors.background.tertiary,
                borderWidth: 1,
                borderColor: Colors.placeHolderColor,
                height: "40%",
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
});