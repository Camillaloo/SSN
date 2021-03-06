import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>SSN</div>
            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <a onClick={props.logout}>log out</a></div> 
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header