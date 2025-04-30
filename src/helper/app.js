import AsyncStorage from '@react-native-async-storage/async-storage';
import { appOperation } from '../appOperation';
import { USER_TOKEN_KEY } from '../libs/constants';


export const onAppStart = async (store) => {
  try {
    const customerToken = await AsyncStorage.getItem(USER_TOKEN_KEY);
    // console.log("Inside app.jssss",customerToken)
    if (customerToken) {
      appOperation.setCustomerToken(customerToken);
    }
  } catch (error) {}
};
