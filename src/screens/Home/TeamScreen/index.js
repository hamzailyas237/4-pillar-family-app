import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Images from '../../../assets/Images';
import {Colors, Fonts} from '../../../assets/theme';
import styles from './styles';
import Header from '../../../components/header';
import {RadioButton} from 'react-native-paper';
import UserCompo from '../../../components/userCompo';
import Inputs from '../../../components/TextInput';
import {DimondIcon, Trashbox} from '../../../assets/theme/svgimages';
import Radiobtns from '../../../components/Radiobtns';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const TeamScreen = props => {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('');
  const Purpose = [
    {
      id: 1,
      text: 'Daily Habits',
      image: Images.icons.callender,
      priceText: '80',
      name: 'Victoria Fox',
      email: 'janice.anderws@gmail.com',
    },
    {
      id: 2,
      text: 'Weekly Tasks',
      image: Images.icons.envelope,
      priceText: '120',
      name: 'Victoria Fox',
      email: 'janice.anderws@gmail.com',
    },
    {
      id: 3,
      text: 'Monthly Goals',
      image: Images.icons.dumbell,
      priceText: '70',
      name: 'Victoria Fox',
      email: 'janice.anderws@gmail.com',
    },
    {
      id: 4,
      text: 'Daily Habits',
      image: Images.icons.callender,
      priceText: '120',
      name: 'Victoria Fox',
      email: 'janice.anderws@gmail.com',
    },
  ];
  const [selectedOption, setSelectedOption] = useState('RecentTasks');
  const handleOptionClick = option => {
    setSelectedOption(option);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={Images.backgroundImages.BackgroundImage}
        resizeMode="cover"
        style={{flex: 1, backgroundColor: Colors.green}}>
        <Header
          // onPress={() => navigation.openDrawer()
          // }
          image={Images.user.userProfile}
          imgPress={() => props.navigation.navigate('MyProfile')}
        />
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <Text
              style={[
                styles.text,
                {fontSize: Fonts.size.medium, marginTop: 12},
              ]}>
              Invite Team Member
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('CreateKids')}>
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
                  Create Kids accounts
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('PointPurchaseScreen')}
              style={styles.planBtn}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontFamily: 'Now-Medium-BF6542f7137648d',
                  fontSize: 18,
                }}>
                Buy Points
              </Text>
            </TouchableOpacity>

            <Text
              style={[
                styles.text,
                {fontSize: Fonts.size.medium, marginBottom: 12},
              ]}>
              My Team
            </Text>
            <>
              {Purpose.map((item, index) => {
                return (
                  <>
                    <View style={{}}>
                      <UserCompo
                        key={index}
                        Trashbox={<Trashbox />}
                        name={item.name}
                        email={item.email}
                        Image={Images.user.userProfile}
                      />
                    </View>
                  </>
                );
              })}
            </>

            <TouchableOpacity
              onPress={() => navigation.navigate('AvailabelPoint')}>
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
                  Transfer Points
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default TeamScreen;
