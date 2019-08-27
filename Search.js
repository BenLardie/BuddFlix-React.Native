import React, { useEffect } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import logo from './Images/logo.png';



const Search = () => {
    const { navigate } = useNavigation();


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

    return (
        <TextInput placeholder='Search by strain name...' />
    )
}

export default Search;