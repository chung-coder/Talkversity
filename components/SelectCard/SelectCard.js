
import React from 'react';
import {Image, StyleSheet, Text, View,Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';

 const Setting = (props) => {
     const {colors}=useTheme();
  return (

                <View style={styles2(colors).card2}>
                    <View style={styles2(colors).infoArea}>
                    <Text style={styles2(colors).textTitle}>自我介紹訓練</Text>
                <Text style={styles2(colors).textContent}>配合經典面試題型，
紀錄您的面試情形，並給予建議，
讓您能在面試表現上能有所進步。</Text>
<Pressable onPress={()=>console.log("HI")} style={({ pressed }) => [
          {
            backgroundColor: pressed ? colors.primary.main : colors.background.paper,
          },styles2(colors).submit]}>
            <Text style={styles2(colors).submitText}>開始訓練</Text>
            </Pressable>
                    </View>
                <View style={styles2(colors).imageArea}>
                <Image
        style={styles2(colors).image}
        source={require("../../images/tutor_orange.png")}
    />
                </View>
                </View> 
  );
}

const styles2 =(colors)=> StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle:{
    color:colors.background.paper,
    fontSize:25,
    fontWeight:"bold",
    marginBottom:10
  },
  textContent:{
    color:colors.background.paper,
    fontSize:16,
    marginBottom:10
  },
  wrapper:{
    flex:1,
    alignItems: 'center',
    justifyContent:"center",
    alignSelf:"stretch",
  },
  buttonText:{
    color:colors.background.paper,
    fontSize:60,
    fontWeight:"900",
  },
  submit:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    // backgroundColor:colors.background.paper,
    width:120,
    marginBottom:40
    
  },
  submitText:{
    color:colors.orange.main,
    fontWeight:"bold",
  },
  card:{
      backgroundColor:colors.orange.main,
      alignSelf:"stretch",
      alignItems: 'center',
    justifyContent: 'center',
  },
  card2:{
    backgroundColor:colors.orange.light,
    alignSelf:"stretch",
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin:10,
    padding:30,
    paddingBottom:0,
    borderRadius: 10,
    flexDirection:'row',
    flex:1
},
infoArea:{
    width:"60%",
},
imageArea:{
    flex: 1,
    alignSelf:"stretch",
    width:"50%",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image:{
    flex: 1,
    resizeMode: 'contain',
  },
});
export default Setting;