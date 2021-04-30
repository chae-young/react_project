import React,{useState,useEffect, useCallback} from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import DayList from './DayList';
import { Col } from 'react-bootstrap';


const Day = ({day,select,selected})=>{
    const {date,daymonth,isCurrentMonth,isToday,number}=day;
    const nowDay = useSelector((state)=>state.nowDay);
    const dayList = useSelector((state)=>state.dayList);
    const {listAddDone} = useSelector((state)=>state);

    const renderList = useCallback(()=>{
      let dayListArr = [];
      let list = [];
        dayList.forEach((v)=>{
          if(v.month === daymonth && v.day === number){ 
            dayListArr.push(<DayList data={v}/>)
            list.push(v)
          }
        })
        console.log(list)
      return dayListArr
    },[dayList])

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
          <ul>
            {renderList()}
          </ul>
          <div>더보기</div>
        </Col>      
      );
}

export default Day;