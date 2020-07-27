import React from "react";
import preloader from '../../../assets/images/loader.svg'

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white' } }>
        <img src={preloader} />
    </div>
}

export  default Preloader;