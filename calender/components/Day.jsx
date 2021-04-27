import React,{useState,useEffect} from 'react';
import moment from 'moment'
import WritePopup from './WritePopup';
import { Col } from 'react-bootstrap';

const Day = ({day,select,selected})=>{
    const {date,isCurrentMonth,isToday,number}=day;
    
    return (
        <Col 
          key={date.toString()} 
          style={{height:'15vh'}}
          className={
              "day" + (isToday ? " today" : "") + 
              (isCurrentMonth ? "" : " different-month") + 
              (date.isSame(selected) ? " selected" : "")
            } 
          onClick={(e)=>{select(day,e)}}>{number}
        </Col>      
      );
}

export default Day;