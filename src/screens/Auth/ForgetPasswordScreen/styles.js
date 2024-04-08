import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({


    container: {
        flex: 1,
        background: Colors.background.secondary,
    },

    containerBackBtn:{
        marginLeft:26
            },
        
            backArrow:{
                width:26,
                height:26,
                resizeMode:"center"
            },

            heading:{
                color:"#fff",
                fontFamily:"Now-Medium-BF6542f7137648d",
                fontSize:28,
                marginLeft:26,
                marginTop:16
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
                        paddingLeft:8,
                        fontSize:16
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
                    }
})