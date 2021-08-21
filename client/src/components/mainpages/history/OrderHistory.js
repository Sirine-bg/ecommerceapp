import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'

function OrderHistory() {
    const state = useContext(GlobalState)
    const [history, setHistory] = state.userAPI.history
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    

    useEffect(() => {
        if(token){
            const getHistory = async() =>{
                if(isAdmin){
                    const res = await axios.get('/api/payment', {
                        headers: {Authorization: token}
                    })
                    setHistory(res.data)
                }
               
            }
            getHistory()
        }
    },[token, isAdmin, setHistory])

    return (
        <div className="history-page">
            <h2>History</h2>

            <h4>You have {history.length} ordered</h4>

            <table>
                <thead>
                    <tr>
                        <th>Articles</th>
                        <th>Name </th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Date of Purchased</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(items => (
                            <tr key={items._id}>
                                <td>{items.cart}</td>
                                <td>{items.name}</td>
                                <td>{items.phone}</td>
                                <td>{items.adress}</td>


                                <td>{new Date(items.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderHistory