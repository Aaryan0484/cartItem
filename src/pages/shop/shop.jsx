import React from 'react'
import {PRODUCTS} from '../../products'
import {Product} from './product'
import './shop.css'
function shop() {
  return (
    <div className="shop">
    <div className="shopTitle">
      <h1>ALL IN ONE</h1>
    </div>

    <div className="products">
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
    </div>
  </div>
  )
}

export default shop