import { ScrollView, StyleSheet, Text, View , NativeModules} from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HomeTopHeader from '../../common/HomeHeader/HomeTopHeader';
import Slider from '../../common/SliderHome/Slider';
import FastImage from 'react-native-fast-image';
import { trophy } from '../../helper/Image';
import GamesHome from '../../common/HomeGames/GamesHome';
import { colors } from '../../theme/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { getKycDetails } from '../../actions/profileAction';
import { AppSafeAreaView } from '../../common/AppSafeAreaView/AppSafeAreaView';

const {UnityModule} = NativeModules;

const Home = () => {
  const diapatch = useDispatch();
   const kycDetails = useSelector(state => {
    return state.profile.kycDetails;
  });

  console.log(kycDetails,'kycdetails');
  useEffect(()=>{
    diapatch(getKycDetails());
  },[]);

  return (
        <AppSafeAreaView light={true}>
       <LinearGradient colors={[colors.BackgroundColorOne,colors.BackgroundColorTwo]} style={styles.container}>
        <HomeTopHeader/>
        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:'18%'}}>
        <Slider/>
        <View style={styles.trophyWrapper}>
          <FastImage source={trophy} style={styles.trophy}/>
          <Text style={styles.text}>XYZ won 84 Rs, you can be next XYZ...Play Now!</Text>
        </View>
        <GamesHome NativeModules={NativeModules}/>
        </ScrollView>
       </LinearGradient>
       </AppSafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  trophy:{
    height:30,
    width:30,
    resizeMode:'contain',
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
    fontSize:13,
  },
});
