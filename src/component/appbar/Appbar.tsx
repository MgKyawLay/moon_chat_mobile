import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
    title?: string;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
}

const Appbar = ({ title, prefixIcon, suffixIcon }: Props) => {
    return (
        <View style={styles.root}>
            {prefixIcon}
            <Text style={styles.title}>{title}</Text>
            {suffixIcon}
        </View>
    )
}

export default Appbar

const styles = StyleSheet.create({
    root: {
        height: 56,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 4,
        shadowOpacity: 0.25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    }
})