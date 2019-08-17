import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



const Welcome = () => {

    return (
        <Button title="Pick a Strain" 
        onPress={() => navigate('Strains')}
        />
    )
}

export default Welcome;