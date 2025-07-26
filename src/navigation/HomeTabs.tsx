import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chat, Contacts, Calls, More } from '../screens';
import { CallIcon, ChatIcon, ContactIcon, MoreIcon } from '../icons';
import { color } from '../utils/color';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator initialRouteName='Chats' screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                height: 80,
            },

            tabBarIcon: ({ focused }) => {
                let IconComponent;

                if (route.name === 'Chats') {
                    IconComponent = focused ? (
                        <ChatIcon color={color.primary} />
                    ) : (
                        <ChatIcon color={color.black} />
                    );
                } else if (route.name === 'Contacts') {
                    IconComponent = focused ? (
                        <ContactIcon color={color.primary} />
                    ) : (
                        <ContactIcon color={color.black} />
                    );
                } else if (route.name === 'Calls') {
                    IconComponent = focused ? (
                        <CallIcon color={color.primary} />
                    ) : (
                        <CallIcon color={color.black} />
                    );
                } else if (route.name === 'More') {
                    IconComponent = focused ? (
                        <MoreIcon color={color.primary} />
                    ) : (
                        <MoreIcon color={color.black} />
                    );
                }

                return IconComponent;
            },
            tabBarActiveTintColor: color.primary,
            tabBarInactiveTintColor: color.black,
        })}>
            <Tab.Screen name="Chats" component={Chat} />
            <Tab.Screen name="Contacts" component={Contacts} />
            <Tab.Screen name="Calls" component={Calls} />
            <Tab.Screen name="More" component={More} />
        </Tab.Navigator>
    )
}

export default HomeTabs

const styles = StyleSheet.create({})