import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.secondary,
    },
    text: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.text.tertiary
    },

    headtext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary
    },
    box: {
        // borderColor: 'rgba(67, 59, 115, 255)',
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 10,
        paddingTop: 20,
        paddingBottom: 20
    },
    textArea: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.white,
        backgroundColor: 'rgba(67, 59, 115, 255)',
        // height: 150,
        // justifyContent: "flex-start",
        // textAlignVertical: 'top'
    },


    inputsHeading:{
        color:"#fff",
        fontFamily:"Now-Regular-BF6542f7138c477",
        fontSize:20,
        marginLeft:18,
        marginTop:32
    },

    inputContainer: {
        // marginVertical: 90,
        // 
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Colors.shadow1,
        // backgroundColor:"red",
        borderWidth: 0.5,
        borderColor: Colors.white,
        borderRadius: 10,
        padding:6,
        marginHorizontal:15
       
     },
     inputField: {
        backgroundColor: Colors.shadow1,
        height: 40,
        padding: 0, 
        color: Colors.white, 
        fontFamily: "Now-Regular-BF6542f7138c477",
        flex: 1, 
        paddingLeft:16,

     },

     linear:{
        width:"90%",
        paddingVertical:16,
        marginTop:58,
        borderRadius:8,
        alignSelf:"center"
            },

            backArrow:{
                width:26,
                height:26,
                resizeMode:"center"
            },

})