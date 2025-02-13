import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ShopHeader from '../../common/shopHeader/ShopHeader'
import FastImage from 'react-native-fast-image'
import { shopIcon } from '../../helper/Image'
import GoldCoinsCard from '../../common/goldCoinsCard/GoldCoinsCard'
const width = Dimensions.get('window').width;

const Shop = () => {
  return (
     <LinearGradient colors={["#01025C", '#121269']} style={styles.container}>
      <ShopHeader title={'Shop Coin'}/>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:'30%'}}>
      <View style={styles.ImageWrapper}>
        <FastImage source={shopIcon} style={styles.shopIcon} resizeMode='contain'/>
        <View style={{marginTop:'-20%',marginLeft:'20%'}}>
        <Text style={styles.coin}>Coin Balance</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.rupee}>2,520</Text>
          <Text style={styles.currency}> Coins</Text>
        </View>
        </View>
      </View>
        <GoldCoinsCard/>
      </ScrollView>
    
      </LinearGradient>
  )
}

export default Shop

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    alignItems: 'center',
    // justifyContent: "center",
    width: '100%'
  },
  ImageWrapper:{
    marginVertical:10,
    marginBottom:'10%',
    // alignItems:'center'
  },
  shopIcon:{
    height:width/2,
    width:width/1.4,
    alignSelf:'center'
  },
  coin:{
    color:'#ccc',
    fontWeight:'400',
  },
  rupee:{
    color:"#fff",
    fontWeight:"700",
    fontSize:20,
    marginRight:3
  },
  currency:{
    color:'#fff',
    fontSize:14,
  }
})