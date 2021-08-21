import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
 import Filters from './Filters'
import LoadMore from './LoadMore'
import axios from 'axios'



function Products() {
    const state = useContext(GlobalState)
     const [products] = state.productsAPI.products
     const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
     const [callback, setCallback] = state.productsAPI.callback

    
    const deleteProduct = async(id, public_id) => {
                try {
                    const destroyImg = axios.post('/api/destroy', {public_id},{
                        headers: {Authorization: token}
                    })
                    const deleteProduct = axios.delete(`/api/products/${id}`, {
                        headers: {Authorization: token}
                    })
        
                    await destroyImg
                    await deleteProduct
                     setCallback(!callback)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

    
    return (
      <>
          <Filters />

        <div className="products">
            {
                products.map(product => {
                    return <ProductItem  key={product._id}  product={product}
                    isAdmin={isAdmin}  deleteProduct={deleteProduct}/>
                   
                })
            } 
        </div>
                 <LoadMore/>   

     </>
       
    )
}

export default Products