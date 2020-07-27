import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    PostsData: [
        {id: 1, message: "My name Stanislav", likecount: 2222},
        {id: 2, message: "I live in Kharkov", likecount: 5555},
        {id: 2, message: "I love Mary", likecount: 9999},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) =>{


    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.NewPostText,
                likecount: 0
            };
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                NewPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};



export let addPostActionCreator = (NewPostText) => {
    return {
        type: ADD_POST,
        NewPostText
    }
};

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);

            dispatch(setStatus(response.data));

}

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)

            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

}

export default profileReducer;