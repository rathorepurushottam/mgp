import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'
import CommonButton from '../CommonButton/CommonButton'
import { colors } from '../../theme/Colors'
import { check, mychampLogo } from '../../helper/Image'
import { useNavigation } from '@react-navigation/native'

const VerifyOtp = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('BottomNavigation');
        }, 2000);
    },[])
    return (
        <LinearGradient colors={["#01025C", '#02025A']} style={styles.container}>
            <View showsVerticalScrollIndicator={false}>
                <View>
                    <FastImage source={mychampLogo} style={styles.logo} resizeMode='contain' />
                </View>
                <View style={styles.content}>
                    <View>
                        <FastImage source={check} style={styles.checkIcon} resizeMode='contain' />
                    </View>
                    <View>
                        <Text style={styles.verified}>Verification Successful</Text>
                        <Text style={styles.normalText}>Your number is verified.</Text>
                    </View>

                </View>

                <View style={styles.footerContainer}>
                    <Text style={styles.footer}>Version 1.0.0</Text>
                    <Text style={styles.footer}>© MyChamp11. All Rights Reserved</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

export default VerifyOtp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: "center",
        width: '100%'
    },
    logo: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    content: {
        alignItems: "center",
        marginTop: '5%',
        marginHorizontal: 20
    },
    checkIcon:{
        height:100,
        width:100,
    },
    
    footer: {
        fontSize: 12,
        color: "#bbb",
        textAlign: "center",
    },
    verified:{
        color:colors.Green,
        fontSize:25,
        fontWeight:'600'
    },
    normalText:{
        color:'#fff',
        alignSelf:'center',

    },
    footerContainer:{ 
        justifyContent:'flex-end' ,
        flex:1,
        marginBottom:'10%'
    }
})