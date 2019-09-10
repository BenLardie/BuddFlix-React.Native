import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigationParam, useNavigation } from 'react-navigation-hooks';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const StrainList = () => {
    const { navigate } = useNavigation();
    const strain = useNavigationParam('selectedStrain');
    const [allStrains, setAllStrains] = useState([]);
    
    useEffect(()=> {
        const url = `https://buddflix.herokuapp.com/api/strain/?race=${strain.id}`
        axios.get(url).then(response => {
            const results = response.data.objects;
            setAllStrains(results);
    })},[])

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

const display = allStrains.map((strain) => { 
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
        <ScrollView>
            {display}
        </ScrollView>
    )
};

export default StrainList;