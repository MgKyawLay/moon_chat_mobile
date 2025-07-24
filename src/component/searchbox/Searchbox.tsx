import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { color } from '../../utils/color'
import { SearchIcon } from '../../icons'

const Searchbox = () => {
    return (
        <View style={styles.root}>
            <TextInput
                placeholder='Search Contacts...'
                placeholderTextColor={color.gray}
                style={styles.input}
            />
            <View style={styles.icon}>
                <SearchIcon height={24} width={24} />
            </View>
        </View>
    )
}

export default Searchbox

const styles = StyleSheet.create({
    root: {
        width: '100%',
    },
    input: {
        height: 50,
        borderColor: color.black,
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        fontSize: 16,
        color: color.black,
    },
    icon: {
        position: 'absolute',
        right: 10,
        top: 15,
    }
})