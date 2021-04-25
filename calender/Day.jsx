import React,{useState} from 'react';
import moment from 'moment'

const Day = ({day,select,selected})=>{
    const {date,isCurrentMonth,isToday,number}=day;
    console.log(select(day))
    return (
        <td 
          key={date.toString()} 
          className={
              "day" + (isToday ? " today" : "") + 
              (isCurrentMonth ? "" : " different-month") + 
              (date.isSame(selected) ? " selected" : "")
            } 
          onClick={()=>select(day)}>{number}</td>
      );
}

export default Day;