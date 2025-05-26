import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../../theme/Colors';

const InputBox = ({val, setVal, error, maxLength}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={error ? error : 'Enter Mobile Number'}
      placeholderTextColor={error ? colors.ErrorColor : '#bbb'}
      keyboardType="phone-pad"
      maxLength={maxLength}
      value={val}
      onChangeText={setVal}
    />
  );
};

export default InputBox;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    color: '#fff',
    fontSize: 16,
    marginBottom: 15,
  },
});
