import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,StyleSheet,Text,ScrollView, TouchableOpacity,Image,Modal,ImageBackground, Settings} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import WhatsappNAvigation from '../screen/whatsapp/whatsappNAvigation';
import WhatsappNAvigationBus from '../screen/whatsappBusiness/whatsappNAvigation'
import Download from '../screen/download'
const Tab = createBottomTabNavigator();

function MyTabs() {
return (
    <Tab.Navigator
    initialRouteName='whatsapp'
    tabBarOptions={{
showLabel:false,
style:{
  position:'absolute',
  bottom:15,
  left:15
  ,right:15
  ,elevation:0,
  backgroundColor:'#EEEEEE',
  borderRadius:15,
  height:60,
  ...styles.shadow
}

    }}
    >



      
<Tab.Screen name="whatsapp" component={WhatsappNAvigation} 
      
      options={{
        tabBarIcon :({focused})=>(
<View style={styles.center} >
<Icon name="whatsapp" color="#000" style={{fontSize:focused?25:30,color:focused?'#5AF471':'black'}} />
<Text style={{fontSize:10,fontWeight:'600',fontStyle:'italic'}}>Whatsapp</Text>
</View>
        ),
      }}
      />
















<Tab.Screen name="Download" component={Download} 

      options={{
        tabBarIcon :({focused})=>(
        //  <TouchableOpacity activeOpacity={0.7} >
             <View  style={{width:focused?80:85,height:focused?80:85,display:'flex',alignItems:'center',justifyContent:'center',top:-20,backgroundColor:'#52F26E',borderRadius:100}}>
           <Image  source={require('../assets/download.png')} style={{width:40,height:40}}>
</Image>
 <Text style={{fontSize:10,marginTop:2,fontWeight:'bold',fontStyle:'italic'}}>Download</Text>
 </View>
        //  </TouchableOpacity>
        )
      }}
      />








<Tab.Screen name="whatsappB" component={WhatsappNAvigationBus} 
      
      options={{
        tabBarIcon :({focused})=>(
<View style={styles.center} >
{/* <Icon name="eye" color="#000" style={{fontSize:30,color:focused?'red':'black'}} /> */}

{focused?
<Image  source={require('../assets/wf.png')} style={{width:25,height:25}}></Image>

:
<Image  source={require('../assets/w.png')} style={{width:30,height:30}}></Image>

}




<Text style={{fontSize:10,fontWeight:'600',fontStyle:'italic'}}>Whatsapp Business</Text>
</View>
        ),
      }}
      />










    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({

shadow:{
  shadowColor:'#000',
  shadowOffset:{
    width:0,
    height:10,

  },
  shadowOpacity:0.25,
  shadowRadius:3.5,
  elevation:5,
}
,
center:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
}

})

export default MyTabs;