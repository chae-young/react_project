import React,{useCallback, useState} from 'react';
import moment from 'moment';
import { Form,Row,Col,Button } from 'react-bootstrap';
import { X,Calendar3,ChatRightDotsFill,CardImage } from 'react-bootstrap-icons';
import DatePicker,{ registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko'; 
import {useDispatch, useSelector} from 'react-redux';
import styles from 'styled-components';
import {listAddAction} from '../reducers';
registerLocale('ko', ko);

const Popup = styles.div`
    position:fixed;
    padding:40px;
    background:#fff;
    -webkit-box-shadow: 0px 6px 18px 4px #666666; 
    box-shadow: 0px 6px 18px 4px #666666;    
`

const WritePopup = ({style,onClose})=>{
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const [text,setText] = useState('');
    const [desc,setDesc] = useState('');
    const nowDay = useSelector((state)=>state.nowDay);
    const onSubmit = useCallback((e)=>{
        e.preventDefault();
        dispatch(listAddAction({nowDay,text,desc}))
        onClose();
    },[nowDay,text,desc])
    const onChangeInput = useCallback((e)=>{
        setText(e.target.value);
    },[])
    const onChangeDesc = useCallback((e)=>{
        setDesc(e.target.value);
    },[])
    return(
        <Popup style={style} className={'calender__popup'}>
            <button onClick={onClose}><X size={25}/></button>           
            <Form onSubmit={onSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}></Form.Label>
                    <Col sm={10}><Form.Control type="text" placeholder="제목.." onChange={onChangeInput} value={text}/></Col>     
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}><Calendar3/></Form.Label>
                    <Col sm={10}> <DatePicker locale="ko" selected={nowDay.date.toDate()}/></Col>     
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}><CardImage/></Form.Label>
                    <Col sm={10}><Form.File id="exampleFormControlFile1" label="Example file input" /></Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}><ChatRightDotsFill/></Form.Label>
                    <Col sm={10}> <Form.Control as="textarea" rows={3} placeholder="설명.." onChange={onChangeDesc} value={desc}/></Col>
                    <Button type="submit" variant="primary">저장</Button>                         
                </Form.Group>    
            </Form> 
        </Popup>
    )
}

export default WritePopup;