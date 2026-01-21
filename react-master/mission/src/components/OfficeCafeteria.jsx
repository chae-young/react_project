// [문제의 코드] src/App.jsx - 모든 로직이 한 곳에 섞여 있어 관리가 불가능함
import React, { useReducer } from 'react';
import { initialState, officeCafeteriaReducer } from '../store/cafeteria/cafeteriaReducer';
import { addRice, changeMenu, refillSoup } from '../store/cafeteria/cafeteriaActions';


export default function OfficeCafeteria() {
  const [state, dispatch] = useReducer(officeCafeteriaReducer, initialState);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>🍱 사내 식당 </h1>
      <p>밥: {state.rice} | 국: {state.soup} | 메뉴: {state.mainMenu}</p>
      
      {/* 액션 객체를 매번 직접 타이핑함 (오타 위험 높음) */}
      <button onClick={() => dispatch(addRice(10))}>밥 추가</button>
      <button onClick={() => dispatch(refillSoup(10))}>국 추가</button>
      <button onClick={() => dispatch(changeMenu('돈까스'))}>메뉴 변경</button>
    </div>
  );
}