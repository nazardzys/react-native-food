import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result: { image_url, name, rating, review_account } }) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image_url }} />
        <Text style={styles.name}>{name}</Text>
        <Text>
            {rating} Stars, {review_account} Reviews
        </Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;
