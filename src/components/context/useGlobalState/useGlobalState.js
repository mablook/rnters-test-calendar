import {useState, useContext} from 'react';
import moment from 'moment';

import Context from '../contextStorage/contextStorage'

export const NEW_DATE = 'newDate';
export const GET_AVAILABLE = 'getAvailable';
export const HOLD_APP = 'holdApp';
export const BUTTON_STATUS = 'buttonStatus';

const useGlobalState = () => {

    const theContext = useContext(Context)
    const [state, setSate] = useState(theContext);



    const checkIfProductIsAvailable = async (range) => {
               
            try{
                let test_date = true;
                let response = await fetch('./mocks/response.json');
                let data = await response.json();
                let unavailable = await data.data.attributes.unavailable_periods;
                const found = await unavailable.some(r=> {
                    r.some( some => {
                        if(range.indexOf(moment(some).format('YYYY-MM-DD')) >= 0){
                            test_date = false
                        }
                    })
                    
                });
                    return test_date;

            }
            catch(err){
                console.log(err);
                return err
            }


    }

    const delayFetch = async (sendrange) => {
        return new Promise((res,rej) => setTimeout(()=>{
            let result = checkIfProductIsAvailable(sendrange);
            console.log('delay', result);
            return res(result)
        }, Math.random() * 5000));
    }

    const saveNewDate = (start,end,range) => {
            if(start!=null){setSate({ ...state, startDate : start})}
            if(end!=null){setSate({ ...state, endDate : end, rangeDateSelected: range})}
    }

    const actions = (action) => {
        const {type, payload} = action;
        switch (type){
            case BUTTON_STATUS:
                return setSate({ ...state, availability : payload.status});
            case HOLD_APP:
                return setSate({ ...state, appHoldState : payload.hold});
            case GET_AVAILABLE:
                return delayFetch(payload.range);
            case NEW_DATE:
                return saveNewDate(payload.start,payload.end,payload.dateRange);
            default:
                return state;
        }
    }
    return {state, actions}
}

export default useGlobalState;