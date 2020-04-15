import React, {useContext} from 'react';
import Context from '../../../components/context/contextStorage/contextStorage';
import classes from './ProductImage.module.css';

const LeftContent = () => {

    const {state} = useContext(Context); 

    return(
        <div className={classes.imageHolder}>
        <img alt={state.product.title} src={state.product.img}></img>
        </div>
    )
}

export default LeftContent