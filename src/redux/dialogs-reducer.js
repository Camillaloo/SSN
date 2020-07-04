const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    dialogs: [
      { id: 1, name: "Kamilla" },
      { id: 2, name: "Malina" },
      { id: 3, name: "Sabina" },
      { id: 4, name: "Alan" },
    ],
    messages: [
      { id: 1, message: "Hey Hey" },
      { id: 2, message: "Habla Espanol?" },
      { id: 3, message: "Howdy?" },
      { id: 4, message: "Hey, Koshka!" },
    ]
  }

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {        
        case   SEND_MESSAGE:
          let body = action.newMessageBody
          return {
            ...state,
            messages: [...state.messages, {id:6, message: body}]
          }
        default:
            return state
   }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer