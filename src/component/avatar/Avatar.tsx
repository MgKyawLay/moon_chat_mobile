import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileIcon from './ProfileIcon';
import { color } from '../../utils/color';

interface Props {
    title?: string;
}

const Avatar = ({ title, }: Props) => {
    function getInitials(name: string): string {
        // Split by spaces and camelCase
        const words = name
            .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase -> space separated
            .split(/\s+/); // split by space

        return words.map(w => w[0].toUpperCase()).join('');
    }
    const nameCreator = getInitials(title || 'Unknown');
    return (
        <View style={styles.root}>
            <Text style={styles.title}>{nameCreator}</Text>
        </View>
    )
}

export default Avatar;



const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: color.primary,
    },
    title: {
        color: color.text,
        fontSize: 16,
        fontWeight: 'bold',
    }
})