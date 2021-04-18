import React,{useCallback, useState} from 'react';
import { List, Input, Button, Checkbox } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import {ListBox} from './styles';

const TodoList = ()=>{
    const [text,setText] = useState('');
    const [checklist,setCheckList] = useState([]);
    const [isChecked,setIsChecked] = useState(false);
    
    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    },[])
    const onSubmit = useCallback(()=>{
        if(text!==''){
            setCheckList([ ...checklist,text]);
            setText('');
        }     
    },[text])
    const handleKeyDown = useCallback((e)=>{
        onSubmit()
    },[text])
    const onChangeCheckbox = useCallback((e)=>{
        setIsChecked(e.target.checked)
    },[])
    const onRemoveList = useCallback((text)=>(e)=>{
        setCheckList((prev)=>{
            return prev.filter(v=>v!==text)
        })
    },[text])
    const onAllRemoveList = useCallback(()=>{
        setCheckList([])
    },[])

    return(
        <div style={{display:'flex',justifyContent:'center'}}>
            <ListBox>
                <div className={'input-box'}>
                    <Input placeholder="나의 할일은.." value={text} onPressEnter={handleKeyDown} onChange={onChangeText}/><Button type="primary" onClick={onSubmit}>Add</Button>
                </div>
                {checklist.length ? <div><List 
                    bordered
                    dataSource={checklist}                
                    renderItem={item => (
                        <List.Item>
                            <Checkbox className={isChecked && 'line'} onChange={onChangeCheckbox}>{item}</Checkbox>
                            <Button type="text" onClick={onRemoveList(item)}><CloseCircleOutlined /></Button>
                        </List.Item>
                    )}
                    /><Button style={{float:'right'}} type="text" onClick={onAllRemoveList}>Clear</Button></div>
                : null
                }         
            </ListBox>
        </div>
    )
}

export default TodoList;