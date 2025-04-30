import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationService from './NavigationService';
import AuthLoading from '../screens/AuthLoading';
import Login from '../screens/login/Login';
import Otp from '../screens/otp/Otp';
import VerifyOtp from '../common/VerifyOtp/VerifyOtp';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Ranking from '../screens/Ranking/Ranking';
import Shop from '../screens/Shops/Shop';
import Wallet from '../screens/Wallet/Wallet';
import Profile from '../screens/Profile/Profile';
import { colors } from '../theme/Colors';
import { BottomHomeIcon, BottomProfileIcon, BottomRankIcon, BottomShopIcon, BottomWalletIcon, ContestFantasy, home1, homeFantasy, HomeFantasy, profile, rakingBottomIcon, ranking, setting, shops, wallet } from '../helper/Image';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LudoMain from '../screens/LudoMain/LudoMain';
import WithDraw from '../screens/withDraw/WithDraw';
import TransactionHistory from '../screens/transactionHistory/TransactionHistory';
import EditProfile from '../screens/editProfile/EditProfile';
import LudoHistory from '../screens/ludoHistory/LudoHistory';
import RummyHistory from '../screens/rummyHistory/RummyHistory';
import InviteFriend from '../screens/InviteFriend/InviteFriend';
import Settings from '../screens/settings/Settings';
import KycScreen from '../screens/kycScreen/KycScreen';
import VerifyAdhar from '../screens/VerifyAdhar/VerifyAdhar';
import LudoContests from '../screens/LudoContests';
import FantasyHome from '../screens/fantasy/FantasyHome/FantasyHome';
import Cricket from '../screens/fantasy/Cricket/Cricket';
import MatchCard from '../screens/fantasy/matchCard/MatchCard';
import MyContest from '../screens/fantasy/myContest/MyContest';
import { BOTTOM_TAB_CONTEST_SCREEN, LEADERBOARD, MY_CONTEST, Notification__SCREEN, PLAYER_PREVIEW, PLAYER_PREVIEW_TWO, SELECT_CAPTAIN, SELECT_PLAYER } from './routes';
import SelectPlayer from '../screens/fantasy/selectPlayer/SelectPlayer';
import LeaderBoard from '../screens/leaderboard/LeaderBoard';
import Contests from '../screens/Contests/Contests';
import PlayerPreview from '../screens/playerPreview/PlayerPreview';
import SelectCaptain from '../screens/fantasy/selectCaptain/SelectCaptain';
import PlayerPreviewTwo from '../screens/fantasy/playerPreviewTwo/PlayerPreviewTwo';
import MyMatches from '../screens/fantasy/contests/myMatches/MyMatches';
import SelectTeam from '../common/components/matchCard/selectTeam/SelectTeam';
import Notification from '../screens/fantasy/notification/Notification';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const RootStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AUTHLoading" component={AuthLoading} />
      <Stack.Screen name="AUTHStack" component={AuthStack} />
      <Stack.Screen name = {'BottomNavigation'} component={BottomNavigation}/>
      <Stack.Screen name="LudoMain" component={LudoMain}/>
      <Stack.Screen name="EditProfile" component={EditProfile}/>
      <Stack.Screen name="LudoHistory" component={LudoHistory}/>
      <Stack.Screen name="LudoContests" component={LudoContests}/>
      <Stack.Screen name="RummyHistory" component={RummyHistory}/>
      <Stack.Screen name="InviteFriend" component={InviteFriend}/>
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="KycScreen" component={KycScreen}/>
      <Stack.Screen name="VerifyAdhar" component={VerifyAdhar}/>
      <Stack.Screen name="BottomNavFantasy" component={BottomNavFantasy}/>
      <Stack.Screen name="Cricket" component={Cricket}/>
      <Stack.Screen name="MatchCard" component={MatchCard}/>
      <Stack.Screen name={MY_CONTEST} component={MyContest}/>
      <Stack.Screen name={SELECT_PLAYER} component={SelectPlayer}/>
      <Stack.Screen name={LEADERBOARD} component={LeaderBoard}/>

      <Stack.Screen name={'Contests'} component={Contests}/>
      <Stack.Screen name={PLAYER_PREVIEW} component={PlayerPreview}/>
      <Stack.Screen name={SELECT_CAPTAIN} component={SelectCaptain}/>
      <Stack.Screen name={PLAYER_PREVIEW_TWO} component={PlayerPreviewTwo}/>

      <Stack.Screen name={'SelectTeam'} component={SelectTeam}/>
      <Stack.Screen name={Notification__SCREEN} component={Notification} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'MYBATTLELOGIN'} component={Login} />
      <Stack.Screen name={'MYBATTLEOTP'} component={Otp} />
      <Stack.Screen name={'VerifyOtp'} component={VerifyOtp} />
      <Stack.Screen name = {'BottomNavigation'} component={BottomNavigation}/>
    </Stack.Navigator>
  );
};

const BottomNavigation = ()=>{
  return(
    <BottomTab.Navigator initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#080828',
        height: Platform.OS === 'ios' ? 80 : 60,
        borderTopWidth: 0,
        paddingVertical: 10,
        borderRadius: 20,
        marginHorizontal: 8,
        marginBottom: 8,
        elevation: 0,
        zIndex: 1,
        paddingHorizontal:10,
      },
      tabBarAllowFontScaling: false,
      tabBarShowLabel: false,
    }}
    >
       <BottomTab.Screen  options={{
        tabBarIcon: ({focused}) => (
          <>
            {focused ? (
              <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -10,
                // width:70
              }}>
                <FastImage
                  resizeMode="stretch"
                  style={{
                    width: 60,
                    height: 60,
                    // borderRadius: 35,
                  }}
                  source={ranking}
                />
           <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:5}} />


              <Text style={{ color: '#FBD25E', fontSize: 11,fontWeight:'500' }}>
                Rank
              </Text>
            </View>
            ) : (
              <View style={{alignItems: 'center',marginTop:20}}>
                <FastImage
                  source={BottomRankIcon}
                  style={{
                    width: 35,
                    height: 25,
                    tintColor: '#f2c94c',
                  }}
                  resizeMode="contain"
                />
                <Text style={{color: '#f2c94c', fontSize: 9}}>
                  Rank
                </Text>
              </View>
            )}
          </>
        ),
      }}

       name="Ranking" component={RankingStack}/>

      <BottomTab.Screen  options={{
        tabBarIcon: ({focused}) => (
          <>
            {focused ? (
              <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -13,
              }}>
                <FastImage
                  resizeMode="stretch"
                  style={{ width: 60,
                    height: 60,
                    // borderRadius: 35,
                  }}
                  source={shops}
                />
           <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:5}} />


              <Text style={{ color: '#FBD25E', fontSize: 11,fontWeight:'500' }}>
                Shop
              </Text>
            </View>
            ) : (
              <View style={{alignItems: 'center',marginTop:20}}>
                <FastImage
                  source={BottomShopIcon}
                  style={{
                    width: 35,
                    height: 25,
                    tintColor: '#f2c94c',
                  }}
                  resizeMode="contain"
                />
                <Text style={{color: '#f2c94c', fontSize: 10}}>
                  Shop
                </Text>
              </View>
            )}
          </>
        ),
      }}

       name="Shop" component={ShopStack}/>


     <BottomTab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <>
            {focused ? (
              <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -13,
              }}>
                <FastImage
                  resizeMode="stretch"
                  style={{ width: 60,
                    height: 60,
                    // borderRadius: 35,
                   }}
                  source={home1}
                />
           <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:5}} />


              <Text style={{ color: '#FBD25E', fontSize: 11,fontWeight:'500' }}>
                Home
              </Text>
            </View>
            ) : (
              <View style={{alignItems: 'center',marginTop:20}}>
                <FastImage
                  source={BottomHomeIcon}
                  style={{
                    width: 35,
                    height: 25,
                    tintColor: '#f2c94c',
                  }}
                  resizeMode="contain"
                />
                <Text style={{color: '#f2c94c', fontSize: 10}}>
                  Home
                </Text>
              </View>
            )}
          </>
        ),
      }}

       name="Home" component={HomeStack}/>

      <BottomTab.Screen  options={{
        tabBarIcon: ({focused}) => (
          <>
            {focused ? (
              <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -13,
              }}>
                <FastImage
                  resizeMode="stretch"
                  style={{ width: 60,
                    height: 60,
                    // borderRadius: 35,
                   }}
                  source={wallet}
                />
           <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:5}} />


              <Text style={{ color: '#FBD25E', fontSize: 11,fontWeight:'500' }}>
                Wallet
              </Text>
            </View>
            ) : (
              <View style={{alignItems: 'center',marginTop:20}}>
                <FastImage
                  source={BottomWalletIcon}
                  style={{
                    width: 35,
                    height: 25,
                    tintColor: '#f2c94c',
                  }}
                  resizeMode="contain"
                />
                <Text style={{color: '#f2c94c', fontSize: 10}}>
                  Wallet
                </Text>
              </View>
            )}
          </>
        ),
      }}

       name="Wallet" component={WalletStack}/>

      <BottomTab.Screen  options={{
        tabBarIcon: ({focused}) => (
          <>
            {focused ? (
              <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -10,
                width:100,
              }}>
                <FastImage
                  resizeMode="stretch"
                  style={{ width: 60,
                    height: 60,
                    // borderRadius: 35,
                  }}
                  source={profile}
                />
           <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:5}} />


              <Text style={{ color: '#FBD25E', fontSize: 11,fontWeight:'500' }}>
                Profile
              </Text>
            </View>
            ) : (
              <View style={{alignItems: 'center',marginTop:20}}>
                <FastImage
                  source={BottomProfileIcon}
                  style={{
                    width: 35,
                    height: 25,
                    tintColor: '#f2c94c',
                  }}
                  resizeMode="contain"
                />
                <Text style={{color: '#f2c94c', fontSize: 10}}>
                  Profile
                </Text>
              </View>
            )}
          </>
        ),
      }}

       name="Profile" component={ProfileStack}/>
    </BottomTab.Navigator>
  );
};



const BottomNavFantasy = ()=>{
  return(
    <BottomTab.Navigator initialRouteName="FantasyHome"
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#080828',
        height: Platform.OS === 'ios' ? 80 : 60,
        borderTopWidth: 0,
        paddingVertical: 10,
        borderRadius: 20,
        marginHorizontal: 8,
        marginBottom: 8,
        elevation: 0,
        zIndex: 1,
        // paddingHorizontal:10
      },
      tabBarAllowFontScaling: false,
      tabBarShowLabel: false,
    }}
    >

     <BottomTab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <>
           {focused ? (
              // <View
              //   style={{
              //     alignItems: 'center',
              //     justifyContent: 'center',
              //     marginTop: -30,
              //   }}>
              //   <View
              //     style={{
              //       width: 70,
              //       height: 70,
              //       borderRadius: 35,
              //       borderWidth:6,
              //       borderColor:'#121269',
              //       backgroundColor: '#0b0c2a', // Background color for the circle
              //       alignItems: 'center',
              //       justifyContent: 'center',
              //     }}>
              //     <FastImage
              //       resizeMode="contain"
              //       style={{width: 35, height: 35}}
              //       source={HomeFantasy}
              //     />
              //   </View>
              //   <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:9}}></View>
              //   <Text style={{color: '#f2c94c', fontSize: 10, marginTop: 5}}>
              //     Home
              //   </Text>
              // </View>

              <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: -13,
                  }}>
                    <FastImage
                      resizeMode="stretch"
                      style={{ width: 60,
                        height: 60,
                        borderRadius: 35 }}
                      source={HomeFantasy}
                    />
               <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#fff',marginTop:5}} />


                  <Text style={{ color: '#fff', fontSize: 11,fontWeight:'500' }}>
                    Home
                  </Text>
                </View>
            )  : (
              <View style={{alignItems: 'center',marginTop:20}}>
                <FastImage
                  source={homeFantasy}
                  style={{
                    width: 35,
                    height: 25,
                    tintColor: '#fff',
                  }}
                  resizeMode="contain"
                />
                <Text style={{color: '#fff', fontSize: 10,marginTop:4}}>
                  Home
                </Text>
              </View>
            )}
          </>
        ),
      }}

       name="FantasyHome" component={FantasyHome}/>

    <BottomTab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <>
            {focused ? (
                 <View
                 style={{
                   alignItems: 'center',
                   justifyContent: 'center',
                   marginTop: -13,
                   width:100,
                 }}>
                   <FastImage
                     resizeMode="stretch"
                     style={{ width: 60,
                       height: 60,
                       borderRadius: 35 }}
                     source={ContestFantasy}
                   />
              <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#fff',marginTop:5}} />


                 <Text style={{ color: '#fff', fontSize: 11,fontWeight:'500' }}>
                   Contest
                 </Text>
               </View>
            ) : (
              <View style={{alignItems: 'center',marginTop:20,width:100}}>
                <FastImage
                  source={rakingBottomIcon}
                  style={{
                    width: 35,
                    height: 25,
                    tintColor: '#f2c94c',
                  }}
                  resizeMode="contain"
                />
                <Text style={{color: '#fff', fontSize: 10,marginTop:4}}>
                  Contest
                </Text>
              </View>
            )}
          </>
        ),
      }}

       name={BOTTOM_TAB_CONTEST_SCREEN} component={MyMatches}/>
    </BottomTab.Navigator>
  );
};
const HomeStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
  <Stack.Screen
    name={'HomeStack'}
    component={Home}
    options={{headerShown: false}}
    />
  </Stack.Navigator>
  );
};


const RankingStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
  <Stack.Screen
    name={'RankingStack'}
    component={Ranking}
    options={{headerShown: false}}
    />
  </Stack.Navigator>
  );

};
const ShopStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
  <Stack.Screen
    name={'ShopStack'}
    component={Shop}
    options={{headerShown: false}}
    />
  </Stack.Navigator>
  );
};
const WalletStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
  <Stack.Screen
    name={'WalletStack'}
    component={Wallet}
    options={{headerShown: false}}
    />
      <Stack.Screen name={'WithDraw'} component={WithDraw}/>
      <Stack.Screen name={'TransactionHistory'} component={TransactionHistory}/>

  </Stack.Navigator>
  );
};

const ProfileStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
  <Stack.Screen
    name={'ProfileStack'}
    component={Profile}
    options={{headerShown: false}}
    />
  </Stack.Navigator>
  );
};





const Navigator = () => {
  return (
    <NavigationContainer
    ref={navigatorRef => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
    >
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;


   // screenOptions={{
    //   headerShown: false,
    //   tabBarHideOnKeyboard: true,
    //   tabBarStyle: {
    //     backgroundColor: colors.bottomTabBackground,
    //     height: Platform.OS === 'ios' ? 80 : 60,
    //     borderTopWidth: 0,
    //     paddingVertical: 10,
    //     borderRadius: 20,
    //     // borderRightWidth:10,
    //     borderColor:'#121269',
    //     marginBottom:20,
    //     // borderBottomWidth:10,
    //     // borderBottomColor:'#121269'
    //     marginHorizontal:5,
    //     // borderRightWidth:10,
    //     // borderLeftWidth:10,
    //     // borderLeftColor:'#121269',
    //     // borderRightColor:'#121269'


    //   },
    //   tabBarAllowFontScaling: false,
    //   tabBarShowLabel: false,
    // }}

       //  options={{
      //   tabBarIcon: ({focused}) => (
      //     <>
      //       {focused ? (
      //         <FastImage
      //           resizeMode="contain"
      //           style={{width: 33, height: 40, marginTop: -30}}
      //           source={BottomHomeIcon}
      //           // tintColor={NLCColor.Red}
      //         />
      //       ) :
      //       (
      //         <FastImage
      //         source={focused ? BottomHomeIcon : BottomHomeIcon}
      //         tintColor={focused ? colors.bottomIConColor :  colors.bottomIConColor}
      //         style={{
      //           width: 25,
      //           height: 25,
      //         }}
      //         resizeMode="contain"
      //       />
      //       )}
      //       <Text
      //         style={{color:colors.bottomIConColor,fontSize:10}}>
      //         Home
      //       </Text>
      //     </>
      //   ),
      // }}
