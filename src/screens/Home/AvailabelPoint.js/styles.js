import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../../assets/theme';
const faxGirlWidth = Dimensions.get('window').width;
const daimondWidth = Dimensions.get('window').width;
const imageWidth = faxGirlWidth * 0.16;
const imageHeight = imageWidth;
const daimondImgWidth = daimondWidth * 0.1;
const daimondImgHeight = daimondImgWidth;

export default StyleSheet.create({
  container: {
    flex: 1,
    background: Colors.background.secondary,
    paddingBottom: 100,
  },

  backArrow: {
    width: 26,
    height: 26,
    resizeMode: 'center',
  },

  headerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },

  heading: {
    color: '#fff',
    fontFamily: 'Now-Regular-BF6542f7138c477',
    fontSize: 20,
    marginLeft: 18,
    marginTop: 22,
  },

  text: {
    color: '#fff',
    fontFamily: 'Now-Medium-BF6542f7137648d',
    marginLeft: 20,
    fontSize: 17,
  },

  changeBtnText: {
    color: '#1492E6',
    fontFamily: 'Now-Regular-BF6542f7138c477',
    borderBottomWidth: 1,
    borderBottomColor: '#1492E6',
    padding: 2,
  },

  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(67, 59, 115, 255)',
    width: '90%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: 18,
    padding: 8,
    justifyContent: 'space-evenly',
  },

  faxGirl: {
    width: imageWidth,
    height: imageHeight,
    resizeMode: 'contain',
  },

  daimondImg: {
    width: daimondImgWidth,
    height: daimondImgHeight,
    resizeMode: 'contain',
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(67, 59, 115, 255)',
    width: '90%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: 12,
    padding: 8,
    justifyContent: 'space-between',
  },

  inputContainer: {
    backgroundColor: 'rgba(67, 59, 115, 255)',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
    marginTop: 12,
    height: '20%',
  },

  input: {
    padding: 2,
    fontFamily: 'Now-Regular-BF6542f7138c477',
    color: '#fff',
    paddingLeft: 18,
    fontSize: 16,
  },

  linear: {
    width: '90%',
    paddingVertical: 16,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },

  modalContainer: {
    backgroundColor: Colors.background.tertiary,
    borderWidth: 1,
    borderColor: Colors.placeHolderColor,
    height: '40%',
    borderRadius: 20,
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  modalText: {
    color: '#A6A6A6',
    fontFamily: 'Now-Regular-BF6542f7138c477',
    fontSize: 16,
  },
});
