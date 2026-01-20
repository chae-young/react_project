import { useReducer } from "react"


/**
 * reducer 함수
 * @param {number} state 
 * @param {object} action 
 * @returns {number}
 */
function cafeteriaReducer(state, action) {
    switch(action.type) {
        case 'INCREASE':
            return state + 1
        case 'DECREASE': 
            return state > 0 ? state - 1 : 0;
        default:
            return state;
    }
}

// 급식실 제고관리 시스템
export default function ReducerCartPage() {
    // useReducer 연결
    const [count, dispatch] = useReducer(cafeteriaReducer, 0)

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>🍱 급식실 재고 관리 시스템</h1>
            <div style={{ 
                fontSize: '2rem', 
                margin: '20px', 
                padding: '20px', 
                background: '#f8fafc', 
                borderRadius: '15px',
                border: '2px solid #e2e8f0'
                }}>
                현재 남은 밥(인분): <strong>{count}</strong>
            </div>
    
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            {/* dispatch를 호출하는 것은 요청서(Action)를 매뉴얼(Reducer)에 던지는 것입니다. */}
                <button 
                    onClick={() => dispatch({ type: 'INCREASE' })}
                    style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4ade80', border: 'none', borderRadius: '8px' }}
                >
                    🍚 밥 추가 조리 (INCREASE)
                </button>
                
                <button 
                    onClick={() => dispatch({ type: 'DECREASE' })}
                    style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#fb7185', border: 'none', borderRadius: '8px' }}
                >
                    🍽️ 밥 배식 하기 (DECREASE)
                </button>
            </div>
    
            <p style={{ marginTop: '20px', color: '#64748b' }}>
                버튼을 누르면 <strong>Dispatch</strong>가 <strong>Action</strong>을 들고 <strong>Reducer</strong>로 달려갑니다!
            </p>
        </div>
    )
}
