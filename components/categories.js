import React, {Component} from 'react';
import { ScrollView,Text, View, Image} from 'react-native';

export default class Categories extends Component {
    render(){
        return (
            <ScrollView horizontal={true}>
                <View style= {{marginRight:15, borderWidth: 1, borderColor:'#366ACF', borderRadius: 50, padding: 10,display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Image source={require('../assets/images/meeting.png')}/>
                    <Text style = {{fontSize:16}}>Meeting Room</Text>
                </View>

                <View style= {{marginRight:15, borderWidth: 1, borderColor:'#366ACF', borderRadius: 50, padding: 10,display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Image source={require('../assets/images/people.png')}/>
                    <Text style = {{fontSize:16}}>Co space</Text>
                </View>

                <View style= {{marginRight:15, borderWidth: 1, borderColor:'#366ACF', borderRadius: 50, padding: 10,display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Image source={require('../assets/images/desk.png')}/>
                    <Text style = {{fontSize:16}}>Desk</Text>
                </View>

                <View style= {{marginRight:15, borderWidth: 1, borderColor:'#366ACF', borderRadius: 50, padding: 10,display:'flex', flexDirection:'row', alignItems:'center'}}>
                    <Image source={require('../assets/images/desk.png')}/>
                    <Text style = {{fontSize:16}}>Table</Text>
                </View>
            </ScrollView>
        )
    }
}
