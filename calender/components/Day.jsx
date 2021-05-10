import React,{useState,useEffect, useCallback} from 'react';
import moment from 'moment';
import styles from 'styled-components';
import {useSelector} from 'react-redux';
import DayList from './DayList';
import MoreListPopup from './MoreListPopup';
import ModifyPopup from './ModifyPopup';
import { Col ,Button} from 'react-bootstrap';

const Popup = styles.div`
    position:absolute;
    top:0;
    z-index:99;
    padding:40px;
    background:#fff;
    -webkit-box-shadow: 0px 6px 18px 4px #666666; 
    box-shadow: 0px 6px 18px 4px #666666;    
`
const Day = ({day,select,selected})=>{
    const {date,daymonth,isCurrentMonth,isToday,number}=day;
    const nowDay = useSelector((state)=>state.nowDay);
    const dayList = useSelector((state)=>state.dayList);
    const {listAddDone} = useSelector((state)=>state);
    const [moreClick,setMoreClick] = useState(false);
    const [modifyPop,setModifyPop] = useState(false);

    const renderList = useCallback(()=>{
      let dayListArr = [];
      let dayAllList = [];
        dayList.forEach((v)=>{
          if(v.month === daymonth && v.day === number){
            if(dayListArr.length < 2){
              dayListArr.push(<DayList data={v} onClickPop={(list,e)=>onClickPop(list,e)}/>)
            }
            dayAllList.push(v);
          }
        })
      return {dayListArr,dayAllList}
    },[dayList])


    const [currentList,setCurrentList] = useState([]);
    const [style,setStyle] = useState(null);
    const onClickPop = (list,e)=>{
      
      setCurrentList((prev)=>[list])
      setModifyPop(true);
      if(window.innerWidth/2 < e.clientX){//오른쪽
        setStyle({
          right:e.target.offsetParent.clientWidth+'px',
        })
      }else if(window.innerWidth/2 > e.clientX){//왼쪽
        setStyle({
          left:e.target.offsetParent.clientWidth+'px',
        })          
      }      
    }
    const more = renderList().dayAllList.length >= 3 ? true : false;
    const onClickMore = useCallback((e)=>{
      //e.preventDefault();
      e.stopPropagation();
      setMoreClick(true);
    })

    
    return (
        <Col
          key={date.toString()} 
          style={{height:'calc((100vh - 48px)/6)',position:'relative'}}
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
          { more && <Button onClick={onClickMore} variant="link">{renderList().dayAllList.length - renderList().dayListArr.length}개 더보기</Button>}
          {moreClick && <MoreListPopup list={renderList().dayAllList}/>}
          {modifyPop && <Popup style={style} onClick={(e)=>e.stopPropagation()}><ModifyPopup currentList={currentList}/></Popup>}

        </Col>      
      );
}

export default Day;