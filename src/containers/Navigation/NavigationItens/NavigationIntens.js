import React from 'react';
import classes from './NavigationItens.module.css';


const NavigationItens = (props) => {
    return(
        <li 
        className={classes.NavLi}>
            <a 
            href={props.linkLink ? props.linkLink : "#"} 
            className={props.special ? classes.monetize_btn : null}>
                {props.linkTitle}
            </a>
        </li>
    )
}

export default NavigationItens;