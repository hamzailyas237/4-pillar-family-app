import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({

    mainContainer:{ 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-around",
    marginTop:12,
    alignSelf:"center",
 },

 liner:{
    width:155, 
    height:62, 
    margin: 5,
    borderRadius: 5,
},
text:{fontFamily:"Now-Medium-BF6542f7137648d", 
fontSize:19, 
marginLeft:12, 
marginTop:6, 
fontWeight:"600",
},

minContainer:{
    flexDirection:"row",
    justifyContent:"space-around", 
    marginTop:2,
},

tittle:{
    fontFamily:"Now-Regular-BF6542f7138c477",
},

innerContainer:{
backgroundColor:"#fff", 
width:20, height:20,
 justifyContent:"center", 
 alignItems:"center", 
 borderRadius:4, 
 marginTop:-8,
},

 planContainer:{
    width:20, 
    height:20, 
    borderWidth:1.6, 
    borderColor:"#5D36FE", 
    borderRadius:4,
}
});
    