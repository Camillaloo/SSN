const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
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
    ],
    newMessageBody: "",
  }

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return {
            ...state,
            newMessageBody: action.body
          }        
        case   SEND_MESSAGE:
          let body = state.newMessageBody
          return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id:6, message: body}]
          }
        default:
            return state
   }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBobyCreator = (body) =>
({type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer