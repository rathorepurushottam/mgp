import React, { useState, useEffect, Children } from 'react';
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { FILTER_ICON,  rightArrow, backIconMain, iconbell } from '../../../../helper/Image';


import NavigationService from '../../../../navigation/NavigationService';
import styles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import CommonTabs from '../commonTabs/CommonTabs';
// import {  Notification__SCREEN } from '../../../navigation/routes';


import { getFilterSortby,setAllContest, setLoading } from '../../../../slices/matchSlice';
import { AppText,
    EIGHT,
    ELEVEN,
    FIFTEEN,
    GREEN,
    GRY,
    MYGREEN,
    POPPINS,
    POPPINS_BOLD,
    POPPINS_LIGHT,
    POPPINS_MEDIUM,
    POPPINS_SEMI_BOLD,
    RED,
    SEMI_BOLD,
    TEN,
    TWELVE,
    WHITE, 
  } from '../../../../common/appText/AppText';
import { colors } from '../../../../theme/Colors';
import { Screen } from '../../../../theme/dimens';
import { LiveTime } from '../../../../common/liveTime/LiveTime';
import { Notification__SCREEN } from '../../../../navigation/routes';
const DATA = [
  {
    id: 1,
    title: 'ENTRY',
  },
  {
    id: 2,
    title: 'SPOTS',
  },
  {
    id: 3,
    title: 'PRIZE POOL',
  },
  {
    id: 4,
    title: '%WINNER',
  },
];

const CommonHeader = ({
  showPopup,
  showFilter,
  activeTab,
  setActiveTab,
  allContest,
  walletIco,
  style,
  stylestwo,
  completeMatch,
  setModalRemove,
  otherContainer,
  title
}) => {
  const dispatch = useDispatch();
  const details = useSelector(state => state?.match?.contestData);
  const myTeam = useSelector(state => state?.match?.myTeams);
  const myContest = useSelector(state => state?.match?.myContest);
  const contestList = useSelector(state => state?.match?.contestList);
  const allContestList = useSelector(state => state?.match?.allContestList);
  const MyCreateContestData = useSelector(
    state => state?.match?.MyCreateContestData,
  );
  const currentDate = new Date();
  const inputDate = new Date(details?.StartDateTime);
  const isPastTime = inputDate < currentDate;
  const userData = useSelector(state => {
    return state.profile.userData;
  });
  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedHighLow, setSelectedHighLow] = useState('high');
  const [removeTabs, setRemoveTabs] = useState(false)
  const [random, setRandom] = useState('')

  const { total_balance, cash_bonus, winning_amount, totaldeposit } = userData ?? '';
  let totalbalance = winning_amount + cash_bonus + totaldeposit
  useEffect(() => {
    setRandom(Math.random())
  }, [total_balance])
  const timeDifference = Math.floor(
    (inputDate - currentDate) / (24 * 60 * 60 * 1000),
  );
  const idArray =
    contestList &&
    contestList?.data?.flatMap(category =>
      category.data.map(entry => entry._id),
    );
  const filteredData =
    contestList &&
    contestList?.data?.map(value =>
      value?.data?.filter(e => idArray?.includes(e?._id)),
    );
  const idsFilter = filteredData && filteredData?.flat();
  const filterData = filterOption => {
    let sortedItems = [...idsFilter];
    if (filterOption?.title === 'PRIZE POOL') {
      if (selectedHighLow == 'high') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.winning_amount - a.winning_amount);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow('low');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      } else if (selectedHighLow == 'low') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.winning_amount - b.winning_amount);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow('high');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      }
    } else if (filterOption?.title === 'ENTRY') {
      if (selectedHighLow == 'high') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.EnteryFee - a.EnteryFee);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow('low');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      } else if (selectedHighLow == 'low') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.EnteryFee - b.EnteryFee);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow('high');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      }
    } else if (filterOption?.title === 'SPOTS') {
      if (selectedHighLow == 'high') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.Contestsize - a.Contestsize);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow('low');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      } else if (selectedHighLow == 'low') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.Contestsize - b.Contestsize);
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow('high');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      }
    } else if (filterOption?.title === '%WINNER') {
      if (selectedHighLow == 'high') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => {
            // Check for undefined or missing Winning_percent values
            const winningPercentA = a.Winning_percent || Number.NEGATIVE_INFINITY;
            const winningPercentB = b.Winning_percent || Number.NEGATIVE_INFINITY;

            return winningPercentB - winningPercentA;
          });
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow('low');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      } else if (selectedHighLow == 'low') {
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => {
            // Check for undefined or missing Winning_percent values
            const winningPercentA = a.Winning_percent !== undefined ? a.Winning_percent : Number.POSITIVE_INFINITY;
            const winningPercentB = b.Winning_percent !== undefined ? b.Winning_percent : Number.POSITIVE_INFINITY;

            return winningPercentA - winningPercentB;
          });
        dispatch(getFilterSortby(highPricedItems));
        setSelectedHighLow('high');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      }
    }
    // setrandom(Math.random());
  };
  const filterDataTwo = filterOption => {
    let sortedItems = [...allContestList];
    if (filterOption?.title === 'PRIZE POOL') {
      if (selectedHighLow == 'high') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.winning_amount - a.winning_amount);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow('low');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      } else if (selectedHighLow == 'low') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.winning_amount - b.winning_amount);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow('high');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      }
    } else if (filterOption?.title === 'ENTRY') {
      if (selectedHighLow == 'high') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.EnteryFee - a.EnteryFee);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow('low');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      } else if (selectedHighLow == 'low') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.EnteryFee - b.EnteryFee);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow('high');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      }
    } else if (filterOption?.title === 'SPOTS') {
      if (selectedHighLow == 'high') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => b.Contestsize - a.Contestsize);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow('low');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      } else if (selectedHighLow == 'low') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => a.Contestsize - b.Contestsize);
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow('high');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      }
    } else if (filterOption?.title === '%WINNER') {
      if (selectedHighLow == 'high') {
        dispatch(setLoading(true))
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => {
            // Check for undefined or missing Winning_percent values
            const winningPercentA = a.Winning_percent || Number.NEGATIVE_INFINITY;
            const winningPercentB = b.Winning_percent || Number.NEGATIVE_INFINITY;

            return winningPercentB - winningPercentA;
          });
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow('low');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      } else if (selectedHighLow == 'low') {
        const highPricedItems = sortedItems
          .slice()
          .sort((a, b) => {
            // Check for undefined or missing Winning_percent values
            const winningPercentA = a.Winning_percent !== undefined ? a.Winning_percent : Number.POSITIVE_INFINITY;
            const winningPercentB = b.Winning_percent !== undefined ? b.Winning_percent : Number.POSITIVE_INFINITY;

            return winningPercentA - winningPercentB;
          });
        dispatch(setAllContest(highPricedItems));
        setSelectedHighLow('high');
        setSelectedFilter(filterOption?.title);
        dispatch(setLoading(false))
      }
    }
    // setrandom(Math.random());
  };


  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          setSelectedFilter(item?.title),
            allContest ? filterDataTwo(item) : filterData(item);
        }}>
        <AppText type={TEN} weight={POPPINS_MEDIUM} style={styles.entryTitle}>
          {item?.title}
        </AppText>
        {item?.title == selectedFilter ? (
          <FastImage
            style={{
              height: 10,
              width: 8,
              marginRight: 10,
              transform: [
                { rotate: selectedHighLow == 'high' ? '270deg' : '90deg' },
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
  useEffect(() => {
    setModalRemove(removeTabs)
  }, [removeTabs])
  return (
    <View style={[styles.container, style]}>
      <View
          style={{
            flexDirection: "row",
            width: Screen.Width,
            padding: 5,
            alignSelf: "center",
            justifyContent: "space-between",
            marginTop: 10,
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
     
      {allContest ? (
        <></>
      ) : (
        <View>
          <CommonTabs
            totalCount={[myContest?.length + MyCreateContestData?.length, myTeam?.length]}
            activeTab={activeTab}
            setActiveTab={e => setActiveTab(e)}
            filterShow={false}
            completeMatch={completeMatch}
            details={details}
            removeTabs={removeTabs}
          />
        </View>
      )}
      {activeTab === 2 ? (
        <View></View>
      ) : activeTab === 3 ? (
        <></>
      ) : activeTab === 4 ? (
        <></>
      ) : (
        <View style={[styles.filterContainer, { otherContainer }]}>
          <AppText
            weight={POPPINS_LIGHT}
            style={{ marginRight: 20, opacity: 0.8 }}
            type={ELEVEN}
            color={WHITE}>
            Sort By:
          </AppText>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATA}
            horizontal
            renderItem={renderItem}
          />
          <TouchableOpacity onPress={showFilter} style={styles.filtermainbackground}>
            <FastImage
              source={FILTER_ICON}
              tintColor={colors.white}
              style={styles.filterIcon}
            />
          </TouchableOpacity>

        </View>
      )}
    </View>
  );
};

export default CommonHeader;


