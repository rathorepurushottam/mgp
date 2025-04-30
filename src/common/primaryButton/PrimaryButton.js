import React from "react";

import styles from "./styles";
import {
  AppText,
  POPPINS_EXTRA_BOLD_ITALIC,
  SIXTEEN,
  POPPINS_BOLD,
  WHITE,
} from "../../common/appText/AppText";
import { View, TouchableOpacity } from "react-native";

const PrimaryButton = ({
  title,
  buttonStyle,
  onPress,
  smallBtn,
  titleStyle,
  type,
  weight,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.1}
      {...rest}
      style={buttonStyle}
      onPress={onPress}
    >
      <View style={[styles.buttonContainer, smallBtn]}>
        <AppText
          type={type ? type : SIXTEEN}
          weight={weight ? weight : POPPINS_BOLD}
          style={[styles.buttonText, titleStyle]}
        >
          {title}
        </AppText>
      </View>
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
