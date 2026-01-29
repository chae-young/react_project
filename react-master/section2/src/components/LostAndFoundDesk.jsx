import React, {useContext, useState} from 'react'
import { CenterContext } from '../contexts/contexts';

export default function LostAndFoundDesk() {
    const {lostItems, claimItem, reportLost} = useContext(CenterContext)
    const [inputText, setInputText] = useState("");

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
            <h2>📦 분실물 센터</h2>
            <ul>
                {lostItems.map(item => (
                <li key={item}>
                    {item} <button onClick={() => claimItem(item)}>찾아감</button>
                </li>
                ))}
            </ul>
            <input 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
                placeholder="분실물 입력"
            />
            <button onClick={() => { reportLost(inputText); setInputText(""); }}>신고하기</button>
        </div>
    )
}
