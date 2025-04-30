
import React, { useMemo, useState } from 'react';
import { View, } from 'react-native';

import { colors } from '../../../../theme/Colors';
import { AppText, BLACK, BLACKOPACITY, FORTEEN, LIGHTBLUE, WHITE } from '../../../../common/appText/AppText';
import styles from './styles';

const CommonTabs = ({ activeTab, setActiveTab, totalCount, completeMatch, details, removeTabs }) => {
  const data = [
    {
      id: 1,
      title: 'Contest',
      showTitle: 'Select Contest',
    },
    {
      id: 2,
      title: `My Contest (${totalCount[0]})`,
      showTitle: 'My Contest',
    },
    {
      id: 3,
      title: `My Team (${totalCount[1]})`,
      showTitle: 'My Team',
    },
  ];
  const dataTwo = [
    {
      id: 2,
      title: `My Contest (${totalCount[0]})`,
      showTitle: 'My Contest',
    },
    {
      id: 3,
      title: `My Team (${totalCount[1]})`,
      showTitle: 'My Team',
    },
    {
      id: 4,
      title: `Player Stats`,
      showTitle: 'Player Stats',
    },
  ];
  return (
    <View style={styles.container}>
      {completeMatch || removeTabs ? (
        <View style={styles.tabContainer}>
          {dataTwo?.map(item => {
            return item.id == activeTab ? (
              <View
                style={{
                  flexDirection: 'column',
                  width: '33%',
                  height: 38,
                  justifyContent: 'space-evenly',
                  padding: 5,
                  alignItems: 'center',
                  backgroundColor: "#F0E6A5",
                  borderTopRightRadius: item.id == 2 || item.id == 3 ? 20 : 0,
                  borderBottomRightRadius: item.id == 2 || item.id == 3 ? 20 : 0,
                  borderColor: colors.black,
                  borderTopLeftRadius: item.id == 4 || item.id == 3 ? 20 : 0,
                  borderBottomLeftRadius: item.id == 4 || item.id == 3 ? 20 : 0,
                }}>
                <AppText type={FORTEEN} color={BLACK}>
                  {item?.title}
                </AppText>
              </View>
            ) : (
              <TouchableOpacity
                style={[
                  styles.tabs,
                  {
                    width: '33%',
                  },
                ]}
                onPress={() => setActiveTab(item?.id)}>
                <AppText color={BLACKOPACITY} type={FORTEEN}>{item?.title}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : (
        <View style={styles.tabContainer}>
          {data?.map(item => {
            return item.id == activeTab ? (
              <View
                style={{
                  flexDirection: 'column',
                  width: '33%',
                  height: 38,
                  justifyContent: 'space-evenly',
                  padding: 5,
                  alignItems: 'center',
                  backgroundColor: "#F0E6A5",
                  borderTopRightRadius: item.id == 1 || item.id == 2 ? 20 : 0,
                  borderBottomRightRadius: item.id == 1 || item.id == 2 ? 20 : 0,
                  borderRightWidth: item.id == 1 ? 2 : 0,
                  borderBottomRightWidth: item.id == 1 ? 2 : 0,
                  borderColor: colors.black,
                  borderTopLeftRadius: item.id == 3 || item.id == 2 ? 20 : 0,
                  borderBottomLeftRadius: item.id == 3 || item.id == 2 ? 20 : 0,
                  borderLefttWidth: item.id == 3 ? 2 : 0,
                  borderBottomLeftWidth: item.id == 3 ? 2 : 0,
                }}>
                <AppText type={FORTEEN} color={BLACK}>
                  {item?.title}
                </AppText>
              </View>
            ) : (
              <TouchableOpacity
                style={[
                  styles.tabs,
                  {
                    width: '33%',
                  },
                ]}
                onPress={() => setActiveTab(item?.id)}>
                <AppText color={BLACKOPACITY} type={FORTEEN}>{item?.title}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default CommonTabs;
