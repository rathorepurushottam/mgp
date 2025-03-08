import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import InnerHeader from '../../common/Headers/InnerHeader'
import { transactions } from '../../../assets/DummyData/DummyData';

const TransactionHistory = () => {
        const renderItem = ({ item }) => (
          <View style={styles.transactionItem}>
            <View style={styles.iconContainer}>
              <Feather name={item.icon} size={30} color="#374F78" />
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={[styles.amount, { color: item.color }]}>{item.amount}</Text>
          </View>
        );
  return (
        <LinearGradient colors={["#01025C", '#121269']} style={styles.container}>
            <InnerHeader from ="Transaction" title={'TRANSACTION HISTORY'}/>
            <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
        </LinearGradient>
    
  )
}

export default TransactionHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        width: '100%',
        paddingBottom:'30%'
      },
      transactionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.1)',
        marginHorizontal:20,
      },
      iconContainer: {
        width: 40,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#DDEAFF80',
        borderRadius:25,
        alignItems:"center"
      },
      detailsContainer: {
        flex: 1,
        paddingLeft: 10,
      },
      type: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      date: {
        color: 'gray',
        fontSize: 12,
      },
      amount: {
        fontSize: 16,
        fontWeight: 'bold',
      },
})