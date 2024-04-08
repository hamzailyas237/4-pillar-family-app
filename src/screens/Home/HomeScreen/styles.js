import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../../assets/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        background: Colors.background.primary,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: Fonts.size.xSmall,
        color: Colors.text.secondary,
        paddingTop: 10,
    },
    text2: {
       
        fontSize:18,
        color: Colors.text.secondary,
        fontFamily:"Now-Regular-BF6542f7138c477"

    },
    purchasePointBtn:
    {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        marginTop:16,   
    },

    purchasePointBtnText:
    { 
        paddingLeft: 12, 
        color: "#fff", 
        fontFamily:"Now-Medium-BF6542f7137648d", 
        fontSize:16,
    },

purchasePoint:{
    color: "#fff", 
    fontFamily:"Now-Medium-BF6542f7137648d", 
    paddingRight:12,
},

    headtext: {
        color: Colors.text.tertiary,
        fontFamily:"Now-Medium-BF6542f7137648d",
        fontSize:24,
        marginTop:14,
        marginLeft:8
    },
    lists: {
        marginVertical: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    seealltext: {
        fontSize: Fonts.size.xxxSmall,
        color: Colors.emailcolor,
        fontWeight: '600',
        marginRight:8
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center"
    },
    boxView: {
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: Colors.inputbostext,
        paddingHorizontal: 15,
    },

    daimondImg:{
       marginTop:-38,
       width: '80%',
       height: undefined, 
       aspectRatio:  1.8,
       marginLeft:-54,
    marginTop:-54

    }
,
    linear:{
        paddingVertical:16,
        borderRadius:8,
        paddingHorizontal:22
            },

            homeBtnImg:{

width:171,
height:54,
marginHorizontal:4,
marginTop:12

            },
            modalContainer:{
                backgroundColor: Colors.background.tertiary,
                borderWidth: 1,
                borderColor: Colors.placeHolderColor,
                height: "36%",
                borderRadius: 20,
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
                paddingVertical:12,
                paddingHorizontal:28,
                borderRadius:8,
            },

            modalCloseBtn:{
                borderColor:"#fff",
                borderWidth:1,
                paddingVertical:12,
                paddingHorizontal:28,
                borderRadius:8,
            },

            childUnlockBtn:{

                backgroundColor:"#1AC042",
                borderRadius:12,
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-around",
                paddingVertical:16,
                marginTop:16,
                marginHorizontal:10
            },

            childUnlockBtnText:{
                fontFamily:"Now-Medium-BF6542f7137648d",
                color:"#fff",
                fontSize:18
            }
})