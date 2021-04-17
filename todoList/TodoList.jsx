import React,{useCallback, useState, useRef} from 'react';
import { List, Input, Button, Checkbox } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const TodoList = ()=>{
    const li = useRef('');
    const [text,setText] = useState('');
    const [checklist,setCheckList] = useState([]);
    const [isChecked,setIsChecked] = useState(false);

    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    },[])
    const onSubmit = useCallback(()=>{
        if(text!==''){
           setCheckList([...checklist,text])
        }

    },[text])
    const onChangeCheckbox = useCallback((e)=>{
        setIsChecked(e.target.checked)
    },[])
    const onRemoveList = useCallback((e)=>{
        console.log(checklist)      
    },[text])

    return(
        <>
            <Input placeholder="나의 할일은.." value={text} onChange={onChangeText}/><Button type="primary" onClick={onSubmit}>Add</Button>
            <div>
                {checklist.length ? <List 
                    bordered
                    dataSource={checklist}
                    renderItem={item => (
                        <List.Item >
                            { }
                            <Checkbox className={isChecked && 'line'} onChange={onChangeCheckbox}>{item}</Checkbox>
                            <Button type="text" onClick={onRemoveList}><CloseCircleOutlined /></Button>
                        </List.Item>
                    )}
                    />: null
                }
            </div>
                       
        </>
    )
}

export default TodoList;