const orderModel = require('./orderModel')

const getOrders = async(req, res) =>{
    try {
        const orders = await orderModel.find();
        let response = {
          status: 200,
          message: "Successfully fatch data",
          data: orders
        };
        res.json(response);
      } catch (error) {
        let response = {
          status: 400,
          message: error,
        };
        res.json(response);
      }

}

const addOrder = async(req, res) =>{

    if(!req.body.title || !req.body.category ||!req.body.price){
      let response = {
          status:400,
          message: "Params are required: Should be title , category and price"
      }
      res.send(response)
      return;
    }
  
   let orderData ={
      title: req.body.title,
      category: req.body.category,
      price: req.body.price,
      createdAt: new Date()
   }
  
   const order = new orderModel(orderData)
  
   try {
      await order.save();
      let response = {
        status: 200,
        message: "Successfully created",
      };
      res.json(response);
    } catch (error) {
      let response = {
        status: 400,
        message: error,
      };
      res.json(response);
    }
  
  }
  const updateOrder = async(req, res) =>{
    if(!req.body.title || !req.body.category ||!req.body.price){
        let response = {
            status:400,
            message: "Params are required: Should be title , category and price"
        }
        res.send(response)
      }
    
     let updatedOrder ={
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        createdAt: new Date()
     }
    
     console.log("req.params.id",req.params.id);


     try {
        await orderModel.updateOne({_id:req.params.id }, updatedOrder);
        let response = {
          status: 200,
          message: "Successfully updated",
        };
        res.json(response);
      } catch (error) {
        let response = {
          status: 400,
          message: error,
        };
        res.json(response);
      }
    
}
const deleteOrder = async(req, res) =>{
    try {
        await  orderModel.deleteOne({ _id: req.query.id })
        let response = {
          status: 200,
          message: "Successfully deleted",
        };
        res.json(response);
      } catch (error) {
        let response = {
          status: 400,
          message: error,
        };
        res.json(response);
      }
}


module.exports = {
    getOrders,
    addOrder,
    updateOrder,
    deleteOrder
}