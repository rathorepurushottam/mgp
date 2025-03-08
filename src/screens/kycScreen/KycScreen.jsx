import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import InnerHeader from '../../common/Headers/InnerHeader'
import { colors } from '../../theme/Colors'
import FastImage from 'react-native-fast-image'
import { PanIcon } from '../../helper/Image'
import { useNavigation } from '@react-navigation/native'
import { toastAlert } from '../../helper/Utility'

const KycScreen = () => {
  const [kycVerified,setkycVerified] = useState(false)
  const navigation = useNavigation();

  const onVerify = ()=>{
    if(kycVerified){
      toastAlert.showToastError('Already Verified')
    }else{
      navigation.navigate('VerifyAdhar');
    }
  }
  return (
    <LinearGradient colors={[colors.BackgroundColorOne, colors.BackgroundColorTwo, '#170551']} style={styles.container}>
      <InnerHeader title="COMPLETE KYC"/>
      <Text style={styles.text}>Select document type for KYC verifica
        tion</Text>

      <View style={styles.KycContainer}>
          <View style={styles.log}>
            <View style={styles.img}>
              <FastImage source={PanIcon} style={styles.logOutImage}/>
            </View>
            <View><Text style={styles.logOUt}>Pan Card</Text></View>
          </View>
        <TouchableOpacity style={styles.logoutContainer}>
          <LinearGradient
            colors={['#ff6b6b', '#c44569']}
            style={styles.logoutButton}
          >
            <Text style={styles.logoutText}>Verify</Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>

        <View style={styles.KycContainer}>
          <View style={styles.log}>
            <View style={styles.img}>
              <FastImage source={PanIcon} style={styles.logOutImage}/>
            </View>
            <View><Text style={styles.logOUt}>Aadhaar Card</Text></View>
          </View>
        <TouchableOpacity style={styles.logoutContainer} onPress={()=>onVerify()}>
          <LinearGradient
            colors={ kycVerified ? ['#1ca658','#19B861','#15ed73'] : [ '#ff6b6b', '#c44569'] }
            style={styles.logoutButton}
          >
            <Text style={styles.logoutText}>{kycVerified ? "Verified":'Verify'}</Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
      </LinearGradient>
  )
}

export default KycScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  text:{
    color:"#fff",
    fontWeight:'500',
    marginTop:20,
    marginHorizontal:34,
  },
  KycContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical:10,
    marginHorizontal:20,
    borderWidth:2,
    borderColor:"#222",
    marginTop:10
},
logOutImage:{
  height:30,
  width:30,
},
iconsStyle:{
  height:24,
  width:24,
},
log:{
  flexDirection:"row",
  alignItems:"center"
},
logOUt:{
  color:"#222",
  marginLeft:10,
  fontWeight:"600",
},
logoutContainer: {
  alignItems: 'center',
  // marginTop: 20,
},
logoutButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 25,
  // width: '50%',
},
logoutText: {
  color: '#fff',
  fontSize: 16,
  marginLeft: 10,
  fontWeight: 'bold',
},
})