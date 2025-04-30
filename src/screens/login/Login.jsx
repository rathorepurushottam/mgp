import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../theme/Colors'
import FastImage from 'react-native-fast-image'
import { mychampLogo } from '../../helper/Image'
import LinearGradient from 'react-native-linear-gradient'
import CommonButton from '../../common/CommonButton/CommonButton'
import { useNavigation } from '@react-navigation/native'
import { toastAlert, validateMobile } from '../../helper/Utility'
import InputBox from '../../common/InputBox/InputBox'
import { AppSafeAreaView } from '../../common/AppSafeAreaView/AppSafeAreaView'
import { useDispatch, useSelector } from 'react-redux'
import { userSignup, userSignupNew } from '../../actions/authActions'
import { SpinnerSecond } from '../../common/SpinnerSecond'
const Screen = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState('');
  const [isReferal, setisReferal] = useState(false)
  const [ReferalCode, setReferalCode] = useState('')
  const isLoading = useSelector(state => {
    return state.auth.isLoading;
  });
  const onSubmit = () => {
    console.log(ReferalCode,"refercodeeee")
    if (!mobileNumber) {
      toastAlert.showToastError('Please enter Mobile Number');
      setError('Please enter Mobile Number')
    }else if(!validateMobile(mobileNumber)){
      toastAlert.showToastError('InValid Number');
      setError('InValid Number');
    }
    else {
      let data = {
        // refercode: ReferalCode,
        // mobile_number: mobileNumber,
        // resend: true,
        phoneNumber : mobileNumber, 
        isoCode : "IN"
      };
      setError('');
      dispatch(userSignupNew(data, true))
      // navigation.navigate('MYBATTLEOTP', { phone: mobileNumber })
    }
  }
  return (
    <AppSafeAreaView statusColor={true}
      light={true}>
      <LinearGradient colors={["#01025C", '#02025A']} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <FastImage source={mychampLogo} style={styles.logo} resizeMode='contain' />
          </View>
          <View style={styles.content}>
            <Text style={styles.heading}>Login/Signup</Text>
            <Text style={styles.subHeading}>
              Enter your mobile number to get started
            </Text>
            <InputBox val={mobileNumber} setVal={setMobileNumber} error={error} maxLength={10} />
            {
              error ?
                <Text style={{ color: colors.ErrorColor, alignSelf: 'flex-start', marginBottom: '5%', fontSize: 11 }}>{error}</Text>
                : ''
            }
            {
              isReferal ?
                <>
                  <TextInput
                    style={styles.input}
                    placeholder={"Enter referral code"}
                    placeholderTextColor={"#bbb"}
                    value={ReferalCode}
                    onChangeText={setReferalCode}
                    maxLength={30}
                  />
                </>
                :
                <View style={styles.referralContainer}>
                  <Text style={styles.referralText}>Have a referral code?</Text>
                  <TouchableOpacity onPress={() => setisReferal(true)}>
                    <Text style={styles.enterCode}>Enter Code</Text>
                  </TouchableOpacity>
                </View>
            }
            <Text style={styles.terms}>
              By clicking "Get Started", you agree to our{" "}
              <Text style={styles.link}>Terms and Conditions</Text> &{" "}
              <Text style={styles.link}>Privacy Policy</Text>
            </Text>
            <CommonButton title={'Get Started'} onPress={onSubmit} />
          </View>
          <View style={{ marginTop: "8%", alignItems: 'center' }}>
            <Text style={styles.footer}>Version 1.0.0</Text>
            <Text style={styles.footer}>© MyChamp11. All Rights Reserved</Text>
          </View>
        </ScrollView>
      </LinearGradient>
    <SpinnerSecond loading={isLoading} />
    </AppSafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: "center",
    width: '100%'
  },
  logo: {
    height: 300,
    width: 300,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  content: {
    alignItems: "center",
    marginTop: '5%',
    marginHorizontal: 20
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffcc00",
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 20,
  },

  referralContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 25,
    paddingRight: 12
  },
  referralText: {
    color: colors.ReferColor,
    fontSize: 14,
  },
  enterCode: {
    color: "#6587CF",
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ffcc00",
    width: "100%",
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: '15%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  terms: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 30,
    marginTop: '14%',
  },
  link: {
    textDecorationLine: "underline",
    color: "#fff",
  },
  footer: {
    fontSize: 12,
    color: "#bbb",
    textAlign: "center",
  },
  input: {
    width: "100%",
    // height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    color: "#fff",
    fontSize: 16,
    marginBottom: 15,
  },
})