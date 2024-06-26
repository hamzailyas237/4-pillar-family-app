import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../../assets/Images';
import {Colors, Fonts} from '../../../assets/theme';
import styles from './styles';
import Header from '../../../components/header';
import Inputs from '../../../components/TextInput';
import {DimondIcon} from '../../../assets/theme/svgimages';
import Radiobtns from '../../../components/Radiobtns';
import Popup from '../../../components/popup';
import DummyData from '../../../components/DummyData';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import AppRadioButton from '../../../components/RadioButton/AppRadioButton';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {Toast} from 'toastify-react-native';
import {useDebounce} from '../../../hooks/useDebounce';
import { fetchPoints } from '../../../redux/slices/PointsAndStreaksSlice';

const PurposeScreen = ({route}) => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const [selectedOption, setSelectedOption] = useState(0);
  // const { headingText = 'Default Heading', header = false } = params;
  const [affirmation, setAffirmation] = useState('');
  const [affirmations, setAffirmations] = useState([]);
  const [search, setSearch] = useState('');
  const userId = useSelector(state => state?.user?.userInfo?._id);
  const debouncedSearch = useDebounce(search, 500);
  const dispatch = useDispatch()
  
  const createAffirmation = async () => {
    try {
      const response = await axios.post(
        'https://4-pillar-backend.vercel.app/api/v1/affirmations/create-affirmation',
        {
          userId,
          affirmationText: affirmation,
        },
      );
      Toast.success(response?.data?.message)
      setAffirmations([...affirmations, response?.data?.data])
      setAffirmation('')
    } catch (error) {
      console.log('error', error);
      Toast.error(error.message)
    }
  };

  const getAffirmations = async () => {
    try {
      const response = await fetch(
        `https://4-pillar-backend.vercel.app/api/v1/affirmations/get-affirmations/${userId}?search=${search}`,
      );
      const {data} = await response.json();
      setAffirmations(data?.affirmationsData);
    } catch (error) {
      console.log('error', error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getAffirmations();
  }, [debouncedSearch]);

  const markAffirmationAsTransferred = async id => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(
      'https://4-pillar-backend.vercel.app/api/v1/affirmations/update-affirmationStatus',
      {
        method: 'PATCH',
        body: JSON.stringify({
          affirmationId: id,
          status: 'transfer',
          userId
        }),
        ...config,
      },
    );

    const {data} = await response.json();
    const updatedAffirmations = affirmations?.filter(affirmation => {
      return data?.statusUpdate?._id !== affirmation?._id;
    });
    setAffirmations(updatedAffirmations);
    dispatch(fetchPoints(userId))

  };


  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={Images.backgroundImages.BackgroundImage}
        resizeMode="cover"
        style={{flex: 1, backgroundColor: Colors.green}}>
        <Header
          //  onPress={() => navigation.openDrawer()}
          image={Images.user.userProfile}
          imgPress={() => navigation.navigate('MyProfile')}
        />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 16,
              }}>
              <Text style={[styles.text, {fontSize: Fonts.size.xxLarge}]}>
                Affirmations
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <AntDesign
                name="search1"
                color="#fff"
                size={12}
                style={{marginLeft: 8}}
              />
              <TextInput
                style={styles.inputField}
                placeholderTextColor="#FFFFFF"
                placeholder="Search"
                onChangeText={e => setSearch(e)}
              />
            </View>

            <View style={{marginTop: 5}} />
            <Popup
              icon
              btn1
              icon1
              btn2={() => setVisible(false)}
              btntitle2="Cancel"
              btntitle1="Confirm"
              headtext="Confirm"
              text="Remember you can't uncheck this term again?"
            />
            <Popup
              btn1
              btntitle1="Done"
              headtext="Hurray!"
              text="You got an 1 point today!"
              isModalVisible={show}
              hide={() => {
                setShow(false);
                setVisible(false);
              }}
            />

            {/* {selectedOption === 1 ? (
              <>
                {DummyData.map((item, index) => {
                  return (
                    <>
                      <View style={{marginTop: 10}} />
                      <View style={{}}>
                        <Radiobtns
                          btn
                          btn1
                          borderWidth={1}
                          backgroundColor={Colors.shadow1}
                          Easy="Start your day by waking up at the same"
                          Medium="Start your day by waking up at the same"
                        />
                      </View>
                    </>
                  );
                })}
              </>
            ) : (
              <>
                {DummyData.map((item, index) => {
                  return (
                    <>
                      <View style={{marginTop: 10}} />
                      <View style={{}}>
                        <Radiobtns
                          key={index}
                          onPressbtn={() => setVisible(!visible)}
                          btn1
                          borderWidth={1}
                          backgroundColor={Colors.shadow1}
                          Easy="Start your day by waking up at the same"
                          Medium="Start your day by waking up at the same"
                        />
                      </View>
                    </>
                  );
                })}
              </>
            )} */}

            <View>
             {affirmations?.filter(affirmation => affirmation?.status == 'pending')
                .map((affirmation, i) => {
                  return (
                    <AppRadioButton
                      key={affirmation._id}
                      data={affirmation}
                      isChecked={false}
                      onPressHandler={markAffirmationAsTransferred}
                    />
                  );
                })} 
            </View>
            <View>
              <Text style={styles.label}>Maximum 35 characters</Text>
              <TextInput
                style={styles.addInputField}
                placeholder="Type something..."
                placeholderTextColor={'#fff'}
                selectionColor="#fff"
                value={affirmation}
                onChangeText={e => setAffirmation(e)}
                type="input"
                name="input"
                id="input"
                maxLength={35}
              />

              <TouchableOpacity onPress={() => createAffirmation()}>
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
                    Create Affirmation
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PurposeScreen;
