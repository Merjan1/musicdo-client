import * as api from '../apis/api';

// Action Creators

  export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data});

    } catch (err){
        console.log(err)

    }
 }