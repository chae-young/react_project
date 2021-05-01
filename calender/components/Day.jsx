import React,{useState,useEffect, useCallback} from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import DayList from './DayList';
import { Col ,Button} from 'react-bootstrap';


const Day = ({day,select,selected})=>{
    const {date,daymonth,isCurrentMonth,isToday,number}=day;
    const nowDay = useSelector((state)=>state.nowDay);
    const dayList = useSelector((state)=>state.dayList);
    const {listAddDone} = useSelector((state)=>state);

    const renderList = useCallback(()=>{
      let dayListArr = [];
      let dayAllList = [];
        dayList.forEach((v)=>{
          if(v.month === daymonth && v.day === number){
            if(dayListArr.length < 2){
              dayListArr.push(<DayList data={v}/>)
            }
            dayAllList.push(v);
          }
        })
      return {dayListArr,dayAllList}
    },[dayList])

    const more = renderList().dayAllList.length >= 3 ? true : false;

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
            {renderList().dayListArr}
          </ul>
          { more && <Button variant="link">{renderList().dayAllList.length - renderList().dayListArr.length}개 더보기</Button>}
        </Col>      
      );
}

export default Day;