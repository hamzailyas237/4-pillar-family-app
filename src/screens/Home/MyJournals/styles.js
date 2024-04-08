import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.secondary,
    },
    heading:{
color:"#fff",
fontFamily:"Now-Medium-BF6542f7137648d",
fontSize:20,
marginLeft:26,
marginTop:26

  },
  

    btnrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
        backgroundColor: Colors.shadow1,
        borderWidth: 0.7,
        borderColor:"#fff",
        borderRadius: 10,
        marginHorizontal:12,
        // padding:4
        
    },


 
    btntext: {
        padding: 12,
        paddingHorizontal: 15,
        fontSize: Fonts.size.small,
        textAlign: 'center',
        // borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        color: Colors.white,
        fontFamily:"Now-Medium-BF6542f7137648d",
    },
   

    hideContainer:{
        backgroundColor: Colors.shadow1,
        width:"84%",
        height:"44%",
        borderColor:"#fff",
        borderWidth:1,
        borderRadius:8,
        alignSelf:"center",
        marginTop:18,
        color: Colors.white, // Set text color (if needed)
        fontFamily: "Now-Regular-BF6542f7138c477",
        paddingLeft:16
    },

    linear:{
        width:"90%",
        paddingVertical:16,
marginVertical:38,
        borderRadius:8,
        alignSelf:"center"
            },

            inputsHeading:{
                color:"#fff",
                fontFamily:"Now-Regular-BF6542f7138c477",
                fontSize:18,
                marginLeft:18,
                marginTop:16
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
               paddingLeft:16,
               
                height: 40,
                padding: 0, // Remove any padding
                color: Colors.white, // Set text color (if needed)
                fontFamily: "Now-Regular-BF6542f7138c477",
                flex: 1, // Take up remaining space
        
             },
})