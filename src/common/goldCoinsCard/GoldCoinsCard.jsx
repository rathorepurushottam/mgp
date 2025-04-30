import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { coinData } from '../../../assets/DummyData/DummyData';
import LinearGradient from 'react-native-linear-gradient';

const GoldCoinsCard = () => {
  const CoinCard = ({ item }) => {
    return (
      <View style={styles.card}>
        {item.tag && (
          <LinearGradient colors={['#FBD100','#FF6908']} style={[styles.tag, item.tag === 'Popular' ? styles.popularTag : styles.bestPriceTag]}>
            <Text style={styles.tagText}>{item.tag}</Text>
          </LinearGradient>
        )}
        <Image source={ item.image } style={styles.image} />
        <Text style={styles.amount}>{item.amount}</Text>
        <TouchableOpacity style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={coinData}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => <CoinCard item={item} />}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default GoldCoinsCard

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#0B1C3F',
      width:'100%',
      // marginBottom:'30%',
      // padding: 10,
      marginBottom:"10%"
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 20,
      paddingVertical: 15,
      alignItems: 'center',
      justifyContent: 'center',
      width: '31.3%',
      marginVertical: 10,
      elevation: 5,
      position: 'relative',
      
    },
    image: {
      width: 50,
      height: 50,
      marginBottom: 10,
      marginTop:15,
      resizeMode:'contain'
    },
    amount: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    priceContainer: {
      backgroundColor: '#FF8C00',
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 15,
      marginTop: 5,
    },
    price: {
      color: '#fff',
      fontWeight: 'bold',
    },
    tag: {
      position: 'absolute',
      top: 0,
      left: 0,
      borderTopLeftRadius:20,
      paddingHorizontal: 10,
      paddingVertical: 2,
      marginBottom:10,
      borderBottomRightRadius:20,
    },
    popularTag: {
      backgroundColor: '#FFD700',
    },
    bestPriceTag: {
      backgroundColor: '#FF4500',
    },
    tagText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });
