import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import yelp from "../api/yelp";

const ShowResultScreen = ({ navigation }) => {

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <View style={styles.desc}>
                <Text style={styles.descTitle}>Address:</Text>
                <Text style={styles.addressText}>
                    {result.location.address1}, {result.location.city}, {result.location.state} {result.location.zip_code}, {result.location.country}
                </Text>
            </View>

            <View style={[styles.desc, { justifyContent: 'space-between' }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.descTitle}>Reviews:</Text>
                    <Text style={styles.addressText}>
                        {result.review_count}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.descTitle}>Rating:</Text>
                    <Text style={styles.addressText}>
                        {result.rating}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                    <Text style={styles.descTitle}>Price:</Text>
                    {
                        result.price === '$'
                            ? <Text style={styles.addressText}>Cost Effective</Text>
                            : null
                    }
                    {
                        result.price === '$$'
                            ? <Text style={styles.addressText}>Bit Pricier</Text>
                            : null
                    }
                    {
                        result.price === '$$$'
                            ? <Text style={styles.addressText}>Big Spender</Text>
                            : null
                    }
                </View>


            </View>

            <View style={styles.desc}>
                <Text style={styles.descTitle}>Phone Number:</Text>
                <Text style={styles.addressText}>
                    {result.display_phone}
                </Text>
            </View>

            <Text style={styles.descTitle}>Images</Text>
            <FlatList
                horizontal
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image
                        style={styles.images}
                        source={{ uri: item }}
                    />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', flexDirection: 'column' },
    mainImage: { borderRadius: 4, width: '92%', height: 200, marginLeft: 16, marginBottom: 10, marginTop: 20 },
    title: { marginLeft: 16, fontSize: 24, fontWeight: 'bold', marginTop: 20 },
    desc: { flexDirection: 'row', alignItems: 'center' },
    descTitle: { marginLeft: 16, fontWeight: 'bold' },
    addressText: { marginLeft: 6, marginVertical: 4 },
    images: { width: 396, height: 200, borderRadius: 4, marginLeft: 16, marginTop: 8 }
});

export default ShowResultScreen;
