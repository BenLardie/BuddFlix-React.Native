import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Strain from './Strains';
import Welcome from './Welcome';


export default function App() {

  const AppNavigator = createSwitchNavigator({
      Welcome:{screen: Welcome},
      Strains:{screen: Strain}
    }); 

    const AppContainer = createAppContainer(AppNavigator)

  return (
    <AppContainer />
  )
}
