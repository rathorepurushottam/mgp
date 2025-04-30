import { Dimensions, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppSafeAreaView } from '../../common/AppSafeAreaView/AppSafeAreaView'
import Header from '../../common/Header/Header'
import { backgroundLudo, ludobg, LudoIconImage, multipleUser } from '../../helper/Image'
import FastImage from 'react-native-fast-image'
import LinearGradient from 'react-native-linear-gradient'
import { InsideLudoData } from '../../../assets/DummyData/DummyData'
import RulesModal from '../../common/RulesModal/RulesModal'
import { useNavigation } from '@react-navigation/native'
const width = Dimensions.get('window').width;
const LudoMain = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() =>   navigation.navigate('LudoContests')}>
      <FastImage
        source={item.image}
        style={styles.image}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );

  return (
    <AppSafeAreaView statusColor={true}
    light={true}>
        <LinearGradient colors={["#39329c","#01025C", '#121269']} style={styles.container}>
        <Header />
      <ImageBackground source={backgroundLudo} style={styles.ludoBack}>
        <FastImage source={LudoIconImage} style={styles.img}/>
        <View style={styles.multiUserWrapper}>
        <FastImage source={multipleUser} style={styles.users}/>
        <Text style={{color:'#ccc'}}>Online Players <Text style={{fontWeight:'bold',color:'#fff'}}>11,555</Text></Text>
        </View>
      </ImageBackground>
        <ScrollView contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <ImageBackground source={ludobg} style={{height:"100%"}} resizeMode='repeat'>
        <FlatList
              data={InsideLudoData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              contentContainerStyle={styles.contain}
              showsVerticalScrollIndicator={false}
              scrollEnabled={true}
        />
      </ImageBackground>
        </ScrollView>
        </LinearGradient>
    </AppSafeAreaView>
  )
}

export default LudoMain

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%'
    },
    ludoBack:{
        height:180,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    users:{
        height:20,
        width:20,
        resizeMode:'contain',
        marginRight:5,
    },
    img:{
        height:130,
        width:130,
        resizeMode:'contain'
    },
    multiUserWrapper:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
    },
    contain:{
      marginVertical:10
    },
    image: {
      width: width/2.24,
      height: 240,
      margin: 10,
    },
})