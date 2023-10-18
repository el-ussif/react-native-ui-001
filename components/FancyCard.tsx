import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>
                Trending Posts
            </Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1547481887-a26e2cacb5b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                    }}
                    style={styles.cardImage}
                />
                <View style={[styles.cardBody]}>
                    <Text style={[styles.cardTitle]}>
                        Lorem ipsum.
                    </Text>
                    <Text style={[styles.cardLabel]}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, recusandae.
                    </Text>
                    <Text style={[styles.cardDescription]}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus accusantium cumque
                        deleniti excepturi facere molestias necessitatibus neque odio omnis provident quibusdam quod
                        sapiente soluta, tempora, temporibus vero? Amet, minus.
                    </Text>

                    <Text style={[styles.cardFooter]}>
                        12 min away
                    </Text>

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
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        height: 180,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 4,
    },
    cardDescription: {
        color: '#242B2E',
        fontSize: 12,
        marginTop: 6,
        marginBottom: 12,
    },
    cardFooter: {
        color: '#000000',
    }
})

