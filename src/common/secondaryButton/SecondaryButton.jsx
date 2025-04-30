import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import { AppText, POPPINS_BOLD,  FIFTEEN, WHITE } from '../../common/appText/AppText';
import { RootState } from '../../libs/rootReducer';

const SecondaryButton = ({
  buttonStyle,
  title,
  onPress,
  btnStyle,
  smallBtn,
  titleStyle,
  buttonViewStyle,
  ...rest
}) => {
  const colors = useSelector((state) => {
    return state.theme.colors;
  });
  return (
    <TouchableOpacity
      {...rest}
      style={buttonStyle}
      activeOpacity={1}
      onPress={onPress}>
      <LinearGradient colors={[
        "#252431",
        "#252431"
      ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.0, y: 0 }}
        style={[styles.buttonContainer, buttonViewStyle]}>
        <AppText
          color={WHITE}
          type={FIFTEEN}
          weight={POPPINS_BOLD}
          style={[styles.buttonText, titleStyle]}>
          {title}
        </AppText>
      </LinearGradient >
    </TouchableOpacity >
  );
};

export default SecondaryButton;
