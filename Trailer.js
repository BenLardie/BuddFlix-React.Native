import React, { useEffect, useState } from 'react';
import { StyleSheet, WebView } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import axios from 'axios';


const Trailer = ( movieId ) => {
    console.log(movieId)
    const key = '446d9b88173473ed0acd5d7fed14558e';
    const [trailerId, setTrailerId] = useState();

    useEffect(() => {
        const url = `https://api.themoviedb.org/3/movie/${movieId.movieId}?api_key=${key}&append_to_response=videos`
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
        <WebView source={{uri: trailerId }} />
    )
};

export default Trailer;