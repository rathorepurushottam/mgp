import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CommonButton = ({title,onPress}) => {
  return (
    <TouchableOpacity style={{width: "100%"}} onPress={onPress}>
    <LinearGradient colors={["#FCD35E",'#EFAB3D']} style={styles.button} >
        <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
    </TouchableOpacity>
  )
}
export default CommonButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ffcc00",
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: '15%',
      },
      buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
      },
})