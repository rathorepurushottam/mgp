import AsyncStorage from '@react-native-async-storage/async-storage';
import {appOperation} from '../appOperation';

import {FCM_TOKEN_KEY, USER_TOKEN_KEY} from '../libs/constants';
import {
  AUTHSTACK,
  BOTTOM_NAVIGATION_STACK,
  OTP_SCREEN,
} from '../navigation/routes';
import {setLoading} from '../slices/authSlice';
import {setUserData} from '../slices/profileSlice';
import { Platform } from 'react-native';
import { logError, toastAlert } from '../helper/Utility';
import NavigationService from '../navigation/NavigationService';
import { getUserProfile } from './profileAction';

export const userSignup = (data, permissionSave) => async dispatch => {
  try {
    dispatch(setLoading(true));
    const response = await appOperation.guest.register(data);
    if (response?.success) {
      NavigationService.navigate(OTP_SCREEN, {
        data: data,
        id: 'register',
        permissionSave: permissionSave,
      });

    toastAlert.showToastError(response?.message);
} else {
      toastAlert.showToastError(response?.message);
    }
  } catch (e) {
    logError(e);
  } finally {
    dispatch(setLoading(false));
  }
};

  export const otpVerification =
  (data, isAlert = false) =>
  async dispatch => {
    try {
      dispatch(setLoading(true));
      const response = await appOperation.guest.otp_verification(data);
      if (response?.success) {
        appOperation.setCustomerToken(response?.data?.token);
        await AsyncStorage.setItem(USER_TOKEN_KEY, response?.data?.token);
        await dispatch(getUserProfile(true, false));
        toastAlert.showToastError(response?.message);
      } else {
        toastAlert.showToastError(response?.message);
      }
    } catch (e) {
      toastAlert.showToastError(e?.message);
      logError(e);
    } finally {
      console.log();
      dispatch(setLoading(false));
    }
  };

export const resetSignUpOtp = id => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await appOperation.guest.resend_otp(id);

    if (response?.success) {
      toastAlert.showToastError(response?.message);
    } else {
      toastAlert.showToastError(response?.message);
    }
  } catch (e) {
    logError(e);
    toastAlert.showToastError(e?.message);
  } finally {
    dispatch(setLoading(false));
  }
};

export const refreshToken = () => async () => {
  try {
    const response = await appOperation.customer.refresh_token();
    if (response?.success) {
      appOperation.setCustomerToken(response?.data?.accessToken);
      await AsyncStorage.setItem(USER_TOKEN_KEY, response?.data?.accessToken);
    }
  } catch (e) {
    logError(e);
    // toastAlert.showToastError(e?.message);
  }
};
export const updateDeviceToken = () => async dispatch => {
  let fcmToken = await AsyncStorage.getItem(FCM_TOKEN_KEY);
  console.log(fcmToken, 'Fcm_Token');
  let data = {
    fcm_device: Platform.OS,
    fcm_token: fcmToken,
    fcm_update: true,
  };
  try {
    const response = await appOperation.customer.fcm_token(data);
    console.log(response, 'updateDeviceToken');
  } catch (e) {
    logError(e);
  }
};

export const userLogout = () => async () => {
  appOperation.setCustomerToken('');
  await AsyncStorage.removeItem(USER_TOKEN_KEY);
  NavigationService.reset(AUTHSTACK);
};
