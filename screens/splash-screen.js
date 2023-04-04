import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, Image } from 'react-native';
import RegisterScreen from './registerScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function SplashScreen({navigation}) {
 
    return(
      <SafeAreaView>
        
        <Image style={{marginTop: 20}} source={require('../assets/images/amico.png')} />
        <View style={styles.container}>
        <Text style={{color: '#366ACF', fontSize: 30}}>Coworking made easy - find your perfect spot today</Text>
        <Text style={{fontSize: 16}}>Whether you need a quiet desk for a few hours or a dedicated office space for your team, our app has got you covered</Text>
  
        <View style= {{marginTop: 20, display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={{width: 144, height: 57, backgroundColor: '#366ACF', borderRadius: 50, alignItems: 'center', padding: 15}} onPress={ () => navigation.navigate('RegisterScreen')} >
            <Text style={{color:'white', fontSize: 16}}>Register</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={{width: 144, height: 57, backgroundColor: '#fff', borderColor:'#366ACF', borderWidth:1, borderRadius: 50, alignItems: 'center', padding: 15}}>
            <Text style={{color: '#366ACF', fontSize: 16}}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
    ) 
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 15,
      paddingRight: 15,
    },
});