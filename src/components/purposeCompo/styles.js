import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../assets/theme";

export default StyleSheet.create({
    containerTopbtn: {
        width: 100,
        height: 100,
        backgroundColor:"#141033",
        borderRadius: 24,
        justifyContent: "center",
        alignItems: 'center',
        // margin: 10,
        marginHorizontal:8,
        marginTop:18,


        shadowColor: Colors.shadow1,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1.5,
        shadowRadius: 1.84,

        elevation: 0,
    },
    textTopbtn: {
        // textAlign: 'center',
        color: "#fff",
        // fontSize: Fonts.size.xxSmall
        fontFamily:"Now-Medium-BF6542f7137648d",
        // marginTop:12
        marginHorizontal:18,
        marginTop:12
    },


})