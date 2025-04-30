import React from 'react';
import FastImage from 'react-native-fast-image';
import { right_arrow } from '../../../../helper/Image';
import styles from './styles';
import { AppText, ELEVEN, POPPINS_MEDIUM, WHITE } from '../../../../common/appText/AppText';
import { View ,TouchableOpacity} from 'react-native';
import { colors } from '../../../../theme/Colors';
const ViewAll = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.viewAllBtn} onPress={onPress}>
      <AppText
        weight={POPPINS_MEDIUM}
        type={ELEVEN}
        color={WHITE}
        style={{ marginRight: 5,}}>
        View all
      </AppText>
      <FastImage
        source={right_arrow}
        style={styles.rightArrow}
        resizeMode="contain"
        tintColor={colors.white}
      />
    </TouchableOpacity>
  );
};

export default ViewAll;
