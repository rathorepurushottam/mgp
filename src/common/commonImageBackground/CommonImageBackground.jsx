import {ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../fantasycommon/Header/Header';
import { MyChampScreen1 } from '../../helper/Image';

const CommonImageBackground = props => {
  const {children, common} = props;
  return (
    <>
      {common ? (
        <ImageBackground source={MyChampScreen1} style={styles.image} resizeMode="cover">
          {children}
        </ImageBackground>
      ) : (
        <ImageBackground
          source={MyChampScreen1}
          style={styles.image}
          resizeMode="cover">
          <Header />
          {children}
        </ImageBackground>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

export default CommonImageBackground;
