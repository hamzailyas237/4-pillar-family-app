import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailEnter from '../screens/Auth/EmailEnter';
import OtpScreen from '../screens/Auth/OtpScreen';
import PlanScreen from '../screens/Home/PlanScreen';
import MyProfile from '../screens/Home/MyProfile';
import PurposeScreen from '../screens/Home/PurposeScreen';
import MyJournals from '../screens/Home/MyJournals/index.js';
import How_It_Works from '../screens/Home/HowItWorksScreen';
import WriteGratitude from '../screens/Home/writrGratitude';
import MyDrawer from '../Naviagtion/DrawerNavigator.js';
import MyTabs from './TabNavigator';
import PointPurchaseScreen from '../screens/Home/PointPurchaseScreen.js';
import CredaitCardScreen from '../screens/Home/CredaitCardScreen.js/index.js';
import { CardSuccess } from '../screens/Home/CardSuccess.js/index.js';
import CustomDrawerContent from '../components/CustomDrawerContent/index.js';
import AvailabelPoint from '../screens/Home/AvailabelPoint.js/index.js';
import CreateKids from '../screens/Home/CreateKids/index.js';
import DailyHabits from '../screens/Home/DailyHabits/index.js';
import MyJournalsDrawer from '../screens/Home/MyJournalsDrawer/index.js';
import MyJournalsDrawerData from '../screens/Home/MyJournalsDrawerData/index.js';
import MyJournalsDrawerEdit from '../screens/Home/MyJournalsDrawerEdit/index.js';
import ResetPassword from '../screens/Auth/ResetPassword/index.js';
import EmailSupportDrawer from '../screens/Home/EmailSupportDrawer.js/index.js';
import HelpScreen from '../screens/Home/HelpScreen/index.js';
import ChildRewards from '../screens/Home/ChildRewards/index.js';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            headerTransparent: true,
            animation: 'none',
            animationTypeForReplace: 'pop'
        }}
        >
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="EmailEnter" component={EmailEnter} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="PlanScreen" component={PlanScreen} />
        <Stack.Screen name="PurposeScreen" component={PurposeScreen} />
        <Stack.Screen name="How_It_Works" component={How_It_Works} />
        <Stack.Screen name="WriteGratitude" component={WriteGratitude} />
        <Stack.Screen name="PointPurchaseScreen" component={PointPurchaseScreen} />
        <Stack.Screen name="CredaitCardScreen" component={CredaitCardScreen} />
        <Stack.Screen name="CardSuccess" component={CardSuccess} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="AvailabelPoint" component={AvailabelPoint} />
        <Stack.Screen name="MyJournals" component={MyJournals} />
        <Stack.Screen name="CustomDrawerContent" component={CustomDrawerContent} />
        <Stack.Screen name="CreateKids" component={CreateKids} />
        <Stack.Screen name="DailyHabits" component={DailyHabits} />
        <Stack.Screen name="MyJournalsDrawer" component={MyJournalsDrawer} />
        <Stack.Screen name="MyJournalsDrawerData" component={MyJournalsDrawerData} />
        <Stack.Screen name="MyJournalsDrawerEdit" component={MyJournalsDrawerEdit} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="EmailSupportDrawer" component={EmailSupportDrawer} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} />
        <Stack.Screen name="ChildRewards" component={ChildRewards} />

    </Stack.Navigator>


      


    );
};

export default StackNavigator;