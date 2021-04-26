import React,{useState} from 'react';
import moment from 'moment'
import WritePopup from './WritePopup';
import { Col } from 'react-bootstrap';

const Day = ({day,select,selected})=>{
    const {date,isCurrentMonth,isToday,number}=day;

    return (
        <Col   
          key={date.toString()} 
          className={
              "day" + (isToday ? " today" : "") + 
              (isCurrentMonth ? "" : " different-month") + 
              (date.isSame(selected) ? " selected" : "")
            } 
          onClick={()=>select(day)}>{number}
        </Col>      
      );
}

export default Day;