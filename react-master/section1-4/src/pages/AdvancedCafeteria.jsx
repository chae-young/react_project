import { useReducer } from "react"


/**
 * reducer 함수
 * @param {number} state 
 * @param {object} action 
 * @returns {number}
 */
function cafeteriaReducer(state, action) {
    switch(action.type) {
        case 'ADD_RICE': {
            const addedAmount = action.payload.amount;
            return {
                ...state,
                rice: state.rice + addedAmount
            }
        }
        case 'REFILL_SOUP': {
            return {
                ...state,
                soup: state.soup + action.payload.amount
            }
        }
        case 'CHANGE_SIDE':
            return {
                ...state,
                side: action.payload.newSide
            }
        default:
            return state;
    }
}

// 급식실 제고관리 시스템
export default function AdvancedCafeteria() {

    const initialState = {
        rice: 20,
        soup: 20,
        side: '김치'
    }
    // useReducer 연결
    const [state, dispatch] = useReducer(cafeteriaReducer, initialState)

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1 style={{ color: '#1e293b' }}>🏛️ 중앙 관리 급식실 (Advanced)</h1>
        <hr />
  
        <section style={{ marginBottom: '20px' }}>
          <p>🍚 밥 재고: <strong>{state.rice}</strong>인분</p>
          {/* payload라는 이름의 객체에 데이터를 실어서 보냅니다. */}
          <button onClick={() => dispatch({ type: 'ADD_RICE', payload: { amount: 10 } })}>
            밥 10인분 추가 조리
          </button>
        </section>
  
        <section style={{ marginBottom: '20px' }}>
          <p>🍲 국 재고: <strong>{state.soup}</strong>인분</p>
          <button onClick={() => dispatch({ type: 'REFILL_SOUP', payload: { amount: 5 } })}>
            국 5인분 추가
          </button>
        </section>
  
        <section style={{ marginBottom: '20px' }}>
          <p>🍱 오늘의 반찬: <span style={{ color: '#4f46e5', fontWeight: 'bold' }}>{state.side}</span></p>
          <button onClick={() => dispatch({ type: 'CHANGE_SIDE', payload: { newSide: "메추리알장조림" } })}>
            반찬 교체 (장조림)
          </button>
        </section>
      </div>
    )
}
