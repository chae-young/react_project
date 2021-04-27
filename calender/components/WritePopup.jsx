import React,{useState} from 'react';
import moment from 'moment';
import { Form,Row,Col } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import DatePicker,{ registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko'; 
import {useSelector} from 'react-redux';
import styles from 'styled-components';
registerLocale('ko', ko);

const Popup = styles.div`
    position:fixed;
    background:#fff;
`

const WritePopup = ({style})=>{
    const [startDate, setStartDate] = useState(new Date());
    const nowDay = useSelector((state)=>state.nowDay);

    return(
        <Popup style={style} className={'calender__popup'}>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>Email address</Form.Label>
                    <Col sm={10}><Form.Control type="email" placeholder="제목.." /></Col>     
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>시간</Form.Label>
                    <Col sm={10}> <DatePicker locale="ko" selected={nowDay.date.toDate()}/></Col>     
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>첨부</Form.Label>
                    <Col sm={10}><Form.File id="exampleFormControlFile1" label="Example file input" /></Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>첨부</Form.Label>
                    <Col sm={10}> <Form.Control as="textarea" rows={3} placeholder="설명.."/></Col>
                </Form.Group>                             
            </Form> 
            <button><X size={100}/></button>           
        </Popup>
    )
}

export default WritePopup;