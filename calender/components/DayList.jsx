import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';

const DayList = ({data,onClickPop})=>{
    //const {text} = useSelector(state=>state.dayList);

    return(
        <>
            <li onClick={(e)=>{e.stopPropagation()}}><button onClick={(e)=>onClickPop(data,e)}>{data.text}</button></li>
        </>
    )
}

export default DayList;