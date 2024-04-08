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
    logintext: {
        paddingLeft: 20,
        fontSize: Fonts.size.xLarge,
        fontWeight: 'bold'
    },
    headtext: {
        marginTop:26,
        marginLeft:26,
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary
    },
    imgView: {
        width: 100,
        height: 80,
        borderColor: Colors.primary,
        borderRadius: 100,
        marginTop:8,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode:"cover"
    },

    avatarHeading:{ fontFamily: "Now-Regular-BF6542f7138c477", color:"#fff", fontSize:18, marginLeft:16},
    inputContainer: {
        backgroundColor: Colors.shadow1,
        borderWidth: 0.5,
        borderColor: Colors.white,
        borderRadius: 10,
        padding:6,
        marginHorizontal:15
       
     },
    inputField: {
        backgroundColor: Colors.shadow1,
        height: 40,
        padding: 0, // Remove any padding
        color: Colors.white, // Set text color (if needed)
        fontFamily: "Now-Regular-BF6542f7138c477",
        flex: 1, // Take up remaining space
        paddingLeft:16

     },


     emailContainer:{
        backgroundColor: Colors.shadow1,
        borderWidth: 0.5,
        borderColor: Colors.white,
        borderRadius: 10,
        padding:16,
        marginHorizontal:15
     },

     containerArrow:{
        marginTop:26,
        marginLeft:26
            },
        
            backArrow:{
                width:26,
                height:26,
                resizeMode:"center"
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
                textAlign:"center"
            },

            modalLinear:{
                // width:"50%",
                paddingVertical:12,
                paddingHorizontal:28,
                // marginVertical:28,
                borderRadius:8,
            },

            modalCloseBtn:{
                borderColor:"#fff",
                borderWidth:1,
                paddingVertical:12,
                paddingHorizontal:28,
                // marginVertical:28,
                borderRadius:8,
            }
})