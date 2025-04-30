import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navigator from './src/navigation/Navigator'
import AuthLoading from './src/screens/AuthLoading'
import { Provider } from 'react-redux'
import store from './src/libs/configStore'
import Toast from 'react-native-toast-message';
import { onAppStart } from './src/helper/app'


const App = () => {
  useEffect(() => {
    onAppStart(store);
  }, []);
 
  return (
    <SafeAreaView style={{flex:1}}>
      <Provider store={store}>
      <Navigator/>
      <Toast/>
      </Provider>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})