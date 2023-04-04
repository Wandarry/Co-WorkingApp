import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/homeScreen';
import ReservationScreen from '../screens/reservationScreen';
import FavoriteScreen from '../screens/favoriteScreen';
import NotificationScreen from '../screens/notificationScreen';
import UserScreen from '../screens/userScreen';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel:false,
        }}>
            <Tab.Screen name="ReservationScreen" component={ReservationScreen} options = {{
                tabBarIcon: ({size}) => (
                    <Entypo name="list" size={30}/>
                )
            }}/>
            <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} options = {{
                tabBarIcon: ({size}) => (
                    <Entypo name="heart-outlined" size={30}/>
                )
            }}/>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options = {{
                tabBarIcon: ({size, color}) => (
                    <Feather name="home" size={30} color='#366ACF'/>
                )
            }}/>
            <Tab.Screen name="NotificationScreen" component={NotificationScreen} options = {{
                tabBarIcon: ({size}) => (
                    <Ionicons name="ios-notifications-outline" size={30}/>
                )
            }}/>
            <Tab.Screen name="UserScreen" component={UserScreen} options = {{
                tabBarIcon: ({size}) => (
                    <Feather name="user" size={30}/>
                )
            }}/>
        </Tab.Navigator>
    );
};

export default TabNavigator;