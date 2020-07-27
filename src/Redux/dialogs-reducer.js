const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    DialogsData: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Mary"},
        {id: 3, name: "Art"},
        {id: 4, name: "Giena"},
    ],
    MassagePage: [
        {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 1"},
        {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 2"},
        {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 3"},
        {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 4"},
        {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 5"},
        {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 6"},
        {id: 1, message: "ДИМА ЛЮБИТ ШАВУХУ 7"},
    ]
};

const dialogsReducer = (state = initialState, action) => {
      switch (action.type) {
         case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                MassagePage: [...state.MassagePage, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;