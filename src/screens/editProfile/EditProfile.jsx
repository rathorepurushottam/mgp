import { PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import InnerHeader from '../../common/Headers/InnerHeader'
import TextInputBox from '../../common/textInputBox/TextInputBox'
import FastImage from 'react-native-fast-image'
import { cameraIcon, DemoUser, galleryIcon, userPhoto, winnerUser } from '../../helper/Image'
import CommonButton from '../../common/CommonButton/CommonButton'
import { useNavigation } from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker'
import ImageCropPicker from 'react-native-image-crop-picker'
const EditProfile = () => {
    const [userName,setUserName] = useState('');
    const [fullName,setFullName] = useState('');
    const [Phone,SetPhone] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const navigation = useNavigation();

    const confimCamera = useRef();
   
    

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Camera Permission",
              message: "App needs access to your camera",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
        return true;
      };
  

    const onSubmit = ()=>{
        navigation.goBack();
    }
    const openCamera = async ()=> {
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) {
            console.log("Camera permission denied");
            return;
        }
        console.log("In camera")
        ImagePicker.openCamera({
          width: 485,
          height: 485,
          cropping: true,
          useFrontCamera: true,
        }).then(image => {
            console.log(image,"Image")
          const data = {
            uri: image.path,
            name: image.modificationDate + '.' + image.mime.split('/')[1],
            type: image.mime,
          };
          console.log(data,"Data")
          setProfileImage(data);
        });
      };
      const openGallery = () => {
        ImagePicker.openPicker({
          width: 485,
          height: 485,
          cropping: true,
        }).then(image => {
          const data = {
            uri: image.path,
            name: image.modificationDate + '.' + image.mime.split('/')[1],
            type: image.mime,
          };
          setProfileImage(data);
        });
      };


  return (
    <LinearGradient colors={["#01025C", '#121269','#170551']} style={styles.container}>
        <InnerHeader title="EDIT PROFILE"/>
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Choose Your Profile Picture</Text>
        <View>
            <FastImage source={profileImage ? profileImage : userPhoto} style={styles.img}/>
        </View>
        <View style={styles.CameraContainer}>
            <TouchableOpacity style={{marginHorizontal:10,}} onPress={openGallery}>
                <FastImage source={galleryIcon} style={styles.galleryIcon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={openCamera}>
            <FastImage source={cameraIcon} style={styles.galleryIcon}/>
            </TouchableOpacity>
        </View>

       <Text style={styles.inputLabel}>Full Name</Text>
         <TextInputBox placeholder = "Full Name" val = {fullName} setVal = {setFullName}/>
         <Text style={styles.inputLabel}>User Name</Text>
         <TextInputBox placeholder = "User Name" val = {userName} setVal = {setUserName}/>
         <Text style={styles.inputLabel}>Phone Number</Text>
         <TextInputBox placeholder = "0909309322" val = {Phone} setVal = {SetPhone} keyboardType = {'number-pad'} maxLength = {10}/>
        </ScrollView>
        <View style={{width:"90%"}}>
        <CommonButton title={'Save'} onPress={onSubmit}/>
        </View>

    </LinearGradient>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
      },
      scrollContainer:{
        width:"90%",
        marginHorizontal:20
      },
      inputLabel: {
        alignSelf: 'flex-start',
        color: '#fff',
        marginBottom: 5,
        fontWeight:'700',
        fontSize:14,
        paddingHorizontal:10,
      },
      text:{
            color:'#fff',
            marginTop:"5%",     
            fontSize:14,
            fontWeight:'500',
            marginBottom:"5%"
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
      CameraContainer:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"center",
        marginBottom:"10%"
      },
      img:{
        height:130,
        width:130,
        alignSelf:'center',
        borderRadius:'50%'
      },
      galleryIcon:{
        height:40,
        width:40,
      }
})