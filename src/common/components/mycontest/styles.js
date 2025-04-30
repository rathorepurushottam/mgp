
import { StyleSheet } from 'react-native';
import { universalPaddingHorizontal } from '../../../theme/dimens';
import { colors, NewColor } from '../../../theme/Colors';
const styles = StyleSheet.create({
  container: {
    borderRadius: 17,
    overflow: 'hidden',
    marginBottom: 10,
    marginTop: 10,
    borderColor:"#272058",
    borderWidth: 1,
    backgroundColor: '#170F4B',
    // marginHorizontal:20
  },
  topContainer: {
    paddingHorizontal: universalPaddingHorizontal,
    justifyContent: 'space-evenly',
    backgroundColor: colors.background
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  entryType: {
    color: 'white',
    fontSize: 9,
    opacity: 0.5,
  },
  bedge: {
    height: 25,
    width: 56,
    backgroundColor: colors.green,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    height: 3,
    backgroundColor: '#D9D9D9',
    borderRadius: 4,

    overflow: 'hidden',
  },
  bottomContainer: {
    paddingHorizontal: 10,
    backgroundColor: NewColor.linerBlackFive,
    paddingVertical: 10
  },
  gloryIcon: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  commonViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  commonTextStyle: {
    color: 'white',
    fontSize: 10,
    opacity: 0.5,
    marginLeft: 6,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  grayContainer: {
    height: 18,
    width: 18,
    backgroundColor: "#AD7619",
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  teamLabel: {
    fontSize: 9,
    color: 'white',
  },
  marginRight7: {
    marginRight: 7,
  },
  listdownContainer: {
    flexDirection: "row", alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: universalPaddingHorizontal,
    height: 35,
  },
  downArrowList: {
    height: 20, width: 20,
  }
});

export default styles;
