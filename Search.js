import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const Search = () => {
    const { navigate } = useNavigation();
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=> {
        axios.get(`https://buddflix.herokuapp.com/api/strain?name__icontains=${search}`)
        .then(response => {
            setSearchResults(response.data.objects)
        })
    },[search])

    const styles = StyleSheet.create({
        container: {
          paddingTop: 60,
          alignItems: 'center'
        },
        button: {
          marginBottom: 30,
          width: 260,
          alignItems: 'center',
          backgroundColor: '#2196F3'
        },
        buttonText: {
          textAlign: 'center',
          padding: 20,
          color: 'white'
        }
      });


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
    




  return (
    <>
      <TextInput
        placeholder="Search by strain name..."
        onChangeText={text => setSearch(text)}
      />
      <ScrollView>
        {display}
      </ScrollView>
    </>
  );
};

export default Search;