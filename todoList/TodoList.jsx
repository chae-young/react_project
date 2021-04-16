import React,{useCallback, useState} from 'react';
import { List, Input, Button, Checkbox } from 'antd';
// import "antd/dist/antd.less";

const TodoList = ()=>{
    const [text,setText] = useState();
    const [list,setList] = useState([]);

    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    },[])
    const onSubmit = useCallback(()=>{
        setList([...list,text])
    },[text])
    const onChangeCheckbox = useCallback(()=>{
        
    },[])

    return(
        <>
            <Input placeholder="나의 할일은.." value={text} onChange={onChangeText}/><Button type="primary" onClick={onSubmit}>Add</Button>
            <div>
                {list.length ? <List
                    bordered
                    dataSource={list}
                    renderItem={item => (
                        <List.Item>
                            <Checkbox onChange={onChangeCheckbox}>{item}</Checkbox>
                        </List.Item>
                    )}
                    />: null
                }
            </div>
                       
        </>
    )
}

export default TodoList;