import {View, ImageBackground, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {
  shapeParallelogram,
} from '../../../helper/Image'
import {AppText} from '../../../common/appText/AppText';
import { fontFamilyPoppins } from '../../../theme/typography';

const PlayerRoleBadge = ({playerDetails, data}) => {
  return (
    <>
      <ImageBackground
        resizeMode="contain"
        source={shapeParallelogram}
        style={styles.container}>
        {data?.length == playerDetails ? (
          <AppText
            style={{
              color: 'white',
              fontSize: 12,
              fontFamily: fontFamilyPoppins,
              fontWeight: '500',
              marginTop:2
            }}>
            {playerDetails}
          </AppText>
        ) : (
          <></>
        )}
      </ImageBackground>
    </>
  );
};

export default PlayerRoleBadge;
