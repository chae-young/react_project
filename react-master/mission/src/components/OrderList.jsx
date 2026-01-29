import React, {useContext, useEffect} from 'react'
import OrderItem from './OrderItem'
import { AuthEnginContext } from '../context/context'
import Skeleton from './Skeleton'

export default function OrderList() {
    const {items, isLoading, error, dispatch} = useContext(AuthEnginContext)


    useEffect(() => {
        async function fetchData() {
            dispatch({type: 'FETCH_START'})

            try {
                await new Promise((resolve) => setTimeout(resolve, 2000))

                const mockData = [
                    {id: 1, title: '주문 상품 1'},
                    {id: 2, title: '주문 상품 1'},
                    {id: 3, title: '주문 상품 1'},
                ]
        
                dispatch({type: 'FETCH_SUCCESS', payload: mockData})
            }catch(error) {
                dispatch({type: 'FETCH_FAILUR', payload: '에러가 발생했습니다.'})
            }
        }
        
        fetchData()
    }, [dispatch])

  return (
    <>
        <div>
            <h2>매출 차트 위젯</h2>
            {isLoading ? <Skeleton/> :        
            <ul>
                {items.map((item, idx) => <OrderItem key={idx} item={item}/>)}
            </ul>
            }
        </div>
        <div>
            <h2>주문 목록 위젯</h2>
            {isLoading ? <Skeleton/> : 
            <ul>
                {items.map((item, idx) => <OrderItem key={idx} item={item}/>)}
            </ul>
            }
        </div>

        <p>{isLoading && '[ 상태 메시지: 현재 서버로부터 데이터를 불러오고 있습니다... ]'}</p>
    </>
  )
}
