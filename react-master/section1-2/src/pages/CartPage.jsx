import { useState } from 'react';

export default function CartPage() {
    // 피퍈화된 상태들?
    const [items, setItems] = useState([
        {id: 1, name: '고성능 키보드', price: 150000},
        {id: 2, name: '무선 마우스', price: 850000},
    ])
    
    const [totalPrice, setTotalPrice] = useState(23000)
    const [isLoading, setIsLoading] = useState(false)

    const handleAddToCart = () => {
        const newItem = {id: Date.now(), name: '새상품', price: 5000}
        // 아이템과 토탈값을 따로 업데이트해야함 -> 상태 동기화의 위험성
        setItems((prev) => [...prev, newItem])
        setTotalPrice((prev) => prev + newItem.price)
    }

    const handleRemoveItem = (id, price) => {
        // ⚠️ 여기서 만약 setTotalPrice를 깜빡한다면? 데이터와 화면의 숫자가 따로노는 상태 불일치 버그 발생
        setItems((prev) => prev.filter((item) => item.id !== id))
        setTotalPrice((prev) => prev - price)
    }


    return (
        <div style={{ padding: '20px', lineHeight: '1.6' }}>
        <h1>🛒 장바구니 (useState 버전)</h1>
        <hr />
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price.toLocaleString()}원
              <button onClick={() => handleRemoveItem(item.id, item.price)} style={{ marginLeft: '10px' }}>
                삭제
              </button>
            </li>
          ))}
        </ul>
        <h2>총 결제 금액: {totalPrice.toLocaleString()}원</h2>
        <button onClick={handleAddToCart} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          상품 추가 (+50,000원)
        </button>
        
        <blockquote style={{ marginTop: '30px', background: '#f0f0f0', padding: '10px' }}>
          <strong>강사의 한마디:</strong> 지금은 상태가 2개지만, 할인율, 배송비, 포인트 계산까지 
          추가된다면 handleRemoveItem 함수는 순식간에 10줄이 넘는 괴물 코드가 될 것입니다.
        </blockquote>
      </div>
  
    )
}


