import {useRoute} from '@react-navigation/native';
import React, {useState, useRef, useEffect, useMemo, useCallback} from 'react';
import {
  View,
  Dimensions,
  RefreshControl,
  FlatList,
  StatusBar,
  Platform,
  useWindowDimensions,
  Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {
  AppText,
  BLACKOPACITY,
  BROWNYELLOW,
  CHAMPTHEME,
  FIFTEEN,
  FORTEEN,
  GREEN,
  LATO_SEMI_BOLD,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  TEN,
  WHITE,
} from '../../common/appText/AppText';
import {GLORY, SINGLE, WINNER, m} from '../../helper/Image';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {SELECT_PLAYER, VERIFY_ADHAAR_SCREEN} from '../../navigation/routes';
import {
    getAllPlayerList,
    getMyTeam,
    getTab,
    setAllPlayers,
    setIsContestEntry,
    setSelectedMatch,
} from '../../slices/matchSlice';

import {BASE_URL, numberWithCommas, toastAlert} from '../../helper/Utility';

import {NewColor, colors} from '../../theme/Colors';
import RBSheet from 'react-native-raw-bottom-sheet';

import {Screen, universalPaddingHorizontal} from '../../theme/dimens';



import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import { AppSafeAreaView } from '../../common/AppSafeAreaView/AppSafeAreaView';
import NavigationService from '../../navigation/NavigationService';
import LeaderBoardList from '../../common/components/leaderBoardList/LeaderBoardList';
import CommonHeader from '../fantasy/matchCard/commonHeader/CommonHeader';
import Confirmation from '../../common/confirmation/Confirmation';
import CommonImageBackground from '../../common/commonImageBackground/CommonImageBackground';
import SelectTeam from '../../common/components/matchCard/selectTeam/SelectTeam';
import PrimaryButton from '../../common/primaryButton/PrimaryButton';
import { ScoreCard } from '../fantasy/scoreCard/ScoreCard';
import Winnings from '../../common/components/winnings/Winnings';

const FirstRoute = ({route}) => (
  <Winnings
    id={
      route?.route?.params?.details?.details?.contest_details?.shadow_contest_id
    }
    privateis={route?.route?.params?.privateis}
    notLive={route?.route?.params?.notLive}
    rankData={
      route?.route?.params?.details?.Rankdata || route?.route?.params?.Rankdata
    }
  />
);

const SecondRoute = ({route}) => (
  <LeaderBoardList
    matchId={route?.route?.params?.matchDetails?.MatchId}
    id={route?.route?.params?.details?.contest_category_id}
    setForStatus={route?.setForStatus}
    forStatus={route?.forStatus}
    status={route?.status}
    selfCreateContest={route?.params?.selfCreateContest}
    userDataID={route?.params?.userData}
  />

);

const ThirdRoute = ({route}) => (
  <ScoreCard route={route}/>
);
const LeaderBoard = () => {
  const route = useRoute();
  const wsRefTwo = useRef(null);
  const dispatch = useDispatch();
  const details = route?.params?.details ?? '';
  const totalTeamCount = route?.params?.totalTeamCount;
  const matchDetails = useSelector(state => state?.match?.contestData);
  const myTeam = useSelector(state => state?.match?.myTeams);
  const kycDetails = useSelector(state => {
    return state.profile.kycDetails;
  });
  const [activeTab, setActiveTab] = useState(1);
  const [isAdd, setIsAdd] = useState(false);
  const [forStatus, setForStatus] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [ForConnectedTo, setForConnectedTo] = useState(false);
  const [scoreBoard, setScoreBoard] = useState([]);
  const [TeamAScore, setTeamAScore] = useState([]);
  const [TeamBScore, setTeamBScore] = useState([]);
  const [modalRemove, setModalRemove] = useState(false);
  const [random, setRandom] = useState(10);
  const selectTeam = useRef();
  const [saveTeamName, setSaveTeamName] = useState('');
  const {_id, SeriesId} = matchDetails ?? '';
  const userData = useSelector(state => {
    return state.profile.userData;
  });

  let url = `${BASE_URL}leader-board?limit=10&skip=0&matchid=${route?.params?.matchDetails?.MatchId}&contest_category_id=${route?.params?.details?.contest_category_id}&user_id=${userData?._id}`;
  let urlTwo = `${BASE_URL}mainleaderboard?limit=10&skip=0&matchid=${route?.params?.matchDetails?.MatchId}&contest_category_id=${route?.params?.details?.contest_category_id}&user_id=${userData?._id}`;
  // console.log(url  ,'====URL===='  , urlTwo  );
  useEffect(() => {
    if (
      route?.params?.matchDetails?.MatchId &&
      route?.params?.details?.contest_category_id
    ) {
      wsRefTwo.current = new WebSocket(urlTwo);
      wsRefTwo.current.onopen = () => {
        console.log('connected');
      };
      wsRefTwo.current.onclose = e => {
        console.log('Connection Failed Plz Check Your Network', e);
        wsRefTwo.current = new WebSocket(urlTwo);
      };
      wsRefTwo.current.onerror = e => {
        console.log('Something Went Wrong', e);
        wsRefTwo.current = new WebSocket(urlTwo);
      };
      return () => {
        wsRefTwo.current.close();
      };
    }
  }, [route?.params?.matchDetails?.MatchId]);
  const getData = React.useCallback(() => {
    if (isConnected && wsRefTwo.current) {
      wsRefTwo.current.close();
      setIsConnected(false);
    }
    try {
      wsRefTwo.current = new WebSocket(urlTwo);
      wsRefTwo.current.onopen = () => {
        setIsConnected(true);
      };
      if (!wsRefTwo.current) return;
      wsRefTwo.current.onmessage = e => {
        const parseData = JSON.parse(e?.data);
        console.log(e?.data?.score,"JSON.parse(e?.data)JSON.parse(e?.data)")
        setScoreBoard(parseData?.score);
        setTeamAScore(parseData && parseData?.score[0]?.teama);
        setTeamBScore(parseData && parseData?.score[0]?.teamb);
      };
    } catch (error) {
    } finally {
    }
  }, [isConnected]);
  const reconnectWebSocket = () => {
    if (wsRefTwo.current && wsRefTwo.current.readyState !== WebSocket.OPEN) {
      wsRefTwo.current = new WebSocket(url);
      wsRefTwo.current.onopen = () => {};
      wsRefTwo.current.onclose = e => {
        reconnectWebSocket();
      };
      wsRefTwo.current.onerror = e => {
        reconnectWebSocket();
      };
      wsRefTwo.current.onmessage = e => {
        const parseData = JSON.parse(e?.data);
        setScoreBoard(parseData?.score);
        setTeamAScore(parseData && parseData?.score[0]?.teama);
        setTeamBScore(parseData && parseData?.score[0]?.teamb);
      };
    }
  };
  useEffect(() => {
    if (!ForConnectedTo) {
      getData();
      setForConnectedTo(true);
    } else {
      const interval = setInterval(() => {
        getData();
      }, 1000);
      return () => clearInterval(interval);
    }
  });


  const currentDate = new Date();
  const inputDate = new Date(matchDetails?.StartDateTime);

  const isPastTime = inputDate < currentDate;
  const onJoinContest = async () => {
    if (kycDetails?.adhar_verified == 0) {
      NavigationService.navigate(VERIFY_ADHAAR_SCREEN);
    } else if (kycDetails?.adhar_verified == 2) {
      toastAlert.showToastError(
        'Your aadhaar verification is pending please wait',
      );
    } else {
      if (totalTeamCount === 0) {
        dispatch(setAllPlayers([]));
        let data = {cid: matchDetails?.SeriesId};
        dispatch(getAllPlayerList(_id, data, false, {}, true));
        NavigationService.navigate(SELECT_PLAYER, {
          matchDetails,
          isEditMode: false,
        });
        dispatch(setIsContestEntry(true));
        dispatch(setSelectedMatch({...details}));
      } else if (totalTeamCount === 1) {
        if (details?.teamDetails?.length) {
          dispatch(setAllPlayers([]));
          let data = {cid: matchDetails?.SeriesId};
          let isNavigate = true;
          dispatch(getAllPlayerList(_id, data, false, {}, isNavigate));
          dispatch(setIsContestEntry(true));
          dispatch(setSelectedMatch({...details}));
          NavigationService.navigate(SELECT_PLAYER, {
            matchDetails,
            isEditMode: false,
          });
        } else {
          dispatch(getMyTeam(_id));
          dispatch(setSelectedMatch({...details}));
          setSaveTeamName(myTeam[0]?.name);
          setIsAdd(true);
        }
      } else if (totalTeamCount > 1) {
        if (details?.teamDetails?.length == myTeam?.length) {
          dispatch(setAllPlayers([]));
          let data = {cid: matchDetails?.SeriesId};
          let isNavigate = true;
          dispatch(getAllPlayerList(_id, data, false, {}, isNavigate));
          dispatch(setIsContestEntry(true));
          dispatch(setSelectedMatch({...details}));
          NavigationService.navigate(SELECT_PLAYER, {
            matchDetails,
            isEditMode: false,
          });
        } else {
          dispatch(setSelectedMatch({...details}));
          selectTeam?.current?.open();
        }
      }
    }
  };
  const sheet = useRef(null);
  const renderTop = () => {
    return (
      <View style={styles.container}>
        <CommonHeader
          allContest={true}
          style={{
            marginBottom: 0,
          }}
          walletIco={true}
          details={route?.params?.matchDetails}
          showPopup={() => sheet.current?.open()}
          activeTab={2}
          setActiveTab={e => setActiveTab(e)}
          completeMatch={
            route?.params?.matchDetails?.Status == 'Completed' ? true : false
          }
          setModalRemove={setModalRemove}
        />
        <>
          {isPastTime ? (
            <View
              style={{
                paddingHorizontal: universalPaddingHorizontal,
                flexDirection: 'row',
                justifyContent: 'space-between',
                // marginTop: -10,
                marginTop: 10,
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <AppText weight={POPPINS_MEDIUM}>
                  {matchDetails?.TeamsShortNames[0]}
                </AppText>
                <AppText weight={POPPINS_MEDIUM}>
                  {TeamAScore && TeamAScore[0]?.scores_full
                    ? TeamAScore[0]?.scores_full
                    : 'Yet to bat'}
                </AppText>
              </View>

              <View
                style={{
                  alignItems: 'flex-end',
                  flex: 1,
                }}>
                <AppText weight={POPPINS_MEDIUM}>
                  {matchDetails?.TeamsShortNames[1]}
                </AppText>
                <AppText style={{textAlign: 'right'}} weight={POPPINS_MEDIUM}>
                  {TeamBScore && TeamBScore[0]?.scores_full
                    ? TeamBScore[0]?.scores_full
                    : 'Yet to bat'}
                </AppText>
              </View>
            </View>
          ) : (
            <>
              <View style={[styles.contestDetails, {marginTop: 0}]}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <AppText type={TEN} color={BLACKOPACITY}>
                    PRIZE POOL
                  </AppText>
                  {route?.params?.details?.JoinWithMULT && (
                    <AppText type={TEN} color={BLACKOPACITY}>
                      Multiple Entries
                    </AppText>
                  )}
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: 6,
                  }}>
                  <AppText type={FIFTEEN} weight={LATO_SEMI_BOLD}>
                    ₹{route?.params?.details?.winning_amount}
                  </AppText>
                </View>
                <View style={styles.progressBar}>
                  <LinearGradient
                    style={{
                      width: `${route?.params?.progressBarWidth}%`,
                      height: '100%',
                      borderRadius: 4,
                    }}
                    start={{x: 0, y: 0}}
                    colors={['#DBA73E', '#E0C77D']}></LinearGradient>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 6,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <AppText color={BLACKOPACITY} type={TEN}>
                    {route?.params?.details?.Contestsize} spots
                  </AppText>
                  <AppText type={TEN} color={GREEN}>
                    {`${
                      route?.params?.details?.Contestsize -
                      (route?.params?.details?.joined || 0)
                    } spots left`}
                  </AppText>
                </View>
              </View>
              {/* <View > */}
                <LinearGradient colors={['#162123','#1F2A2C', '#162123']}
                 start={{ x: 1, y: 0 }}
                 end={{ x: 1, y: 0 }}
                 style={styles.bottomContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={styles.commonViewStyle}>
                    <FastImage
                      source={GLORY}
                      tintColor={'#5389C4'}
                      style={styles.gloryIcon}
                    />
                    <AppText
                
                      type={TEN}
                      weight={LATO_SEMI_BOLD}
                      style={styles.commonTextStyle}>
                      {details?.EnteryType !== 'Paid'
                        ? 'Glory awaits!'
                        : `₹${Math.round(details?.Rankdata[0]?.Price).toFixed(
                            2,
                          )}`}
                    </AppText>
                  </View>
                  <View style={styles.commonViewStyle}>
                    <FastImage
                      source={WINNER}
                      tintColor={'#5389C4'}
                      style={styles.gloryIcon}
                    />
                    <AppText
                      color={'#5389C4'}
                      type={TEN}
                      style={styles.commonTextStyle}>
                      {details?.Winning_percent ? details?.Winning_percent : 0}%
                    </AppText>
                  </View>
                  <View style={styles.commonViewStyle}>
                    <FastImage
                      tintColor={'#5389C4'}
                      source={details?.JoinWithMULT ? m : SINGLE}
                      resizeMode="contain"
                      style={styles.gloryIcon}
                    /> 
                    <AppText
                      // color={BLACKOPACITY}
                      type={TEN}
                      style={styles.commonTextStyle}>
                      {details?.JoinWithMULT
                        ? `Upto ${details?.teams}`
                        : 'Single'}
                    </AppText>
                  </View>
                </View>
                </LinearGradient>
              {/* </View> */}
              {isPastTime ? (
                <></>
              ) : details?.myContestIN ? (
                <></>
              ) : (
                <PrimaryButton
                  buttonStyle={{marginBottom: 10, backgroundColor: "#37CC4C", width: '90%', alignSelf: "center"}}
                  onPress={onJoinContest}
                  title={'Join '}
                />
              )}
              
            </>
          )}
        </>
      </View>
    );
  };

  const length = scoreBoard && scoreBoard[0]?.innings?.length;
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Winnings', route: route},
    {
      key: 'second',
      title: 'Leaderboard',
      route: route,
      forStatus: forStatus,
      setForStatus: setForStatus,
      status:route?.params?.matchDetails?.Status
    },
  ]);

  const [routes1] = React.useState([
    {key: 'first', title: 'Winnings', route: route},
    {
      key: 'second',
      title: 'Leaderboard',
      route: route,
      forStatus: forStatus,
      setForStatus: setForStatus,
      status:route?.params?.matchDetails?.Status

    },
    // {key: 'third', title: 'Scorecard', route:route},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const renderScore = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    // third: ThirdRoute,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <AppSafeAreaView hidden={false} light={true}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <CommonImageBackground common>
        <View style={{flex: 1}}>
          {renderTop()}
          {scoreBoard && scoreBoard[0]?.status_note == '' ? (
            <TabView
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              renderTabBar={props => (
                <RenderTabBar
                  {...props}
                  onTabChange={e => {
                    setActiveTab(e);
                  }}
                />
              )}
            />
          ) : (
            <TabView
              navigationState={{index, routes: routes1}}
              renderScene={renderScore}
              onIndexChange={setIndex}
              initialLayout={{width: layout.width}}
              renderTabBar={props => (
                <RenderTabBar1
                  {...props}
                  onTabChange={e => {
                    setActiveTab(e);
                  }}
                />
              )}
            />
          )}
        </View>
      </CommonImageBackground>
      <RBSheet
        ref={selectTeam}
        closeOnDragDown={false}
        openDuration={100}
        height={Dimensions.get('window').height}
        customStyles={{
          container: {
            backgroundColor: NewColor.linerWhite,
          },
          draggableIcon: {
            backgroundColor: 'transparent',
            display: 'none',
          },
        }}>
        <SelectTeam
          contestDetails={details}
          matchDetails={matchDetails}
          onClose={() => selectTeam?.current?.close()}
          selectTeam={selectTeam}
          teamDetails={details?.teamDetails}
          joinWith={details.teams}
          JoinWithMULT={details?.JoinWithMULT}
        />
      </RBSheet>
      <Confirmation
        isModalVisible={isAdd}
        details={details}
        setIsModalVisible={setIsAdd}
        matchDetails={matchDetails}
        teamLength={false}
        saveTeamName={saveTeamName}
        selectMulty={[]}
        JoinWithMULT={false}
      />
    </AppSafeAreaView>
  );
};

export default LeaderBoard;
export const RenderTabBar = props => {
  const {onTabChange} = props;

  return useMemo(
    () => (
      <TabBar
        {...props}
        onTabPress={e => {
          onTabChange(e?.route?.title);
        }}
        scrollEnabled={false}
        tabStyle={[{flex: 1}, props.tabStyle]}
        renderLabel={({route, focused}) => (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AppText
              type={FORTEEN}
              color={focused ? BROWNYELLOW : WHITE}
              weight={POPPINS_MEDIUM}>
              {route?.title}
            </AppText>
            {focused ? (
              <LinearGradient
                style={{height: 2, width: 125}}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 0}}
                colors={[
                  colors.playerDetailsLinerOne,
                  colors.playerDetailsLinerTwo,
                ]}
              />
            ) : (
              <View style={{height: 2, width: 125}} />
            )}
          </View>
        )}
        indicatorStyle={{backgroundColor: 'transparent'}}
        pressColor={'transparent'}
        style={[{width: '100%', backgroundColor: 'transparent', elevation: 0}]}
      />
    ),
    [props], // dependencies
  );
};

export const RenderTabBar1 = props => {
  const {onTabChange} = props;

  return useMemo(
    () => (
      <TabBar
        {...props}
        onTabPress={e => {
          onTabChange(e?.route?.title);
        }}
        scrollEnabled={false}
        tabStyle={[{flex: 1}, props.tabStyle]}
        // renderLabel={({route, focused}) => (
        //   <View
        //     style={{
        //       flexDirection: 'column',
        //       justifyContent: 'center',
        //       alignItems: 'center',
        //     }}>
        //     <AppText
        //       type={FORTEEN}
        //       color={focused ? BROWNYELLOW : WHITE}
        //       weight={POPPINS_MEDIUM}>
        //       {route?.title}
        //     </AppText>
        //     {focused ? (
        //       <LinearGradient
        //         style={{height: 2, width: 125}}
        //         start={{x: 0, y: 1}}
        //         end={{x: 1, y: 0}}
        //         colors={[
        //           colors.playerDetailsLinerOne,
        //           colors.playerDetailsLinerTwo,
        //         ]}
        //       />
        //     ) : (
        //       <View style={{height: 2, width: 125}} />
        //     )}
        //   </View>
        // )}
        // indicatorStyle={{backgroundColor: 'transparent'}}
        // pressColor={'transparent'}
        // style={[{width: '100%', backgroundColor: 'transparent', elevation: 0}]}
        renderLabel={({ route, focused }) => {
          const tabColors = focused
            ? [colors.playerDetailsLinerOne, colors.playerDetailsLinerTwo]
            : ["#3F3F3F", "#3F3F3F"];
          return (
            // <View style={{ height: 45, width: Screen.Width / 3 }}>
            //   <LinearGradient
            //     style={{
            //       height: 45,
            //       bottom: 1,
            //       width: Screen.Width / 3,
            //       alignItems: "center",
            //       justifyContent: "center",
            //       borderTopRightRadius: route?.key === "first" ? 42 : null,
            //       borderBottomRightRadius: route?.key === "first" ? 40 : null,
            //       borderRadius: route?.key === "second" ? 35 : null,
            //       borderTopLeftRadius: route?.key === "third" ? 35 : null,
            //       borderBottomLeftRadius: route?.key === "third" ? 35 : null,
            //     }}
            //     start={{ x: 0, y: 1 }}
            //     end={{ x: 1, y: 0 }}
            //     colors={tabColors}
            //   >
            //     <AppText
            //       type={FORTEEN}
            //       color={focused ? "white" : "black"}
            //       weight={POPPINS_MEDIUM}
            //     >
            //       {route?.title}
            //     </AppText>
            //   </LinearGradient>
            // </View>
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
            style={{height: 2, width: 95}}
            start={{x: 0, y: 1}}
            end={{x: 1, y: 0}}
            colors={['#ADAFFC','#ADAFFC']}></LinearGradient>
        ) : (
          <View style={{width: 95, height: 2}}></View>
        )}
      </View>
          );
        }}
        indicatorStyle={{ backgroundColor: "transparent" }}
        pressColor={"transparent"}
        style={[
          { width: "100%", backgroundColor: "rgba(0,0,0,0)", elevation: 0 },
        ]}
        
      />
    ),
    [props], // dependencies
  );
};
