import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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

    // useEffect(() => {
    //     async () => {
    //         try {
    //           let response = await fetch(
    //             'https://buddflix.herokuapp.com/api/race/',
    //           );
    //           let responseJson = await response.json();
    //             setResults(responseJson.data.objects);                
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       }
    // },[])

    const display = races.map((strain) => {
        console.log(strain)
        return (
            <Text key={strain.id}>{strain.name}</Text>
        )
    })

    return (
        <View>
       {display}
       </View>
    )
}

export default Strains;

