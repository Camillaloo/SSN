import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Finally it works!", likesCount: 14 },
        { id: 2, post: "Hola-Hola!", likesCount: 42 },
      ],
      newPostText: "what's on your mind?",
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log("state was changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer (this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  },
};



export default store;
window.store = store;
