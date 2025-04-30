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
import { BottomHomeIcon, BottomProfileIcon, BottomRankIcon, BottomShopIcon, BottomWalletIcon, setting } from '../helper/Image';
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

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const RootStackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AUTHLoading" component={AuthLoading} />
      <Stack.Screen name="AUTHStack" component={AuthStack} />
      <Stack.Screen name="LudoMain" component={LudoMain}/>
      <Stack.Screen name="EditProfile" component={EditProfile}/>
      <Stack.Screen name="LudoHistory" component={LudoHistory}/>
      <Stack.Screen name="LudoContests" component={LudoContests}/>
      <Stack.Screen name="RummyHistory" component={RummyHistory}/>
      <Stack.Screen name="InviteFriend" component={InviteFriend}/>
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen name="KycScreen" component={KycScreen}/>
      <Stack.Screen name="VerifyAdhar" component={VerifyAdhar}/>
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
      <Stack.Screen name={"MYBATTLELOGIN"} component={Login} />
      <Stack.Screen name={"MYBATTLEOTP"} component={Otp} />
      <Stack.Screen name={"VerifyOtp"} component={VerifyOtp} />
      <Stack.Screen name = {'BottomNavigation'} component={BottomNavigation}/>
    </Stack.Navigator>
  );
};

const BottomNavigation = ()=>{
  return(
    <BottomTab.Navigator initialRouteName='Home'
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
                  marginTop: -30,
                }}>
                <View 
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth:6,
                    borderColor:'#121269',
                    backgroundColor: '#0b0c2a', // Background color for the circle
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FastImage
                    resizeMode="contain"
                    style={{width: 35, height: 35}}
                    source={BottomRankIcon}
                  />
                </View>
                <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:9}}></View>
                <Text style={{color: '#f2c94c', fontSize: 9, marginTop: 5}}>
                  Ranking
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
                  Ranking
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
                  marginTop: -30,
                }}>
                <View 
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth:6,
                    borderColor:'#121269',
                    backgroundColor: '#0b0c2a', // Background color for the circle
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FastImage
                    resizeMode="contain"
                    style={{width: 35, height: 35}}
                    source={BottomShopIcon}
                  />
                </View>
                <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:9}}></View>
                <Text style={{color: '#f2c94c', fontSize: 10, marginTop: 5}}>
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
                  marginTop: -30,
                }}>
                <View 
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth:6,
                    borderColor:'#121269',
                    backgroundColor: '#0b0c2a', // Background color for the circle
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FastImage
                    resizeMode="contain"
                    style={{width: 35, height: 35}}
                    source={BottomHomeIcon}
                  />
                </View>
                <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:9}}></View>
                <Text style={{color: '#f2c94c', fontSize: 10, marginTop: 5}}>
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
                  marginTop: -30,
                }}>
                <View 
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth:6,
                    borderColor:'#121269',
                    backgroundColor: '#0b0c2a', // Background color for the circle
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FastImage
                    resizeMode="contain"
                    style={{width: 35, height: 35}}
                    source={BottomWalletIcon}
                  />
                </View>
                <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:9}}></View>
                <Text style={{color: '#f2c94c', fontSize: 10, marginTop: 5}}>
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
                  marginTop: -30,
                }}>
                <View 
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    borderWidth:6,
                    borderColor:'#121269',
                    backgroundColor: '#0b0c2a', // Background color for the circle
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FastImage
                    resizeMode="contain"
                    style={{width: 35, height: 35}}
                    source={BottomProfileIcon}
                  />
                </View>
                <View style={{height:7,width:7,borderRadius:5,backgroundColor:'#FBD25E',marginTop:9}}></View>
                <Text style={{color: '#f2c94c', fontSize: 10, marginTop: 5}}>
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
  )
}

const HomeStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
  <Stack.Screen
    name={"HomeStack"}
    component={Home}
    options={{headerShown: false}}
    />
  </Stack.Navigator>
  )
}


const RankingStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
  <Stack.Screen
    name={"RankingStack"}
    component={Ranking}
    options={{headerShown: false}}
    />
  </Stack.Navigator>
  )
  
}
const ShopStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
  <Stack.Screen
    name={"ShopStack"}
    component={Shop}
    options={{headerShown: false}}
    />
  </Stack.Navigator>
  )
}
const WalletStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
  <Stack.Screen
    name={"WalletStack"}
    component={Wallet}
    options={{headerShown: false}}
    />
      <Stack.Screen name={'WithDraw'} component={WithDraw}/>
      <Stack.Screen name={'TransactionHistory'} component={TransactionHistory}/>

  </Stack.Navigator>
  )
}

const ProfileStack = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
  <Stack.Screen
    name={"ProfileStack"}
    component={Profile}
    options={{headerShown: false}}
    />
  </Stack.Navigator>
  )
}





const Navigator = () => {
  return (
    <NavigationContainer>
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