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
marginLeft:16,
marginTop:18,
fontSize:28
    },
    inputContainer: {
        backgroundColor: Colors.shadow1,
        borderWidth: 0.5,
        borderColor: Colors.white,
        borderRadius: 10,
        padding:4,
        marginHorizontal:15,
        marginTop:26,
        flexDirection:"row",
        alignItems:"center"
       
     },
    inputField: {
        backgroundColor: Colors.shadow1,
        height: 40,
        padding: 0, // Remove any padding
        color: Colors.white, // Set text color (if needed)
        fontFamily: "Now-Regular-BF6542f7138c477",
marginLeft:8
     },

     tittle:{
color:"#fff",
fontFamily:"Now-Light-BF6542f7137fce2",
textAlign:"center",
marginTop:26,
     },

     linear:{
        width:"90%",
        paddingVertical:12,
        borderRadius:8,
        alignSelf:"center"
            },
            dataBtn:{
                backgroundColor: Colors.shadow1,
                borderWidth: 0.5,
                borderColor: Colors.white,
                borderRadius: 10,
                paddingHorizontal:5,
                paddingVertical: 15,
                marginHorizontal:15,
                // marginTop:10,
                marginVertical:16
            },
            currentDate:{
                fontFamily: "Now-Regular-BF6542f7138c477",
                color:"#fff",
                marginHorizontal:10,
                fontSize:16
            },

            dataBtnHeading:{
                fontFamily: "Now-Regular-BF6542f7138c477",
                color:"#fff",
                fontSize:20,
                marginTop:6,
                marginLeft:22,
            },

            currentData:{
                fontFamily: "Now-Regular-BF6542f7138c477",
                color:"#fff",
                marginLeft:32,
                opacity:0.6,
                fontSize:15,
            },

            email:{

                fontFamily: "Now-Regular-BF6542f7138c477",
                color:"#fff",
                marginRight:12,
                opacity:0.6,
            }





})