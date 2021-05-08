import React,{useState,useEffect, useCallback} from 'react';
import { Pencil,Trash,X } from 'react-bootstrap-icons';

const ModifyPopup = ({currentList})=>{

    return (
        <div>{currentList[0].text}</div>
    )
}

export default ModifyPopup;