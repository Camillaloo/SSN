import React from 'react'
import preloader from './../../../assets/images/6.gif'
import s from './preloader.module.css'

let Preloader = (props) => {
    return (
        <div className={s.preloader}>
            <img src={preloader} />
        </div>
    )

}

export default Preloader