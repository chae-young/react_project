import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';

const DayList = ({data})=>{
    const {text} = useSelector(state=>state.dayList);
    
    return(
        <>
            <li>{data.text}</li>
        </>
    )
}

export default DayList;