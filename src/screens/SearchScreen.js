import React, { useState } from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResult] = useState([]);

    const searchApi = async () => {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: term,
                location: 'san jose'
            }
        });
        setResult(response.data.businesses);
    }

    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>Search Bar : {term}</Text>
            <Text>Search Result : {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    }
});

export default SearchScreen;
