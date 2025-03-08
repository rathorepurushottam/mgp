import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, TextInput, Share } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../theme/Colors'
import InnerHeader from '../../common/Headers/InnerHeader'
import FastImage from 'react-native-fast-image'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { backgroundLudo } from '../../helper/Image';
const InviteFriend = () => {
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'MGP123442',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
            } else {
            }
          } else if (result.action === Share.dismissedAction) {
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };
    return (
        <LinearGradient colors={[colors.BackgroundColorOne, colors.BackgroundColorTwo, '#170551']} style={styles.container}>
            <InnerHeader title="REFER & EARN" />
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 30 }}>
                <View style={styles.header}>
                    <Text style={styles.inviteFriends}>Invite your friends</Text>
                    <Text style={styles.normalText}>
                        When they Sign up and complete their first transaction
                    </Text>
                </View>

                <View style={styles.boxContainer}>
                    <View style={styles.rewardBox}>
                        <Text style={styles.rewardTitle}>You get</Text>
                        <View style={styles.boxMinor}>
                            <Text style={styles.rewardPoints}>50</Text>
                            <Text style={styles.rewardSubtitle}>Skill Winz Coins</Text>
                            <View>
                                <Text style={styles.rewardNote}>1 Skill Winz Coin = ₹1</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.rewardBox}>
                        <Text style={styles.rewardTitle}>Your friends get</Text>
                        <View style={styles.boxMinor}>
                            <Text style={styles.rewardPoints}>50</Text>
                            <Text style={styles.rewardSubtitle}>Skill Winz Coins</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.invitationBox}>
                    <Text style={styles.invitationTitle}>My Invitation</Text>
                    <View style={styles.invitationPointsBox}>
                        <View style={styles.box1}>
                            <Text style={styles.pointsValue}>10</Text>
                            <Text style={styles.pointsLabel}>Points earned</Text>
                        </View>
                        <View style={styles.box2}>
                            <Text style={styles.pointsValue}>0</Text>
                            <TouchableOpacity>
                                <Text style={[styles.pointsLabel, { backgroundColor: colors.BackgroundColorOne, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 20 }]}>My Invites</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.invitationCodeBox}>
                        <TextInput
                            style={styles.invitationCode}
                            editable={false}
                            value="XINS9880"
                        />
                        <TouchableOpacity style={styles.copyButton}>
                            <FontAwesome name="copy" size={20} color="#222" />
                        </TouchableOpacity>
                    </View>
                </View>

                <Text style={styles.shareText}>Or Invite Via</Text>
                <View style={styles.shareContainer}>
                    <TouchableOpacity style={styles.whatsappButton} onPress={onShare}>
                        <FontAwesome name="whatsapp" size={20} color="#fff" />
                        <Text style={styles.shareButtonText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                        <FontAwesome name="share-alt" size={20} color="#fff" />
                        <Text style={styles.shareButtonText}>Share</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

export default InviteFriend

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    header: {
        marginTop: 20,
        alignItems: 'center',
    },
    inviteFriends: {
        fontSize: 30,
        color: '#01025B',
        fontWeight: 'bold',
        textShadowColor: '#feca34', 
        textShadowOffset: { width:1, height: 2 }, 
        textShadowRadius:2,
    },
    normalText: {
        color: '#bbb',
        textAlign: 'center',
        marginTop: 5,
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        backgroundColor: '#FFFFFF33',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "#FFFFFF80"
    },
    rewardBox: {
        paddingVertical: 15,
        width: '48%',
    },
    rewardTitle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    },
    boxMinor: {
        backgroundColor: '#FFFFFF1A',
        borderRadius: 10,
        paddingTop: 10,
        height: 100,
        // paddingHorizontal: 15,
        marginTop: 10,
    },
    rewardPoints: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: "center"
    },
    rewardSubtitle: {
        color: '#fff',
        textAlign: 'center'
    },
    rewardNote: {
        color: '#222',
        fontSize: 12,
        backgroundColor: "#EFAB3D",
        justifyContent: "flex-end",
        marginTop: 10,
        textAlign: 'center',
        borderBottomRightRadius: 13,
        borderBottomLeftRadius: 13,
        paddingVertical: 2.4,

    },
    invitationBox: {
        backgroundColor: '#FFFFFF33',
        borderRadius: 15,
        padding: 20,
    },
    invitationTitle: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
        textShadowColor: '#feca34', 
        textShadowOffset: { width:3, height: 3 }, 
        textShadowRadius:4,
    },
    invitationPointsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#5845b2',
        // borderRadius: 10,
        // paddingVertical: 10,
        // paddingHorizontal: 15,
        borderTopLeftRadius: 45,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        marginBottom: 15,
    },
    box1: { 
        alignItems: 'center', 
        backgroundColor: '#FFFFFF26',
        borderTopLeftRadius: 45, 
        borderBottomLeftRadius: 45, 
        width: "50%", 
        paddingVertical: 10 
    },
    box2: { 
        alignItems: 'center', 
        backgroundColor: '#FFFFFF80', 
        width: "50%", 
        paddingVertical: 10, 
        borderBottomRightRadius: 45 
    },
    pointsValue: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    pointsLabel: {
        color: '#d1c4ff',
        fontSize: 12,
        fontWeight: '600',

    },
    invitationCodeBox: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 40,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: colors.BackgroundColorOne
    },
    invitationCode: {
        flex: 1,
        padding: 10,
        color: '#000',
        fontWeight: 'bold',
    },
    copyButton: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 14,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: colors.BackgroundColorOne
    },
    shareText: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginVertical: 15,
    },
    shareContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    whatsappButton: {
        flexDirection: 'row',
        backgroundColor: '#2BB741',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '48%',
        justifyContent: 'center',
    },
    shareButton: {
        flexDirection: 'row',
        backgroundColor: '#7F00FF',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: '48%',
        justifyContent: 'center',
    },
    shareButtonText: {
        color: '#fff',
        marginLeft: 10,
        fontWeight: 'bold',
    },
})