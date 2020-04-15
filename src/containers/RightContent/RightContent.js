import React from 'react';
import UserInformation from './UserInformation/UserInformation';
import ItemDetailsActions from './ItemDetailsActions/ItemDetailsActions';
import classes from './RightContent.module.css'

const rightContent = () => {

    return(
        <div>
            <div className={classes.BoxShadowMin}>
                <UserInformation />
                </div>
                <div className={classes.BoxShadow}>
                <ItemDetailsActions />
            </div>
        </div>
    )
}

export default rightContent