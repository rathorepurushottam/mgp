import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from '@react-native-community/blur';
import { checkUPIDlNumber, ifsclNumber, toastAlert } from '../../helper/Utility';

const PaymentMethodModal = ({modalvisible,from,setModalVisible}) => {
    console.log(from,"from")
    const [formData, setFormData] = useState({
        holderName: '',
        accountNumber: '',
        confirmAccountNumber: '',
        ifscCode: '',
      });

      const [Upidetails,setUpiDetails] = useState({
            username :'',
            UpiID :'',
            CUpiId :''
      })
    
      const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };

      const HandleUpiDetails = (field,value)=>{
        setUpiDetails({ ...Upidetails, [field] : value})
      }

      const onSubmit = ()=>{
        if(!formData?.holderName)
        {
          toastAlert.showToastError('Please Provide Valid user name')
        }else if(!formData?.ifscCode){
          toastAlert.showToastError('Please provide valid IFSC Code')
        }else if(formData?.accountNumber.length < 16){
          toastAlert.showToastError('InValid Account Number')
        }else if(formData?.accountNumber != formData?.confirmAccountNumber){
          toastAlert.showToastError('account number does not match')
        }
        else{
            setModalVisible(false)
            console.log(formData,"formData");
            console.log(Upidetails,"upddetails")
        }
        // setFormData('');
      }

     const onSubmitUPiDetails = ()=>{
      if(!Upidetails?.username){
        toastAlert.showToastError('Please Provide Valid User Name')
      }else if(!checkUPIDlNumber(Upidetails?.UpiID)){
        toastAlert.showToastError('Invalid UPI ID')
      }else if(Upidetails?.CUpiId != Upidetails?.UpiID){
        toastAlert.showToastError('UPI ID does not match')
      }else{
        console.log(Upidetails,'Upidetails')
        setModalVisible(false);
      }
      }
    
  return (
    
        from == "Bank" ? 
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        // onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="rgba(0,0,0,0.5)"
          />
          
          <LinearGradient
            colors={['#66FDF5', '#070359']}
            style={styles.modalView}
          >
            <Text style={styles.modalTitle}>Add Account Details</Text>
            
            <Text style={styles.inputLabel}>Account Holder Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Account Holder Name"
              placeholderTextColor="#fff"
              value={formData.holderName}
              onChangeText={(value) => handleInputChange('holderName', value)}
            />
    
            <Text style={styles.inputLabel}>Account Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              placeholderTextColor="#fff"
              keyboardType="numeric"
              maxLength={16}
              value={formData.accountNumber}
              onChangeText={(value) => handleInputChange('accountNumber', value)}
            />
    
            <Text style={styles.inputLabel}>Confirm Account Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Account Number"
              placeholderTextColor="#fff"
              keyboardType="numeric"
              value={formData.confirmAccountNumber}
              maxLength={16}
              onChangeText={(value) =>
                handleInputChange('confirmAccountNumber', value)
              }
            />
    
            <Text style={styles.inputLabel}>IFSC Code</Text>
            <TextInput
              style={styles.input}
              placeholder="IFSC Code"
              placeholderTextColor="#fff"
              value={formData.ifscCode}
              onChangeText={(value) => handleInputChange('ifscCode', value)}
            />
    
            <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
              <LinearGradient
                colors={['#FF9900', '#FF6600']}
                style={styles.submitGradient}
              >
                <Text style={styles.submitText}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
        :
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        // onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <BlurView
            style={styles.absolute}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="rgba(0,0,0,0.5)"
          />
          
          <LinearGradient
            colors={['#66FDF5', '#070359']}
            style={styles.modalView}
          >
            <Text style={styles.modalTitle}>Add UPI ID</Text>
            
            <Text style={styles.inputLabel}>User Name</Text>
            <TextInput
              style={styles.input}
              placeholder="User Name"
              placeholderTextColor="#fff"
              value={Upidetails.username}
              onChangeText={(value) => HandleUpiDetails('username', value)}
            />
    
            <Text style={styles.inputLabel}>UPI ID</Text>
            <TextInput
              style={styles.input}
              placeholder="UPI ID"
              placeholderTextColor="#fff"
              keyboardType="numeric"
              value={Upidetails.UpiID}
              onChangeText={(value) => HandleUpiDetails('UpiID', value)}
            />
    
            <Text style={styles.inputLabel}>Confirm UPI ID</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm UPI ID"
              placeholderTextColor="#fff"
              keyboardType="numeric"
              value={Upidetails.CUpiId}
              onChangeText={(value) =>
                HandleUpiDetails('CUpiId', value)
              }
            />
    
            <TouchableOpacity style={styles.submitButton} onPress={onSubmitUPiDetails}>
              <LinearGradient
                colors={['#FF9900', '#FF6600']}
                style={styles.submitGradient}>
                <Text style={styles.submitText}>Submit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Modal>
    
   
  )
}

export default PaymentMethodModal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      modalView: {
        width: '90%',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 20,
        color: '#0A1B5E',
        marginBottom: 20,
        fontWeight: 'bold',
      },
      inputLabel: {
        alignSelf: 'flex-start',
        color: '#0A1B5E',
        marginBottom: 5,
        fontWeight:'700',
        fontSize:12,
        paddingHorizontal:10,
      },
      input: {
        width: '100%',
        // backgroundColor: '#fff',
        borderBottomWidth:1,
        borderColor:'#fff',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        color: '#fff',
      },
      submitButton: {
        width: '80%',
        borderRadius: 30,
        overflow: 'hidden',
        marginTop: 20,
      },
      submitGradient: {
        paddingVertical: 10,
        alignItems: 'center',
      },
      submitText: {
        color: '#fff',
        fontWeight: 'bold',
      },
})