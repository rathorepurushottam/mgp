import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import HomeTopHeader from '../../common/HomeHeader/HomeTopHeader'
import Slider from '../../common/SliderHome/Slider'
import FastImage from 'react-native-fast-image'
import { trophy } from '../../helper/Image'
import GamesHome from '../../common/HomeGames/GamesHome'

const Home = () => {
  return (
       <LinearGradient colors={["#01025C", '#121269']} style={styles.container}>
        <HomeTopHeader/>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:'30%'}}>
        <Slider/>
        <View style={styles.trophyWrapper}>
          <FastImage source={trophy} style={styles.trophy}/>
          <Text style={styles.text}>XYZ won 84 Rs, you can be next XYZ...Play Now!</Text>
        </View>
        <GamesHome/>
        </ScrollView>
       </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: "center",
    width: '100%'
  },
  trophy:{
    height:30,
    width:30,
    resizeMode:'contain'
  },
  trophyWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginVertical:10,
  },
  text:{
    color:'#fff',
    marginLeft:4,
    fontSize:13
  }
})