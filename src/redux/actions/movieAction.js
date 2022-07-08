import { GET_MOVIE_DATA } from './types/movieType'

export const getDataAction = () => {
    return (dispacth) => {
        const action = {
            type: GET_MOVIE_DATA
        }
        dispacth(action);
    }
}