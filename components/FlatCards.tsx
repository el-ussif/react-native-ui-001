import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>
                Flat Cards
            </Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>
                        RED
                    </Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>
                        GREEN
                    </Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>
                        BLUE
                    </Text>
                </View>

                <View style={[styles.card, styles.cardOne]}>
                    <Text>
                        RED
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: 100,
        borderRadius: 4,
        margin: 8
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50DBB4'
    },
    cardThree: {
        backgroundColor: '#5DA3FA'
    },

})
