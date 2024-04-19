import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import {Colors, Fonts} from '../../../assets/theme';
import Header from '../../../components/header';
import LinearGradient from 'react-native-linear-gradient';
import {
  writeJournals,
  writeJournalsDevotional,
  writeJournalsReframe,
} from '../../../redux/slices';
import {useDispatch, useSelector} from 'react-redux';

const MyJournals = props => {
  const [selectedOption, setSelectedOption] = useState(0);
  const dispatch = useDispatch();
  // const userInfo = useSelector((state) =>  state?.userInfo );
  const userInfo = useSelector(state => state?.user?.userInfo);
  const [id, setId] = useState(userInfo?.id || '');
  const [freeFlow, setFreeFlow] = useState();
  const [devotional, setDevotional] = useState();
  const [reFrameInput, setReframeInput] = useState({
    reFrame: {input1: '', input2: '', input3: '', input4: '', input5: ''},
  });
  console.log('input2', reFrameInput.input2);
  console.log('input3', reFrameInput.input3);
  console.log('input4', reFrameInput.input4);
  console.log('input5', reFrameInput.input5);

  useEffect(() => {
    setId(userInfo?.id || '');
  }, [userInfo]);

  const onChange = (fieldName, value) => {
    setReframeInput(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const onsubmit = ({type}) => {
    switch (type) {
      case 'freeFlow':
        const journalsObj = {
          userId: id,
          journalType: type,
          freeFlow: freeFlow,
        };
        dispatch(writeJournals(journalsObj));
        console.log('credentialsSucsses', journalsObj);
        break;
      case 'reFrame':
        const journalsObjReframe = {
          userId: id,
          journalType: type,
          reFrame: reFrameInput,
        };
        dispatch(writeJournalsReframe(journalsObjReframe));

        break;
      case 'devotional':
        const journalsObjDevotional = {
          userId: id,
          journalType: type,
          devotional: devotional,
        };
        dispatch(writeJournalsDevotional(journalsObjDevotional));
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Images.backgroundImages.BackgroundImage}
        resizeMode="cover"
        style={{flex: 1, backgroundColor: Colors.green}}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          enableAutomaticScroll={true}
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <Header
              header
              back={'Back'}
              backgroundColor={Colors.shadow1}
              onPress1={() => props.navigation.goBack()}
              // onPress2={() => props.navigation.goBack()}
              color={Colors.emailcolor}
            />

            <Text style={styles.heading}>Select a Journal type</Text>
            <View style={styles.btnrow}>
              <LinearGradient
                colors={
                  selectedOption === 0
                    ? ['#BA5DFE', '#5D36FE']
                    : ['rgba(67, 59, 115, 255)', 'rgba(67, 59, 115, 255)']
                }
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.9, y: 0.9}}
                style={[styles.btntext]}>
                <TouchableOpacity onPress={() => setSelectedOption(0)}>
                  <Text
                    style={{
                      fontFamily: 'Now-Medium-BF6542f7137648d',
                      fontSize: 18,
                      color: '#fff',
                    }}>
                    Free Flow
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={
                  selectedOption === 2
                    ? ['#BA5DFE', '#5D36FE']
                    : ['rgba(67, 59, 115, 255)', 'rgba(67, 59, 115, 255)']
                }
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.9, y: 0.9}}
                style={[styles.btntext]}>
                <TouchableOpacity onPress={() => setSelectedOption(2)}>
                  <Text
                    style={{
                      fontFamily: 'Now-Medium-BF6542f7137648d',
                      fontSize: 18,
                      color: '#fff',
                    }}>
                    Re-frame
                  </Text>
                </TouchableOpacity>
              </LinearGradient>

              <LinearGradient
                colors={
                  selectedOption === 3
                    ? ['#BA5DFE', '#5D36FE']
                    : ['rgba(67, 59, 115, 255)', 'rgba(67, 59, 115, 255)']
                }
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.9, y: 0.9}}
                style={[styles.btntext]}>
                <TouchableOpacity onPress={() => setSelectedOption(3)}>
                  <Text
                    style={{
                      fontFamily: 'Now-Medium-BF6542f7137648d',
                      fontSize: 18,
                      color: '#fff',
                    }}>
                    Devotional
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {selectedOption === 0 && (
              <>
                <Text style={styles.heading}>Write your journal entry</Text>
                <TextInput
                  style={styles.hideContainer}
                  value={freeFlow}
                  onChangeText={setFreeFlow}
                  type="freeFlow"
                  name="freeFlow"
                  id="freeFlow"
                />

                <TouchableOpacity onPress={() => onsubmit({type: 'freeFlow'})}>
                  <LinearGradient
                    colors={['#BA5DFE', '#5D36FE']}
                    start={{x: 0.2, y: 0.25}}
                    end={{x: 0.9, y: 2.0}}
                    style={styles.linear}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontFamily: 'Now-Medium-BF6542f7137648d',
                        fontSize: 18,
                      }}>
                      Submit
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            )}

            {selectedOption === 2 && (
              <>
                <Text style={styles.inputsHeading}>
                  Lorem ipsum dolor sit amet, ?
                </Text>
                <View style={{marginTop: 12}} />
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputField}
                    // placeholder="Email"
                    selectionColor="#fff"
                    value={reFrameInput.input1}
                    onChangeText={text => onChange('input1', text)}
                    // type="reFrameInput"
                    // name="reFrameInput"
                    // id="reFrameInput"
                  />
                </View>

                <Text style={styles.inputsHeading}>
                  Lorem ipsum dolor sit amet, ?
                </Text>
                <View style={{marginTop: 12}} />
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputField}
                    // placeholder="Email"
                    selectionColor="#fff"
                    value={reFrameInput.input2}
                    onChangeText={text => onChange('input2', text)}
                    // type="reFrameInput"
                    // name="reFrameInput"
                    // id="reFrameInput"
                  />
                </View>

                <Text style={styles.inputsHeading}>
                  Lorem ipsum dolor sit amet, ?
                </Text>
                <View style={{marginTop: 12}} />
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputField}
                    // placeholder="Email"
                    selectionColor="#fff"
                    value={reFrameInput.input3}
                    onChangeText={text => onChange('input3', text)}
                    // type="reFrameInput"
                    // name="reFrameInput"
                    // id="reFrameInput"
                  />
                </View>

                <Text style={styles.inputsHeading}>
                  Lorem ipsum dolor sit amet, ?
                </Text>
                <View style={{marginTop: 12}} />
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputField}
                    // placeholder="Email"
                    selectionColor="#fff"
                    value={reFrameInput.input4}
                    onChangeText={text => onChange('input4', text)}
                    // type="reFrameInput"
                    // name="reFrameInput"
                    // id="reFrameInput"
                  />
                </View>

                <Text style={styles.inputsHeading}>
                  Lorem ipsum dolor sit amet, ?
                </Text>
                <View style={{marginTop: 12}} />
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputField}
                    // placeholder="Email"
                    selectionColor="#fff"
                    value={reFrameInput.input5}
                    onChangeText={text => onChange('input5', text)}
                    // type="reFrame"
                    // name="reFrame"
                    // id="reFrame"
                  />
                </View>

                <TouchableOpacity onPress={() => onsubmit({type: 'reFrame'})}>
                  <LinearGradient
                    colors={['#BA5DFE', '#5D36FE']}
                    start={{x: 0.2, y: 0.25}}
                    end={{x: 0.9, y: 2.0}}
                    style={styles.linear}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontFamily: 'Now-Medium-BF6542f7137648d',
                        fontSize: 18,
                      }}>
                      Submit
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            )}

            {selectedOption === 3 && (
              <>
                <Text style={styles.heading}>Enter your devotional</Text>
                <TextInput
                  style={styles.hideContainer}
                  value={devotional}
                  onChangeText={setDevotional}
                />

                <TouchableOpacity
                  onPress={() => onsubmit({type: 'devotional'})}>
                  <LinearGradient
                    colors={['#BA5DFE', '#5D36FE']}
                    start={{x: 0.2, y: 0.25}}
                    end={{x: 0.9, y: 2.0}}
                    style={styles.linear}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontFamily: 'Now-Medium-BF6542f7137648d',
                        fontSize: 18,
                      }}>
                      Submit
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </>
            )}
          </View>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MyJournals;
