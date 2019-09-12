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