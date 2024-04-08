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

doneBtn:{

    alignSelf:"flex-end",
    marginRight:32,
    marginTop:18,
},

doneBtnText:{

    fontFamily:"Now-Regular-BF6542f7138c477",
    color:"#fff",
    fontSize:18
},

timeHeading:{
    fontFamily:"Now-Regular-BF6542f7138c477",
    color:"#fff",
    marginLeft:18,
    fontSize:24,
    marginTop:16,
},

timeContainer:{

    borderWidth:0.8,
    borderColor:"#fff",
    borderRadius:6,
    width:"90%",
    alignSelf:"center",
    marginTop:12,
    padding:8,
    backgroundColor:"rgba(67, 59, 115, 255)",
    flexDirection:"row", 
    alignItems:"center",
    justifyContent:"space-between"
},

    time:{
        fontFamily:"Now-Light-BF6542f7137fce2",
        color:"#fff",
        fontSize:16,
        marginTop:8,
    },

   
    inputContainer: {
       
        backgroundColor: Colors.shadow1,
        borderWidth: 0.5,
        borderColor: Colors.white,
        borderRadius: 10,
        padding:2,
        marginTop:18,
        width:"90%",
        alignSelf:"center"
       
     },
     inputField: {
        padding:2,
                        fontFamily:"Now-Regular-BF6542f7138c477",
                        color:"#fff",
                        paddingLeft:8,
                        fontSize:16

     },

     linear:{
        width:"90%",
        paddingVertical:14,
        borderRadius:8,
        alignSelf:"center",
        marginTop:46
            },

           
            modalContainer:{
                width:"50%",
                height:"20%",
                backgroundColor:"#000",
                alignSelf:"center",
                borderRadius:8,
                borderColor:"#fff",
                borderWidth:1,
                justifyContent:"center",
                alignItems:"center"
            }
})