import React from "react";
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import DialogsMessage from "./DialogsMessage/DialogsMessage";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {

    let state = props.MassagePage;

    let DialogsElement = state.DialogsData.map(dialog => <DialogsItem id={dialog.id} key={dialog.id}
                                                                      name={dialog.name}/>);
    let MassageElements = state.MassagePage.map(message => <DialogsMessage id={message.id} message={message.message}
                                                                           key={message.id}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { DialogsElement }
            </div>
            <div className={s.messages}>
                <div>{ MassageElements }</div>

            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    )
}


export default Dialogs;