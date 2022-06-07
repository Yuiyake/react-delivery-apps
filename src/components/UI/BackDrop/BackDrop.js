import React from 'react';
import ReactDOM from "react-dom";
import classes from './BackDrop.module.css'

const backdropRoot = document.getElementById('backdrop-root')

const BackDrop = (props) => {
    return ReactDOM.createPortal(<div className={`${classes.Backdrop} ${props.className}`}>
        {props.children}
    </div>, backdropRoot)
};

export default BackDrop;
