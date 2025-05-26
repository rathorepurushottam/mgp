import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/libs/configStore';
import Toast from 'react-native-toast-message';
import { onAppStart } from './src/helper/app';


const App = (props) => {
  console.log('Unity Data:', props.unityData);
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
  );
};

export default App;

