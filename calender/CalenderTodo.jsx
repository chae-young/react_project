import React,{useState} from 'react';
import moment from 'moment'
import 'moment/locale/ko';
import Week from './Week';

const CalenderTodo = ()=>{
    const [today,setToday] = useState(moment());
    const renderWeeks = ()=> {
        let weeks = [];
        let done = false;
        //전달 일요일
        let date = today.clone().startOf("month").add("w" -1).day("Sunday");
        let count = 0;
        //전달
        let monthIndex = date.month();
        while (!done) {
            weeks.push(
                1
            );  
            date.add(1, "w");
            console.log(monthIndex)
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
         // console.log(count,monthIndex,date.month())
          
        }
    
        console.log(weeks)
      };
      renderWeeks()
    return(
        <div>
            <div className="calender__head">
                <button></button>{today.format("YYYY[년] MMMM")}<button></button>
                <table>
                    <thead>
                        <tr>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                            <th>Sat</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default CalenderTodo;