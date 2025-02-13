import AsyncStorage from '@react-native-async-storage/async-storage';
import { Share, ToastAndroid, Platform } from 'react-native';

export const toastAlert = {
    showToastSuccess: (message, duration = 2500) => { },
    showToastError: (message, duration = 2500) => {
      Platform.OS == 'ios' ?
        Toast.show({
          type: 'success',
          text1: 'Over11 Fantasy',
          text2: `${message}`,
          text2Style: { fontSize: 12, fontFamily: poppinsBold },
          text1Style: { fontFamily: poppinsBold },
        }) :
        ToastAndroid.show(message, ToastAndroid.BOTTOM, ToastAndroid.LONG);
    },
  };