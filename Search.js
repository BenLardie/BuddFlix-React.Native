import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';

const Search = () => {
    const { navigate } = useNavigation();
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=> {
        const results = [];
        console.log(search)
        axios.get(`https://buddflix.herokuapp.com/api/strain?name__icontains=${search}`)
        .then(response => {
            results = response.data.objects
            console.log(response.data)
            setSearchResults(results);
        })
    },[search])

    // useEffect(()=> {
    //     display()
    // },[searchResults])


    const display = searchResults.map((strain) => { 
        return (
            <TouchableOpacity style={styles.button} key={strain.id} onPress={() => {
                navigate('Movie',{
                Strain: strain,
            })}
            }>
                <Text style={styles.buttonText}>{strain.name}</Text>
            </TouchableOpacity>
        )
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
        <>
            <TextInput 
            placeholder='Search by strain name...'
            onChange={(text) => {
                text.persist()
                setSearch(text)
            
            }
            }
            />
        {display}
        </>
    )
}

export default Search;