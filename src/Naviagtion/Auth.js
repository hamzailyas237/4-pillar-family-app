import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoarding from '../screens/Auth/Onboarding';
import Login from '../screens/Auth/Login';
import SelectType from '../screens/Home/SelectType';
import ForgetPasswordScreen from '../screens/Auth/ForgetPasswordScreen';
import SignUpScreen from '../screens/Auth/SignUpScreen';
const  Auth = () => {

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
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="SelectType" component={SelectType} />
        <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
        </Stack.Navigator>
  )
};

export default Auth