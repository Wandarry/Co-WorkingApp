import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { Text, View, Image, TextInput} from 'react-native';
import Categories from '../components/categories';
import Input from '../components/input';
import Header from '../components/header';
import Available from '../components/available';
import TabNavigator from '../components/bottomNavigation';

export default function HomeScreen() {
    return (
        <SafeAreaView style={{marginTop: 50, marginLeft: 15, marginRight: 15}}>
           <Header />

            <Input />

            <Categories />

            <Text style={{fontSize:25, marginTop: 25, marginBottom: 14}}>Available Today !</Text>

            <Available />

            <TabNavigator />
        </SafeAreaView>
    )
}