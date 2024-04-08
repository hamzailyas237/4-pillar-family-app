import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import  store  from './src/redux/store';
import { store, persistor } from './src/redux/store/store';
import RootStack from './src/Naviagtion/RootStack';
import SignUpScreen from './src/screens/Auth/SignUpScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import ToastManager, { Toast } from 'toastify-react-native';
import { useSelector } from 'react-redux';
// <RootStack />
const App = () => {

  return (
  
  <Provider store={store} >
  <PersistGate loading={null} persistor={persistor}>
  <PaperProvider>
  <ToastManager />
    <RootStack/>
  </PaperProvider>
  </PersistGate>
</Provider>
  
 

  )
}
export default App

