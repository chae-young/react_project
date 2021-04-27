import React,{useState,useEffect} from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import DayList from './DayList';
import { Col } from 'react-bootstrap';

const Day = ({day,select,selected})=>{
    const {date,isCurrentMonth,isToday,number}=day;
    const nowDay = useSelector((state)=>state.nowDay);
    const dayList = useSelector((state)=>state.dayList);
    const renderList = ()=>{
      if(nowDay.number === number && nowDay.date.month() === date.month()){
        return <ul><DayList/></ul>
      }
    }
    return (
        <Col 
          key={date.toString()} 
          style={{height:'15vh'}}
          className={
              "day" + (isToday ? " today" : "") + 
              (isCurrentMonth ? "" : " different-month") + 
              (date.isSame(selected) ? " selected" : "")
            } 
          onClick={(e)=>{select(day,e)}}>
          {number}
          {nowDay && renderList()}
        </Col>      
      );
}

export default Day;