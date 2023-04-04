import React from 'react';
import { Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, View, Image, TextInput } from 'react-native';

export default function RegisterScreen () {
    return (
        <SafeAreaView style={{marginTop: 50, marginLeft: 15, marginRight: 15}}>
            <Text style={{fontSize:30, textAlign: 'center', color: '#366ACF'}}>Register</Text>

            <Text style={{marginTop: 20, fontWeight:600}}>Name</Text>
            <View style={{marginTop: 10 ,borderWidth:1, borderRadius:50, borderColor:'#366ACF', padding: 12}}>
                <TextInput placeholder='Name'/>
            </View>
            
            <Text style={{marginTop: 20, fontWeight:600}}>Email</Text>
            <View style={{marginTop: 10 ,borderWidth:1, borderRadius:50, borderColor:'#366ACF', padding: 12}}>
                <TextInput placeholder='Email'/>
            </View>

            <Text style={{marginTop: 20, fontWeight:600}}>Password</Text>
            <View style={{marginTop: 10 ,borderWidth:1, borderRadius:50, borderColor:'#366ACF', padding: 12}}>
                <TextInput placeholder='Password' secureTextEntry={true} />
            </View>

            <Text style={{marginTop: 20, fontWeight:600}}>Confirm Password</Text>
            <View style={{marginTop: 10 ,borderWidth:1, borderRadius:50, borderColor:'#366ACF', padding: 12}}>
                <TextInput placeholder='Password' secureTextEntry={true} />
            </View>

            <TouchableOpacity style={{marginTop: 20 ,backgroundColor:'#366ACF', padding: 18, borderRadius:50}}>
                <Text style = {{color:'white', textAlign:'center'}}>Create Account</Text>
            </TouchableOpacity>

            <Text style={{textAlign:'center', marginTop: 20}}>Or</Text>

            <View style={{marginTop: 20, display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                <Image source={require('../assets/images/google.png')}/>
                <Image source={require('../assets/images/apple.png')}/>
                <Image source={require('../assets/images/twitter.png')}/>
            </View>

            <Text style={{textAlign:'center', marginTop: 20}}>
                Already have an account ? 
                <Text style={{color:'#366ACF'}}> Login</Text>
            </Text>
        </SafeAreaView>
    )
}