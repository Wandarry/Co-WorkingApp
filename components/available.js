import React, {Component} from 'react';
import { ScrollView,Text, View, Image} from 'react-native';



export default class Available extends Component {
    render (){
        return(
            <ScrollView horizontal={true}>
                <View style={{borderWidth: 1, borderColor:'#366ACF', borderRadius: 20, marginRight:20}} >
                    
                    <View>
                        <Image source={require('../assets/images/room.png')} />
                    </View>
                    <View>
                        <View style={{marginTop:12, marginLeft:10}}>
                            <Text style={{fontSize:14, fontWeight:700}}>Minimalist Coworking room</Text>
                            <Text>4517 Washington Ave</Text>
                        </View>
                        <View style={{marginTop:12, marginBottom:12, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../assets/images/wifi.png')} />
                            <Image source={require('../assets/images/coffee.png')} style={{marginLeft:18, marginRight:18}} />
                            <Image source={require('../assets/images/ac.png')} />
                        </View>
                    </View>
            
                    <View style={{width:77, height:82, backgroundColor:'#366ACF', borderRadius:20, paddingTop:10, position:'absolute', bottom:80, left:200}} >
                        <Text style={{color:'white', fontSize:23, textAlign:'center', fontWeight:600,}} >$20</Text>
                        <Text style={{color:'white', fontSize:18, textAlign:'center'}}>/day</Text>
                    </View>
                </View>
    
                <View style={{borderWidth: 1, borderColor:'#366ACF', borderRadius: 20}} >
                        
                    <View>
                        <Image source={require('../assets/images/room.png')} />
                    </View>
                    <View>
                        <View style={{marginTop:12, marginLeft:10}}>
                            <Text style={{fontSize:14, fontWeight:700}}>Minimalist Coworking room</Text>
                            <Text>4517 Washington Ave</Text>
                        </View>
                        <View style={{marginTop:12, marginBottom:12, display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../assets/images/wifi.png')} />
                            <Image source={require('../assets/images/coffee.png')} style={{marginLeft:18, marginRight:18}} />
                            <Image source={require('../assets/images/ac.png')} />
                        </View>
                    </View>
            
                    <View style={{width:77, height:82, backgroundColor:'#366ACF', borderRadius:20, paddingTop:10, position:'absolute', bottom:80, left:200}} >
                        <Text style={{color:'white', fontSize:23, textAlign:'center', fontWeight:600,}} >$20</Text>
                        <Text style={{color:'white', fontSize:18, textAlign:'center'}}>/day</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}