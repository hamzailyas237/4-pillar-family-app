import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.secondary,
    },
    text: {
        textAlign: 'center',
        fontSize: Fonts.size.small
    },

    headtext: {
        fontFamily:"Now-Medium-BF6542f7137648d",
        color:"#fff",
        marginLeft:26,marginTop:16,
        fontSize:32
    },
  

    headerBtn:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:15
    },

    backArrow:{
        width:26,
        height:26,
        resizeMode:"center",
    },

    img:{
        alignSelf:"center",
        marginBottom:16
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
        paddingVertical:16,
        borderRadius:8,
        alignSelf:"center"
            },
})