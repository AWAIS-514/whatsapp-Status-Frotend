
import React ,{useEffect, useState,}from "react";
import {connect} from "react-redux";
import { View,StyleSheet,Text,ScrollView, TouchableOpacity,Image,Button,PermissionsAndroid, ImageBackground} from 'react-native';
import {get_data} from '../../store/acion/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
var RNFS = require('react-native-fs');
import { Dirs, FileSystem } from 'react-native-file-access';

function Images(Props) {

useEffect(()=>{
 
  saveData()
})












const saveData = async () => {
  try {
    granted
    const granted = await PermissionsAndroid.requestMultiple([
      
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE

    ]);
  } catch (err) {
    console.warn(err);
  }
  const readGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE); 
  const writeGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
  readGranted
  writeGranted
  if(!readGranted || !writeGranted ) {
    console.log('Read and write permissions have not been granted');
    return;
  }
  
  var RNFS = require('react-native-fs');
  RNFS.readDir(RNFS.ExternalStorageDirectoryPath + '/Android/media/com.whatsapp/WhatsApp/media/') // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
  .then(async(result) => {
    console.log('GOT RESULT', result);




   
  })
  .catch((err) => {
    console.log("e>>>>>>>.",err);
  });
  




} 
  return(
    
    
    
  
    <ScrollView style={{flex:1,width:'100%'}}>
    <View style={{flex:1,width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>





<View style={{width:'98%',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',flexDirection:'row'}}>


{/* Card is there */}




<View style={{width:'49%',height:190,borderRadius:10,marginTop:8}}>




<TouchableOpacity activeOpacity={0.7}>
<ImageBackground source={require('../../../download.jpg')} style={{width:'100%',height:190,display:'flex',alignItems:'center',justifyContent:'center'}} imageStyle={{borderRadius:6}}>




</ImageBackground>
</TouchableOpacity>

<TouchableOpacity style={{position:'absolute',right:7,top:7}}>
<Image style={{width:30,height:30}} source={require('../../assets/verif.png')}>

</Image>

</TouchableOpacity>


<View style={{width:'100%',position:'absolute',height:40,bottom:0,borderBottomEndRadius:6,borderBottomStartRadius:6,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>

<View style={{width:'49%',height:40,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(43, 44, 46, 0.274)',borderBottomStartRadius:6,}}>
<TouchableOpacity style={{width:'100%',height:40,display:'flex',alignItems:'center',justifyContent:'center'}}>

<Icon name="arrow-down-bold-box" color="#fff" style={{fontSize:25}} />

</TouchableOpacity>
</View>




<View style={{width:'49%',height:40,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(43, 44, 46, 0.274)',borderBottomStartRadius:6,}}>
<TouchableOpacity style={{width:'100%',height:40,display:'flex',alignItems:'center',justifyContent:'center'}}>

<Icon name="share" color="#fff" style={{fontSize:25}} />

</TouchableOpacity>
</View>

</View>

</View>












<View style={{width:'49%',height:190,borderRadius:10,marginTop:8}}>




<TouchableOpacity activeOpacity={0.7}>
<ImageBackground source={require('../../../download.jpg')} style={{width:'100%',height:190,display:'flex',alignItems:'center',justifyContent:'center'}} imageStyle={{borderRadius:6}}>




</ImageBackground>
</TouchableOpacity>

<TouchableOpacity style={{position:'absolute',right:7,top:7}}>
<Image style={{width:30,height:30}} source={require('../../assets/verif.png')}>

</Image>

</TouchableOpacity>


<View style={{width:'100%',position:'absolute',height:40,bottom:0,borderBottomEndRadius:6,borderBottomStartRadius:6,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>

<View style={{width:'49%',height:40,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(43, 44, 46, 0.274)',borderBottomStartRadius:6,}}>
<TouchableOpacity style={{width:'100%',height:40,display:'flex',alignItems:'center',justifyContent:'center'}}>

<Icon name="arrow-down-bold-box" color="#fff" style={{fontSize:25}} />

</TouchableOpacity>
</View>




<View style={{width:'49%',height:40,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(43, 44, 46, 0.274)',borderBottomStartRadius:6,}}>
<TouchableOpacity style={{width:'100%',height:40,display:'flex',alignItems:'center',justifyContent:'center'}}>

<Icon name="share" color="#fff" style={{fontSize:25}} />

</TouchableOpacity>
</View>

</View>

</View>























<View style={{width:'49%',height:190,borderRadius:10,marginTop:8}}>




<TouchableOpacity activeOpacity={0.7}>
<ImageBackground source={require('../../../download.jpg')} style={{width:'100%',height:190,display:'flex',alignItems:'center',justifyContent:'center'}} imageStyle={{borderRadius:6}}>




</ImageBackground>
</TouchableOpacity>

<TouchableOpacity style={{position:'absolute',right:7,top:7}}>
<Image style={{width:30,height:30}} source={require('../../assets/verif.png')}>

</Image>

</TouchableOpacity>


<View style={{width:'100%',position:'absolute',height:40,bottom:0,borderBottomEndRadius:6,borderBottomStartRadius:6,display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>

<View style={{width:'49%',height:40,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(43, 44, 46, 0.274)',borderBottomStartRadius:6,}}>
<TouchableOpacity style={{width:'100%',height:40,display:'flex',alignItems:'center',justifyContent:'center'}}>

<Icon name="arrow-down-bold-box" color="#fff" style={{fontSize:25}} />

</TouchableOpacity>
</View>




<View style={{width:'49%',height:40,display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'rgba(43, 44, 46, 0.274)',borderBottomStartRadius:6,}}>
<TouchableOpacity style={{width:'100%',height:40,display:'flex',alignItems:'center',justifyContent:'center'}}>

<Icon name="share" color="#fff" style={{fontSize:25}} />

</TouchableOpacity>
</View>

</View>

</View>





</View>









  </View>

    </ScrollView>

    )
}



const styles = StyleSheet.create({

  });
  

  const mapStateToProps = (state) => {
    return {
    name1:state.name
    }
  }
  
  
  const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      get_data: () => dispatch(get_data)  
    
    }}

    export default connect(mapStateToProps,mapDispatchToProps)(Images)