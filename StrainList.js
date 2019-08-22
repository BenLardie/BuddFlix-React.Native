import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import axios from 'axios';

const StrainList = () => {
    const strain = useNavigationParam('selectedStrain')
    console.log(strain)
    return (
        <Text>Hello {strain.name} </Text>
    )
};

export default StrainList;