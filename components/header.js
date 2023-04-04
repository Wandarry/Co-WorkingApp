import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Image, Text} from 'react-native';

export default function Header() {
    return(
        <View style= {{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <View style= {{display:'flex', flexDirection:'row'}}>
            <TouchableOpacity style= {{marginRight: 18}}>
                <Image source={require('../assets/images/menu.png')}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../assets/images/notification.png')}/>
            </TouchableOpacity>
        </View>

        <View style= {{borderRadius:50, borderWidth: 1, borderColor:'#366ACF', padding: 5,display:'flex', flexDirection:'row', alignItems:'center'}}>
            <Text>Enick B.</Text>
            <Image source={require('../assets/images/user.png')} style= {{marginLeft: 18}}/>
        </View>
    </View>
    )
}