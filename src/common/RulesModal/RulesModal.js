import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { rulesData } from '../../../assets/DummyData/DummyData';


import { BlurView } from '@react-native-community/blur';


const RulesModal = ({modalVsible,setModalVisible}) => {
    // return (
    //     <Modal
    //       visible={modalVsible}
    //       transparent
    //       animationType="fade"
    //     //   onRequestClose={setModalVisible(false)}
    //     >
    //       <View style={styles.modalContainer}>
    //       <View style={styles.overlay} />

    //         <View style={styles.modalContent}>
    //           <View style={styles.header}>
    //             <Text style={styles.title}>Rules</Text>
    //             <TouchableOpacity onPress={()=>setModalVisible(false)}>
    //               <Text style={styles.closeButton}>✖</Text>
    //             </TouchableOpacity>
    //           </View>
    //           <FlatList
    //             data={rulesData}
    //             keyExtractor={(item) => item.id}
    //             renderItem={({ item }) => (
    //               <View style={styles.ruleItem}>
    //                 <Text style={styles.ruleText}>{item.text}</Text>
    //                 <Image source={{ uri: item.icon }} style={styles.ruleIcon} />
    //               </View>
    //             )}
    //           />
    //         </View>
    //       </View>
    //     </Modal>
    //   );
    return (
        <Modal
          visible={modalVsible}
          transparent
          animationType="fade"
        //   onRequestClose={onClose}
        >
          <View style={styles.modalContainer}>
            <BlurView
              style={styles.absolute}
              blurType="light"
              blurAmount={10}
              reducedTransparencyFallbackColor="white"
            />
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <Text style={styles.title}>Rules</Text>
                <TouchableOpacity onPress={()=>setModalVisible(false)}>
                  <Text style={styles.closeButton}>✖</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={rulesData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.ruleItem}>
                    <Text style={styles.ruleText}>{item.text}</Text>
                    <Image source={ item.icon } style={styles.ruleIcon} />
                  </View>
                )}
              />
            </View>
          </View>
        </Modal>
      );
};

export default RulesModal;
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
    //   justifyContent: 'center',
      alignItems: 'center',
      marginTop:15,
    },
    absolute: {
      ...StyleSheet.absoluteFillObject,
    },
    modalContent: {
      width: 350,
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      elevation: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingBottom: 5,
      marginBottom: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    closeButton: {
      fontSize: 20,
      color: '#222',
    },
    ruleItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f0f0f0',
    },
    ruleText: {
      fontSize: 16,
      flex: 1,
    },
    ruleIcon: {
      width: 40,
      height: 40,
      borderRadius: 5,
    },
  });
  
// const styles = StyleSheet.create({
//     modalContainer: {
//       flex: 1,
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     //   justifyContent: 'center',
//       alignItems: 'flex-end',
//       marginRight:10,
//       marginTop:14,
//     },
//     modalContent: {
//       width: 350,
//       backgroundColor: '#fff',
//       borderRadius: 10,
//       padding: 20,
//       elevation: 10,
//     },
//     header: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       borderBottomWidth: 1,
//       borderBottomColor: '#ddd',
//       paddingBottom: 5,
//       marginBottom: 10,
//     },
//     title: {
//       fontSize: 20,
//       fontWeight: 'bold',
//     },
//     closeButton: {
//       fontSize: 20,
//       color: 'black',
//       fontWeight:"200"
//     },
//     ruleItem: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       paddingVertical: 10,
//       borderBottomWidth: 1,
//       borderBottomColor: '#f0f0f0',
//     },
//     ruleText: {
//       fontSize: 16,
//       flex: 1,
//     },
//     ruleIcon: {
//       width: 40,
//       height: 40,
//       borderRadius: 5,
//     },
//   });