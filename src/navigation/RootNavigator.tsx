import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './HomeTabs';
import { AddContact, NewChat, NewGroup } from '../screens';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeTabs} />
                <Stack.Screen name="NewChat" component={NewChat} />
                <Stack.Screen name="AddContact" component={AddContact} />
                <Stack.Screen name="NewGroup" component={NewGroup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})