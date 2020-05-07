import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
// import { DatePicker, setHours, setMinutes } from 'react-datepicker';
import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import './react-datepicker.css';
import history from '../../services/history';

import { Container } from './styles';
import {store} from '../../store';

export default function SelectDate({ match }) {
  const [startDate, setStartDate] = useState(new Date());

  // const {signed} = store.getState().auth;
    const signed = true;

    if(!signed){
        return <Redirect to="/" />;
    }

    function handleConfirm(){
      // const appointment = await api.post('/Wink/Appointment');

      history.push('/appointment');
    };

  return (
      <Container>
          <h1>Selected Date</h1>

          <DatePicker 
            selected={startDate} 
            onChange={date => setStartDate(date)} 
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          />

          <button type="submit" onClick={handleConfirm}>CONFIRM</button>
      </Container>
  );    
}
