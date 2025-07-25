import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color } from '../utils/color'
import { Appbar, Avatar, SearchInput } from '../component'
import { CheckCircleIcon, ChevronLeftIcon } from '../icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { contactData } from '../utils/data'

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList>
}

const NewGroup = ({ navigation }: Props) => {

    const [selectedContacts, setSelectedContacts] = React.useState<{
        id: string;
        name: string;
        phoneNumber: string;
        email: string;
    }[]>([]);
    console.log("🚀 ~ NewGroup ~ selectedContacts:", selectedContacts)

    const emptyRender = () => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>No Contact Yet!</Text>
        </View>
    );

    const handleSelect = (item: {
        id: string;
        name: string;
        phoneNumber: string;
        email: string;
    }) => {
        setSelectedContacts(prev => {
            const exists = prev.find(contact => contact.id === item.id);
            if (exists) {
                return prev.filter(contact => contact.id !== item.id);
            } else {
                return [...prev, item];
            }
        });
    };

    const isNextDisabled = selectedContacts.length === 0;

    return (
        <View style={styles.root}>
            <Appbar
                title='New Group'
                prefixIcon={<ChevronLeftIcon height={30} width={30} onPress={() => navigation.goBack()} />}
                suffixIcon={<Pressable disabled={isNextDisabled}><Text style={[isNextDisabled ? styles.disabledAdd : styles.add]}>Next</Text></Pressable>}
            />
            <View style={styles.body}>
                <SearchInput />
                <FlatList
                    data={contactData}
                    contentContainerStyle={{ gap: 16 }}
                    renderItem={({ item }) => (
                        <Pressable style={styles.item} onPress={() => handleSelect(item)}>
                            <View style={styles.contact}>
                                <Avatar title={item.name} />
                                <View>
                                    <Text>{item.name}</Text>
                                </View>
                            </View>
                            {
                                selectedContacts.some(contact => contact.id === item.id) ? (
                                    <CheckCircleIcon height={24} width={24} color={color.primary} />
                                ) : (
                                    <Circle />
                                )
                            }
                        </Pressable>
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

export default NewGroup;

const Circle = () => (
    <View style={styles.circle} />
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: color.background,
    },
    body: {
        flex: 1,
        padding: 16,
        gap: 16,
    },
    contact: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
    },
    add: {
        color: color.primary,
        fontWeight: '500'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: color.primary,
        backgroundColor: color.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabledAdd: {
        color: color.gray,
        fontWeight: '500',
    }
})

