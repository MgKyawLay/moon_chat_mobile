import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { color } from '../../utils/color';
import { Button, TextButton } from '../../component';

const Create = () => {
  return (
    <View style={styles.root}>
      <Text>Account Creation</Text>
      <View style={styles.body}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor={color.gray}
          />
          <TextInput
            style={styles.input}  
            placeholder="Password"
            placeholderTextColor={color.gray}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor={color.gray}
            secureTextEntry
          />
        </View>
        <Button style={styles.button} title="Create" />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.background,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: color.gray,
    color: color.black,
  },
  body: {
    flex: 1,
    padding: 16,
    justifyContent:'space-between'
  },
  container: {
    gap: 20,
  },
  button: {
    alignSelf: 'auto',
  },
});
