import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useNavigationParam } from 'react-navigation-hooks';
import axios from 'axios';


const Movie = () => {
  const strain = useNavigationParam('Strain');
  const [genre, setGenre] = useState({});
  const [movie, setMovie] = useState({});
  const key = '446d9b88173473ed0acd5d7fed14558e';


  function selectRandom(array) {
    const num = Math.floor((Math.random() * array.length));
    return (array[num]);
}

  useEffect(() => {
    const tempGenre = [];
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
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=${genre.tmdb_id}`;
    axios.get(url).then(response => {
        const movieData = response.data.results;
        const movieChoice = selectRandom(movieData);
        setMovie(movieChoice);

    })
  }, [genre]);

//   const display = movie.map((film) => {
//       return (
//           <Text>{film.title}</Text>
//       )
//   });

const renderMovie = movie && (
    <Text>{movie.title}</Text>
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
    <View>
        <Text>Hello {strain.name}</Text>
        {renderMovie}
    </View>
  )
};

export default Movie;
