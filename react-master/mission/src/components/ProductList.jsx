import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList() {
  const items = [{name: '리액트 티셧츠'}, {name: '고양이 감식'}]
  return (
    <ul>
      {items.map((item, idx) => <ProductCard key={idx} name={item.name}/>)}      
    </ul>
  )
}
