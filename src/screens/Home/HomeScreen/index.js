import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  Image,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../../assets/Images';
import {Colors, Fonts} from '../../../assets/theme';
import styles from './styles';
import Header from '../../../components/header';
import Radiobtns from '../../../components/Radiobtns';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import {QuestionIcon} from '../../../assets/theme/svgimages';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import RowBtnsHomeScreen from '../../../components/RowBtnsHomeScreen';
import {rowBtns} from '../../../redux/slices';
import {RadioButton} from 'react-native-paper';
import axios from 'axios';
import AppRadioButton from '../../../components/RadioButton/AppRadioButton';
import {fetchPoints} from '../../../redux/slices/PointsAndStreaksSlice';

const HomeScreen = () => {
  const homeBtnImg2 = require('../../../assets/Images/homeBtnImg2.png');
  const daimondImg = require('../../../assets/Images/daimond.png');
  const graphImg = require('../../../assets/Images/graph.png');
  const homeBtnImg = require('../../../assets/Images/homeBtnImg.png');
  const navigation = useNavigation();
  const userRole = useSelector(state => state?.user?.userInfo?.role);
  // const userInfo = useSelector(state => state.userInfo);
  const userInfo = useSelector(state => state?.user?.userInfo);

  // const writeGratitude = useSelector(state => state?.auth?.writeGrtitude.data);
  const writeGratitude = useSelector(state => state?.user?.writeGrtitude?.data);
  // const token = useSelector(state => state.token);
  const token = useSelector(state => state?.user?.token);
  const selectedRowBtnsValues = useSelector(state => state?.points?.data);
  console.log(
    '🚀 ~ HomeScreen ~ selectedRowBtnsValues:',
    selectedRowBtnsValues,
  );

  const dispatch = useDispatch();
  const [gratitudeInput1, setGratitudeInput1] = useState(
    writeGratitude?.gratitudeInput1 || '',
  );
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSec, setModalSec] = useState(false);
  const [getPointsData, setGetPointsData] = useState(false);
  const [loading, setLoading] = useState(false);

  const [rowBtnsValues, setRowBtnsValues] = useState({
    userId: userInfo?._id,
    token,
    faith1: false,
    faith2: false,
    family1: false,
    family2: false,
    fitness1: false,
    fitness2: false,
    education: false,
    goals: false,
  });

  const handleRowBtnsValues = values => {
    setRowBtnsValues({...values, userId: userInfo?._id, token});
    // dispatch(rowBtns(rowBtnsValues));
  };
  console.log('🚀 ~ useEffect ~ rowBtnsValues:', rowBtnsValues);

  useEffect(() => {
    if (
      rowBtnsValues.faith1 === true &&
      rowBtnsValues.faith2 === true &&
      rowBtnsValues.family1 === true &&
      rowBtnsValues.family2 === true &&
      rowBtnsValues.fitness1 === true &&
      rowBtnsValues.fitness2 === true &&
      rowBtnsValues.education === true &&
      rowBtnsValues.goals === true
    ) {
      dispatch(rowBtns(rowBtnsValues))
        .unwrap()
        .then(res => {
          setGetPointsData(!getPointsData);
        });
    }
  }, [rowBtnsValues, dispatch]);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchPoints(userInfo?._id))
      .unwrap()
      .then(res => {
        setLoading(false);
      });
  }, [getPointsData]);

  useEffect(() => {
    setGratitudeInput1(writeGratitude?.gratitudeInput1 || '');
  }, [writeGratitude]);

  const toggleModalSec = () => {
    setModalVisible(false);
    setModalSec(false);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={Images.backgroundImages.BackgroundImage}
        resizeMode="cover"
        style={{flex: 1, backgroundColor: Colors.green}}>
        <Header image={Images.user.userProfile} />

        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={fetchPoints} />
          }>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PointPurchaseScreen')}
              style={styles.purchasePointBtn}>
              <Text style={styles.purchasePointBtnText}>PURCHASE POINTS</Text>
              <Text style={styles.purchasePoint}>299</Text>
            </TouchableOpacity>

            <View style={{marginTop: 5}} />
            <Text style={[styles.headtext]}>FOUR PILLARS OF GROWTH</Text>
            {userRole?.role === 'child' ? (
              <TouchableOpacity style={styles.childUnlockBtn}>
                <Text style={styles.childUnlockBtnText}>
                  Unlock your rewards
                </Text>
                <Text
                  style={[
                    styles.childUnlockBtnText,
                    {fontFamily: 'Now-Regular-BF6542f7138c477'},
                  ]}>
                  2 remainings
                </Text>
              </TouchableOpacity>
            ) : null}
            <RowBtnsHomeScreen
              onRowBtnsValues={handleRowBtnsValues}
              selectedRowBtnsValues={selectedRowBtnsValues}
            />

            <Text style={[styles.headtext]}>BONUS POINTS</Text>

            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[styles.text2, {marginLeft: 8, marginTop: 8}]}>
                Write Gratitude & Journal {'\n'}& Get Points
              </Text>
              <Image
                source={daimondImg}
                style={styles.daimondImg}
                resizeMode="contain"
              />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {writeGratitude &&
              (writeGratitude.gratitudeInput1 ||
                writeGratitude.gratitudeInput2 ||
                writeGratitude.gratitudeInput3) ? (
                <LinearGradient
                  colors={['#BA5DFE', '#5D36FE']}
                  start={{x: 0.2, y: 0.25}}
                  end={{x: 0.9, y: 2.0}}
                  style={{
                    width: 155,
                    height: 56,
                    margin: 5,
                    borderRadius: 5,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('WriteGratitude')}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-around',
                      flex: 0.9,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Now-Medium-BF6542f7137648d',
                        fontSize: 19,
                        // marginLeft:12,
                        marginTop: 6,
                        color: '#fff',
                        fontWeight: '600',
                        fontSize: 18,
                      }}>
                      Write Gratitude
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 2,
                      }}>
                      <View
                        style={{
                          backgroundColor: '#fff',
                          width: 20,
                          height: 20,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 4,
                        }}>
                        <AntDesign name="check" size={17} color="#9B50FE" />
                      </View>
                    </View>
                  </TouchableOpacity>
                </LinearGradient>
              ) : (
                <ImageBackground source={homeBtnImg} style={styles.homeBtnImg}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('WriteGratitude')}
                    style={{
                      borderWidth: 2,
                      borderColor: '#fff',
                      borderRadius: 8,
                      paddingVertical: 16,
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontFamily: 'Now-Medium-BF6542f7137648d',
                        fontSize: 18,
                      }}>
                      Write Gratitude
                    </Text>
                  </TouchableOpacity>
                </ImageBackground>
              )}

              <ImageBackground
                source={homeBtnImg2}
                style={[
                  styles.homeBtnImg,
                  {
                    width: 158,
                    height: 54,
                  },
                ]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MyJournals')}
                  style={{
                    borderWidth: 2,
                    borderColor: '#fff',
                    borderRadius: 8,
                    paddingVertical: 16,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#FFFFFF',
                      fontFamily: 'Now-Medium-BF6542f7137648d',
                      fontSize: 18,
                    }}>
                    Write Journal
                  </Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>

            <Text style={[styles.headtext, {marginTop: 12, marginLeft: 0}]}>
              {' '}
              POINTS THIS WEEK
            </Text>

            <Image
              source={graphImg}
              style={{
                width: '100%',
                height: undefined,
                aspectRatio: 15 / 8,
                resizeMode: 'contain',
              }}
            />

            <Text
              style={{
                marginHorizontal: 8,
                color: '#fff',
                fontFamily: 'Now-Regular-BF6542f7138c477',
                fontSize: 16,
              }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
              justo ac velit rhoncus tempor sit amet nec turpis.{' '}
            </Text>

            <LinearGradient
              colors={['#9B50FE', '#fff']}
              start={{x: 0.8, y: 0.0}}
              end={{x: 0.9, y: 1.0}}
              style={{
                width: '96%',
                height: 10,
                borderRadius: 16,
                alignSelf: 'center',
                marginTop: 16,
              }}
            />

            <View style={{marginTop: 5}} />
            <View style={styles.textView}>
              <Text style={[styles.headtext]}>AFFIRMATIONS</Text>
              <Text
                onPress={() => navigation.navigate('Affirmations')}
                style={[styles.seealltext]}>
                See All
              </Text>
            </View>

            <View style={{marginTop: 5}} />
            <Text style={[styles.text2, {marginLeft: 6}]}>
              Complete all affirmations & get{'\n'}1point
            </Text>
            <View style={styles.radioBtnContainer}>
              <TouchableOpacity
                style={styles.radioBtnInnerContainer}></TouchableOpacity>
            </View>

            <View style={{marginTop: 5, marginBottom: 5}}>
              <AppRadioButton
                data={{
                  affirmationText: 'Start your day by waking up at the same',
                }}
                isChecked={true}
                onPressHandler={() => null}
                // radioType="completed"
              />
            </View>

            <View style={styles.textView}>
              <Text
                style={[
                  {
                    color: Colors.text.secondary,
                    fontSize: 19,
                    marginLeft: 6,
                    marginBottom: 6,
                    fontFamily: 'Now-Regular-BF6542f7138c477',
                  },
                ]}>
                Completed
              </Text>
            </View>

            <View>
              <Radiobtns
                onPressbtn={() => setVisible(!visible)}
                btn
                btn1
                borderWidth={1}
                backgroundColor={Colors.shadow1}
                Easy="Start your day by waking up at the same"
                Medium="Start your day by waking up at the same"
              />
            </View>
            <View style={{marginTop: 10}} />
            <View></View>
            <View style={{marginTop: 10}}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: Fonts.size.large,
                    color: Colors.text.tertiary,
                    marginLeft: 10,
                  },
                ]}>
                PURPOSE
              </Text>
            </View>
            <View style={[styles.textView, {marginBottom: 16}]}>
              <Text
                style={[
                  styles.text,
                  {fontSize: 18, color: Colors.text.tertiary, marginLeft: 10},
                ]}>
                Daily Habits
              </Text>
              <Text
                onPress={() => navigation.navigate('DailyHabits')}
                style={[styles.seealltext]}>
                See All
              </Text>
            </View>
            <View>
              <Radiobtns
                onPressbtn={() => setVisible(!visible)}
                btn1
                borderWidth={1}
                backgroundColor={Colors.shadow1}
                Easy="Start your day by waking up at the same"
                Medium="Start your day by waking up at the same"
              />
            </View>
            <View style={{marginTop: 10}} />
            <View style={[styles.textView, {marginBottom: 16}]}>
              <Text
                style={[
                  {
                    color: Colors.text.secondary,
                    fontSize: 19,
                    marginLeft: 6,
                    marginBottom: 6,
                    fontFamily: 'Now-Regular-BF6542f7138c477',
                  },
                ]}>
                Completed
              </Text>
              <Text style={[styles.seealltext]}>See All</Text>
            </View>

            <View>
              <Radiobtns
                onPressbtn={() => setVisible(!visible)}
                btn
                btn1
                borderWidth={1}
                backgroundColor={Colors.shadow1}
                Easy="Start your day by waking up at the same"
                Medium="Start your day by waking up at the same"
              />
            </View>

            <View style={{marginTop: 10}} />
            <View style={{marginTop: 10}} />
            <View style={[styles.textView, {marginBottom: 16}]}>
              <Text
                style={[
                  styles.text,
                  {fontSize: 18, color: Colors.text.tertiary, marginLeft: 10},
                ]}>
                Weekly Task
              </Text>
              <Text style={[styles.seealltext]}>See All</Text>
            </View>

            <View>
              <Radiobtns
                onPressbtn={() => setVisible(!visible)}
                borderWidth={1}
                backgroundColor={Colors.shadow1}
                Easy="Start your day by waking up at the same"
                Medium="Start your day by waking up at the same"
              />
            </View>

            <Text
              style={[
                {
                  color: Colors.text.secondary,
                  fontSize: 19,
                  marginLeft: 6,
                  fontFamily: 'Now-Regular-BF6542f7138c477',
                  marginVertical: 16,
                },
              ]}>
              Completed
            </Text>

            <View>
              <Radiobtns
                onPressbtn={() => setVisible(!visible)}
                btn
                btn1
                borderWidth={1}
                backgroundColor={Colors.shadow1}
                Easy="Start your day by waking up at the same"
                Medium="Start your day by waking up at the same"
              />
            </View>

            <View style={[styles.textView, {marginBottom: 16}]}>
              <Text
                style={[
                  styles.text,
                  {fontSize: 18, color: Colors.text.tertiary, marginLeft: 10},
                ]}>
                Goals
              </Text>
              <Text style={[styles.seealltext]}>See All</Text>
            </View>

            <View>
              <Radiobtns
                onPressbtn={() => setVisible(!visible)}
                borderWidth={1}
                backgroundColor={Colors.shadow1}
                Easy="Start your day by waking up at the same"
                Medium="Start your day by waking up at the same"
              />
            </View>

            <Text
              style={[
                {
                  color: Colors.text.secondary,
                  fontSize: 19,
                  marginLeft: 6,
                  fontFamily: 'Now-Regular-BF6542f7138c477',
                  marginVertical: 16,
                },
              ]}>
              Completed
            </Text>

            <View>
              <Radiobtns
                onPressbtn={() => setVisible(!visible)}
                btn
                btn1
                borderWidth={1}
                backgroundColor={Colors.shadow1}
                Easy="Start your day by waking up at the same"
                Medium="Start your day by waking up at the same"
              />
            </View>
            <View style={{marginVertical: 12}} />

            <Modal
              isVisible={modalVisible}
              backdropOpacity={0.5}
              // animationIn={false}
              coverScreen={true}>
              <View style={styles.modalContainer}>
                <View style={{alignSelf: 'center', marginTop: 22}}>
                  <QuestionIcon />
                </View>

                <Text style={styles.modalHeading}>Confirm?</Text>

                <Text style={styles.modalText}>
                  Remember you can't uncheck this term {'\n'}again?
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    marginTop: 16,
                  }}>
                  <TouchableOpacity onPress={() => setModalSec(!modalSec)}>
                    <LinearGradient
                      colors={['#BA5DFE', '#5D36FE']}
                      start={{x: 0.2, y: 0.25}}
                      end={{x: 0.9, y: 2.0}}
                      style={styles.modalLinear}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: '#FFFFFF',
                          fontFamily: 'Now-Medium-BF6542f7137648d',
                          fontSize: 18,
                        }}>
                        Confirm
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.modalCloseBtn}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text>close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            <Modal
              isVisible={modalSec}
              backdropOpacity={0.5}
              // animationIn={false}
              coverScreen={true}>
              <View style={styles.modalContainer}>
                <View style={{alignSelf: 'center', marginTop: 22}}>
                  <Image
                    source={require('../../../assets/Images/daimond.png')}
                  />
                </View>

                <Text style={[styles.modalHeading, {marginTop: 0}]}>
                  Hurray!
                </Text>

                <Text style={styles.modalText}>You got an 1 point today!</Text>

                <TouchableOpacity onPress={toggleModalSec}>
                  <LinearGradient
                    colors={['#BA5DFE', '#5D36FE']}
                    start={{x: 0.2, y: 0.25}}
                    end={{x: 0.9, y: 2.0}}
                    style={[
                      {
                        paddingVertical: 14,
                        width: '40%',
                        borderRadius: 8,
                        alignSelf: 'center',
                        marginTop: 16,
                      },
                    ]}>
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        fontFamily: 'Now-Medium-BF6542f7137648d',
                        fontSize: 18,
                      }}>
                      Done
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
