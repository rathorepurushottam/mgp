import AsyncStorage from '@react-native-async-storage/async-storage';
import { Share, ToastAndroid, Platform, PermissionsAndroid } from 'react-native';


export const validateMobile = (number) => {
  const expression = /^[0-9]*$/;
  return expression.test(number);
};
export const checkValidAdharCardNumber = (adharNumber) => {
  let regex = new RegExp(/^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/);
  return regex.test(adharNumber);
};
export const checkUPIDlNumber = (upiNumber) => {
  let regex = new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9._@-]{4,49}$/);
  return regex.test(upiNumber);
};
export const ifsclNumber = (ifscNumber) => {
  let regex = new RegExp(/^[A-Z]{4}0[A-Z0-9]{6}$/);
  return regex.test(ifscNumber);
};
export const validateEmail = (email) => {
  const expression =
    /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(email);
};

export const checkValidPanCardNumber = (panNumber) => {
  let regex = new RegExp(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/);
  return regex.test(panNumber);
};

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


  export  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "App needs access to your camera",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  }