import React from 'react';
import classes from './LeftContent.module.css';
import ProductImage from './ProductImage/ProductImage';

const LeftContent = () => {
    return(
        <div className={classes.BoxShadow}>
            <ProductImage />
        </div>
    )
}

export default LeftContent