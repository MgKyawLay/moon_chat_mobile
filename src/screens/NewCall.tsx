import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { color } from '../utils/color';
import { Appbar, Avatar, SearchInput } from '../component';
import { ChevronLeftIcon, NewCallIcon } from '../icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { contactData } from '../utils/data';

const NewCall = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const emptyRender = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No Contact Yet!</Text>
    </View>
  );

  return (
    <View style={styles.root}>
      <Appbar
        title="New Chat"
        prefixIcon={
          <ChevronLeftIcon
            height={30}
            width={30}
            onPress={() => navigation.goBack()}
          />
        }
      />
      <View style={styles.body}>
        <SearchInput />
        <FlatList
          data={contactData}
          contentContainerStyle={{ gap: 10, paddingTop: 10 , minHeight: '90%'}}
          renderItem={({ item }) => (
            <View style={styles.contact}>
              <Avatar title={item.name} />
              <View style={styles.item}>
                <Text>{item.name}</Text>
              </View>
              <TouchableOpacity style={styles.newCallButton} onPress={() => navigation.navigate('PhoneCallScreen')}>
                <NewCallIcon width={24} height={24} color={color.primary} />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: color.gray, marginTop: 10, }} />
          )}
          ListEmptyComponent={emptyRender}
        />
      </View>
    </View>
  );
};

export default NewCall;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.background,
  },
  body: {
    flex: 1,
    padding: 16,
  },
  contact: {
    flexDirection: 'row',
    gap: 8,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
  },
  newCallButton: {
    padding: 8,
    borderRadius: 50,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
