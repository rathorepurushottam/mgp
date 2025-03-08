import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GameData } from '../../../assets/DummyData/DummyData';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

const GamesHome = () => {
    const navigation = useNavigation()
    const renderItem = ({ item }) => (
        <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={()=>navigation.navigate(item?.navigate)}>
          <FastImage
            source={item.image}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.labelContainer}>
            <Text style={styles.label}>{item.Label}</Text>
          </View>
        </TouchableOpacity>
      );
  return (
    <FlatList
      data={GameData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default GamesHome

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    card: {
      width: '45%',
      height: 200,
      backgroundColor: '#1F48A0',
      borderRadius: 10,
      margin: 10,
      borderWidth:4,
      borderColor:'#fff',
    //   overflow: 'hidden',
    // shadowColor: '#fff',
    // shadowOffset: { width: 0, height: 10 },
    // shadowOpacity: 0.7,
    // shadowRadius: 15,
    // elevation: 15,
      
    },
    image: {
      width: '100%',
      height: '80%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    // borderRadius:10,
    },
    labelContainer: {
      backgroundColor: '#1F48A0',
      paddingVertical: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: '#fff',
      fontWeight: 'bold',
    }
  });
  