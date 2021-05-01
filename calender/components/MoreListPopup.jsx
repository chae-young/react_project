import React,{useState,useEffect, useCallback} from 'react';
import { X } from 'react-bootstrap-icons';
import style from 'styled-components';

const MoreListPopWrap = style.div`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    background:#fff;
`

const MoreListPopup = ({list})=>{
    return (
        <MoreListPopWrap>
            {console.log(list)}
            <strong>{list[0].weekDay}</strong>
            <ul>
                {list.map((v)=><li>{v.text.trim().length ? v.text : '제목없음'}</li>)}
            </ul>
            <button><X/></button>
        </MoreListPopWrap>
    )
}

export default MoreListPopup;