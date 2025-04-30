import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList, NativeModules } from 'react-native';
import React, { useState } from 'react';
import { bgludo, exclaim, HomeBackground, LineVertical, LUDO, ludoicon, people } from '../../helper/Image';
// import ContestHeader from '../ContestHeader/ContestHeader'
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AppSafeAreaView } from '../../common/AppSafeAreaView/AppSafeAreaView';
import RulesModal from '../../common/RulesModal/RulesModal';
import { ContestData } from '../../../assets/DummyData/DummyData';
import Header from '../../common/Header/Header';
const LudoContests = () => {
  const [music, setMusic] = useState(false);
  const [color,setColor] = useState(1);

   const [modalvisible, setModalVisible] = useState(false);

      const onPress = () => {
          setModalVisible(true);
      };

      const openUnity = () => {
        NativeModules.UnityModule.startUnity();
        // Wait 3-5s for Unity to fully load
        setTimeout(() => {
          NativeModules.UnityBridge.sendToUnity('Hello from RN!');
        }, 5000); // 5-second delay to ensure Unity is fully initialized
      };
  const renderItem = ({ item, index }) => {
    console.log(item, '        ', index, 'itesmmmsms');
    return (
      <TouchableOpacity activeOpacity={0.9} style={[{ marginTop: '5%' }, ContestData?.length - 1 == index ? { marginBottom: '5%' } : {}]}>
        <LinearGradient colors={['#E2E2E2', '#FFFFFF']} style={styles.contestWrapper}>
          <View>
            <LinearGradient colors={['#F84292', '#7F00FF']} style={styles.winningContainer}>
              <Text style={styles.entryfee}>Winning</Text>
            </LinearGradient>
            <Text style={styles.prize}>₹{item?.Prize}</Text>
            <View style={styles.Online}>
              <View style={styles.dot} />
              <Text style={styles.onlinePlayers}>{item?.OnlinePlayer} Online</Text>
            </View>
          </View>
          <View style={styles.players}>
            <LinearGradient colors={['#7F00FF80', '#F6F6F600']} start={{ x: 1, y: 1 }} end={{ x: 0, y: 1 }} style={styles.playercontainer}>
              <Text style={[styles.entryfee, { fontSize: 12 }]}>{item?.player} Players</Text>
            </LinearGradient>
            <LinearGradient colors={['#7F00FF80', '#F6F6F600']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.playercontainer}>
              <Text style={[styles.entryfee, { fontSize: 12 }]}>{item?.winning} Winner</Text>
            </LinearGradient>
          </View>
          <View>
            <Text style={[styles.entryfee, { color: '#222', textAlign: 'right' }]}>Entry Fee</Text>
            <Text style={[styles.prize, { textAlign: 'right' }]}>₹{item?.EntryFee}</Text>
            <TouchableOpacity style={styles.Playbtn} onPress={openUnity}>
              <Text style={styles.entryfee}>Play</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  return (
    <AppSafeAreaView light={true}>
      <ImageBackground source={bgludo} style={{ flex: 1 }}>
      <Header />
      <View style={styles.row}>
        <View>
            <FastImage source={LUDO} style={styles.ludo} resizeMode="stretch"/>
        </View>
        <View>
            <View style={styles.classicrow}>
                <Text style={styles.classicludo}>Classic Ludo</Text>
                <FastImage source={exclaim} style={styles.exclaim} resizeMode="contain"/>
            </View>
            <View style={styles.classicrow}>
                <FastImage source={people} style={styles.people} resizeMode="contain"/>
                <Text style={styles.online}>Online Players </Text>
                <Text style={styles.OnlinePLayers}>11,444 </Text>
            </View>
        </View>

      </View>

        {/* <ContestHeader title={'Classic Ludo'} onPress={onPress}/> */}
        <ImageBackground source={bgludo} style={styles.bgludo} resizeMode="stretch">
          <View style={styles.main}>
            <View>
              <View style={{ marginBottom: '30%' }}><Text style={styles.text}>Players</Text></View>
              {music ?
                <TouchableOpacity activeOpacity={0.8} style={[styles.toggleActive, { alignItems: 'center', justifyContent: 'flex-end' }]} onPress={() => setMusic(!music)}>
                  <Text style={styles.OnText}>2</Text>
                  <LinearGradient colors={['#F84292', '#7F00FF']} style={[styles.Active]}>
                    <Text style={{ color: '#fff', fontSize: 17 }}>4</Text></LinearGradient>
                </TouchableOpacity>
                :
                <TouchableOpacity activeOpacity={0.8} style={[styles.toggle, { alignItems: 'center' }]} onPress={() => setMusic(!music)}>
                  <LinearGradient colors={['#F84292', '#7F00FF']} style={styles.NotActive}>
                    <Text style={{ color: '#fff', fontSize: 17 }}>2</Text></LinearGradient>
                  <Text style={[styles.OFFText]}>4</Text>
                </TouchableOpacity>
              }
            </View>
            <View style={{ marginRight: '-7%' }}>
                {/* <FastImage source={LineVertical} style={{ height: 120, width: 1 }} /> */}
                </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View><Text style={[styles.text, { marginLeft: '-20%' }]}>Choose Colour</Text></View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.redBack} onPress={()=>setColor(1)}>
                      {
                        color == 1 ?
                        <AntDesign name="check" color={'#fff'} size={20}/>
                        : null
                      }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.yellowBack} onPress={()=>setColor(2)}>
                    {
                        color == 2 ?
                        <AntDesign name="check" color={'#fff'} size={20}/>
                        : null
                      }
                    </TouchableOpacity>
                  </View>
                  <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                    <TouchableOpacity style={styles.greenBack} onPress={()=>setColor(3)}>
                    {
                        color == 3 ?
                        <AntDesign name="check" color={'#fff'} size={20} />
                        : null
                      }
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.blueBack} onPress={()=>setColor(4)}>
                    {
                        color == 4 ?
                        <AntDesign name="check" color={'#fff'} size={20}/>
                        : null
                      }
                    </TouchableOpacity>
                  </View>
                </View>
                <View />
              </View>
            </View>
          </View>
        <View style={styles.rowContain}>
              <Text style={styles.text1}>Practise Contest</Text>
              <Text style={styles.text1}>2 Chances Left</Text>
            </View>


          <ScrollView style={{ width: '86%', marginTop: '5%', borderRadius: 20 }} showsVerticalScrollIndicator={false}>
            <FlatList
              data={ContestData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </ScrollView>
        </ImageBackground>
        <RulesModal modalVsible={modalvisible} setModalVisible={setModalVisible} />
      </ImageBackground>
    </AppSafeAreaView>
  );
};

export default LudoContests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  bgludo: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: '10%',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems:"center",
    width: '90%',
    // left:20
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
  toggleActive: {
    borderWidth: 2,
    borderColor: '#7F00FF',
    width: 100,
    height: 34,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  NotActive: {
    height: 27,
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  OnText: {
    color: '#fff',
    marginRight: 17,
    fontWeight: '500',
    fontSize: 17,
  },
  OFFText: {
    color: '#fff',
    marginRight: 15,
    fontWeight: '500',
  },
  Active: {
    height: 27,
    width: 50,
    backgroundColor: '#19B861',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggle: {
    borderWidth: 1.2,
    borderColor: '#7F00FF',
    width: 100,
    height: 34,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 2,
  },
  redBack: {
    height: 30,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 20,
    marginRight: 5,
    alignItems:'center',
    justifyContent:'center',
  },
  yellowBack:
  {
    height: 30,
    width: 50,
    backgroundColor: '#FFDE16',
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
  },
  greenBack:
  {
    height: 30,
    width: 50,
    backgroundColor: 'green',
    borderRadius: 20,
    marginRight: 5,
    alignItems:'center',
    justifyContent:'center',
  },
  blueBack:
  {
    height: 30,
    width: 50,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    alignItems:'center',
    justifyContent:'center',
  },
  ludoicon:
  {
    height: 100,
    width: 50,
    marginLeft: 10,
  },
  rowContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingVertical: 6,
    width:'86%',
  },
  text1: {
    color: '#fff',
    fontSize: 15,
  },
  Freecontest: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  players: {
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#27CF73',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 8,
  },
  entryfee: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  fee: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  playercontainer: {
    borderRadius: 20,
    // borderRightWidth:1,
    // borderTopWidth:1,
    // borderBottomWidth:1,
    // borderColor:"#9b348b"
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 1,
  },
  contestWrapper: {
    width: '100%',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  winningContainer: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  prize: {
    color: '#222',
    fontSize: 20,
    fontWeight: '700',
  },
  dot: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#3DC56C',
    marginRight: 5,
  },
  Online: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  onlinePlayers: {
    color: '#222',
    fontSize: 13,
    fontWeight: '600',
  },
  Playbtn: {
    backgroundColor: '#27CF73',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 8,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:20,
    marginTop:20,

  },
  ludo:{
    height:130,
    width:130,
  },
  classicrow:{
    flexDirection:'row',
    alignItems:'center',
  },
  classicludo:{
    color:'#fff',
    fontSize:20,
    fontWeight:'600',
    marginRight:5,
  },
  exclaim:{
    height:20,
    width:20,
  },
  people:{
    height:17,
    width:17,
  },
  online:{
    color:'#ccc',
    fontSize:13,
    fontWeight:'500',
    marginHorizontal:4,
  },
  OnlinePLayers:{
    color:'#fff',
    fontSize:17,
    fontWeight:'600',
    fontFamily:'Poppins',
  },

});
