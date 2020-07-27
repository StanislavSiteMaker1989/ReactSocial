import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        ProfilePage: {

            PostsData: [
                {id: 1, message: "My name Stanislav", likecount: 2222},
                {id: 2, message: "I live in Kharkov", likecount: 5555},
                {id: 2, message: "I love Mary", likecount: 9999},
            ],
            NewPostText: 'React'
        },
        MassagePage: {
            DialogsData: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Mary"},
                {id: 3, name: "Art"},
                {id: 4, name: "Giena"},
            ],
            MessageData: [
                {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 1"},
                {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 2"},
                {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 3"},
                {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 4"},
                {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 5"},
                {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 6"},
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch (action){

        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.MassagePage = dialogsReducer(this._state.MassagePage, action);
        this._callSubscriber(this._state);


    }
};




export default store;
