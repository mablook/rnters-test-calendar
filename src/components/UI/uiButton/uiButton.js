import React from 'react';
import classes from './uiButton.module.css';

const uiButton = (props) => {

    let stateBuy = classes.warning;
    if(props.buyState){
        stateBuy = classes.success;
    }

    return(
        <button className={[classes.btn,stateBuy].join(' ')} disabled={!props.buyState}>Default button</button>
    );

};
export default uiButton;