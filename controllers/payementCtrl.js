const Payments = require('../models/paymentModel')
const Users = require('../models/userModel')
const Products = require('../models/productModel')


const paymentCtrl = {
    getPayments: async(req, res) =>{
        try {
            const payments = await Payments.find()
            res.json(payments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    createPayment: async(req, res) => {
        try {
          
             const {cart, name, phone, email, adress} = req.body;
            
         const newPayment = new Payments({
            cart, name,phone, email,  adress
             })
        
            await newPayment.save()
            res.json({msg: "Payment Succes!"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
    


}


module.exports = paymentCtrl