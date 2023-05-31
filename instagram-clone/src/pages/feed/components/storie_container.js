import React from "react";
import { useState, useEffect } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image, TextInput } from "react-native";
import { useRoute } from "@react-navigation/native";
import Shape from "../../../../assets/Shape.png"
import line from "../../../../assets/line1.png"
import picture from "../../../../assets/Picture.png"
import moree from "../../../../assets/moree.png"
import Massanger from "../../../../assets/Messanger.png"

export default function StorieContainer() {
  const route = useRoute();
  const [storie, setStorie] = useState(0);

  const {photos, name, photo} = route.params;

  useEffect(() => {
    const interval = setInterval(() => {
      if (storie >= photos.length - 1) {
        setStorie(0);
      } else {
        setStorie(storie + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [storie]);

  return (
    <SafeAreaView style={{ flex:1, alignContent:'space-between'}}>
      <ImageBackground source={{ uri: photos[storie] }} style={styles.imageBackground}>
        <View style={{marginTop:15, marginLeft:5, marginRight:5}}>
          <Image source={line} style={{height:2, width:350}} />
        </View>
      
        <View style={{flexDirection:'row'}}>
          <View style={styles.container1}>
            <Image source={{uri: photo}} style={styles.profile} />
            <Text style={{color:"#fff", marginLeft:10}}>{name} 4h</Text>
          </View>
          <View style={{flex:1, alignItems:'flex-end', margin:20, }}>
            <Image source={Shape} />
          </View>
        </View>
        
      </ImageBackground>
      <View style={{backgroundColor:'black', height:70, flexDirection:'row', alignContent:'center', alignItems:'center', justifyContent:'space-around'}}>
        <View style={{flexDirection:"row", borderRadius:25, borderWidth:1, borderColor:'rgba(255, 255, 255, 0.4)', maxHeight:40, padding:2}}>
          <Image source={picture} />
          <TextInput style={{color:'#fff', width:200, marginLeft:20}} placeholder="Send massage..." placeholderTextColor={'#fff'} />
        </View>
        <Image source={Massanger} />
        <Image source={moree} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },

  profile: {
    width: 32,
    height: 32,
    marginTop: 5,
    marginLeft: 5,
    borderRadius: 50,
  },

  container1: {
    flexDirection:'row',
    alignItems:'center',
    margin:10, 
    flex:1
  },
});
