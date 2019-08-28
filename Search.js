import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';




const Search = () => {
    const { navigate } = useNavigation();
    const [serach, setSearch] = useState();

    useEffect(()=> {
        axios.get(`https://buddflix.herokuapp.com/api/strain?name__icontains=${search}`)
    })


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

    return (
        <TextInput 
        placeholder='Search by strain name...'
        onChange={(text) => setSearch(text)}
        />
    )
}

export default Search;