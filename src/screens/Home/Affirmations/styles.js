
import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.primary,
        // paddingHorizontal: 5,
    },


   

    text: {
        // textAlign: 'center',
        fontSize: Fonts.size.xLarge,
        color: Colors.white,
        // paddingTop: 10
        fontFamily:"Now-Medium-BF6542f7137648d",
    },
    text2: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.white,
        fontWeight: '600',
        marginVertical: 5
    },
    boxView: {
        backgroundColor: Colors.shadow1, borderRadius: 10, height: 46,
        borderWidth: 0.5, borderColor: Colors.placeHolderColor, flexDirection: 'row',
        alignItems: 'center'
    },
    seealltext: {
        // textAlign: 'center',
        fontSize: Fonts.size.xxxSmall,
        color: Colors.emailcolor,
        // fontWeight: '600',
        marginVertical: 10,
        fontFamily:"Now-Regular-BF6542f7137648d"
    },
    headtext: {
        paddingLeft: 15,
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary,
        // paddingVertical: 10

    },
    placeholdertext:
    {
        fontSize: Fonts.size.xSmall,
        color: Colors.placeHolderColor, padding: 5
    },

    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical:12
    },
    textbg: {
        // backgroundColor: Colors.blue,
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 15
    },
    btnrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        backgroundColor: Colors.shadow1,
        // padding: 5,
        borderRadius: 10
    },
    btntext: {
        padding: 10,
        paddingHorizontal: 15,
        fontSize: Fonts.size.small,
        textAlign: 'center',
        // borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        color: Colors.white,
    },
    selectedText: {
        backgroundColor: Colors.background.primary,
        color: Colors.white,
    },


})