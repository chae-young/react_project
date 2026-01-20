import { useReducer } from "react"

const initalState = {
    items: [
        {id:1, name: '고성능 키보드', price: 150000, qty: 1},
        {id:2, name: '무선 마우스', price: 80000, qty: 1}
    ],
    totalPrice: 23000,
    discount: 10000
}

function cartReducer(state, action) {
    switch(action.type) {
        case 'INCREASE_QTY':
            return {
                ...state,
                items: state.items.map((item) => 
                    item.id === action.payload.id ? {...item, qty: item.qty + 1} : item
                ),
                totalPrice: state.totalPrice + action.payload.price,
                discount: Math.max(0, state.discount - 500)
            }
        default:
            return state;
    }
}


export default function ReducerCartPage() {
    // useReducer 연결
    const [state, dispatch] = useReducer(cartReducer, initalState)
    return (
        <div style={{ padding: '20px', border: '2px solid #6366f1', borderRadius: '20px' }}>
            <h1>🛒 장바구니 (useReducer 첫걸음)</h1>
            <hr />
            <ul>
                {state.items.map(item => (
                <li key={item.id} style={{ marginBottom: '12px' }}>
                    <strong>{item.name}</strong> (수량: {item.qty}개)
                    <button 
                    onClick={() => dispatch({
                        type: 'INCREASE_QTY',
                        payload: {id: item.id, price: item.price}
                    })}
                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                    >
                    + 수량 추가
                    </button>
                </li>
                ))}
            </ul>
            <div style={{ backgroundColor: '#f1f5f9', padding: '15px', borderRadius: '12px' }}>
                <p>상품 합계: {state.totalPrice.toLocaleString()}원</p>
                <p>적용 할인: -{state.discount.toLocaleString()}원</p>
                <h2 style={{ color: '#4f46e5' }}>최종 결제 금액: {(state.totalPrice - state.discount).toLocaleString()}원</h2>
            </div>
        </div>
    )
}
