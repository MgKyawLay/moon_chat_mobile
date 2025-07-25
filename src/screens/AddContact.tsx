import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { color } from '../utils/color'
import { Appbar } from '../component'
import { ChevronLeftIcon } from '../icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList>
}

const AddContact = ({ navigation }: Props) => {

  return (
    <View style={styles.root}>
      <Appbar
        title='New Chat'
        prefixIcon={<ChevronLeftIcon height={30} width={30} onPress={() => navigation.goBack()} />}
        suffixIcon={<Pressable><Text style={styles.add}>Add</Text></Pressable>}
      />
      <View style={styles.body}>
        <View style={styles.form}>
          <Text>First Name</Text>
          <TextInput style={styles.input} placeholder='enter first name' placeholderTextColor={color.gray} />
        </View>
        <View style={styles.form}>
          <Text>Last Name</Text>
          <TextInput style={styles.input} placeholder='enter last name' placeholderTextColor={color.gray} />
        </View>
        <View style={styles.form}>
          <Text>Mobile Number</Text>
          <TextInput style={styles.input} placeholder='enter mobile number' placeholderTextColor={color.gray} />
        </View>
      </View>
    </View>
  )
}

export default AddContact

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.background
  },
  body: {
    padding: 16,
    gap: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: color.gray,
    borderRadius: 10
  },
  form: {
    gap: 8
  },
  add: {
    color: color.primary,
    fontWeight: '500'
  }
})