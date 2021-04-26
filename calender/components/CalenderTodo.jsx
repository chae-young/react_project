import React,{useState} from 'react';
import moment from 'moment'
import 'moment/locale/ko';
import { Container, Row , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Week from './Week';
import WritePopup from './WritePopup';

const CalenderTodo = ()=>{
    const [today,setToday] = useState(moment());
    const [selected,setSelected] = useState(moment().startOf('day'))
    const dayName = ["Sun","Mon","Tue","Wed","Thu","Fri","Set"];

    const select = (day)=>{
        //setToday(day.date.clone());
        console.log(day.date.toDate())
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
        //전달 일요일 -> 현재 주
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
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
        return weeks
      };

    return(
        <div className="calender-wrap">
            <div className="calender__head">
                <button onClick={previous}></button>{today.format("YYYY[년] MMMM")}<button onClick={next}></button>
            </div>
            <Container fluid className="calender__container">
                <Row>{dayName.map(v=><Col>{v}</Col>)}</Row>
                {renderWeeks()}
            </Container>                 
            <WritePopup/>
        </div>
    )
}

export default CalenderTodo;