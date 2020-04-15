import React from 'react';
import classes from './UserInformation.module.css'


const userInformation = () => {
// <img style="width: 100%; height: auto; min-width: 50px; min-height: 50px;" src="https://dc3h9n0uz6yfs.cloudfront.net/users/avatars/000/009/194/thumb_medium/picture?1583404198" alt="Picture?1583404198"></img>
    const userImageUrl = 'https://dc3h9n0uz6yfs.cloudfront.net/users/avatars/000/009/194/thumb_medium/picture?1583404198';

    return(
            <div className={classes.ComponentFlexCol}>
                <div className={classes.UserImageContainer}>
                <img className={classes.UserImage} src={userImageUrl} alt=""/>
                </div>
                <div className={classes.OwnerName}>Owner Name</div>
            </div>
    );
}

export default userInformation;