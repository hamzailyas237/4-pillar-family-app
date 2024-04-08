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
typeContainer:{
    flexDirection:"row", 
    alignItems:"center", 
    justifyContent:"space-between", 
    marginTop:16,
},

heading:{
fontFamily:"Now-Medium-BF6542f7137648d",
color:"#fff",
fontSize:30,
marginLeft:32,
    },

    dataBtn:{
marginTop:26

    },
    timeHeading:{
        fontFamily:"Now-Regular-BF6542f7138c477",
        color:"#fff",
        marginLeft:32,
        fontSize:24,
        marginTop:26,
    },

    time:{
        fontFamily:"Now-Light-BF6542f7137fce2",
        color:"#fff",
        marginLeft:32,
        fontSize:16,
        marginTop:8,
    },
})