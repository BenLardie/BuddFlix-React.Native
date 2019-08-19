import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import axios from 'axios';



const Strains = () => {

    const [races, setRaces] = useState([])

    const url = 'https://buddflix.herokuapp.com/api/race/'

    useEffect(() => {
        axios.get(url).then(response => {
            const results = response.data.objects;
            console.log(results)
            setRaces(results);
        });
    }, []);

    const display = races.map((strain) => {
        console.log(strain)
        return (
            <TouchableOpacity style={styles.button} key={strain.id}>
                <Text style={styles.buttonText}>{strain.name}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <View style= {styles.container}>
        {display}
       </View>
    )
}

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

export default Strains;

