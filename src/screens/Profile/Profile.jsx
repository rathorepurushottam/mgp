import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Profile = () => {
  return (
     <LinearGradient colors={["#01025C", '#121269']} style={styles.container}>
        </LinearGradient>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: "center",
    width: '100%'
  },
})