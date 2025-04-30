import React from 'react';
import {TouchableOpacity, View} from 'react-native';
// import {LeftArrowIcon, arrow, logo} from '../../helper/image';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import NavigationService from '../../../navigation/NavigationService';
import { AppText, BLACK, FORTEEN, POPPINS_MEDIUM, SIXTEEN, WHITE } from '../../appText/AppText';

const Header = props => {
  const {commonHeader, title, color, tintColor} = props;

  return (
    <>
      {commonHeader ? (
        <View style={[styles.header, props.style]}>
          <TouchableOpacity
          style={styles.arrowview}
            onPress={() => {
              NavigationService.goBack();
            }}>
            {/* <FastImage
              style={styles.arrowIcon}
              resizeMode="contain"
              source={LeftArrowIcon}
              // tintColor={tintColor ? tintColor : colors.white}
            /> */}
          </TouchableOpacity>

          <AppText
            color={color ? color : WHITE}
            type={SIXTEEN}
            weight={POPPINS_MEDIUM}
            style={styles.title}>
            {title}
          </AppText>
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={styles.bottomContainer}
            onPress={() => {
              NavigationService.goBack();
            }}>
            {/* <FastImage
              style={styles.arrow}
              resizeMode="contain"
              source={arrow}
            /> */}
          </TouchableOpacity>
          {/* <FastImage resizeMode="contain" style={styles.logo} source={logo} /> */}
        </>
      )}
    </>
  );
};

export default Header;
