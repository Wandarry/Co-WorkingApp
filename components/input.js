import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Image, TextInput} from 'react-native';

export default function Input() {
    return (
        <View style={{marginTop: 25, marginBottom: 25, borderWidth:1, borderColor:'#366ACF', borderRadius: 30, overflow: 'hidden'}} >
                <View>
                    <Image source={require('../assets/images/inputImg.png')} style={{width: 330}}/>
                </View>

                <View style= {{marginBottom: 12, display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <TextInput placeholder='What are you looking for ?' style={{paddingLeft:12}} />

                   <View style= {{marginRight: 12,display:'flex', flexDirection:'row'}}>
                        <TouchableOpacity >
                            <Image source={require('../assets/images/search.png')} style={{marginTop:12}}/>
                        </TouchableOpacity>
                    
                        <TouchableOpacity >
                            <Image source={require('../assets/images/filter.png')} style={{marginLeft:12, marginTop:12}}/>
                        </TouchableOpacity>
                   </View>
                </View>
            </View>
    )
}