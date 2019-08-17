import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import logo from './Images/logo.png';



const Welcome = () => {
    const { navigate } = useNavigation();

    return (
        <View>
            <Image source={logo} />
            <Button title="Pick a Strain"
                onPress={() => navigate('Strains')}
            />
        </View>
    )
}

export default Welcome;