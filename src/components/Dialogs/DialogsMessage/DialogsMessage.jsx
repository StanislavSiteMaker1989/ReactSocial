import React from "react";
import s from "./DialogsMessage.module.css";

const DialogsMessage = (props) => {
    return (
        <div>
            <div className={s.message}>
                <div>
                    {props.message}
                </div>
            </div>
        </div>
    )
}

export default DialogsMessage;
