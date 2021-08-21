import React from 'react'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin, deleteProduct,}) {

    return (
        <div className="product_card">

            <img src={product.images.url} alt="product image" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>{product.price} dt </span>
                <p>{product.description}</p>
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem

