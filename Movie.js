import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import axios from 'axios';
import Trailer from './Trailer';


const Movie = ({ navigation }) => {
  const strain = useNavigationParam('Strain');
  const [genre, setGenre] = useState({});
  const [movie, setMovie] = useState({});
  const [title, setTitle] = useState('');
  const key = '446d9b88173473ed0acd5d7fed14558e';
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'


  function selectRandom(array) {
    const num = Math.floor((Math.random() * array.length));
    return (array[num]);
}

  useEffect(() => {
    const tempGenre = [];
    setTitle(strain.name)
    const url = `https://buddflix.herokuapp.com/api/genre?race=${strain.race.id}`;
    axios.get(url).then(response => {
        let data = response.data.objects;
        data.forEach(item => {
            tempGenre.push(item)
        })
        setGenre(selectRandom(tempGenre))
    });
  }, []);

  useEffect(() => { 
    navigation.setParams({ 
        headerTitle: title 
    }) 
}, [title])

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genre.tmdb_id}`;
    axios.get(url).then(response => {
        const movieData = response.data.results;
        const movieChoice = selectRandom(movieData);
      setMovie(movieChoice);
    })
  }, [genre]);


const renderMovie = movie && (
    <>
        <Text>{movie.title}</Text>
        <Image style={{width: 66, height: 58}} source={{uri:`${imgBaseUrl}${movie.poster_path}`}}  />
        <Trailer movieId={movie.id} />
    </>
)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
        {renderMovie}
    </View>
  )
};
Movie.navigationOptions = ({ navigation }) => {
  return {
      title: 'Movie for ' + navigation.getParam('headerTitle'),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  }
}
export default Movie;
