import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { AppText, BLACK, EIGHT, POPPINS_MEDIUM, POPPINS_SEMI_BOLD, TEN, THIRTEEN, WHITE } from "../../../common/appText/AppText";
import FastImage from "react-native-fast-image";
import { downArrow, substituteIcon } from "../../../helper/Image";
import { colors } from "../../../theme/Colors";
import { modifyName, playerRollImageTwo } from "../../../helper/Utility";
import { useSelector } from "react-redux";


const PlayerSubsitute = ({ substitutePlayer, refRBSheet }) => {
    let reNewSubstitute = substitutePlayer?.sort((a, b) => a.numberid - b.numberid);
    
    const contestData = useSelector((state) => state?.match?.contestData);
    const convertToTeamsTitle2 = (arr) => {
        const TeamsTitle2 = arr.map((title) => title.trim());
        return TeamsTitle2;
    };
    const removedSpacesTeamsTitle = convertToTeamsTitle2(contestData?.TeamsTitle);
    return (
        <View>
            <View style={styles.conatiner}>
                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <AppText
                        type={THIRTEEN} weight={POPPINS_SEMI_BOLD} color={WHITE}>
                        SUBSITUTE
                    </AppText>
                    <FastImage style={styles.subsituteIcon} resizeMode="contain" source={substituteIcon} />
                </View>
                <TouchableOpacity onPress={() => refRBSheet?.current?.close()}>
                    <FastImage tintColor={colors.white} source={downArrow} resizeMode="contain" style={styles.downImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.flatContaienr}>
                {reNewSubstitute?.map((item: any) => {
                    return (
                        <View style={{ alignItems: 'center', marginTop: 10, width: 70, }}>
                            <View style={styles.rollContainer} >
                                <AppText
                                    style={{ marginTop: -1 }}
                                    type={EIGHT}
                                    weight={POPPINS_SEMI_BOLD}
                                    color={BLACK} >
                                    {item?.playing_role}
                                </AppText>
                            </View>
                            <FastImage
                                source={playerRollImageTwo(item)}
                                style={styles.playerImage}
                                resizeMode="contain"
                            />
                            <View style={[styles.textContainer, {
                                backgroundColor: item?.primary_team?.title === removedSpacesTeamsTitle[0]
                                    ? colors.black
                                    : colors.white
                            }]}>
                                <AppText
                                    weight={POPPINS_SEMI_BOLD}
                                    type={TEN}
                                    color={item?.primary_team?.title === removedSpacesTeamsTitle[0] ? WHITE : BLACK} >
                                    {modifyName(item?.first_name)}
                                </AppText>
                                {item.playing11 == undefined ? (
                                    <></>
                                ) : (
                                    <>
                                        {item.playing11 == 'true' ? (
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={styles.headerDotgreen} />
                                            </View>
                                        ) : (
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={styles.headerDotRed} />
                                            </View>
                                        )}
                                    </>
                                )}
                            </View>
                            <AppText type={TEN} weight={POPPINS_MEDIUM} color={WHITE} >
                                {item?.fantasy_player_rating} Cr
                            </AppText>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}
export default PlayerSubsitute
const styles = StyleSheet.create({
    conatiner: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    },
    subsituteIcon: {
        height: 13,
        width: 13,
        marginTop: -3,
        marginLeft: 5
    },
    downImage: {
        height: 25, width: 25, transform: [{ rotate: "180deg" }]
    },
    flatContaienr: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    playerImage: {
        height: 48,
        width: 32,
        marginBottom: -7
    },
    headerDotgreen: {
        height: 6,
        width: 6,
        borderRadius: 100,
        backgroundColor: '#00B81C',
        marginLeft: 3,
    },
    headerDotRed: {
        height: 6,
        width: 6,
        borderRadius: 100,
        backgroundColor: '#FF0000',
        marginLeft: 3,
    },
    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        paddingHorizontal: 5,
        marginBottom: 5
    },
    rollContainer: {
        backgroundColor: colors.white,
        borderRadius: 3,
        paddingHorizontal: 3,
        height: 10,
        position: "absolute",
        left: 0,
        top: 5
    }
})