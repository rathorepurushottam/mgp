import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import ShopHeader from '../../common/shopHeader/ShopHeader'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'
import { DailyTournament } from '../../../assets/DummyData/DummyData'
import FastImage from 'react-native-fast-image'
import { Winners, Winnersbg } from '../../helper/Image'
import { colors } from '../../theme/Colors'
import { useDispatch, useSelector } from 'react-redux'
import { getRanking, getUserWallet } from '../../actions/profileAction'
const Screen = {
  Width: Dimensions.get('window').width,
  Height: Dimensions.get('window').height,
};

// export const RenderTabBar = (props) => {
//   return (
//       <TabBar
//         {...props}
//         renderLabel={({ route, focused }) => (
//           <View
//             style={{
//               flexDirection: 'column',
//               width: '100%',
//               height: 38,
//               justifyContent: 'space-evenly',
//               paddingLeft:10,
//             }}>
//             <Text style={styles.tabLabel}>
//               {route.title}
//             </Text>
//             {focused ? 
//             <View
//             style={{ height: 2, width: 70,color:'#fff' }}
//             // start={{ x: 0, y: 1 }}
//             // end={{ x: 1, y: 0 }}
// >
//             </View> :<View style={{width:Screen.Width/3.9, height:2}}></View>
//             }
//           </View>
//         )}
//         indicatorStyle={{ backgroundColor: 'transparent'}}
//         scrollEnabled={!props.scrollEnabled ? props.scrollEnabled : true}
//         tabStyle={[{ width: 'auto', }, props.tabStyle]}
//         pressColor={'transparent'}
//         style={[styles.tabbar, props.style]}
//       />

//   );
// };

const RankingCard = ({ item }) => (
  <View style={styles.rankingCard}>
    <View style={styles.rankBack}>
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
  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:'10%'}}>
    <ImageBackground source={Winnersbg} style={styles.logoMain}>
      <FastImage source={Winners} style={styles.logo} resizeMode='contain' />
    </ImageBackground>
    <View style={styles.table}>
      <View style={{marginLeft:10}}><Text style={styles.text}>Rank</Text></View>
      <View style={styles.contain}>
      <View><Text style={styles.text}>Name</Text></View>
      <View><Text style={styles.text}>Win</Text></View>
      </View>
    </View>
    <FlatList
      data={DailyTournament}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={ 
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{ textAlign: 'center',fontSize:14,
            fontWeight:'500' }}>
            {'Nothing to show.'}
          </Text>
        </View>
        }
      renderItem={({ item }) => <RankingCard item={item}
       />}
    />
  </ScrollView>
);

const FirstRoute = () => <RankingList />;
const SecondRoute = () => <RankingList />;

const Ranking = () => {
  const dispatch = useDispatch();
  const rankingList = useSelector(state => {
    return state.profile.rankingList;
  });

  useEffect(() => {
    dispatch(getRanking());
  }, []);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Daily' },
    { key: 'second', title: 'Weekly' },
    { key: 'third', title: 'Monthly' },
  ]);

  console.log(rankingList, 'rankingList');

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: FirstRoute,
  });
  return (
    <LinearGradient colors={[colors.BackgroundColorOne, colors.BackgroundColorTwo]} style={styles.container}>
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
    paddingBottom: '18%'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
  logoMain: {
    alignItems: 'center',
  },
  logo: {
    height: 250,
    width: '80%',
    marginVertical: 20,
    resizeMode: 'contain',
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
    paddingLeft: 5,
    paddingRight:10,
    paddingVertical:5,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  rankBack:{ 
    backgroundColor: '#FFDBB8', 
    height: 40,
    width: 60,
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 20 
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
  table:{
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 5,
    paddingRight:10,
    paddingVertical:5,
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent:'space-between'
    // justifyContent:''
  },
  contain:{
    flexDirection:'row',
    width:'72%',
    justifyContent:'space-between'
  },
  text:{color:'#ccc',fontWeight:"500"}
})


