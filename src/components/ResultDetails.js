import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultDetails = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: result.image_url}}
                style={styles.image}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.name}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,
    },
    image: {
        borderRadius: 4,
        width: 240,
        height: 160,
        marginBottom: 6,
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultDetails;
