import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import logo from './Images/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Welcome = () => {

    const { navigate } = useNavigation();


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        justifyContent: 'center',
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
    }
  );

    return (
        <View style={styles.container}>
            <Image 
                source={logo}
                style={styles.image} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigate('Strains')}
            >
                <Text style={styles.buttonText}>Pick a Strain</Text>
            </TouchableOpacity>
        </View>
    )
}

Welcome.navigationOptions = {
        header: null,
      };

export default Welcome;