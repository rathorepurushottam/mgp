import React, { useState } from 'react';
import {
  StyleSheet,
  RefreshControl,
  StatusBar,

} from 'react-native';
import { AppSafeAreaView } from '../../../common/AppSafeAreaView/AppSafeAreaView';
import { KeyBoardAware } from '../../../common/KeyBoardAware/KeyBoardAware';
import { colors } from '../../../theme/Colors';
import Cricket from '../Cricket/Cricket';
import LinearGradient from 'react-native-linear-gradient';
import FantasyHomeHeader from '../../../common/fantasyHomeHeader/fantasyHomeHeader';
import NavigationService from '../../../navigation/NavigationService';

const FantasyHome = () => {
    // const [selectedLabel, setSelectedLabel] = useState('Cricket');
    const [refershing, setRefreshingTwo] = useState(false);
    const [random, setRandom] = useState(0);

    const onRefresh = () => {
      setRandom(Math.random());
    };

    return (
      <AppSafeAreaView
        light={true}
        style={{backgroundColor: colors.BackgroundColorTwo,paddingBottom:'18%',
        }}
        hidden={false}
        >
          <StatusBar
          backgroundColor={'#111019'}
            translucent={true}
            networkActivityIndicatorVisible={true}
          />
        <KeyBoardAware
          refreshControl={
            <RefreshControl refreshing={refershing} onRefresh={onRefresh}
              />
          }
        >
            <LinearGradient colors={[colors.BackgroundColorOne,colors.BackgroundColorTwo]} style={styles.container}>
            <FantasyHomeHeader
              walletIcon={true}
              personClick={() => NavigationService.goBack()}
            />
              <Cricket random={random} setRefreshingTwo={setRefreshingTwo} />
          </LinearGradient>
        </KeyBoardAware>
      </AppSafeAreaView>
    );
};

export default FantasyHome;
const styles = StyleSheet.create({
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    topContainer: {
      height: 60,
      width: '100%',
      justifyContent: 'center',
      alignSelf: 'center',
      paddingHorizontal: 10,
      marginTop: '8%',
    },
    personImage: {
      height: 28,
      width: 28,
    },
    combineIcon: {
      height: 30,
      width: 85,
    },
    notificationIcon: {
      height: 17,
      width: 16,
    },
    MyBattleScreen: {
      height: '100%',
      width: '100%',
    },
    container:{
      // paddingBottom:"30%",
      // marginTop:10
      flex:1,
    },
  });
