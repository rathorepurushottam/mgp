import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ShopHeader from '../../common/shopHeader/ShopHeader'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { DailyTournament } from '../../../assets/DummyData/DummyData'
import FastImage from 'react-native-fast-image'
import { Winners, Winnersbg } from '../../helper/Image'
const Screen = {
  Width: Dimensions.get('window').width,
  Height: Dimensions.get('window').height,
};

const RankingCard = ({ item }) => (
  <View style={styles.rankingCard}>
    <View style={{ backgroundColor: '#FFDBB8', height: 30, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
      <Text style={styles.rank}>
        {item.rank <= 3 ? (
          <Image
            source={item.image}
            style={styles.rankImage}
          />
        ) : (
          `#${item?.rank}`
        )}
      </Text>
    </View>
    <Image source={item.userImage} style={styles.avatar} />
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.win}>{item.win}</Text>
  </View>
);

const RankingList = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    <ImageBackground source={Winnersbg} style={styles.logoMain}>
      <FastImage source={Winners} style={styles.logo} resizeMode='contain' />
    </ImageBackground>
    <FlatList
      data={DailyTournament}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RankingCard item={item} />}
    />
  </ScrollView>
);

const FirstRoute = () => <RankingList />;
const SecondRoute = () => <RankingList />;

const Ranking = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Daily' },
    { key: 'second', title: 'Weekly' },
    { key: 'third', title: 'Monthly' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: FirstRoute,
  });
  return (
    <LinearGradient colors={['#01025C', '#121269']} style={styles.container}>
      <ShopHeader title={"LEADERBOARD"} />

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            indicatorStyle={styles.indicator}
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
          />
        )}
      />
    </LinearGradient>
  )
}

export default Ranking

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '32%'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  logoMain: {
    // width:"100%",
    // height:200
    alignItems: 'center',
    // resizeMode:'c'
  },
  logo: {
    height: 250,
    width: '80%',
    // alignSelf:'center',
    marginVertical: 20,
    resizeMode: 'contain',
    // marginTop:10
  },
  tabBar: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: '#fff',
    height: 3,
    width: Screen.Width / 4.6,
    marginHorizontal: 25,

  },
  tabLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rankingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    width: 40,
    textAlign: 'center',
  },
  rankImage: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  win: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  // container: {
  //   flex: 1,
  //   // paddingHorizontal: 20,
  //   alignItems: 'center',
  //   // justifyContent: "center",
  //   width: '100%'
  // },

})




// <LinearGradient colors={["#01025C", '#121269']} style={styles.container}>
//   <ShopHeader title={"LEADERBOARD"}/>
//   <TabView
//   navigationState={{ index, routes }}
//   renderScene={renderScene}
//   onIndexChange={setIndex}
//   initialLayout={{ width: Screen.Width }}
// />
// </LinearGradient>