import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { AppSafeAreaView } from '../common/AppSafeAreaView/AppSafeAreaView'
import FastImage from 'react-native-fast-image'
import { SpinnerSecond } from '../common/SpinnerSecond'
import { splash } from '../helper/Image'
import NavigationService from '../navigation/NavigationService'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUserProfile } from '../actions/profileAction'
import { USER_TOKEN_KEY } from '../libs/constants'
import { useDispatch } from 'react-redux'

const AuthLoading = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // useEffect(()=>{
  //   getTokenDetails();
  // },[])


  useEffect(() => {
    setTimeout(() => {
      getTokenDetails();
    }, 3000);
  }, []);
  const getTokenDetails = async()=>{
    try {
      const token = await AsyncStorage.getItem(USER_TOKEN_KEY);
      console.log(token,"token1nnnnn")
      if (token) {
        console.log("Inside token")
        dispatch(getUserProfile(true, false));
      } else {
        console.log("OUtside login")
        navigation.navigate('AUTHStack');
      }
    } catch (e) {
    }

  }
  return (
    <AppSafeAreaView light={true}>
    <FastImage source={splash} resizeMode="cover" style={{flex:1}} />
    <SpinnerSecond loading={true} />
  </AppSafeAreaView>
  )
}

export default AuthLoading

const styles = StyleSheet.create({})


    // try {
    //   const token = await AsyncStorage.getItem("USERTOKEN");
    //   console.log(token,"tokennnnnnnn in authloading")
    //   if (token) {
    //     console.log("token isssss")
    //     // dispatch(getUserProfile(true, false));
    //   } else {
    //     setTimeout(()=>{
    //       navigation.navigate("AUTHStack");
    //     },2000)
    //   }
    // } catch (e) {
    //   console.log(e,"error in authloading");
    // }