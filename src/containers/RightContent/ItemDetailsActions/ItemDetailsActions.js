import React from 'react';
import PriceDetails from './PriceDetails/PriceDetails';
import BuyActions from './BuyActions/BuyActions';
import classes from './ItemDetailsActions.module.css';

const itemDetailsActions = () => {

    return(
        <div className={classes.fixDiv}>
            <PriceDetails />
            <BuyActions />
        </div>
    );
}

export default itemDetailsActions;