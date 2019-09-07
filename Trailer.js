import React, { useEffect, useState } from 'react';
import { StyleSheet, WebView, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';


const Trailer = ( movieId ) => {
    
    const ApiKey = '446d9b88173473ed0acd5d7fed14558e';
    const [trailerId, setTrailerId] = useState();


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
  
    },
    video: {
      marginTop: 20,
      maxHeight: 200,
      width: 320,
      flex: 1
    }
  });

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=${ApiKey}&append_to_response=videos`
            axios.get(url).then(response => {
            if (response.data.videos.results.length > 0) {
            const results = `https://www.youtube.com/embed/`+ response.data.videos.results[0].key
            setTrailerId(results)
            } else {
                const rickRoll = "https://www.youtube.com/embed/dQw4w9WgXcQ"
                setTrailerId(rickRoll)
            }
            })
    },[movieId])

    return (
        <View style={styles.container}>
        <WebView 
            source={{uri: trailerId }} 
            style={styles.video}
        />
        </View>
    )
};

export default Trailer;