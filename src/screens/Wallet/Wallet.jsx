import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WalletHeader from '../../common/Headers/WalletHeader'
import FastImage from 'react-native-fast-image';
import { giftImage, kycVerify, paymentSetting, tds } from '../../helper/Image';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { getUserWallet } from '../../actions/profileAction';

const Wallet = () => {
  const dispatch = useDispatch();
  const userWalletData = useSelector(state => {
    return state.profile.userWalletData;
  });
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(getUserWallet());
  }, []);

  return (
     <LinearGradient colors={[colors.BackgroundColorOne, colors.BackgroundColorTwo]} style={styles.container}>
      <WalletHeader title="WALLET"/>
      <ScrollView style={{marginBottom:"18%"}} showsVerticalScrollIndicator={false}>
        <View style={styles.balanceCard}>
          <View style={styles.BalanceWrap}>
            <View>
            <Text style={styles.header}>Total Balance  <AntDesign name="exclamationcircleo" color={'#fff'} size={15}/></Text>
            <Text style={styles.balanceAmount}>₹1,000</Text>
            </View>
            <View><FastImage source={giftImage} style={styles.giftImage} resizeMode='stretch'/></View>
          </View>
          <View style={styles.row}>
            <View style={[styles.card,{borderTopLeftRadius:30,borderBottomLeftRadius:30}]}>
              <View style={{flexDirection:"row",justifyContent:'space-between'}}>
              <View>
              <Text style={styles.cardTitle}>Deposits</Text>
              <Text style={styles.cardAmount}>₹50</Text>
              </View>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" color={'#fff'} size={20}/>
              </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.buttonGreen}>
                <Text style={styles.buttonText}>Deposit</Text>
                <AntDesign name="arrowright" color={'#fff'} size={18}/>
              </TouchableOpacity>
            </View>
            <View style={[styles.card,{borderTopRightRadius:30,borderBottomRightRadius:30}]}>
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
              <View>
              <Text style={styles.cardTitle}>Winnings</Text>
              <Text style={styles.cardAmount}>₹50</Text>
              </View>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" color={'#fff'} size={20}/>
              </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.buttonRed} onPress={()=>navigation.navigate('WithDraw')}>
                <Text style={styles.buttonText}>Withdraw</Text>
                <AntDesign name="arrowright" color={'#fff'} size={18}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.card,{backgroundColor:'white',borderTopLeftRadius:20,borderBottomLeftRadius:20}]}>
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
              <View>
              <Text style={[styles.cardTitle]}>CashBack</Text>
              <Text style={[styles.cardAmount,{color:'#222'}]}>₹50</Text>
              </View>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" color={'#222'} size={20}/>
              </TouchableOpacity>

              </View>
            </View>
            <View style={[styles.card,{backgroundColor:'white',borderTopRightRadius:20,borderBottomRightRadius:20}]}>
            <View style={{flexDirection:"row",justifyContent:'space-between'}}>
              <View>
              <Text style={styles.cardTitle}>Bonus</Text>
              <Text style={[styles.cardAmount,{color:'#222'}]}>₹50</Text>
              </View>
              <TouchableOpacity>
                <Entypo name="dots-three-horizontal" color={'#222'} size={20}/>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.kyc}>Kyc Verification</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionItem} onPress={()=>navigation.navigate('KycScreen')}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <FastImage source={kycVerify} style={styles.img}/>
            <Text style={styles.sectionText}>Verify Your KYC</Text>
            </View>
            <View>
              <AntDesign name="arrowright" color={'#fff'} size={20}/>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.help}>Help</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.sectionItem}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            <FastImage source={paymentSetting} style={styles.img}/>
            <Text style={styles.sectionText}>Payment Settings</Text>
            </View>
            <View>
              <AntDesign name="arrowright" color={'#fff'} size={20}/>
            </View>
          </TouchableOpacity>
          </View>
        <View style={[styles.section,{marginBottom:"10%"}]}>
          <TouchableOpacity style={styles.sectionItem}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
            {/* <Icon name="file-document" size={24} color="#fff" /> */}
            <FastImage source={tds} style={styles.img}/>

            <Text style={styles.sectionText}>TDS Status</Text>
            </View>
            <View>
              <AntDesign name="arrowright" color={'#fff'} size={20}/>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
     </LinearGradient>
  )
}

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },

  header: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  balanceCard: {
    backgroundColor: '#FFFFFF33',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  BalanceWrap:{
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:'center'
  },
  giftImage:{
    height:120,
    width:120
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#27275F',
    borderRadius: 10,
    padding: 15,
    width: '47%',
  },
  cardTitle: {
    color: '#A0A0D6',
    fontSize: 14,
  },
  cardAmount: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  buttonGreen: {
    backgroundColor: '#18C967',
    borderRadius: 20,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection:"row",
    justifyContent:'flex-end',
    paddingHorizontal:5,
    marginTop:5,
    borderWidth:1,
    borderColor:"#fff"
  },
  buttonRed: {
    backgroundColor: '#FF4D4D',
    borderRadius: 20,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection:"row",
    justifyContent:'flex-end',
    paddingHorizontal:5,
    marginTop:5,
    borderWidth:1,
    borderColor:"#fff"
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight:14
  },
  kyc:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 10,
    paddingHorizontal:25
  },
  section: {
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: '#FFFFFF33',
    borderRadius: 20,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent:'space-between'
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#2E2E70',
  },
  sectionText: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 10,
  },
  help:{
    color:'#fff',
    fontSize:16,
    fontWeight:'500',
    marginTop:10,
    paddingHorizontal:25
  },
  img:{
    height:20,
    width:25
  }
})