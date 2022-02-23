import React from 'react'
import Cards from './ProductData/CardItem'


const Products = () => {
 

  return (
    <>
    <div className="container py-5">
      <div className="row">
        <div className="col-12  text-center">
          <h1>Products</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
      <Cards />
      </div>
    </div>
    </>
  )
}
export default Products;