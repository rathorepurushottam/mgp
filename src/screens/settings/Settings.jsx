import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SwitchToggle from 'react-native-switch-toggle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../theme/Colors'
import InnerHeader from '../../common/Headers/InnerHeader'
import FastImage from 'react-native-fast-image';
import { AboutUsIcon, HelpIcon, kycIcon, logOutIcon, musicIcon, soundIcon } from '../../helper/Image';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const [music, setMusic] = useState(false);
  const [sound, setSound] = useState(true);
  const navigation = useNavigation();
  return (
    <LinearGradient colors={[colors.BackgroundColorOne, colors.BackgroundColorTwo, '#170551']} style={styles.container}>
      <InnerHeader title={'SETTINGS'} />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.border}></View>
          <View style={styles.settingRow}>
            {/* <FontAwesome5 name="music" size={20} color="#fff" /> */}
            <FastImage source={musicIcon} style={styles.iconsStyle}/>
            <Text style={styles.settingText}>Music</Text>
            {
              music ?
                <TouchableOpacity activeOpacity={0.8} style={[styles.toggleActive, { alignItems: "center", justifyContent: 'flex-end' }]} onPress={() => setMusic(!music)}>
                  <Text style={styles.OnText}>ON</Text>
                  <View style={styles.Active}></View>
                </TouchableOpacity>
                :
                <TouchableOpacity activeOpacity={0.8} style={[styles.toggle, { alignItems: 'center' }]} onPress={() => setMusic(!music)}>
                  <View style={styles.NotActive}></View>
                  <Text style={[styles.OFFText]}>OFF</Text>
                </TouchableOpacity>
            }
          </View>
          <View style={styles.settingRow}>
            {/* <FontAwesome5 name="volume-up" size={20} color="#fff" /> */}
            <FastImage source={soundIcon} style={styles.iconsStyle}/>
            <Text style={styles.settingText}>Sound</Text>
            {
              sound ?
                <TouchableOpacity activeOpacity={0.8} style={[styles.toggleActive, { alignItems: "center", justifyContent: 'flex-end' }]} onPress={() => setSound(!sound)}>
                  <Text style={styles.OnText}>ON</Text>
                  <View style={styles.Active}></View>
                </TouchableOpacity>
                :
                <TouchableOpacity activeOpacity={0.8} style={[styles.toggle, { alignItems: 'center' }]} onPress={() => setSound(!sound)}>
                  <View style={styles.NotActive}></View>
                  <Text style={[styles.OFFText]}>OFF</Text>
                </TouchableOpacity>
            }
          </View>
        </View>
        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Help</Text>
          <View style={styles.border}></View>
          <TouchableOpacity style={styles.helpItem} onPress={()=>navigation.navigate('KycScreen')}>
            {/* <FontAwesome5 name="user-check" size={20} color="#ffca28" /> */}
            <FastImage source={kycIcon} style={styles.iconsStyle}/>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.helpText}>KYC</Text>
              <Text style={styles.subText}>Complete your KYC</Text>
            </View>
            <FontAwesome5 name="arrow-right" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpItem}>
            {/* <FontAwesome5 name="question-circle" size={20} color="#ffca28" /> */}
            <FastImage source={HelpIcon} style={styles.iconsStyle}/>
            <Text style={styles.helpText}>Help</Text>
            <FontAwesome5 name="arrow-right" size={20} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.helpItem}>
            <FastImage source={AboutUsIcon} style={styles.iconsStyle}/>
            <Text style={styles.helpText}>About Us</Text>
            <FontAwesome5 name="arrow-right" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.logOutWrapper}>
          <View style={styles.log}>
            <View style={styles.img}>
              <FastImage source={logOutIcon} style={styles.logOutImage}/>
            </View>
            <View><Text style={styles.logOUt}>Log Out</Text></View>
          </View>
        <TouchableOpacity style={styles.logoutContainer}>
          <LinearGradient
            colors={['#ff6b6b', '#c44569']}
            style={styles.logoutButton}>
            <FontAwesome5 name="sign-out-alt" size={20} color="#fff" />
            <Text style={styles.logoutText}>Log Out</Text>
          </LinearGradient>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  sectionBox: {
    // backgroundColor: '#192a56',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderColor: '#2980b9',
    // borderWidth: 1,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  settingText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  toggle: {
    borderWidth: 2,
    borderColor: "#000000",
    width: 100,
    height: 34,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 2,
  },
  toggleActive: {
    borderWidth: 2,
    borderColor: "#19B861",
    width: 100,
    height: 34,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 2
  },
  NotActive: {
    height: 27,
    width: 42,
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  OnText: {
    color: '#fff',
    marginRight: 10,
    fontWeight: '500',
  },
  OFFText: {
    color: '#fff',
    marginRight: 15,
    fontWeight: '500',
  },
  Active: {
    height: 27,
    width: 42,
    backgroundColor: "#19B861",
    borderRadius: 30,
  },
  border: {
    borderTopWidth: 0.5,
    borderColor: "#49505c",
    marginVertical: 10
  },

  helpSection: {
    marginVertical: 20,
  },
  helpTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: '#273c75',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  helpText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  subText: {
    color: '#bbb',
    fontSize: 12,
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
  logOutWrapper:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:"center",
      backgroundColor:"#F8B8B8",
      borderRadius:20,
      paddingHorizontal:10,
      paddingVertical:10,
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
  }
})