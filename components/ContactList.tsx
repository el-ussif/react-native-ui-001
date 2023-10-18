import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ContactList() {
    const contacts: any[] = [
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];
    return (
        <View>
            <Text style={styles.headingText}>
                Contact List
            </Text>
            <ScrollView
                style={styles.container}
                scrollEnabled={false}
            >
                {
                    contacts.map((item, key) => {
                        return (
                            <View key={key} style={styles.userCard}>
                                <Image
                                    source={{
                                        uri: item?.imageUrl
                                    }}
                                    style={styles.userImage}
                                />
                                <View>
                                    <Text style={styles.userName}>{item?.name}</Text>
                                    <Text style={styles.userStatus}>{item?.status}</Text>
                                </View>
                            </View>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        backgroundColor: '#8D3DAF',
        paddingVertical: 4,
        paddingHorizontal: 4,
        borderRadius: 4
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        marginRight: 14,
    },
    userStatus: {
        fontSize: 12,
    },
    userName: {
        fontSize: 16,
        fontWeight: "600",
        color: '#fff'
    },
})

