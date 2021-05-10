import React,{useState,useEffect, useCallback} from 'react';
import { Pencil,Trash,X } from 'react-bootstrap-icons';
import { ButtonGroup,Button } from 'react-bootstrap';
import WritePopup from './WritePopup';

const ModifyPopup = ({currentList})=>{
    const [userClick,setUserClick] = useState(false);

    const onClose = (e)=>{
        setUserClick(false);
    }
    const onClickModify = ()=>{
        console.log(1)
        setUserClick(true);
    }
    return (
        <>
        <div>
            <ButtonGroup aria-label="Basic">
                <Button variant="secondary"><Pencil onClick={onClickModify} size={12}/></Button>
                <Button variant="secondary"><Trash size={12}/></Button>
                <Button variant="secondary"><X/></Button>
            </ButtonGroup>
            <h3>{currentList[0].text}</h3>
        </div>
        {userClick && <WritePopup style={{position:'absolute'}} onClose={onClose}/>}
        </>
    )
}

export default ModifyPopup;