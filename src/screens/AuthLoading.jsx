import React, { useEffect } from 'react';
import { AppSafeAreaView } from '../common/AppSafeAreaView/AppSafeAreaView';
import FastImage from 'react-native-fast-image';
import { SpinnerSecond } from '../common/SpinnerSecond';
import { splash } from '../helper/Image';
import NavigationService from '../navigation/NavigationService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserProfile } from '../actions/profileAction';
import { USER_TOKEN_KEY } from '../libs/constants';
import { useDispatch } from 'react-redux';
import { AUTHSTACK } from '../navigation/routes';

const AuthLoading = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      getTokenDetails();
    }, 3000);
  }, []);

  const getTokenDetails = async()=>{
    try {
      const token = await AsyncStorage.getItem(USER_TOKEN_KEY);
      if (token) {
        dispatch(getUserProfile(true, false));
      } else {
        NavigationService.navigate(AUTHSTACK);
      }
    } catch (e) {
    }

  };
  return (
    <AppSafeAreaView light={true}>
    <FastImage source={splash} resizeMode="cover" style={{flex:1}} />
    <SpinnerSecond loading={true} />
  </AppSafeAreaView>
  );
};

export default AuthLoading;