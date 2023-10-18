import React from 'react';

import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ActionCard() {

    const openWebsite = async (websiteLink: string) => {
        await Linking.openURL(websiteLink);
    }

    return (
        <View>
            <Text style={[styles.headingText]}>
                Action Card
            </Text>
            <View style={[styles.card, styles.cardElevated]}>
                <View style={[styles.headingContainer]}>
                    <Text style={[styles.headerText]}>
                        What's new in Javascript 21 - ES12
                    </Text>
                </View>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1607706009771-de8808640bcf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
                    }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={3}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, incidunt ipsa laborum
                        natus necessitatibus nobis numquam officia, quae saepe sit tempora, temporibus veritatis
                        voluptate. A ab accusantium, aspernatur at dolor, dolorem expedita hic iusto modi obcaecati
                        optio perspiciatis quibusdam rem saepe sapiente sequi sint suscipit ullam velit voluptatum.
                        Mollitia, quisquam?
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            openWebsite("https://unsplash.com/photos/r2nJPbEYuSQ")
                        }}
                    >
                        <Text style={styles.socialLinks}>
                            Read more
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            openWebsite("https://unsplash.com/photos/r2nJPbEYuSQ")
                        }}
                    >
                        <Text style={styles.socialLinks}>
                            Follow me
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    card: {
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        paddingVertical: 10
    },
    cardElevated: {
        backgroundColor: "#E07C24",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#333",
        shadowOpacity: 0.4,
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#000',
        fontSize: 16,
        fontWeight: "600"
    },
    cardImage: {
        height: 250,
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    socialLinks: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 6,
        borderRadius: 6,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: "#333",
        shadowOpacity: 0.4,
    },
})
