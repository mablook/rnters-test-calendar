import React from 'react';
import classes from './PriceDetails.module.css';


const priceDetails = () => {
    return(
        <div className={classes.PriceDetailsPanel}>
            <strong>€00,00</strong> /day
        </div>
    );
}

export default priceDetails;