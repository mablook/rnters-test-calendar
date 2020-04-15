import React from 'react';
import classes from './BodyContent.module.css';
import RightContent from '../RightContent/RightContent';
import LeftContent from '../LeftContent/LeftContent'

const BodyContent = () => {
    return(
            <section className={classes.BodySections}>
                <div className={classes.BodySectionsDiv}>
                    <LeftContent />
                </div>
                <div className={classes.BodySectionsDiv}>
                    <RightContent />
                </div>
            </section>
    )
}

export default BodyContent;
