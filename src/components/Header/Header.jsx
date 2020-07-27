import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.impericon.com/360x520x85/media/catalog/product/p/p/pp33430_lg.jpg' />
            <div className={s.loginBlock}>
                { props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
    </header>

}

export default Header;