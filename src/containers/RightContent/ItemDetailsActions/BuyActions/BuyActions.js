import React, {useContext} from 'react';
import UiButton from '../../../../components/UI/uiButton/uiButton';
import CalendarComponent from '../../../../components/calendarComponent/calendarComponent';
import Context from '../../../../components/context/contextStorage/contextStorage' 
import classes from './BuyActions.module.css';

const BuyActions = () => {
    const {state} = useContext(Context);
    return(
        <div className={classes.BuyActions}>
            <div className={classes.componentHolder}>
                <CalendarComponent />
            </div>
            <div className={classes.componentHolder}>
                <UiButton buyState={ state.availability }/>
            </div>
        </div>
    );
}


export default BuyActions;