import React from "react";
import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div>
            <div className={s.people + " " + s.active}>
                <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogsItem;