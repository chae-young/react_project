import React,{useCallback, useState} from 'react';
import { List, Input, Button, Checkbox } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import {ListBox} from './styles';

const TodoList = ()=>{
    const [text,setText] = useState('');
    const [checklist,setCheckList] = useState([]);
    const [completedCheck,setCompletedCheck] = useState([]);

    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    },[])
    const onSubmit = useCallback(()=>{
        if(text!==''){
            setCheckList([ ...checklist,text]);
            setCompletedCheck([...completedCheck,0]);
            setText('');
        }   
    },[text])
    const handleKeyDown = useCallback((e)=>{
        onSubmit()
    },[text])
    const onChangeCheckbox = (num)=>(e)=>{
        setCompletedCheck((prev)=> prev.map((v,i)=> {
            if(v == 0 && i===num && e.target.checked){
                v = 1
            }else if(v == 1 && i===num){
                v = 0
            }
            return v
        }))
    }
    const onRemoveList = useCallback((num)=>(e)=>{
        setCheckList((prev)=> prev.filter((v,i)=> i !== num))
        setCompletedCheck((prev)=> prev.filter((v,i)=> i !== num))
    },[text])
  
    const onAllRemoveList = useCallback(()=>{
        setCheckList([]);
        setCompletedCheck([]);
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
                    renderItem={(item,i) => (
                    <List.Item>
                        <Checkbox defaultChecked={ false} checked={completedCheck[i] ? true : false} className={completedCheck[i] && 'line'} onChange={onChangeCheckbox(i)}>{item}</Checkbox>
                        <Button type="text" onClick={onRemoveList(i)}><CloseCircleOutlined /></Button>
                    </List.Item>
                    )}/><Button style={{float:'right'}} type="text" onClick={onAllRemoveList}>Clear</Button></div>
                : null
                }         
            </ListBox>
        </div>
    )
}

export default TodoList;