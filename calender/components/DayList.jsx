import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';

const DayList = ()=>{
    const {text} = useSelector(state=>state.dayList);
    
    return(
        <>
            <li>제목없음</li>
        </>
    )
}

export default DayList;