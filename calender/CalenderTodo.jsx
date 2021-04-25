import React,{useState} from 'react';
import moment from 'moment'
import 'moment/locale/ko';
import Week from './Week';

const CalenderTodo = ()=>{
    const [today,setToday] = useState(moment());
    const [selected,setSelected] = useState(moment().startOf('day'))
    const select = (day)=>{
        setToday(day.date.clone());
        setSelected(day.date);
    }
    const previous = ()=>{
        setToday(today.clone().subtract(1, 'month'))
    }
    
    const next = ()=> {
        setToday(today.clone().add(1,'month'))
    }

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
                <Week key={date} 
                date={date.clone()} 
                month={today} 
                select={(day)=>select(day)} 
                selected={selected}/>
            );  
            date.add(1, "w");
            /*
            0 > 2 => false , 2 !== 3 => true
            1 > 2 => false , 3 !== 3 => false
            2 > 2 => false , 3 !== 3 => false
            3 > 2 => true , 3 !== 3 => false
            4 > 2 => true , 3 !== 4 => true
            */
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
        return weeks
      };
      //renderWeeks()
    return(
        <div>
            <div className="calender__head">
                <button onClick={previous}></button>{today.format("YYYY[년] MMMM")}<button onClick={next}></button>
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
                        {renderWeeks()}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default CalenderTodo;