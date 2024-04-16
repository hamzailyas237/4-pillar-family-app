import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../../assets/theme';

export default StyleSheet.create({
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  headingInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headtext: {
    width: '75%',
    color: Colors.text.tertiary,
    fontFamily: 'Now-Medium-BF6542f7137648d',
    fontSize: 24,
    marginLeft: 8,
  },
  counttext: {
    paddingHorizontal: 10,
    color: Colors.text.tertiary,
    fontFamily: 'Now-Regular-BF6542f7138c477',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 10,
    padding: 6,
    marginHorizontal: 15,
    marginBottom: 16,
  },
  inputField: {
    backgroundColor: Colors.white,
    color: Colors.black,
    height: 40,
    padding: 0,
    fontFamily: 'Now-Regular-BF6542f7138c477',
    flex: 1,
    paddingLeft: 16,
  },
  icon: {
    marginRight: 8,
  },
  calendarContainer: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  btnrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    backgroundColor: Colors.shadow1,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  btntext: {
    padding: 5,
    fontSize: Fonts.size.small,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#ccc',
    color: Colors.white,
  },
  selectedText: {
    backgroundColor: Colors.background.primary,
    color: Colors.white,
  },
  modalHeading: {
    fontFamily: 'Now-Medium-BF6542f7137648d',
    color: Colors.gary9,
    fontSize: 22,
    textAlign: 'center',
  },
});
