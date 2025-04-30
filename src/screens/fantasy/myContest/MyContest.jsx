import { useFocusEffect, useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  StatusBar,
  FlatList,
  RefreshControl,
  Platform,
  ImageBackground,
  useWindowDimensions,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useDispatch, useSelector } from "react-redux";
import {
  Notification__SCREEN,
  SELECT_PLAYER,
} from "../../../navigation/routes";
import styles from "./styles";
import {
  AppText,
  BLACK,
  BROWNYELLOW,
  CHAMPTHEME,
  ELEVEN,
  FORTEEN,
  GRY,
  MYGREEN,
  POPPINS_BOLD,
  POPPINS_LIGHT,
  POPPINS_MEDIUM,
  POPPINS_SEMI_BOLD,
  TEN,
  TWELVE,
  WHITE,
} from "../../../common/appText/AppText";
import { getKycDetails } from "../../../actions/profileAction";
import { transformData } from "../../../helper/Utility";
import {
  FILTER_ICON,
  backIconMain,
  iconbell,
  rightArrow,
  VS
} from "../../../helper/Image";
import FastImage from "react-native-fast-image";

import LinearGradient from "react-native-linear-gradient";
import { LiveTime } from "../../../common/liveTime/LiveTime";
import { SceneMap,  TabBar, TabView } from "react-native-tab-view";
import FilterSheet from "../../../common/FilterSheet/FilterSheet";
import { AppSafeAreaView } from "../../../common/AppSafeAreaView/AppSafeAreaView";
import { SpinnerSecond } from "../../../common/SpinnerSecond";
import NavigationService from "../../../navigation/NavigationService";
import { MycreateContest,
      getAllPlayerList,
      getContestList,
      getFilterSortby,
      getMyJoinedContest,
      getMyTeam,
      getTab,
      setAllContest,
      setAllPlayers,
      setIsContestEntry,
      setLoading, } from "../../../slices/matchSlice";
import MyContestList from "../../../common/components/mycontest/MyContestList";
import CommonImageBackground from "../../../common/commonImageBackground/CommonImageBackground";
import MyTeam from "../../../common/components/matchCard/myTeam/MyTeam";
import Contest from "../../../common/components/matchCard/contest/Contest";
import PrimaryButton from "../../../common/primaryButton/PrimaryButton";
import { Screen ,flexOne} from "../../../theme/dimens";
import ContestCard from "../../../common/components/matchCard/contestCard/ContestCard";
import MyContestListETC from "../../../common/components/mycontest/MyContestListcETC";
import Stats from "./stats/Stats";
import { MatchLiveModal } from "../../../common/matchLiveModal/MatchLiveModal";
import { colors, NewColor } from "../../../theme/Colors";
import SelectTeam from "../../../common/components/matchCard/selectTeam/SelectTeam";
import AntDesign from 'react-native-vector-icons/AntDesign'



const MyContest = () => {
  const dispatch = useDispatch();
  const sheet = useRef();
  const route = useRoute();
  const filterSheet = useRef();
  const AleartLive = useRef();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const contestData = useSelector((state) => state?.match?.contestData);
  const contestList = useSelector((state) => state?.match?.contestList);
  const myTeam = useSelector((state) => state?.match?.myTeams);
  const myContest = useSelector((state) => state?.match?.myContest);
  const SortbyFilterData = useSelector(
    (state) => state?.match?.SortbyFilterData
  );
  const transformedData = transformData(contestList?.data);
  const MyCreateContestData = useSelector(
    (state) => state?.match?.MyCreateContestData
  );
  const currentDate = new Date();
  const inputDate = new Date(contestData?.StartDateTime);
  const isPastTime = inputDate < currentDate;
  const [filterdata, setFilterData] = useState([]);
  const [entry, setEntry] = useState([]);
  const [team, setTeam] = useState([]);
  const [prize, setPrize] = useState([]);
  const [contest, setContest] = useState([]);
  const [modalRemove, setModalRemove] = useState(false);
  const [saveTitle, setTitle] = useState("");

  const [activeTab, setActiveTab] = useState(
    route?.params?.isFromMyMatch == true || isPastTime == "false" ? 2 : 1
  );
  const [matchActiveTab, setMatchActiveTab] = useState("");
  useEffect(() => {
    setTitle(
      activeTab == 1
        ? "Select Contest"
        : activeTab == 2
        ? "My Contest"
        : activeTab == 3
        ? "My Team"
        : "Select Contest"
    );
  }, [activeTab]);
  const { _id, isFromMyMatch, match_id, isHome, SeriesId } = contestData ?? "";
  useFocusEffect(
    useCallback(() => {
      let outputObject = {};
      dispatch(getContestList(outputObject, _id));
      dispatch(getMyTeam(_id));
      // dispatch(getMyJoinedContest(_id));
      dispatch(MycreateContest(_id));
      let data = { cid: SeriesId };
      dispatch(getAllPlayerList(_id, data));
    }, [])
  );
  useEffect(() => {
    dispatch(getKycDetails());
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Contest
        details={item}
        totalTeamCount={myTeam?.length}
        matchId={isHome ? match_id : _id}
      />
    );
  };
  const renderMyTeam = ({ item }) => {
    return <MyTeam item={item} tab={route?.params?.tab} />;
  };
  const renderMyContest = ({ item }) => {
    return <MyContestList item={item} matchDetails={route?.params} />;
  };
  const renderContest = ({ item }) => {
    return (
      <>
        <ContestCard details={item} totalTeamCount={myTeam?.length} />
      </>
    );
  };
  const renderMyCreateContest = () => {
    return (
      MyCreateContestData &&
      MyCreateContestData?.map((item) => {
        return (
          <MyContestListETC
            item={item}
            teamName={contestData}
            _id={_id}
            myMatches={route?.params?.myMatches}
            matchDetails={route?.params}
          />
        );
      })
    );
  };
  const EmptyComponent = () => {
    return MyCreateContestData?.length || myContest?.length ? (
      <></>
    ) : (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppText
          weight={POPPINS_MEDIUM}
          style={{
            textAlign: "center",
          }}
        >
          You haven't joined a contest yet!{"\n"}Find a contest to join and
          start winning
        </AppText>
        <PrimaryButton
          onPress={() => setActiveTab(1)}
          smallBtn={styles.joinButtonMyContest}
          title="JOIN A CONTEST"
        />
      </View>
    );
  };
  const EmptyComponentTwo = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AppText
          style={{
            color: "white",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          You haven't created a team yet!{"\n"}The first step to winning starts
          here.
        </AppText>
      </View>
    );
  };
  const onRefresh = (type) => {
    if (type == "contest") {
      let outputObject = {};
      dispatch(getContestList(outputObject, isHome ? match_id : _id));
    } else if (type == "my contest") {
      dispatch(getMyJoinedContest(isHome ? match_id : _id));
    } else {
      dispatch(getMyTeam(isHome ? match_id : _id));
    }
  };

  const userData = useSelector((state) => {
    return state.profile.userData;
  });
  const { total_balance, cash_bonus, winning_amount, totaldeposit } =
    userData ?? "";
  let totalbalance = winning_amount + cash_bonus + totaldeposit;
  const details = useSelector((state) => state?.match?.contestData);
  const timeDifference = Math.floor(
    (inputDate - currentDate) / (24 * 60 * 60 * 1000)
  );
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  useEffect(() => {
    if (myContest) {
      const initializedRoutes = [
        {
          key: "first",
          title:
            route?.params?.isFromMyMatch == true
              ? `MyContest (${myContest?.length + MyCreateContestData?.length})`
              : "Contest",
        },
        {
          key: "second",
          title:
            route?.params?.isFromMyMatch == true
              ? `My Team (${myTeam?.length})`
              : "My Contest",
        },
        {
          key: "third",
          title:
            route?.params?.isFromMyMatch == true ? "Player Stats" : "My Team",
        },
      ];
      setRoutes(initializedRoutes);
    }
  }, [myContest, myTeam]);

  const [routes, setRoutes] = React.useState([
    {
      key: "first",
      title:
        route?.params?.isFromMyMatch == true
          ? `MyContest (${myContest?.length + MyCreateContestData?.length})`
          : "Contest",
    },
    {
      key: "second",
      title:
        route?.params?.isFromMyMatch == true
          ? `My Team (${myTeam?.length})`
          : "My Contest",
    },
    {
      key: "third",
      title: route?.params?.isFromMyMatch == true ? "Player Stats" : "My Team",
    },
  ]);
  const [removeTabs, setRemoveTabs] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // modal was closing automaticaaly due to this code 
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setRefreshKey((prevKey) => prevKey + 1);
  //     // Optionally, you can also call your refresh function here
  //     onRefresh("my contest");
  //   }, 1000); // 3000 milliseconds = 3 seconds

  //   // Clean up the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);
  const FirstRoute = () => {
    return (
      <>
        {route?.params?.isFromMyMatch == true ? (
          <View
            style={{
              flex: 1,
            }}
          >
            <FlatList
              data={myContest}
              showsVerticalScrollIndicator={false}
              renderItem={renderMyContest}
              ListHeaderComponent={renderMyCreateContest}
              ListEmptyComponent={<EmptyComponent />}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={() => onRefresh("my contest")}
                />
              }
              style={{
                width: "100%",
                alignSelf: "center",
                flex: flexOne,
              }}
              contentContainerStyle={{
                flexGrow: flexOne,
              }}
            />
          </View>
        ) : (
          <View
            style={{
              width: Screen.Width - 10,
              alignSelf: "center",
              marginTop: 5,
            }}
          >
            {SortbyFilterData?.length > 0 ? (
              <FlatList
                data={SortbyFilterData}
                renderItem={renderContest}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 10 }}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => {
                  return <View style={{ height: 80 }} />;
                }}
              />
            ) : (
              <>
                {!route?.params?.isFromMyMatch ? (
                  <FlatList
                    data={transformedData && transformedData}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    refreshControl={
                      <RefreshControl
                        refreshing={false}
                        onRefresh={() => onRefresh("contest")}
                      />
                    }
                    style={{
                      width: "100%",
                      alignSelf: "center",
                    }}
                  />
                ) : (
                  <></>
                )}
              </>
            )}
          </View>
        )}
      </>
    );
  };
  const SecondRoute = () => {
    return (
      <>
        {route?.params?.isFromMyMatch == true ? (
          <View
            style={{
              flex: flexOne,
            }}
          >
            <FlatList
              data={myTeam}
              renderItem={renderMyTeam}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={<EmptyComponentTwo />}
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={() => onRefresh("my team")}
                />
              }
              contentContainerStyle={{
                flexGrow: flexOne,
              }}
              style={{
                width: "100%",
                flex: flexOne,
                alignSelf: "center",
              }}
            />
          </View>
        ) : (
          <View
            style={{
              width: Screen.Width - 10,
              alignSelf: "center",
              marginTop: 5,
            }}
          >
            <FlatList
              data={myContest}
              showsVerticalScrollIndicator={false}
              renderItem={renderMyContest}
              ListHeaderComponent={renderMyCreateContest}
              ListEmptyComponent={() => {
                return (
                  <View style={{ marginTop: 30 }}>
                    <EmptyComponent />
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={() => onRefresh("my contest")}
                />
              }
            />
          </View>
        )}
      </>
    );
  };
  const ThirdRoute = () => {
    return (
      <>
        {route?.params?.isFromMyMatch == true ? (
          <Stats />
        ) : (
          <View
            style={{
              width: Screen.Width - 10,
              alignSelf: "center",
              marginTop: 5,
            }}
          >
            <FlatList
              data={myTeam}
              renderItem={renderMyTeam}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={() => {
                return (
                  <View style={{ marginTop: 30 }}>
                    <EmptyComponentTwo />
                  </View>
                );
              }}
              refreshControl={
                <RefreshControl
                  refreshing={false}
                  onRefresh={() => onRefresh("my team")}
                />
              }
            />
          </View>
        )}
      </>
    );
  };
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <FirstRoute />;
      case "second":
        return <SecondRoute />;
      case "third":
        return <ThirdRoute />;
      default:
        return null;
    }
  };


  return (
    <AppSafeAreaView hidden={false} light={true}
    //  style={{backgroundColor: '#111019'}}
     >
      {/* <StatusBar
        backgroundColor={"#111019"}
        // style={{backgroundColor: '#111019'}}
        translucent={true}
        networkActivityIndicatorVisible={true}
      /> */}
      <CommonImageBackground common>
        <View
          style={{
            flexDirection: "row",
            width: Screen.Width,
            padding: 5,
            alignSelf: "center",
            justifyContent: "space-between",
            // marginTop: 40,
          }}
        >
          <TouchableOpacity
            onPress={() => NavigationService.goBack()}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <FastImage
              source={backIconMain}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                resizeMode: "contain",
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <ImageBackground
            // source={headerIner}
            resizeMode="contain"
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              // paddingHorizontal: 35,
              height: 52,
              // marginTop: 10,
            }}
          >
            <FastImage
              source={{ uri: details?.TeamAlogo }}
              style={{
                height: 37,
                width: 37,
                resizeMode: "contain",
                marginRight: 10,
              }}
              resizeMode="contain"
            />
            <View style={{ alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AppText color={WHITE} weight={POPPINS_BOLD}>
                  {details?.TeamsShortNames && details?.TeamsShortNames[0]}
                </AppText>
                {/* <FastImage
                source={VS}
                resizeMode="contain"
                tintColor={WHITE}
                style={{height: 27, width: 15, marginRight: 5, marginLeft: 5}}
              /> */}
                <AppText
                  color={GRY}
                  weight={POPPINS_MEDIUM}
                  style={{ paddingHorizontal: 5 }}
                >
                  VS
                </AppText>
                <AppText color={WHITE} weight={POPPINS_BOLD}>
                  {details?.TeamsShortNames && details?.TeamsShortNames[1]}
                </AppText>
              </View>
              <View
                style={{
                  borderRadius: 4,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: 8,
                  borderWidth: 1,
                  borderColor: "#15CE31",
                  backgroundColor: "rgba(21, 206, 49, 0.2)",
                }}
              >
                <LiveTime
                  view={true}
                  top={true}
                  details={details}
                  color={timeDifference >= 1 ? MYGREEN : MYGREEN}
                  type={TEN}
                  setRemoveTabs={setRemoveTabs}
                />
              </View>
            </View>
            <FastImage
              source={{ uri: details?.TeamBlogo }}
              style={{
                height: 37,
                width: 37,
                resizeMode: "contain",
                marginLeft: 10,
              }}
              resizeMode="contain"
            />
          </ImageBackground>
          <TouchableOpacity
            onPress={() => NavigationService.navigate(Notification__SCREEN)}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FastImage
                style={{ height: 28, width: 28, left: -10, top: 10 }}
                resizeMode="contain"
                source={iconbell}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props) => (
            <RenderTabBar
              onSheet={() => {
                filterSheet.current.open();
              }}
              onTabChange={(e) => {
                setMatchActiveTab(e);
              }}
              {...props}
            />
          )}
        />
        
        <RBSheet
          ref={filterSheet}
          closeOnDragDown={false}
          height={Screen.Height * 0.75}
          customStyles={{
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
            draggableIcon: {
              backgroundColor: "transparent",
              display: "none",
            },
          }}
        >
          <FilterSheet
            onClose={() => filterSheet?.current?.close()}
            filterdata={filterdata}
            setFilterData={setFilterData}
            entry={entry}
            setEntry={setEntry}
            team={team}
            setTeam={setTeam}
            prize={prize}
            setPrize={setPrize}
            contest={contest}
            setContest={setContest}
          />
        </RBSheet>
        {activeTab !== 2 &&
          !route?.params?.isFromMyMatch &&
          isPastTime != "false" && (
            <View
              style={[
                styles.buttonContainer,
                { marginVertical: Platform.OS == "ios" ? 20 : 10 },
              ]}
            >
              <PrimaryButton
                buttonStyle={[
                  styles.buttonStyle,
                  { marginTop: Platform.OS == "ios" ? -5 : 0 },
                ]}
                onPress={() => {
                  dispatch(getTab(""));
                  dispatch(setAllPlayers([]));
                  let data = { cid: SeriesId };
                  dispatch(getAllPlayerList(_id, data));
                  NavigationService.navigate(
                    SELECT_PLAYER,
                    contestData,
                    isFromMyMatch
                  );
                  dispatch(setIsContestEntry(false));
                }}
                title="CREATE TEAM"
              />
            </View>
          )}
        <SpinnerSecond loading={isLoading} />
      </CommonImageBackground>
      <MatchLiveModal AleartLive={AleartLive} />
    </AppSafeAreaView>
  );
};

export default MyContest;
export const RenderTabBar = (props) => {
  // console.log(props,"propssssss")
  const {
    onTabChange,
    saveTitle,
    filterSelectedPlayer,
    filterDataOfSorting,
    newAllPlayer,
    onSheet,
  } = props;
  const DATA = [
    {
      id: 1,
      title: "ENTRY",
    },
    {
      id: 2,
      title: "SPOTS",
    },
    {
      id: 3,
      title: "PRIZE POOL",
    },
    {
      id: 4,
      title: "%WINNER",
    },
  ];
  const [selectedFilter, setSelectedFilter] = useState();
  const [selectedHighLow, setSelectedHighLow] = useState("high");
  const dispatch = useDispatch();
  const allContestList = useSelector((state) => state?.match?.allContestList);
  const filterData = (filterOption) => {
    let sortedItems = [...idsFilter];
    if (filterOption?.title === "PRIZE POOL") {
      if (selectedHighLow == "high") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.winning_amount - a.winning_amount);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow("low");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      } else if (selectedHighLow == "low") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.winning_amount - b.winning_amount);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow("high");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      }
    } else if (filterOption?.title === "ENTRY") {
      if (selectedHighLow == "high") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.EnteryFee - a.EnteryFee);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow("low");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      } else if (selectedHighLow == "low") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.EnteryFee - b.EnteryFee);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow("high");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      }
    } else if (filterOption?.title === "SPOTS") {
      if (selectedHighLow == "high") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.Contestsize - a.Contestsize);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow("low");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      } else if (selectedHighLow == "low") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.Contestsize - b.Contestsize);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow("high");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      }
    } else if (filterOption?.title === "%WINNER") {
      if (selectedHighLow == "high") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems.slice().sort((a, b) => {
          // Check for undefined or missing Winning_percent values
          const winningPercentA = a.Winning_percent || Number.NEGATIVE_INFINITY;
          const winningPercentB = b.Winning_percent || Number.NEGATIVE_INFINITY;

          return winningPercentB - winningPercentA;
        });
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow("low");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      } else if (selectedHighLow == "low") {
        const highPricedItems = sortedItems.slice().sort((a, b) => {
          // Check for undefined or missing Winning_percent values
          const winningPercentA =
            a.Winning_percent !== undefined
              ? a.Winning_percent
              : Number.POSITIVE_INFINITY;
          const winningPercentB =
            b.Winning_percent !== undefined
              ? b.Winning_percent
              : Number.POSITIVE_INFINITY;

          return winningPercentA - winningPercentB;
        });
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow("high");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      }
    }
    // setrandom(Math.random());
  };
  const filterDataTwo = (filterOption) => {
    let sortedItems = [...allContestList];
    if (filterOption?.title === "PRIZE POOL") {
      if (selectedHighLow == "high") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.winning_amount - a.winning_amount);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow("low");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      } else if (selectedHighLow == "low") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.winning_amount - b.winning_amount);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow("high");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      }
    } else if (filterOption?.title === "ENTRY") {
      if (selectedHighLow == "high") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.EnteryFee - a.EnteryFee);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow("low");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      } else if (selectedHighLow == "low") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.EnteryFee - b.EnteryFee);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow("high");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      }
    } else if (filterOption?.title === "SPOTS") {
      if (selectedHighLow == "high") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.Contestsize - a.Contestsize);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow("low");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      } else if (selectedHighLow == "low") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.Contestsize - b.Contestsize);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow("high");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      }
    } else if (filterOption?.title === "%WINNER") {
      if (selectedHighLow == "high") {
        dispatch(setLoading(true));
        const highPricedItems = sortedItems.slice().sort((a, b) => {
          // Check for undefined or missing Winning_percent values
          const winningPercentA = a.Winning_percent || Number.NEGATIVE_INFINITY;
          const winningPercentB = b.Winning_percent || Number.NEGATIVE_INFINITY;

          return winningPercentB - winningPercentA;
        });
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow("low");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      } else if (selectedHighLow == "low") {
        const highPricedItems = sortedItems.slice().sort((a, b) => {
          // Check for undefined or missing Winning_percent values
          const winningPercentA =
            a.Winning_percent !== undefined
              ? a.Winning_percent
              : Number.POSITIVE_INFINITY;
          const winningPercentB =
            b.Winning_percent !== undefined
              ? b.Winning_percent
              : Number.POSITIVE_INFINITY;

          return winningPercentA - winningPercentB;
        });
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow("high");
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false));
      }
    }
    // setrandom(Math.random());
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
        onPress={() => {
          setSelectedFilter(item?.title),
            allContestList ? filterDataTwo(item) : filterData(item);
        }}
      >
        <AppText type={TEN} weight={POPPINS_MEDIUM} style={{ marginRight: 5 }}>
          {item?.title}
        </AppText>
        {item?.title == selectedFilter ? (
          <FastImage
            style={{
              height: 10,
              width: 8,
              marginRight: 10,
              transform: [
                { rotate: selectedHighLow == "high" ? "270deg" : "90deg" },
              ],
            }}
            source={rightArrow}
            tintColor={colors.green}
            resizeMode="contain"
          />
        ) : (
          <></>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <>
      <>
      <TabBar
          {...props}
          onTabPress={(e) => {
            onTabChange(e?.route?.title);
            // setIndex(e?.route?.title)
          }}
          scrollEnabled={false}
          tabStyle={[
            {
              width: Screen.Width / 3,
              // backgroundColor: "#3F3F3F",
              height: 45,
              marginTop: 10,
            },
          ]}
          renderLabel={({ route, focused }) => {
            console.log(route,"  ",focused,"---------------")
            const tabColors = focused
              ? [colors.playerDetailsLinerOne, colors.playerDetailsLinerTwo]
              : ["#3F3F3F", "#3F3F3F"];
            return (
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
              style={{height: 2, width: 80,marginTop:4}}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              colors={['#ADAFFC','#ADAFFC']}></LinearGradient>
          ) : (
            <View style={{width: 80, height: 2,marginTop:4}}></View>
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
      </>

      <View
        style={{
          height: 33,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "100%",
          alignSelf: "center",
          paddingHorizontal: 20,
          backgroundColor: "#383274",
          marginTop: 10,
        }}
      >
        <AppText
          weight={POPPINS_LIGHT}
          style={{ marginRight: 20, opacity: 0.8 }}
          type={ELEVEN}
          color={WHITE}
        >
          Sort By:
        </AppText>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={DATA}
          horizontal
          renderItem={renderItem}
        />
        <TouchableOpacity
          onPress={onSheet}
          style={styles.filtermainbackground}
        >
          <FastImage
            source={FILTER_ICON}
            tintColor={colors.white}
            style={{
              height: 18,
              width: 18,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};



