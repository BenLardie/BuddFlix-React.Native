import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Strain from './Strains';
import Welcome from './Welcome';
import StrainList from './StrainList';
import Movie from './Movie';
import Search from './Search';

export default function App() {

  const AppNavigator = createStackNavigator({
      Welcome:{screen: Welcome},
      Strains:{screen: Strain},
      StrainList:{screen: StrainList},
      Movie:{screen:Movie},
      Search:{screen:Search},
    });

    const AppContainer = createAppContainer(AppNavigator)

  return (
    <AppContainer />
  )
}
