import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { color } from '../utils/color'
import { Appbar, Avatar } from '../component'
import { MessageMultiColorIcon, PlusIcon } from '../icons'

const Chat = () => {

    return (
        <View style={styles.root}>
            <Appbar
                title='Chats'
                prefixIcon={<Avatar title='UserName' />}
                suffixIcon={<PlusIcon width={24} height={24} color={color.primary} />}
            />
            <FlatList
                data={[]}
                renderItem={({ item }) => (
                    <View>
                        {/* <Text>{item.title}</Text> */}
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ padding: 16 }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <MessageMultiColorIcon width={100} height={100} color={color.primary} />
                        <Text style={styles.emptyTitle}>Let's start chatting</Text>
                        <Text style={styles.emptyDescription}>Tap the '+' Icon at the top right, select your friends and start a new conversation</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: color.background
    },
    emptyTitle: {
        color: color.black,
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold'
    },
    emptyDescription: {
        color: color.black,
        fontSize: 16,
        marginTop: 4,
        textAlign: 'center',
    }
})