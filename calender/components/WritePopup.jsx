import React,{useState} from 'react';
import moment from 'moment';
import { Form,Row,Col } from 'react-bootstrap';
import DatePicker,{ registerLocale, setDefaultLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko'; 
registerLocale('ko', ko);

const WritePopup = ()=>{
    //const [startDate, setStartDate] = useState(new Date());
    var date = new Date();
    var todayDate = moment().toDate();

    console.log(moment().toDate())
    return(
        <>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>Email address</Form.Label>
                    <Col sm={10}><Form.Control type="email" placeholder="제목.." /></Col>     
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>시간</Form.Label>
                    <Col sm={10}> <DatePicker locale="ko" selected={ todayDate}/></Col>     
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
        </>
    )
}

export default WritePopup;