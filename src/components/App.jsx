import React from 'react'
import Product from './Product'
import productsData from '../vschoolProducts'

function App () {

    const productComponents = productsData.map(product => <Product key = {product.id} product = {product}/>)

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App