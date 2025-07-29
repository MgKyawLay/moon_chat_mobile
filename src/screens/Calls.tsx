import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PhoneIcon, PlusIcon } from '../icons';
import { color } from '../utils/color';
import { Appbar, Avatar } from '../component';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Calls = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const emptyRender = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PhoneIcon width={80} height={80} color={color.primary} />
        <Text style={styles.emptyText}>No Calls Yet</Text>
      </View>
    );
  };

  const handleNewCall = () => {
    navigation.navigate('NewCall');
  };

  return (
    <View style={styles.root}>
      <Appbar
        title="Chats"
        prefixIcon={<Avatar title="UserName" />}
        suffixIcon={
          <PlusIcon
            width={24}
            height={24}
            color={color.primary}
            onPress={handleNewCall}
          />
        }
      />
      <FlatList
        data={[]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{''}</Text>}
        ListEmptyComponent={emptyRender}
        contentContainerStyle={{ minHeight: '90%' }}
      />
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.background,
  },
  emptyText: {
    color: '#1C274C',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});
