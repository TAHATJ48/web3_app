import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import HomeStackScreen from './../Screens/Home/HomeScreen'
import SearchScreen from './../Screens/Search/SearchScreen'
import SettingsScreen from './../Screens/Settings/SettingsScreen'
import WalletScreen from './../Router/Stacks/Wallet/WalletStackScreens'
import StoreStackScreens from './../Router/Stacks/Store/StoreStackScreens'

const Tab = createBottomTabNavigator();

export default function TabBarNavigator() {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#23262B',
                    borderTopWidth: 0
                },
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen 
                name="HomeStack" component={ HomeStackScreen } 
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome name="home" size={30} color={ focused ? '#A54AFF' : 'rgba(165, 74, 255, .33)' } />
                    ),
                }}   
            />
            <Tab.Screen 
                name="StoreStack" component={ StoreStackScreens } 
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome name="shopping-basket" size={30} color={ focused ? '#A54AFF' : 'rgba(165, 74, 255, .33)' } />
                    )
                }}     
            />
             
             <Tab.Screen 
                name="SearchStack" component={ SearchScreen } 
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome name="search" size={30} color={ focused ? '#A54AFF' : 'rgba(165, 74, 255, .33)' } />
                    )
                }}     
            />
            <Tab.Screen 
                name="WalletStack" component={ WalletScreen } 
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome name="money" size={30} color={ focused ? '#A54AFF' : 'rgba(165, 74, 255, .33)' } />
                    )
                }}     
            />
            <Tab.Screen 
                name="SettingsStack" component={ SettingsScreen } 
                options={{
                    tabBarIcon: ({focused}) => (
                        <FontAwesome name="gear" size={30} color={ focused ? '#A54AFF' : 'rgba(165, 74, 255, .33)' } />
                    )
                }}     
            />
        </Tab.Navigator>
    );
}