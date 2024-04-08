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
        resizeMode:"center",
    },

    headerBtn:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:15
    },

    heading:{
        fontFamily:"Now-Medium-BF6542f7137648d",
        color:"#fff",
        marginLeft:26,marginTop:26,
        fontSize:32
    },

    inputLabel:{
        fontFamily:"Now-Medium-BF6542f7137648d",
        color:"#fff",
        marginLeft:26,marginTop:26,
    },

    inputContainer: {
       
        backgroundColor: Colors.shadow1,
        borderWidth: 0.5,
        borderColor: Colors.white,
        borderRadius: 10,
        padding:4,
        marginTop:18,
        width:"90%",
        alignSelf:"center"
       
     },
     inputField: {
        padding:2,
        fontFamily:"Now-Regular-BF6542f7138c477",
        color:"#fff",
        paddingLeft:8,
        fontSize:16

     },

     linear:{
        width:"90%",
        paddingVertical:14,
        borderRadius:8,
        alignSelf:"center",
        marginTop:46
            },

            modalContainer:{
                backgroundColor: "#000",
                borderWidth: 1,
                borderColor: Colors.placeHolderColor,
                height: "40%",
                borderRadius: 20,
                // padding: 10,
                justifyContent: 'center',
            alignItems:"center",
            width:"56%",
            height:"24%",
            alignSelf:"center",
            
    
            },
        
            modalInnerContainer:{
                width:"50%",
                height:"54%",
                borderRadius:100,
                backgroundColor:"#4EE681",
                justifyContent:"center",
                alignItems:"center"
            }

});