import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../../assets/Images';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../assets/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import axios from 'axios';

const MyJournalsDrawerData = ({route}) => {
  const navigation = useNavigation();
  const backArrow = require('../../../assets/Images/arrowback3.png');
  const type = route?.params?.type;
  const dataId = route?.params?.dataId;

  const [userData, setUserData] = useState([]);
  const [journalData, setJournalData] = useState([]);
  // const userInfo = useSelector((state) =>  state?.userInfo );
  const userInfo = useSelector(state => state?.user?.userInfo);
  const [email, setEmail] = useState(userInfo?.email || '');
  const [id, setId] = useState(userInfo?.id || '');

  useEffect(() => {
    setId(userInfo?.id || '');
    setEmail(userInfo?.email || '');
  }, [userInfo]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://4-pillar-backend.vercel.app/api/v1/journal/getJournal/${id}`,
        );
        const data = response.data.data.journals.find(
          item => item._id === dataId,
        );

        setJournalData([data]);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://4-pillar-backend.vercel.app/api/v1/gratitude/getGratitude/${id}`,
        );

        const data = response.data.data.gratitudeData.find(
          item => item._id === dataId,
        ); // Find the specific entry by dataId
        console.log('🚀 ~ fetchData ~ data:', data);
        setUserData([data]);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Images.backgroundImages.BackgroundImage}
          resizeMode="cover"
          style={{flex: 1, backgroundColor: Colors.green}}>
          <View
            style={{
              backgroundColor: 'rgba(67, 59, 115, 255)',
              padding: 15,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
            }}>
            <TouchableOpacity
              style={styles.headerBtn}
              onPress={() => navigation.goBack()}>
              <Image source={backArrow} style={styles.backArrow} />
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Now-Medium-BF6542f7137648d',
                  fontSize: 20,
                  marginLeft: 8,
                }}>
                Back
              </Text>
            </TouchableOpacity>
          </View>

          {type == 'Gratitude' && (
            <>
              <View style={styles.typeContainer}>
                <Text style={styles.heading}>Gratitude</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MyJournalsDrawerEdit', {
                      datetime: userData[0]?.createdAt,
                    })
                  }>
                  <Feather
                    name="edit"
                    color="#fff"
                    size={26}
                    style={{marginRight: 32}}
                  />
                </TouchableOpacity>
              </View>

              {userData.slice(0, 1).map((data, index) => {
                const createdAtDate = new Date(data.createdAt);
                // Format the date to a more readable string
                const formattedDate = `${createdAtDate.toLocaleDateString()} ${createdAtDate.toLocaleTimeString()}`;

                console.log('🚀 ~ {userData.slice ~ userData:', userData);

                return (
                  <>
                    <View style={styles.dataBtn}>
                      <View key={index}>
                        <Text style={styles.timeHeading}>TimeStamp</Text>
                        <Text style={styles.time}> {formattedDate}</Text>
                        <Text style={styles.timeHeading}>Type</Text>
                        <Text style={styles.time}>{type}</Text>
                        <Text style={styles.timeHeading}>Entry:1</Text>
                        <Text>{}</Text>
                        <Text style={styles.time}>{data.gratitudeInput1}</Text>
                        <Text style={styles.timeHeading}>Entry:2</Text>
                        <Text style={styles.time}>{data.gratitudeInput2}</Text>

                        <Text style={styles.timeHeading}>Entry:3</Text>
                        <Text style={styles.time}>{data.gratitudeInput3}</Text>
                      </View>
                    </View>
                  </>
                );
              })}
            </>
          )}

          {type == 'Journal' && (
            <>
              <View style={styles.typeContainer}>
                <Text style={styles.heading}>Journal</Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('MyJournalsDrawerEdit', {
                      datetime: userData[0]?.createdAt,
                    })
                  }>
                  <Feather
                    name="edit"
                    color="#fff"
                    size={26}
                    style={{marginRight: 32}}
                  />
                </TouchableOpacity>
              </View>

              {journalData.slice(0, 1).map((data, index) => {
                console.log(
                  '🚀 ~ {journalData.slice ~ journalData:',
                  journalData,
                );
                const createdAtDate = new Date(data.createdAt);
                // Format the date to a more readable string
                const formattedDate = `${createdAtDate.toLocaleDateString()} ${createdAtDate.toLocaleTimeString()}`;

                return (
                  <>
                    <View style={styles.dataBtn}>
                      <View key={index}>
                        <Text style={styles.timeHeading}>TimeStamp</Text>
                        <Text style={styles.time}> {formattedDate}</Text>
                        <Text style={styles.timeHeading}>Type</Text>
                        <Text style={styles.time}>{data.journalType}</Text>
                        {data.journalType == 'freeFlow' && (
                          <>
                            <Text style={styles.timeHeading}>Entry:1</Text>
                            <Text style={styles.time}>{data.freeFlow}</Text>
                          </>
                        )}

                        {data.journalType == 'reFrame' && (
                          <>
                            <Text style={[styles.timeHeading, {marginTop: 16}]}>
                              Entry:1
                            </Text>
                            <Text style={styles.time}>
                              {data.reFrame.input1}
                            </Text>
                            <Text style={[styles.timeHeading, {marginTop: 16}]}>
                              Entry:2
                            </Text>
                            <Text style={styles.time}>
                              {data.reFrame.input2}
                            </Text>
                            <Text style={[styles.timeHeading, {marginTop: 16}]}>
                              Entry:3
                            </Text>
                            <Text style={styles.time}>
                              {data.reFrame.input3}
                            </Text>
                            <Text style={[styles.timeHeading, {marginTop: 16}]}>
                              Entry:4
                            </Text>
                            <Text style={styles.time}>
                              {data.reFrame.input4}
                            </Text>
                            <Text style={[styles.timeHeading, {marginTop: 16}]}>
                              Entry:5
                            </Text>
                            <Text style={styles.time}>
                              {data.reFrame.input5}
                            </Text>
                          </>
                        )}
                      </View>
                    </View>
                  </>
                );
              })}
            </>
          )}
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default MyJournalsDrawerData;
