import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { color } from '../../utils/color';

interface Props {
  style?: ViewStyle;
  textStyle?: TextStyle;
  title: string;
  onPress?: () => void;
}

const Button = ({ style, title, textStyle, onPress }: Props) => {
  return (
    <TouchableOpacity style={{ ...styles.root, ...style }} onPress={onPress}>
      <Text style={{ ...styles.buttonText, ...textStyle }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  root: {
    backgroundColor: color.primary,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: color.white,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'semibold',
    fontSize: 16,
  },
});
