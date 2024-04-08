import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.primary,
        paddingHorizontal: 10,
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
        color:"#fff",
        fontFamily:"Now-Medium-BF6542f7137648d",
        fontSize:28,
        marginLeft:16,
        marginTop:24

    },

    text:{
        fontFamily:"Now-Regular-BF6542f7138c477",
        color:"#fff",
        marginLeft:16,
        marginTop:16,
        fontSize:15,
        lineHeight:22,
    }






});