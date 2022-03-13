
import React ,{useEffect, useState,}from "react";
import { View,StyleSheet,Text,ScrollView, TouchableOpacity,TextInput,Button,PermissionsAndroid} from 'react-native';
import Whatsapp  from "./whatsapp";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function WhatsappNAvigationBus(Props) {

  return(
    
    
    
  
    <View style={{backgroundColor:'#00A859',height:200,flex:1}}>
        <View style={{width:'100%',height:60,marginTop:6,display:'flex',alignItems:'center',justifyContent:'flex-start',flexDirection:'row',paddingLeft:25}}>
        <Icon name="whatsapp" color="#000" style={{fontSize:35}} />
        <Text style={{fontSize:15,marginLeft:7,fontWeight:'bold'}}>
Whatsapp Business Status
        </Text>
        </View>
        
     < Whatsapp/>
     
  </View>


    )
}



const styles = StyleSheet.create({

  });
  



