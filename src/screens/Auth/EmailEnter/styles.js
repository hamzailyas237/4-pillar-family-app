import { StyleSheet, Dimensions } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";
const windowHeight = Dimensions.get("window").height
export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.secondary,
    },

    heading:{

        marginLeft:26,
        marginTop:16,
        color:"#fff",
        fontFamily:"Now-Medium-BF6542f7137648d",
        fontSize:28
    },

    text:{

        color:"#fff",
        marginLeft:26,
        marginTop:8,
        fontFamily:"Now-Regular-BF6542f7138c477",
        fontSize:16
    },

    inputContainer:{
backgroundColor:"'rgba(67, 59, 115, 255)'",
borderRadius:8,
width:"90%",
alignSelf:"center",
borderWidth: 0.5,
borderColor: Colors.white,
padding:8


    },

    input:{
        padding:2,
        fontFamily:"Now-Regular-BF6542f7138c477",
        color:"#fff",
        paddingLeft:18,
        fontSize:16
    },

    linear:{
        width:"90%",
        paddingVertical:16,
        marginVertical:28,
        borderRadius:8,
        alignSelf:"center"
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
            width:"90%",
            alignSelf:"center",
            
    
            },
        
            modalInnerContainer:{
                width:"40%",
                height:"40%",
                borderRadius:100,
                backgroundColor:"#4EE681",
                justifyContent:"center",
                alignItems:"center"
            },


            planView:{
                backgroundColor: Colors.shadow1,
                // width:"90%",
                // borderRadius:8,
                // alignSelf:"center",
                // paddingVertical:16,

                width:"90%",
        paddingVertical:16,
        borderRadius:8,
        alignSelf:"center"
             },
          
             paybtnViewText:{
                color:"#fff",
                fontFamily:"Now-Medium-BF6542f7137648d",
                opacity:0.3,
                fontSize:18,
                textAlign:"center"
             },



})