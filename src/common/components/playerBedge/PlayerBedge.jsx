import React from 'react';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {shapeParallelogram} from '../../../helper/Image';
const PlayerBedge = () => {
  return (
    <FastImage
      resizeMode="contain"
      source={shapeParallelogram}
      tintColor={'#758283'}
      style={styles.container}
    />
  );
};

export default PlayerBedge;
