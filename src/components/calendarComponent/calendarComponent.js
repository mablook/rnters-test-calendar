import React, {useState, useEffect, useContext} from 'react';
import Context from '../context/contextStorage/contextStorage';
import {NEW_DATE, GET_AVAILABLE, HOLD_APP, BUTTON_STATUS} from '../context/useGlobalState/useGlobalState';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import classes from './calendarComponent.module.css'


const CalendarComponent = (props) => {

    const {state, actions} = useContext(Context);
    const [startDate, setStartDate] = useState(moment());
    const [endDate, setEndDate] = useState(moment());
    const [focusedInput, setFocusedInput] = useState(null);
    const [rangeDate, setRangeDate] = useState(null);
    const [message, setMessage] = useState(false);

    const rangeDateSelected = (start,end) => {
        let fromDate = moment(start)
        let toDate = moment(end)
        let diff = toDate.diff(fromDate, 'days')
        let range = []
        for (let i = 0; i < diff; i++) {
          range.push(moment(startDate).add(i, 'days').format('YYYY-MM-DD'))
        }
        return range
      }

    const rangeDatesChangeHandler = ({ startDate, endDate }) => {
        setStartDate(moment(startDate));
        if(endDate != null){ 
            setEndDate(moment(endDate)); 
            setRangeDate(rangeDateSelected());
        }
      }
      
      const onFocusChangeRangeHandler = (focusedInput) => {
        setFocusedInput( focusedInput );
     }

    const changeDate = () => {
        actions({type : NEW_DATE, payload : {start :moment(startDate), end :moment(endDate), dateRange : rangeDateSelected(startDate,endDate)}});
    }


    const isBlocked = day => {
        const temp = [];
        state.unavailableDates.map(
            el => temp.push(rangeDateSelected(el[0],el[1]))
        );
        const unavailableDates = Array.prototype.concat.apply([], state.unavailableDates); 
        console.log(unavailableDates);
        return unavailableDates.some(date => moment(day).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD'), 'day')
    }

    const checkIfIsAvailable = () => {
        return actions({type : GET_AVAILABLE, payload : {range : rangeDateSelected(startDate,endDate)}});
    }

    useEffect(() => {
        changeDate();
    },[startDate,endDate]);

    useEffect(() => {
        if(rangeDate != null){
            actions({type : HOLD_APP, payload : {hold : true}});
        checkIfIsAvailable()
        .then(response => {
            actions({type : HOLD_APP, payload : {hold : false}});
            return response;
        })
        .then( response => {
            actions({type : BUTTON_STATUS, payload : {status : response}});
            setMessage(response);
        })
        }
    },[rangeDate])


let userMessage = <font>Please <strong>select</strong> the best period!</font>
if(message){
    userMessage = <font>OK! <strong> Date available! </strong> let's go ahead.</font>
}

    return(
        <div className={classes.typewriter}>
        <div className={classes.Information}>{userMessage}</div>
            <DateRangePicker
            startDate={startDate}
            startDateId="tata-start-date"
            endDate={endDate}
            // isOutsideRange ={isBlocked}
            isDayBlocked = {isBlocked}
            endDateId="tata-end-date"
            onDatesChange={rangeDatesChangeHandler}
            focusedInput={focusedInput}
            onFocusChange={onFocusChangeRangeHandler}
          />
        </div>
    )
}

export default CalendarComponent;
