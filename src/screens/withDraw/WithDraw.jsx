import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import InnerHeader from '../../common/Headers/InnerHeader'
import FastImage from 'react-native-fast-image';
import { bankIcon, upiIcons } from '../../helper/Image';
import PaymentMethodModal from '../../common/AddPaymentMethodModal/PaymentMethodModal';

const WithDraw = () => {
    const [amount, setAmount] = useState('20');
    const [modalvisible,setModalVisible] = useState(false);
    const [from,setFrom] = useState('');

    const addMethod = (val)=>{
        setFrom(val);
        setModalVisible(true);
    };

  return (
     <LinearGradient colors={["#01025C", '#121269']} style={styles.container}>
      <InnerHeader title="WITHDRAW"/>
      <ScrollView style={{ marginTop: 20,marginHorizontal:20, marginBottom:'14%'}} showsVerticalScrollIndicator={false}>
        <View style={styles.winningCard}>
          <View>
            <Text style={styles.cardTitle}>Winning Amount</Text>
            <Text style={styles.amount}>₹ 500</Text>
          </View>
          <Icon name="dots-vertical" size={24} color="#0A1B5E" />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Amount You Want to Withdraw</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={(text) => setAmount(text)}
            keyboardType="numeric"
            placeholder="Enter amount"
            placeholderTextColor="#A0A0D6"
          />
        </View>

        <Text style={styles.sectionTitle}>Add Account</Text>

          <View style={styles.addCard}>
            <View style={{flexDirection:"row",alignItems:'center'}}>
            <FastImage source={bankIcon} style={styles.img} resizeMode='contain'/>
            <Text style={styles.addText}>Add Account</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={()=>addMethod("Bank")}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.addCard}>
          <View style={{flexDirection:"row",alignItems:'center'}}>
          <FastImage source={upiIcons} style={styles.upiIcons} resizeMode='contain'/>

            <Text style={styles.addText}>Add UPI</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={()=>addMethod("Upi")}>
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
          </View>

      </ScrollView>
      <PaymentMethodModal modalvisible={modalvisible} setModalVisible={setModalVisible} from={from}/>
      </LinearGradient>
  );
};

export default WithDraw;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      },
      winningCard: {
        backgroundColor:'#FFFFFF80',
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      cardTitle: {
        color: '#0A1B5E',
        fontSize: 14,
      },
      amount: {
        color: '#0A1B5E',
        fontSize: 28,
        fontWeight: 'bold',
      },
      inputContainer: {
        backgroundColor: '#FFFFFF1A',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        // marginHorizontal:15
      },
      inputLabel: {
        color: '#A0A0D6',
        marginBottom: 5,
      },
      input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        color: '#000',
      },
      sectionTitle: {
        color: '#A0A0D6',
        fontSize: 16,
        marginBottom: 10,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      addCard: {
        backgroundColor: '#FFFFFF1A',
        borderRadius: 30,
        paddingHorizontal: 20,
        paddingVertical:10,
        alignItems: 'center',
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10,

      },
      addText: {
        color: '#A0A0D6',
        marginVertical: 10,
        marginLeft:15
      },
      addButton: {
        backgroundColor: '#389042',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
      },
      addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      img:{
        height:30,
        width:30
      },
      upiIcons:{
        height:30,
        width:50,
      }
    
})