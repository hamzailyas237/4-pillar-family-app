import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Images from '../../../../assets/Images';
import {Colors, Fonts} from '../../../../assets/theme';
import Header from '../../../../components/header';
import {FireICon} from '../../../../assets/theme/svgimages';
import {TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import CalendarPicker from 'react-native-calendar-picker';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const MyStreaks = () => {
  const [calendarModalVisible, setCalanderModalVisible] = useState(false);
  const [streakDate, setStreakDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [selectedOption, setSelectedOption] = useState(0);
  const [openStreakModal, setOpenStreakModal] = useState(false);

  const handleDateChange = date => {
    const formattedDate = date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    setStreakDate(formattedDate);
    setCalanderModalVisible(false); // Close the modal after selecting a date
  };

  const streakDates = useSelector(state => state?.points?.data?.streakDates);

  const streakDatesToSet = streakDates?.map((date, i) => {
    return {
      date: date.split('T')[0],
      containerStyle: {
        backgroundColor: '#FFC727',
        borderRadius: 50,
        width: 'auto',
        marginHorizontal: 5,
      },
    };
  });

  useEffect(() => {
    setTimeout(() => {
      setOpenStreakModal(true);
    }, 1000);
  }, []);

  return (
    <ImageBackground
      source={Images.backgroundImages.BackgroundImage}
      resizeMode="cover"
      style={{flex: 1, backgroundColor: Colors.green}}>
      <Header image={Images.user.userProfile} points={'0'} />

      <View style={styles.headingContainer}>
        <Text style={styles.headtext}>My Streaks</Text>
        <View style={styles.headingInnerContainer}>
          <FireICon />
          <Text style={styles.counttext}>58</Text>
        </View>
      </View>

      <View style={styles.btnrow}>
        <TouchableOpacity
          style={[
            styles.btntext,
            selectedOption === 0 && styles.selectedText,
            ,
            {display: 'flex', flexDirection: 'row', alignItems: 'center'},
          ]}
          onPress={() => setSelectedOption(0)}>
          <FireICon height={40} width={40} />
          <View>
            <Text
              style={[
                styles.btntext,
                selectedOption === 0 && styles.selectedText,
              ]}>
              15 Days
            </Text>
            <Text
              style={[
                styles.btntext,
                selectedOption === 0 && styles.selectedText,
              ]}>
              Current streaks
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btntext,
            selectedOption === 1 && styles.selectedText,
            ,
            {display: 'flex', flexDirection: 'row', alignItems: 'center'},
          ]}
          onPress={() => setSelectedOption(1)}>
          <FireICon height={40} width={40} />
          <View>
            <Text
              style={[
                styles.btntext,
                selectedOption === 1 && styles.selectedText,
              ]}>
              58 Days
            </Text>
            <Text
              style={[
                styles.btntext,
                selectedOption === 1 && styles.selectedText,
              ]}>
              Total streaks
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Date of Birth"
          selectionColor="#fff"
          placeholderTextColor={'#fff'}
          value={streakDate}
          //   onChangeText={(e) => console.log(e)}
          style={styles.inputField}
          type="dob"
          id="dob"
          name="dob"
        />
        <TouchableOpacity onPress={() => setCalanderModalVisible(true)}>
          <AntDesign
            name="calendar"
            size={22}
            color="#BA5DFE"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.calendarContainer}>
        <CalendarPicker
          previousTitle={'Previous'}
          previousTitleStyle={{color: '#000', marginLeft: 12}}
          nextTitle={'Next'}
          nextTitleStyle={{color: '#000', marginRight: 14}}
          todayBackgroundColor="#5D36FE"
          textStyle={{fontFamily: 'Now-Medium-BF6542f7137648d'}}
          todayTextStyle={{
            fontFamily: 'Now-Bold-BF6542f7138a8d2',
            color: '#fff',
          }}
          onDateChange={handleDateChange}
          selectMonthTitle="Month"
          selectYearTitle="Year"
          customDatesStyles={streakDatesToSet}
        />
      </View>

      {/* <Modal isVisible={calendarModalVisible}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 1.6,
            borderColor: '#5D36FE',
            height: '50%',
          }}>
          <CalendarPicker
            previousTitle={'Previous'}
            previousTitleStyle={{color: '#000', marginLeft: 12}}
            nextTitle={'Next'}
            nextTitleStyle={{color: '#000', marginRight: 14}}
            todayBackgroundColor="#5D36FE"
            textStyle={{fontFamily: 'Now-Medium-BF6542f7137648d'}}
            todayTextStyle={{
              fontFamily: 'Now-Bold-BF6542f7138a8d2',
              color: '#fff',
            }}
            onDateChange={handleDateChange}
            // monthTitle="Month" // Assuming the library uses monthTitle
            // yearTitle="Year"

            selectMonthTitle="Month"
            selectYearTitle="Year"
          />
          <TouchableOpacity
            style={{
              alignSelf: 'center',
              borderBlockColor: '#5D36FE',
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: 62,
              paddingVertical: 6,
            }}
            onPress={() => setCalanderModalVisible(false)}>
            <Text
              style={{
                color: '#000',
                fontFamily: 'Now-Medium-BF6542f7137648d',
                fontSize: 15,
              }}>
              Select
            </Text>
          </TouchableOpacity>
        </View>
      </Modal> */}

      <Modal
        isVisible={openStreakModal}
        coverScreen={true}
        animationInTiming={600}
        animationOutTiming={600}>
        <View
          style={{
            width: '96%',
            height: '40%',
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#fff',
          }}>
          <Text style={styles.modalHeading}>
            Do you want to freeze your
            {'\n'}
            <FireICon /> Streak ?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 24,
            }}>
            <TouchableOpacity onPress={() => setOpenStreakModal(false)}>
              <LinearGradient
                colors={['#BA5DFE', '#5D36FE']}
                start={{x: 0.2, y: 0.25}}
                end={{x: 0.9, y: 2.0}}
                style={{
                  paddingHorizontal: 40,
                  paddingVertical: 16,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#E2E2E2',
                    fontFamily: 'Now-Medium-BF6542f7137648d',
                    fontSize: 18,
                  }}>
                  Confirm
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setOpenStreakModal(false)}
              style={{
                paddingHorizontal: 40,
                paddingVertical: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#fff',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#E2E2E2',
                  fontFamily: 'Now-Medium-BF6542f7137648d',
                  fontSize: 18,
                }}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default MyStreaks;
