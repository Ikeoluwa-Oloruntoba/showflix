import {
    SEARCH_MOVIE,
    FETCH_MOVIES,
    FETCH_MOVIE,
    LOADING
} from './types';
import axios from 'axios';

import {
    APIKey
} from '../../APIKeys';

export const searchMovie = text => {
    return {
        type: SEARCH_MOVIE,
        payload: text
    };
};

export const fetchMovies = text => dispatch => {
    axios
        .get(`http://www.omdbapi.com/?apikey=a8760fcf&s=${text}`)
        .then(response =>
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data

            })

        )
        .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=a8760fcf&i=${id}`)
        .then(response =>
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};

export const setLoading = () => {
    return {
        type: LOADING
    };
};