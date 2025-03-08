import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import InnerHeader from '../../common/Headers/InnerHeader'
import FastImage from 'react-native-fast-image'
import { diceLudoImage, ludoIMageProfile } from '../../helper/Image'
import { LudoData } from '../../../assets/DummyData/DummyData'
const Width = Dimensions.get('window').width;

const LudoHistory = () => {

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <View style={{alignItems:'center',}}><Text style={styles.winText}>{item?.result}</Text></View>
            <View style={styles.cardWrap}>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.winning}>Winning</Text>
                    <Text style={styles.winningAmount}>₹{item?.winningAmount}</Text>
                </View>
                    <View style={{backgroundColor:"#DDEAFF80",paddingHorizontal:20,borderRadius:20,paddingVertical:4}}>
                    <Text style={{fontWeight:"500"}}>{item?.playersCount} Player</Text>
                    </View>
                <View style={{alignItems:"flex-end"}}>
                <Text style={{fontWeight:"500"}}>Entry fee</Text>
                <Text style={styles.entryfee}>₹{item?.entryFee}</Text>
                <Text style={styles.date}>{item?.date}</Text>
                </View>

            </View>
          
        </View>
      );
    
  return (
    <LinearGradient colors={["#01025C", '#121269','#170551']} style={styles.container}>
        <InnerHeader title="LUDO HISTORY"/>
        <View style={styles.ludoImageWrapper}>
            <FastImage source={diceLudoImage} style={styles.ludoImage} resizeMode='stretch' />
            {/* <View style={{marginTop:-Width*0.2,marginLeft:Width*0.05}}> */}
            <View style={{position:'absolute',top:35,left:'17%'}}>
            <Text style={styles.totalMatches}>60</Text>
            <Text style={{color:'#fff'}}>Total Game Played</Text>
            </View>
        </View>
        <View style={{flex:1,width:"100%",}}>
        <FlatList
            data={LudoData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            />
            </View>
    </LinearGradient>
  
  )
}

export default LudoHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
      },
      ludoImageWrapper:{paddingHorizontal:'10%',marginVertical:'4%'},
      ludoImage:{
        width:Width*0.9,
        height:Width*0.3,
        tintColor:'#74C3BA'
      },
      flatlist:{
        marginHorizontal:20
      },
      winText:{
        backgroundColor:'#CEE7FF',
        paddingHorizontal:30,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        paddingVertical:3,
        fontWeight:'700',
        fontSize:17
    },
      card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        // padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width:"100%"
      },
      cardWrap:{flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        alignItems:'center',
        paddingTop:10,
        paddingBottom:20,
    },
      text: {
        fontSize: 16,
        color: '#333',
        marginVertical: 2,
      },
      winning:{backgroundColor:"#DDEAFF80",
        paddingHorizontal:15,
        paddingVertical:4,
        borderRadius:20,
        fontSize:11,
        fontWeight:'400'
    },
    winningAmount:{
        color:"#222",
        fontSize:21,
        fontWeight:"600"
    },
    entryfee:{
        fontWeight:"600",
        fontSize:14
    },
    date:{
        fontWeight:"500",
        fontSize:10,
        color:'#000000CC'
    },
    totalMatches:{
        color:'#fff',
        fontWeight:"600",
        fontSize:19
    }

})