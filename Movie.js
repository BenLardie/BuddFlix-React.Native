import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import axios from 'axios';


const Movie = () => {

    const strain = useNavigationParam('Strain');

    useEffect(()=> {
        const url = `https://buddflix.herokuapp.com/api/genre?race=${strain.id}`
        axios.get(url).then(response => console.log(`movie ${response.data.tmdb_id}`))
    },[])

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });



    return (
        <Text>Hello {strain.name}</Text>
    )
}

export default Movie;