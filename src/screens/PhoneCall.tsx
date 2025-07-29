import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { color } from '../utils/color';
import { Appbar, Avatar } from '../component';
import {
  ChevronDownIcon,
  MicIcon,
  PersonPlusIcon,
  PlusIcon,
  VideoIcon,
  VolumeUpIcon,
} from '../icons';

interface TabButtonProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
}

const PhoneCall = () => {
  const handleNewCall = () => {};

  const TabBotton = ({ icon, title, onPress }: TabButtonProps) => {
    return (
      <Pressable onPress={onPress} style={{ alignItems: 'center' }}>
        {icon}
        <Text style={{ color: color.gray, fontSize: 12 }}>{title}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.root}>
      <Appbar
        title="Chats"
        prefixIcon={<ChevronDownIcon height={30} width={30} />}
        suffixIcon={
          <TouchableOpacity style={styles.suffixIcon}>
            <Text style={styles.suffixIconText}>End Call</Text>
          </TouchableOpacity>
        }
      />
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Avatar title="UserName" />
          <Text>User Name</Text>
          <Text>Calling ...</Text>
        </View>
      </View>

      <View style={styles.bottomTabs}>
        <TabBotton
          icon={<VideoIcon height={24} width={24} />}
          title="Video"
          onPress={handleNewCall}
        />
        <TabBotton
          icon={<MicIcon height={24} width={24} />}
          title="Mic"
          onPress={() => {}}
        />
        <TabBotton
          icon={<VolumeUpIcon height={24} width={24} />}
          title="Sound"
          onPress={() => {}}
        />
      <TabBotton
        icon={<PersonPlusIcon height={24} width={24} />}
        title="Invite"
        onPress={() => {}}
        />
        </View>
    </View>
  );
};

export default PhoneCall;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.background,
  },
  suffixIcon: {
    padding: 8,
    backgroundColor: color.white,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 100,
  },
  suffixIconText: {
    color: color.error,
    fontSize: 16,
    fontWeight: '500',
  },
  card: {
    backgroundColor: 'skyblue',
    flex: 1,
    margin: 16,
    borderRadius: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  cardBody: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabs: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10
  },
});
