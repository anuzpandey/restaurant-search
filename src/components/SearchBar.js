import React from 'react';
import {Text, View, Button, StyleSheet, TextInput, StatusBar} from 'react-native';
import {Feather} from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <StatusBar hidden />
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search..."
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 60,
        borderRadius: 6,
        marginHorizontal: 16,
        flexDirection: 'row',
        marginBottom: 8
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }
});

export default SearchBar;
