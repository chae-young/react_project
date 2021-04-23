import React,{useState} from 'react';
import Calendar from './Calender';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

const CalenderTodo = ()=>{
    const [dateVal,setDateVal] = useState(new Date());


    return(
        <Calendar/>
    )
}

export default CalenderTodo;