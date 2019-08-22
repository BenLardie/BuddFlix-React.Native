import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Strain from './Strains';
import Welcome from './Welcome';
import StrainList from './StrainList';


export default function App() {

  const AppNavigator = createStackNavigator({
      Welcome:{screen: Welcome},
      Strains:{screen: Strain},
      StrainList:{screen: StrainList},
    });

    const AppContainer = createAppContainer(AppNavigator)

  return (
    <AppContainer />
  )
}
