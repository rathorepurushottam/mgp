import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { colors } from '../../theme/Colors'
import { useNavigation } from '@react-navigation/native'
import RulesModal from '../RulesModal/RulesModal'
const Header = ({from,title}) => {
    const navigation = useNavigation();
    const [modalVsible,setModalVisible] = useState(false);
  return (
    <>
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowWrapper} onPress={()=>navigation.goBack()}>
        <AntDesign name="arrowleft" color={'#fff'} size={20}/>
      </TouchableOpacity>

      {/* {
        from == "Notification" ? 
        <Text style={{color:"#fff"}}>{title}</Text>
        :null
      } */}

      {
        from !== 'Notification' ? 
        <View style={styles.Rules}>
        <View>
        <Text style={{color:'#fff',marginRight:8}}>Rules</Text>
        </View>
        <TouchableOpacity style={styles.questionWrapper} onPress={()=>setModalVisible(true)}>
        <AntDesign name="question" color={'#222'} size={20}/>
        </TouchableOpacity>
      </View>
      :<></>
      }
      
    </View>
      <RulesModal modalVsible={modalVsible} setModalVisible={setModalVisible}/>
    </>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backgroundHeader,
        height:'7%',
        width:'100%',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    arrowWrapper:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:15,
        height:30,
        width:30,

        // padding:10,
        alignItems:'center',
        justifyContent:'center'

    },
    questionWrapper:{
        backgroundColor:colors.bottomIConColor,
        height:30,
        width:30,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
,    },
    Rules:{
        alignItems:'center',
        flexDirection:'row',
    }
})