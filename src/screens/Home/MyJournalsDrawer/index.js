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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Images from '../../../assets/Images';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../../assets/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import {useSelector} from 'react-redux';
import BackButton from '../../../components/BackButton';

const MyJournalsDrawer = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [gratitudeData, setGratitudeData] = useState([]);
  const [journalData, setJournalData] = useState([]);
  // const userInfo = useSelector((state) =>  state?.userInfo );
  const userInfo = useSelector(state => state?.user?.userInfo);
  const [email, setEmail] = useState(userInfo?.email || '');
  const [id, setId] = useState(userInfo?.id || '');
  useEffect(() => {
    setId(userInfo?.id || '');
    setEmail(userInfo?.email || '');
  }, [userInfo]);

  console.log('search===========>', search);
  const sortedJournalData = journalData.sort((a, b) => {
    // Convert the dates to Date objects and compare them
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  //============================Journal ============================
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://4-pillar-backend.vercel.app/api/v1/journal/getJournal/${id}`,
        );
        // console.log("🚀 ~ fetchData ~ response:", response.data.data.gratitudeData)
        // const data = await response.json();

        //   setJournalData(response?.data?.data?.journals);
        const sortedJournalData = response.data.data.journals.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
        setJournalData(sortedJournalData);
        //   console.log("🚀 ~ fetchData ~ response:", response?.data?.data?.journals)
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
        //  console.log("🚀 ~ fetchData ~ response:", response.data.data.gratitudeData)
        // const data = await response.json();
        //    setGratitudeData(response.data.data.gratitudeData);

        const sortedGratitudeData = response.data.data.gratitudeData.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
        setGratitudeData(sortedGratitudeData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const onClick = ({type, dataId}) => {
    navigation.navigate('MyJournalsDrawerData', {type: type, dataId: dataId});
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={Images.backgroundImages.BackgroundImage}
          resizeMode="cover"
          style={{flex: 1, backgroundColor: Colors.green}}>
          <BackButton onPress={() => navigation.goBack()} />
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            bounces={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <Text style={styles.heading}>My Journal</Text>
            <View style={styles.inputContainer}>
              <AntDesign
                name="search1"
                color="#fff"
                size={18}
                style={{marginLeft: 8}}
              />
              <TextInput
                style={styles.inputField}
                placeholder="Search"
                placeholderTextColor={'#fff'}
                value={search}
                onChangeText={setSearch}
              />
            </View>

            <Text style={styles.tittle}>
              The most recent entries are included in the{'\n'}"Recent Entries"
              Section. Older entries are{'\n'} archived, and can be accessed
              under{'\n'} "Previous Entries"
            </Text>

            <TouchableOpacity style={{marginTop: 24}}>
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
                  Previous Entries
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <Text style={[styles.heading, {marginTop: 28}]}>
              Recent Entries
            </Text>

            <Text style={[styles.heading, {marginTop: 28}]}>Gratitude</Text>

            {gratitudeData.slice(0, 5).map((data, index) => {
              const createdAtDate = new Date(data.createdAt);
              // Format the date to a more readable string
              const formattedDate = `${createdAtDate.toLocaleDateString()} ${createdAtDate.toLocaleTimeString()}`;
              const dataId = data._id;
              // console.log("🚀 ~ {gratitudeData.slice ~ gratitudeData:", gratitudeData)

              return (
                <>
                  <TouchableOpacity
                    style={styles.dataBtn}
                    onPress={() =>
                      onClick({type: 'Gratitude', dataId: dataId})
                    }>
                    <View key={index}>
                      <Text style={styles.currentDate}> {formattedDate}</Text>
                      <Text style={[styles.dataBtnHeading]}>Gratitude</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: 2,
                        }}>
                        <Text style={styles.currentData}>
                          {data.gratitudeInput1}
                        </Text>
                        <Text style={styles.email}>{email}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}

            <Text style={[styles.heading, {marginTop: 28}]}>Journal</Text>

            {journalData.slice(0, 5).map((data, index) => {
              // console.log("🚀 Line No.140 ~ MyJournalsDrawer ~ journalData:", journalData)
              const createdAtDate = data?.createdAt
                ? new Date(data.createdAt)
                : null;
              const formattedDate = createdAtDate
                ? `${createdAtDate.toLocaleDateString()} ${createdAtDate.toLocaleTimeString()}`
                : '';
              const dataId = data?._id;

              return (
                <TouchableOpacity
                  style={styles.dataBtn}
                  onPress={() => onClick({type: 'Journal', dataId: dataId})}>
                  <View key={index}>
                    <Text style={styles.currentDate}>{formattedDate}</Text>
                    <Text style={[styles.dataBtnHeading]}>Journal</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 2,
                      }}>
                      <Text style={styles.currentData}>
                        {data?.journalType}
                      </Text>

                      <Text style={styles.email}>{email}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </KeyboardAwareScrollView>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default MyJournalsDrawer;
