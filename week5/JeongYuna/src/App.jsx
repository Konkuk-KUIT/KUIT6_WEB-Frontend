import './App.css'
import { useState } from 'react'
import { FilterableProductTable } from './product/FilterableProductTable'
import products from './product/PRODUCTS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FilterableProductTable products={products}/>
    </>
  )
}

export default App
