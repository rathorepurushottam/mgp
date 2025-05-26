import React, {useEffect, useState} from 'react';
import {FlatList, View, RefreshControl} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Screen} from '../../../../theme/dimens';
import {getMyMatches} from '../../../../slices/matchSlice';
import styles from './styles';
import {
  AppText,
  FORTEEN,
  POPPINS_MEDIUM,
  WHITE,
  CHAMPTHEME,
  POPPINS_BOLD,
} from '../../../../common/appText/AppText';
import {flexOne} from '../../../../theme/dimens';


import { AppSafeAreaView } from '../../../../common/AppSafeAreaView/AppSafeAreaView';
import { SpinnerSecond } from '../../../../common/SpinnerSecond';
import NavigationService from '../../../../navigation/NavigationService';
import PrimaryButton from '../../../../common/primaryButton/PrimaryButton';
import FantasyHomeHeader from '../../../../common/fantasyHomeHeader/fantasyHomeHeader';
import MatchCardContest from '../../matchCard/matchCardContest/MatchCardContest';
import { colors } from '../../../../theme/Colors';
import { useNavigation } from '@react-navigation/native';

export const RenderTabBar = props => {
  return (
    <TabBar
      {...props}
      renderLabel={({route, focused}) =>
      {
        return(
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            // height: 38,
            justifyContent: 'space-between',
            padding: 5,
            alignItems: 'center',
          }}>
          <AppText
            type={FORTEEN}
            color={focused ? CHAMPTHEME : WHITE}
            weight={POPPINS_MEDIUM}>
            {route?.title}
          </AppText>
          {focused ? (
            <LinearGradient
              style={{height: 2, width: 95,marginTop:7}}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#ADAFFC','#ADAFFC']}></LinearGradient>
          ) : (
            <View style={{width: 95, height: 2,marginTop:7}}></View>
          )}
        </View>
        
      )}}
      indicatorStyle={{backgroundColor: 'transparent'}}
      scrollEnabled={!props.scrollEnabled ? props.scrollEnabled : true}
      tabStyle={[ props.tabStyle]}
      pressColor={'transparent'}
      style={[styles.tabbar, props.style]}
    />
  );
};

export const ListEmptyComponent = ({title, activeTab}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {activeTab == 'Live' ? (
        <AppText
          style={{textAlign: 'center'}}
          type={FORTEEN}
          weight={POPPINS_MEDIUM}>
          {title
            ? title
            : `You haven't joined any that are live.\n Join contests for any of the upcoming matches`}
        </AppText>
      ) : (
        <></>
      )}
      {activeTab == 'Upcoming' ? (
        <AppText
          style={{textAlign: 'center'}}
          type={FORTEEN}
          weight={POPPINS_MEDIUM}>
          {title
            ? title
            : `You haven't joined any upcoming contests \n Join contests for any of the upcoming matches`}
        </AppText>
      ) : (
        <></>
      )}

      <PrimaryButton
        onPress={() => 
        {
          console.log('hello')
          navigation.navigate('FantasyHome')
        }
        }
        smallBtn={styles.joinButtonMyContest}
        title="VIEW UPCOMING MATCHES"
        type={FORTEEN}
        weight={POPPINS_BOLD}
        buttonStyle={{backgroundColor: "#FFFFFF", width: "70%", marginTop: 10}}
        titleStyle={{color: '#00025B'}}
      />
    </View>
  );
};

const MyMatches = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('Upcoming');
  const data = useSelector(state => state?.match?.myMatchesData);
  const isLoading = useSelector(state => state?.match?.isLoading);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Upcoming'},
    {key: 'second', title: 'Live'},
    {key: 'third', title: 'Completed'},
  ]);

  useEffect(() => {
    setActiveTab(
      index === 0
        ? (title = 'Upcoming')
        : index === 1
        ? (title = 'Live')
        : index === 2
        ? (title = 'Completed')
        : '',
    );
    dispatch(getMyMatches(title == 'Upcoming' ? 'Scheduled' : title));
  }, [index]);
  const onRefresh = () => {
    if (activeTab == 'Upcoming') {
      dispatch(getMyMatches('Scheduled'));
    } else if (activeTab == 'Live') {
      dispatch(getMyMatches('Live'));
    } else {
      dispatch(getMyMatches('Completed'));
    }
  };
  const renderItem = ({item}) => {
    return (
      <MatchCardContest
        details={item}
        isFromMyMatch={true}
        tab={activeTab}
        myMatches={true}
      />
    );
  };
  const reversedData = [...data].reverse();

  const FirstRoute = () => (
    <FlatList
      data={reversedData}
      style={{flex: flexOne, marginTop: 10}}
      contentContainerStyle={{flexGrow: flexOne}}
      keyExtractor={(item, index) => index?.toString()}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }
      ListEmptyComponent={
        isLoading ? <></> : <ListEmptyComponent activeTab={activeTab} />
      }
      renderItem={renderItem}
    />
  );

  const SecondRoute = () => (
    <FlatList
      data={reversedData}
      style={{flex: flexOne, marginTop: 10}}
      contentContainerStyle={{flexGrow: flexOne}}
      keyExtractor={(item, index) => index?.toString()}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }
      ListEmptyComponent={
        isLoading ? <></> : <ListEmptyComponent activeTab={activeTab} />
      }
      renderItem={renderItem}
    />
  );

  const ThirdRoute = () => (
    <FlatList
      data={reversedData}
      style={{flex: flexOne, marginTop: 10}}
      contentContainerStyle={{flexGrow: flexOne}}
      keyExtractor={(item, index) => index?.toString()}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }
      ListEmptyComponent={
        isLoading ? <></> : <ListEmptyComponent activeTab={activeTab} />
      }
      renderItem={renderItem}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <AppSafeAreaView statusColor={true} hidden={false} light={true}style={{backgroundColor: colors.BackgroundColorTwo,paddingBottom:"18%",
            }}>
       <LinearGradient colors={[colors.BackgroundColorOne,colors.BackgroundColorTwo]} style={{flex:1,}}>
        <FantasyHomeHeader
          walletIcon={true}
          personClick={() => NavigationService.goBack()}
        />

        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: Screen.Width}}
          renderTabBar={props => <RenderTabBar {...props} style={{}} />}
        />
        </LinearGradient>
      <SpinnerSecond loading={isLoading} />
    </AppSafeAreaView>
  );
};

export default MyMatches;
