import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const WalletHeader = ({title}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.contain} onPress={()=>navigation.navigate('TransactionHistory')}>
            <Text style={styles.history}>History</Text>
            <AntDesign name="arrowright" color={'#fff'} size={20}/>
      </TouchableOpacity>
    </View>
  )
}

export default WalletHeader

const styles = StyleSheet.create({
    container:{
           backgroundColor:colors.backgroundHeader,
           height:50,
           width:'100%',
           flexDirection:"row",
           justifyContent:'space-between',
           alignItems:'center',
           paddingHorizontal:20,
           paddingVertical:10,
           borderBottomLeftRadius:20,
           borderBottomRightRadius:20,
       },
       title:{
           color:'#fff',
           fontSize:16,
           fontWeight:'500',
       },
       contain:{
           flexDirection:'row',
           width:'30%',
           backgroundColor:'#2c2a36',
           paddingVertical:4,
           paddingHorizontal:5,
           borderRadius:20,
           justifyContent:'space-between'
       },
       rupeeContainer:{
           flexDirection:'row',
           width:"70%",

       },
       history:{
           color:'#fff',
           paddingLeft:10,
       },
       arrow:{
           paddingLeft:3,
       }
})