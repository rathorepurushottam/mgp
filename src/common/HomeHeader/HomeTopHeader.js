import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import { DemoUser, Gold, Notification, plusIcon, setting } from '../../helper/Image';
import { colors } from '../../theme/Colors';
import { Notification__SCREEN } from '../../navigation/routes';
import NavigationService from '../../navigation/NavigationService';
import { useSelector } from 'react-redux';
import { formatNumber } from '../../helper/Utility';

const HomeTopHeader = ({name}) => {
  const userWalletData = useSelector(state => {
    return state.profile.userWalletData;
  });

return (
    <LinearGradient colors={[colors.BackgroundColorOne,colors.BackgroundColorTwo]} style={styles.container}>
      <View style={styles.headerWrapper}>

        <View style={styles.userSection}>
          <TouchableOpacity>
            <FastImage source={DemoUser} style={styles.logo} />
          </TouchableOpacity>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.greetingText}>Hi,</Text>
            <Text style={styles.userNameText}>{name}</Text>
          </View>
        </View>

        <View style={styles.goldSection}>
          <FastImage source={Gold} style={styles.gold} />
          <Text style={styles.goldText}>{formatNumber(userWalletData?.totalBalance)}</Text>
          <TouchableOpacity style={styles.plusButton}>
            <FastImage source={plusIcon} style={styles.plusIcon}/>
          </TouchableOpacity>
        </View>

        <View style={styles.iconSection}>
          <TouchableOpacity style={[styles.ContainIcon,{marginLeft:4}]}>
            <FastImage source={setting} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => NavigationService.navigate(Notification__SCREEN)} style={[styles.ContainIcon,{marginLeft:4}]}>
            <FastImage source={Notification} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );

};

export default HomeTopHeader;

const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === 'ios' ? 50 : 10,
      paddingHorizontal: 20,
      paddingBottom: 10,
    },
    headerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    userSection: {
      flexDirection: 'row',
      alignItems: 'center',
      width:'53%',
    },
    logo: {
      width: 60,
      height: 60,
    },
    greetingText: {
      color: '#fff',
      fontSize: 14,
    },
    userNameText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    goldSection: {
      flexDirection: 'row',
      alignItems: 'center',
    //   backgroundColor: '#f2c94c',
      borderRadius: 20,
      paddingHorizontal: 3,
      paddingVertical: 2,
      borderWidth:1,
      borderColor:'#fff',
      marginLeft:20,
    },
    gold: {
      width: 30,
      height: 30,
      marginRight: 5,
      marginLeft:-16,
    },
    goldText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    plusButton: {
      backgroundColor: '#fff',
      borderRadius: 12,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 5,
    },
    plusIcon:{
        height:20,
        width:20,
        resizeMode:'contain',
    },
    plusText: {
      color: 'blue',
    //   fontWeight: 'bold',
    },
    iconSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 14,
      height: 14,
      tintColor: '#fff',
    },
    ContainIcon:{
        borderRadius:20,
        borderWidth:1,
        borderColor:'#fff',
        padding:4,
    },
  });


// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         // paddingHorizontal: 20,
//         alignItems: 'center',
//         justifyContent: "center",
//         width: '100%'
//       },
//       logo:{
//         height:60,
//         width:70,
//         resizeMode:'contain'
//       },
//       Wrapper:{

//       }
// })
