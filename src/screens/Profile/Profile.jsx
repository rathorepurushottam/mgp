import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import ShopHeader from '../../common/shopHeader/ShopHeader'
import FastImage from 'react-native-fast-image';
import { EditIcon, ludoIMageProfile, rummyImageProfile, trophy2, videoGame, winningTrophy } from '../../helper/Image';
const { width } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign'
// Feather
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/Colors';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={[colors.BackgroundColorOne, colors.BackgroundColorTwo]} style={styles.container}>
      <ShopHeader title="PROFILE" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollContainer}>


        <View style={styles.profileCard}>
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.username}>User0230</Text>
              <Text style={styles.phone}>+91 89******89</Text>
              <LinearGradient
                colors={['#8860E6', '#A975E6']}
                style={styles.levelBadge}
              >
                <Text style={styles.levelText}>Level 1</Text>
              </LinearGradient>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.9} style={styles.editIcon} onPress={()=>navigation.navigate('EditProfile')}>
            <MaterialCommunityIcons name="pencil-outline" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.winningsCard}>
          <View style={styles.winningsHeader}>
            <View>
              <Text style={styles.amount}>₹50</Text>
              <Text style={styles.winningsText}>Total Winnings</Text>
            </View>
            <FastImage source={winningTrophy} style={styles.winningTrophy} />
          </View>
          <View style={styles.stats}>
    <View style={[styles.WinningBox,{width: "45%",}]}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>10</Text>
                <Text style={styles.statLabel}>Game Won</Text>
              </View>
              {/* <Icon name="game-controller" size={25} color="#fff" /> */}
              <FastImage source={videoGame} style={styles.trophy}/>
            </View>

            <View style={[styles.WinningBox,{width:'50%'}]}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>41%</Text>
                <Text style={styles.statLabel}>Winning Ratio</Text>
              </View>
              <FastImage source={trophy2} style={styles.trophy}/>
            </View>
          </View>
        </View>

        <View style={styles.gamesPlayed}>
          <View style={styles.gamesHeader}>
            <Text style={styles.gamesTitle}>Total Games Played</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.viewAll}>View →</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.totalGames}>120</Text>
          <View style={[styles.gameList]}>
            <TouchableOpacity onPress={()=>navigation.navigate('LudoHistory')}>
              <ImageBackground source={ludoIMageProfile}  resizeMode ='stretch' style={[styles.gameIcon]} >
                <View style={{marginTop:34,marginLeft:10}}>
              <Text style={styles.gameValue}>60</Text>
              <Text style={styles.gameLabel}>Ludo</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gameItem} onPress={()=>navigation.navigate('RummyHistory')}>
              <ImageBackground source={rummyImageProfile}  resizeMode ='contain' style={[styles.gameIcon]} >
                <View style={{marginTop:34,marginLeft:10}}>
              <Text style={styles.gameValue}>60</Text>
              <Text style={styles.gameLabel}>Rummy</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

{/* <View style={{borderBottomWidth:1,borderColor:'#374F7880',marginBottom:10}}/> */}
        <View style={{marginBottom:'10%'}}>
        <TouchableOpacity activeOpacity={0.8} style={styles.actionCard} onPress={()=>navigation.navigate('Settings')}>
          <View style={{flexDirection:"row",alignItems:"center"}}>
          <Icon name="settings" size={25} color="#fff" />
          <Text style={styles.actionText}>Settings</Text>
          </View>
          <>
          <AntDesign name="arrowright" color={'#fff'} size={20}/>
          </>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.actionCard} onPress={()=>navigation.navigate('InviteFriend')}>
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <Icon name="gift" size={25} color="#fff" />
          <Text style={styles.actionText}>Refer & Earn</Text>
          </View>
          <>
          <AntDesign name="arrowright" color={'#fff'} size={20}/>
          </>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  ScrollContainer:{ 
    paddingTop: 20,
     marginBottom: "30%", 
     width: "90%", 
     marginHorizontal: 20 
  },

  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF1A',
    borderRadius: 20,
    padding: 15,
    width: width * 0.9,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    position: 'relative',
    borderWidth: 2,
    borderColor: '#CEE7FF80'
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    color: 'lightgray',
    marginBottom: 5,
  },
  levelBadge: {
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  levelText: {
    color: '#fff',
    fontSize: 12,
  },
  editIcon: {
    backgroundColor: '#4C4FA1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 70,
    right: 0,
    shadowColor: '#000',
    borderWidth: 4,
    borderWidth: 10,
    borderColor: "#01025C",
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor:'#C4C4C4'
  },

  WinningBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    alignItems: 'center', 
    backgroundColor: '#0000001A', 
    paddingHorizontal: 10, 
    borderRadius: 10,
    paddingVertical: 10
  },

  winningTrophy: {
    height: 70,
    width: 70,
  },

  winningsCard: {
    backgroundColor: '#FFFFFF1A',
    borderRadius: 15,
    padding: 15,
    marginVertical: 20,
    borderWidth: 1.4,
    borderColor: '#CEE7FF80'
  },
  winningsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  amount: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  winningsText: {
    color: 'lightgray',
    marginVertical: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trophy:{
      height:30,
      width:30,

  },
  statItem: {
    // alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'lightgray',
    fontSize: 13,
  },
  gamesPlayed: {
    // backgroundColor: '#2E3192',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    // marginHorizontal:20,
  },
  gamesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gamesTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#CEE7FFCC',
    backgroundColor:'#374F7880',
    paddingHorizontal:13,
    paddingVertical:9,
    borderRadius:20,

  },
  totalGames: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  gameList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:"90%",
    marginTop:"-5%"
  },

  gameItem: {
    alignItems: 'center',
  },
  gameIcon: {
    width: width/2.4,
    height: 100,
    marginBottom: 5,
  },
  gameValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gameLabel: {
    color: 'lightgray',
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF1A',
    borderRadius: 15,
    padding: 15,
    justifyContent:'space-between',
    marginBottom:15,
  },
  actionText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  }
})