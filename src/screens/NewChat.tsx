import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../utils/color'
import { Appbar, Avatar, SearchInput } from '../component'
import { ChevronLeftIcon, PlusIcon } from '../icons'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { contactData } from '../utils/data'

const NewChat = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const emptyRender = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No Contact Yet!</Text>
    </View>
  );

  const handleNewContact = () => {
    navigation.navigate('AddContact');
  }

  const handleNewGroup = () => {
    navigation.navigate('NewGroup');
  }

  return (
    <View style={styles.root}>
      <Appbar
        title='New Chat'
        prefixIcon={<ChevronLeftIcon height={30} width={30} onPress={() => navigation.goBack()} />}
      />
      <View style={styles.body}>
        <SearchInput />
        <Pressable style={styles.addButton} onPress={handleNewContact}>
          <PlusIcon height={24} width={24} />
          <Text>New contact</Text>
        </Pressable>
        <Pressable style={styles.addButton} onPress={handleNewGroup}>
          <PlusIcon height={24} width={24} />
          <Text>New group</Text>
        </Pressable>
        <FlatList
          data={contactData}
          contentContainerStyle={{ gap: 16 }}
          renderItem={({ item }) => (
            <View style={styles.contact}>
              <Avatar title={item.name} />
              <View>
                <Text>{item.name}</Text>
                <Text>Last seen recently</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: color.gray }} />}
          ListEmptyComponent={emptyRender}
        />
      </View>
    </View>
  )
}

export default NewChat

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.white
  },
  body: {
    flex: 1,
    padding: 16,
  },
  addButton: {
    flexDirection: 'row',
    paddingVertical: 10,
    gap: 16
  },
  contact: {
    flexDirection: 'row',
    gap: 8,

  }
})