import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextInputBox = ({placeholder,val,maxLength,setVal,keyboardType}) => {
  console.log(val,"Valuesss")
  return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#FFFFFF80"
        value={val}
        maxLength={maxLength}
        onChangeText= {setVal}
        keyboardType={keyboardType}
      />
  )
}

export default TextInputBox

const styles = StyleSheet.create({

  input:{
    width: '100%',
    // backgroundColor: '#fff',
    borderBottomWidth:1,
    borderColor:'#7B7B7B80',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    color: '#fff',
  },
})