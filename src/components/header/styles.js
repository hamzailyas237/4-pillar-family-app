import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "../../assets/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height
export default StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        // backgroundColor: Colors.background.primary,
        // background: Colors.background.primary,
        
    },
    text: {
        textAlign: 'center',
        fontSize: Fonts.size.xLarge,
        color: Colors.text.tertiary,

    },
    logintext: {
        paddingLeft: 20,
        fontSize: Fonts.size.xLarge,
        fontWeight: 'bold',
        color: Colors.text.tertiary,
    },
    homeHeader: {
        height: 64,
        flexDirection: 'row',
        backgroundColor: Colors.shadow1,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingHorizontal: 25,
        paddingTop: 8,
        justifyContent: 'space-between',
        alignItems:"center"
    },

    drawerIcon:{
width:30,
height:30,

    },
    iconsRowView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    boderView: {
        borderWidth: 0.4,
        borderColor: Colors.border,
        height: 25,
        // marginHorizontal: 6
        marginRight:6

    },
    counttext: {
        paddingHorizontal: 10, color: Colors.text.tertiary,
        fontFamily:"Now-Regular-BF6542f7138c477"
    },
    img: {
        width: 30, height: 30, borderRadius: 30
    },

      
    modalContainer:{
       
       backgroundColor:"#5D36FE",
       borderTopRightRadius:16,
       borderBottomRightRadius:16,
       marginLeft:-12
       
    },
    modalHeading:{
        fontFamily:"Now-Medium-BF6542f7137648d",
        color:"#fff",
        fontSize:26,
        textAlign:"center",
        marginTop:8
    },

    modalInnerContainer:{
backgroundColor:'rgba(67, 59, 115, 255)',
borderTopRightRadius:16,
borderBottomRightRadius:16,
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
    },

    userView: {
        backgroundColor: Colors.white,
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
       width:"90%",
       height:"10%",
       alignSelf:"center",
    marginTop:28,
    padding:2
    },

    avtar: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink',
    },

    textView: {
        paddingHorizontal: 10

    },
    name: {
        // textAlign: 'center',
        fontSize: Fonts.size.small,
        color: Colors.text.primary,
        letterSpacing: 0.9,
      fontFamily:"Now-Bold-BF6542f7138a8d2",
      fontSize:18
    },
 
    email: {
        // fontSize: 12,
        color: Colors.tertiary,
        opacity: 0.43,
        fontFamily:"Now-Regular-BF6542f7138c477"
    },

    hrLine:{
        backgroundColor:"#707070",
        width:"90%",
        height:1,
        alignSelf:"center",
        marginTop:18
    },

    modalBtn:{
flexDirection:"row",
alignItems:"center",
marginLeft:28,
marginTop:26

    },

    modalBtnText:{
         // textAlign: 'center',
         color: Colors.text.tertiary,
         letterSpacing: 0.9,
         // marginTop: 10,
         fontFamily:"Now-Medium-BF6542f7137648d",
         fontSize:18,
         marginHorizontal:8
    }
})