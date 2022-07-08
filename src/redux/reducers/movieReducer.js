import { GET_MOVIE_DATA } from '../actions/types/movieType'
import movie from '../../assets/videos/movie.json'

const stateDefault = {
    movieData: [],
}

export const movieReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_MOVIE_DATA: {
            state.movieData = [...movie];
            return { ...state }
        }

        default: return { ...state }
    }
}