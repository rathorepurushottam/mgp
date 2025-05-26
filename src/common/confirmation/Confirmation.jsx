import React from 'react';
import { Dimensions, Modal, Pressable, StyleSheet, View , TouchableOpacity} from 'react-native';
import {
  AppText,
  EIGHTEEN,
  FORTEEN,
  LATO_SEMI_BOLD,
  POPPINS_BOLD,
  POPPINS_BOLD_ITALIC,
  SEMI_BOLD,
  SIXTEEN,
  WHITE,
} from '../../common/appText/AppText';
import { useDispatch, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import { CLOSE_WHITE_ICON } from '../../helper/Image';
import { poppinsBoldItalic } from '../../theme/typography';
import {
  joinContest,
  setContestData,
  setcreateContest,
} from '../../slices/matchSlice';
import NavigationService from '../../navigation/NavigationService';
import {
  MY_CONTEST,
} from '../../navigation/routes';
import { fixedToTwo } from '../../helper/Utility';
import LinearGradient from 'react-native-linear-gradient';
import { NewColor, colors } from '../../theme/Colors';

const Confirmation = ({
  isModalVisible,
  setIsModalVisible,
  details,
  matchDetails,
  onClose,
  saveTeamName,
  selectMulty,
  JoinWithMULT,
}) => {
  const dispatch = useDispatch();
  const myTeam = useSelector(state => state?.match?.myTeams);

  const userData = useSelector(state => {
    return state.profile.userData;
  });
  const CreateContestData = useSelector(
    state => state?.match?.CreateContestData,
  );
  const FilterId = myTeam?.find(value => {
    return value?.name === saveTeamName;
  });
  const selectedMatch = useSelector(state => state?.match?.selectedMatch);
  const contestData = useSelector(state => state?.match?.contestData);
  const { EnteryFee, UsableBonusPercantage, contest_category_id, inner_data_id } =
    selectedMatch ?? '';
  // const { _id: matchDetails_id } = matchDetails ?? '';
  const { match_id, matchid, _id } = myTeam[0] ?? '';
  const { cash_bonus, totaldeposit } = userData ?? '';
  const newAmount = totaldeposit + userData?.winning_amount;
  const sumOfTotal = totaldeposit + userData?.winning_amount + cash_bonus;
  let usable =
    (Number(
      CreateContestData?.EnteryFee ? CreateContestData?.EnteryFee : EnteryFee,
    ) *
      Number(UsableBonusPercantage)) /
    100;
  let usableBonus = `${CreateContestData?.EnteryFee
    ? CreateContestData?.EnteryFee
    : EnteryFee == 0
      ? 0
      : cash_bonus >= usable
        ? usable
        : cash_bonus
    }`;
  let payAmount = `${CreateContestData?.EnteryFee
    ? CreateContestData?.EnteryFee - Number(usableBonus)
    : Number(EnteryFee) - Number(usableBonus)
    }`;
  const { _id: contestListId } = contestData ?? '';
  const payTotalAmount = selectMulty?.length ? payAmount * selectMulty?.length : payAmount;

  const onSubmit = () => {
    if (CreateContestData?.EnteryFee) {
      dispatch(
        setcreateContest(CreateContestData, match_id, payTotalAmount, _id, matchid, FilterId?.name, contestListId),
      );
      setIsModalVisible(false);
    }
    else if (payTotalAmount <= newAmount) {
      if (JoinWithMULT) {
        let arofobj = [];
        for (let index = 0; index < selectMulty?.length; index++) {
          const data = {
            match_id: selectMulty[index]?.match_id,
            matchid: selectMulty[index]?.matchid,
            teams_id: [selectMulty[index]?._id],
            contest_category_id: contest_category_id,
            match_contest_category_id: inner_data_id,
            method: 'wallet',
            amount: selectedMatch?.EnteryFee,
            teamName: selectMulty[index]?.name,
            shadow_contest_id: details?.shadow_contest_id,
          };
          arofobj?.push(data);
        }
        let data = {
          mutiple: true,
          arofobj: arofobj,
        };
        console.log(data, 'join constest multi true');
        setIsModalVisible(false);
        dispatch(joinContest(data, matchDetails));
        onClose ? onClose() : null;
        setTimeout(() => {
          dispatch(setContestData(matchDetails));
          NavigationService.navigate(MY_CONTEST);
        }, 1000);
      } else {
        const data = {
          match_id: FilterId?.match_id,
          matchid: FilterId?.matchid,
          teams_id: [FilterId?._id],
          contest_category_id: contest_category_id,
          match_contest_category_id: inner_data_id,
          method: 'wallet',
          amount: selectedMatch?.EnteryFee,
          teamName: FilterId?.name,
          shadow_contest_id: details?.shadow_contest_id,
        };
        console.log(data, 'join constest multi false');
        setIsModalVisible(false);
        dispatch(joinContest(data, matchDetails));
        onClose ? onClose() : null;
        setTimeout(() => {
          dispatch(setContestData(matchDetails));
          NavigationService.navigate(MY_CONTEST);
        }, 1000);
      }
    } else {
      setIsModalVisible(false);
      onClose ? onClose() : null;
      NavigationService.navigate('BottomNavFantasy', {
        screen: 'Wallet',
        ...selectedMatch,
        matchDetails: matchDetails,
        usableBonus,
        payAmount,
        value: payAmount,
      });
    }
  };
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        setIsModalVisible(!isModalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          <View style={styles.modalTopSection}>
            <AppText type={SIXTEEN} weight={POPPINS_BOLD_ITALIC}>
              CONFIRMATION
            </AppText>
            <Pressable
              style={{
                position: 'absolute',
                right: 0,
                height: 42,
                width: 42,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => setIsModalVisible(false)}>
              <FastImage
                source={CLOSE_WHITE_ICON}
                style={styles.closeWhiteIcon}
                resizeMode="contain"
                tintColor={colors.white}
              />
            </Pressable>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              borderBottomWidth: 1,
              borderBottomColor: colors.borderLightBlue,
              paddingBottom: 10,
            }}>
            <View style={styles.center}>
              <AppText type={SIXTEEN} weight={SEMI_BOLD}>
                Contest Fee
              </AppText>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AppText color={WHITE} weight={LATO_SEMI_BOLD} type={SIXTEEN}>
                  ₹
                  <AppText
                    type={SIXTEEN}
                    color={WHITE}
                    weight={SEMI_BOLD}>
                    {CreateContestData?.EnteryFee ? CreateContestData?.EnteryFee : selectMulty?.length ? `${EnteryFee} x ${selectMulty?.length}` : EnteryFee}
                  </AppText>
                </AppText>
              </View>
            </View>
            <View style={[styles.center, { marginTop: 5 }]}>
              <AppText type={FORTEEN} weight={SEMI_BOLD}>
                Usable Balance{'\n'}(Unutilized + Winning + Bonus)
              </AppText>
              <AppText type={FORTEEN} weight={LATO_SEMI_BOLD} >
                ₹{`${fixedToTwo(sumOfTotal)}`}
              </AppText>
            </View>
            <View style={[styles.center, { marginTop: 5 }]}>
              <AppText type={FORTEEN} weight={SEMI_BOLD}>
                Usable Cash Bonus
              </AppText>
              <AppText type={FORTEEN} color={WHITE} style={{ opacity: 0.5 }} weight={SEMI_BOLD}>
                -₹{Number(usableBonus)?.toFixed(2)}
              </AppText>
            </View>
          </View>
          <View style={[styles.center, { marginTop: 10, paddingHorizontal: 10 }]}>
            <AppText
              type={FORTEEN}
              style={{ color: '#4DFF7F' }}
              weight={SEMI_BOLD}>
              To Pay
            </AppText>
            <AppText
              style={{ color: '#4DFF7F' }}
              type={FORTEEN}
              weight={LATO_SEMI_BOLD}>
              ₹{payTotalAmount}
            </AppText>
          </View>
          <View style={styles.detailsStyle}>
            <AppText weight={SEMI_BOLD}>
              By Joining this contest, you accept My Battle 11’s T&C and
              confirm that you are not a resident of Assam, Odisha, Nagaland,
              Andhra Pradesh, Sikkim, Telangana.
            </AppText>
          </View>
          <TouchableOpacity
            onPress={onSubmit}
            style={[
              styles.btn,
              {
                width: '90%',
                alignSelf: 'center',
              },
            ]}>
            <LinearGradient
              style={[
                styles.btn,
                {
                  width: '100%',
                },
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={[colors.playerDetailsLinerOne, colors.playerDetailsLinerTwo]}>
              <AppText
                type={EIGHTEEN}
                style={{
                  color: 'white',
                }}
                weight={POPPINS_BOLD}>
                {payTotalAmount <= totaldeposit + cash_bonus ? 'Join contest' : 'Add cash'}
              </AppText>
            </LinearGradient>
          </TouchableOpacity>
          {/* <SecondaryButton
            title={payAmount <= total_balance ? 'Join contest' : 'Add cash'}
            onPress={onSubmit}
            buttonStyle={styles.editButton}
            titleStyle={styles.editButtonTitle}
            btnStyle={{
              borderWidth:0,
            }}
            buttonViewStyle={{height: 45,
              borderRadius:8,
              backgroundColor:'#5389C4'}}
          /> */}
        </View>
      </View>
    </Modal>
  );
};

export default Confirmation;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: NewColor.linerBlacklight,
  },
  modalContainer: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: NewColor.linerWhite,
    borderRadius: 16,
    overflow: 'hidden',
    paddingBottom: 20,
  },
  modalTopSection: {
    height: 54,
    backgroundColor: NewColor.linerBlackFive,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  closeWhiteIcon: {
    height: 12,
    width: 12,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editButton: { width: '90%', alignSelf: 'center', marginTop: 10, height: 50 },
  editButtonTitle: {
    fontSize: 18,
    fontFamily: poppinsBoldItalic,
  },
  detailsStyle: {
    borderWidth: 1,
    borderColor: colors.borderLightBlue,
    marginHorizontal: 20,
    paddingHorizontal: 17,
    paddingVertical: 15,
    borderRadius: 16,
    marginVertical: 10,
    backgroundColor: NewColor.linerBlackFive,
  },
  btn: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
