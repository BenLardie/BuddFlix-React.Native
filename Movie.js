import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';


const Movie = () => {

    const strain = useNavigationParam('Strain');

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