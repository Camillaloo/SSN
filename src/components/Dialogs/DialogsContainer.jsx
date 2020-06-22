import React from 'react';
import { updateNewMessageBobyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import {connect} from 'react-redux'

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage

//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator())
//                     }
//                     let onNewMessageChange = (body) => {
//                         store.dispatch(updateNewMessageBobyCreator(body))
//                     }
//                     return <Dialogs
//                         updateNewMessageBoby={onNewMessageChange}
//                         sendMessage={onSendMessageClick}
//                         dialogsPage={state} />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBoby: (body) => {
            dispatch(updateNewMessageBobyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

