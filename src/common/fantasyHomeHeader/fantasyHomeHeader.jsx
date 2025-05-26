import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Notification__SCREEN,
} from '../../navigation/routes';
import {
    arrowleft,
  iconbell,
  myChampTextImg,
} from '../../helper/Image';
import FastImage from 'react-native-fast-image';
// import { useSelector } from 'react-redux';
import NavigationService from '../../navigation/NavigationService';

const FantasyHomeHeader = ({ personClick }) => {
  // const userData = useSelector(state => {
  //   return state.profile.userData;
  // });
  // const {cash_bonus, winning_amount, totaldeposit } = userData ?? '';
  // let totalbalance = winning_amount + cash_bonus + totaldeposit;
  // useEffect(() => {
  //   setRandom(Math.random())
  // }, [total_balance])
  return (
    <>
      {/* <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        networkActivityIndicatorVisible={true}
      /> */}
      <View>
        <View
          style={styles.topContainer}>
          <TouchableOpacity
            style={{  }}
            onPress={personClick}>
              <FastImage
                source={arrowleft}
                resizeMode="contain"
                style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <FastImage
            source={myChampTextImg}
            style={styles.combineIcon}
            resizeMode="contain"
          />
          <TouchableOpacity
          style={styles.notifiView}
          onPress={() => NavigationService.navigate(Notification__SCREEN)}>
          <FastImage
            source={iconbell}
            resizeMode="contain"
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default FantasyHomeHeader;

const styles = StyleSheet.create({
  topContainer: {
    height: 60,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 20,
    justifyContent: 'space-between',
  },
  personImage: {
    height: 28,
    width: 28,
    borderRadius: 100,
  },
  combineIcon: {
    height: 140,
    width: 140,
    marginLeft: 60,

  },
  notificationIcon: {
    height: 28,
    width: 28,
    right: 25,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  walletView: {
    borderRadius: 59,
    flexDirection: 'row',
    marginTop: 2,
    height: 30,
    width: 80,
    borderWidth: 2,
    borderColor: '#C1AA9966',
    marginLeft: 30,
  },
  userfilter: {
    // position: "absolute", top: 4
  },
  walletbox: {
    height: 28,
    width: 28, backgroundColor: '#FFFFFF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DBA73E',
    right: 10,
  },
  logoview: {
    //  justifyContent:"space-between"
  },
  belldot: {
    height: 4,
    width: 4,
    backgroundColor: '#EC536A',
    position: 'absolute',
    borderRadius: 10,
  },
  notifiView: {
    height: 28,
    with: 28,
    marginTop: 3,
    // marginRight: -15,
    paddingLeft: 50,
    // backgroundColor: 'black',
    // borderWidth: 1
  },
});
