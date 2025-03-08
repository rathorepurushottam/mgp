import { ScrollView, StyleSheet, Text, ToastAndroid, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../theme/Colors'
import FastImage from 'react-native-fast-image'
import { mychampLogo } from '../../helper/Image'
import CommonButton from '../../common/CommonButton/CommonButton'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useNavigation } from '@react-navigation/native'
import { OtpInput } from 'react-native-otp-entry'
import { toastAlert } from '../../helper/Utility'

const Otp = ({ route }) => {
  console.log(route?.params?.phone);
  const [code, setCode] = useState('')
  const navigation = useNavigation();
  const [error,setError] = useState('');
  const onSubmit = ()=>{
    console.log(code,"Otp submitted")
    if(!code || code.length != 6){
      toastAlert.showToastError('Enter Valid OTP');
      setError('Invalid OTP')
    }else{
      const data = {
        otp : code,
        phone : route?.params?.phone,
      }
      setError('');
      navigation.navigate('VerifyOtp',{data:data})
    }
  }
  return (
    <LinearGradient colors={["#01025C", '#02025A']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FastImage source={mychampLogo} style={styles.logo} resizeMode='contain' />
        </View>
        <View style={styles.content}>

          <Text style={styles.heading}>Verify Mobile Number</Text>
          <Text style={styles.subHeading}>
            Enter the OTP that you received on
          </Text>
          <Text style={styles.subHeading}>+91 {route?.params?.phone}</Text>

          <OtpInput
            numberOfDigits={6}
            focusColor={colors.Green}
            autoFocus={true}
            hideStick={true}
            placeholder="******"
            blurOnFilled={true}
            disabled={false}
            type="numeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            onFocus={() => console.log("Focused")}
            onBlur={() => console.log("Blurred")}
            onTextChange={(text) => console.log(text)}
            onFilled={(text) => setCode(text)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            theme={{
              containerStyle:  error ? {marginTop : '10%',marginBottom:'2%'} : {marginVertical:'10%'},
              pinCodeContainerStyle: styles.pinCodeContainer,
              pinCodeTextStyle: error ? {color:colors.ErrorColor} : {color:'#fff'},
              focusStickStyle: styles.focusStick,
            }}
          />
          {
            error ? 
            <Text style={{color:colors.ErrorColor,alignSelf:'center',marginBottom:'10%'}}>{error }</Text>
            : ''
          }
          <View style={{ marginBottom: '10%' }}>
            <View style={styles.miniContainer}>
              <Text style={styles.subHeading}>Didn’t receive OTP? </Text>
              <TouchableOpacity><Text style={styles.resend}>Resend Otp</Text></TouchableOpacity>
            </View>

            <View style={styles.miniContainer}>
              <Text style={styles.subHeading}>Incorrect Phone number?? </Text>
              <TouchableOpacity onPress={()=>navigation.goBack()}><Text style={styles.resend}>Change</Text></TouchableOpacity>
            </View>
          </View>

          <CommonButton title={'Verify'} onPress= {onSubmit}/>
        </View>

        <View style={{ marginTop: "10%", alignItems: 'center' }}>
          <Text style={styles.footer}>Version 1.0.0</Text>
          <Text style={styles.footer}>© MyChamp11. All Rights Reserved</Text>
        </View>
      </ScrollView>
    </LinearGradient>

  )
}

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
    // marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    color: "#fff",
    fontSize: 16,
    marginBottom: 15,
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
  Otpcontainer: {
    marginVertical: '10%',
  },
  pinCodeText: {
    color: '#fff',
  },
  pinCodeContainer: {
    borderWidth: 2,
  },
  subHeading: {
    fontSize: 14,
    color: "#fff",
  },
  miniContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  resend: {
    color: "#6587CF",
    fontSize: 15,
    fontWeight: "bold",
  },
  footer: {
    fontSize: 12,
    color: "#bbb",
    textAlign: "center",
  },
})
export default Otp
