import { PermissionsAndroid, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../../theme/Colors'
import InnerHeader from '../../common/Headers/InnerHeader'
import TextInputBox from '../../common/textInputBox/TextInputBox'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ImagePicker from 'react-native-image-crop-picker'
import FastImage from 'react-native-fast-image'
import { requestCameraPermission } from '../../helper/Utility'

const VerifyAdhar = () => {
  const [adharNo, setAdharNo] = useState('')
  const [ConadharNo, setConAdharNo] = useState('')
  const [Images, setImages] = useState(null);

  const openCamera = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      console.log("Camera permission denied");
      return;
    }
    ImagePicker.openCamera({
      width: 485,
      height: 485,
      cropping: true,
      useFrontCamera: true,
    }).then(image => {
      console.log(image, "Image")
      const data = {
        uri: image.path,
        name: image.modificationDate + '.' + image.mime.split('/')[1],
        type: image.mime,
      };
      console.log(data, "Data")
      setImages(data);
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
      setImages(data);
    });
  };

  return (
    <LinearGradient colors={[colors.BackgroundColorOne, colors.BackgroundColorTwo, '#170551']} style={styles.container}>
      <InnerHeader title={'COMPLETE KYC'} />
      <View style={styles.Header}>
        <Text style={styles.text1}>Enter Aadhar card Details</Text>
        <Text style={styles.text2}>Both fields are mandatory</Text>
      </View>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.inputLabel}>Aadhar card Number</Text>
        <TextInputBox placeholder="1234 5678 9012" val={adharNo} setVal={setAdharNo} />

        <Text style={styles.inputLabel}>COnfirm Aadhar card Number</Text>
        <TextInputBox placeholder="1234 5678 9012" val={ConadharNo} setVal={setConAdharNo} />
        {
          Images ?
            <>
              <Text style={[styles.text1, { marginVertical: 20 }]}>Images</Text>
              <View style={styles.ImageContainer}>
                <FastImage source={Images} style={styles.images} />
              </View>
            </>
            : null
        }
        <View style={[styles.Header, { marginLeft: -30 }]}>
          <Text style={styles.text1}>Upload Photo</Text>
          <Text style={styles.text2}>Image size should be less than 5 MB</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity style={styles.minorBox} onPress={openCamera}>
            <AntDesign name="camerao" color={'#fff'} size={30} />
            <Text style={styles.text2}>Take a Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.minorBox} onPress={openGallery}>
            <AntDesign name="upload" color={'#fff'} size={30} />
            <Text style={styles.text2}>Upload from gallery</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}
export default VerifyAdhar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },
  Header: {
    alignItems: 'center',
    marginVertical: 20
  },
  text1: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  text2: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
  },
  scrollContainer: {
    marginHorizontal: 20,
    marginVertical: 20
  },
  inputLabel: {
    alignSelf: 'flex-start',
    color: '#fff',
    marginBottom: 5,
    fontWeight: '700',
    fontSize: 14,
    paddingHorizontal: 10,
  },
  box: {
    height: 300,
    width: "100%",
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-around'
  },
  minorBox: {
    height: '45%',
    width: "100%",
    backgroundColor: "#FFFFFF0D",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center'
  },
  ImageContainer: {
    marginHorizontal: 20,
    flexWrap: 'wrap',
    flexDirection: "row"
  },
  images: {
    height: 100,
    width: 100,
    borderRadius:10
  }
})