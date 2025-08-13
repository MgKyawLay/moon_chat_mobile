import { Pressable, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import React from 'react'
import { color } from '../../utils/color';

interface Props {
    style?: ViewStyle;
    text: string;
    textStyle?: TextStyle
}

const TextButton = ({style, text, textStyle}:Props) => {
  return (
    <Pressable style={{...styles.root, ...style}}>
      <Text style={{...styles.text, ...textStyle}}>{text}</Text>
    </Pressable>
  )
}

export default TextButton

const styles = StyleSheet.create({
    root: {
        alignSelf:'center',
    },
    text:{
        fontSize: 14,
        fontWeight: 'bold',
        color: color.primary
    }
})