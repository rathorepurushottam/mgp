import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { AppSafeAreaView } from '../common/AppSafeAreaView/AppSafeAreaView'
import FastImage from 'react-native-fast-image'
import { SpinnerSecond } from '../common/SpinnerSecond'
import { splash } from '../helper/Image'
import NavigationService from '../navigation/NavigationService'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthLoading = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    getTokenDetails();
  },[])
  const getTokenDetails = async()=>{
    try {
      const token = await AsyncStorage.getItem("USERTOKEN");
      console.log(token,"tokennnnnnnn in authloading")
      if (token) {
        console.log("token isssss")
        // dispatch(getUserProfile(true, false));
      } else {
        setTimeout(()=>{
          navigation.navigate("AUTHStack");
        },2000)
      }
    } catch (e) {
      console.log(e,"error in authloading");
    }
  }
  return (
    <AppSafeAreaView>
    <FastImage source={splash} resizeMode="cover" style={{flex:1}} />
    <SpinnerSecond loading={true} />
  </AppSafeAreaView>
  )
}

export default AuthLoading

const styles = StyleSheet.create({})