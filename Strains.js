import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';



const Strains = () => {

    const { navigate } = useNavigation();
    const [races, setRaces] = useState([]);
    const url = 'https://buddflix.herokuapp.com/api/race/'

    useEffect(() => {
        axios.get(url).then(response => {
            const results = response.data.objects;
            setRaces(results);
        });
    }, []);


    const display = races.map((strain) => {
        return (
            <TouchableOpacity style={styles.button} key={strain.id} onPress={() => {
                navigate('StrainList',{
                selectedStrain: strain,
            })}
            }>
                <Text style={styles.buttonText}>{strain.name.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <View style= {styles.container}>
        {display}
        <TouchableOpacity style={styles.button}  onPress={() => navigate('Search')}>
                <Text style={styles.buttonText}>SEARCH</Text>
            </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: 'black',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: 'red',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      color: 'white',
      fontWeight: '600',
      fontSize: 16
    }
  });

export default Strains;

