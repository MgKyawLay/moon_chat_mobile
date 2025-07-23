import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './BottomTab'

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTab />
        </NavigationContainer>
    )
}

export default RootNavigator

const styles = StyleSheet.create({})