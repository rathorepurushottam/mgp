import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../theme/Colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
const InnerHeader = ({title,from}) => {
    const navigation = useNavigation()
  
  return (
     <View style={styles.container}>
          <TouchableOpacity style={[styles.contain,{width: from == "Transaction" ? "25%" :'35%'}]} onPress={()=>navigation.goBack()}>
              <AntDesign name="arrowleft" color={'#fff'} size={20}/>
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
  )
}

export default InnerHeader
const styles = StyleSheet.create({
    container:{
           backgroundColor:colors.backgroundHeader,
           height:50,
           width:'100%',
           flexDirection:"row",
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
           alignSelf:'center',
       },
       contain:{
           flexDirection:'row',
           paddingVertical:4,
           paddingHorizontal:5,
           borderRadius:20,
           justifyContent:'space-between',
          //  backgroundColor:'orange'
       },
})