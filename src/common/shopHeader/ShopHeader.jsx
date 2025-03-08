import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
const ShopHeader = ({title}) => {
    return (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>{title}</Text>
            </View>
          <View style={styles.contain}>
            <TouchableOpacity style={styles.rupeeContainer}>
                <Ionicons name="card" color={'#fff'} size={20}/>
                <Text style={styles.rupee}>50</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plus}>
                <AntDesign name="plus" color={'#fff'} size={20}/>
            </TouchableOpacity>
          </View>
        </View>
      )
}

export default ShopHeader

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
            paddingHorizontal:10,
            borderRadius:20,
        },
        rupeeContainer:{
            flexDirection:'row',
            width:"70%",

        },
        rupee:{
            color:'#fff',
            paddingLeft:10,
        },
        plus:{
            borderLeftWidth:1,
            borderColor:'#807b9c',
            paddingLeft:3,
        }
})