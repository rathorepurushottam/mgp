import {StyleSheet} from 'react-native';

import { colors } from '../../theme/Colors';

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 10,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradientWrapper: {
    borderRadius: 5,
    padding: 1,
  },
  smallBtn: {
    height: 50,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText:{
    color:'white',
    // fontWeight: 'bold',
    textTransform:"uppercase",
    alignSelf: "center"

  },
  buttonContainer:{
    borderWidth: 2,
    borderColor: colors.white,
    paddingVertical: 15
  }
});

export default styles;
