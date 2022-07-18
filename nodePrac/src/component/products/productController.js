const ProductModel = require('./productModel')

const getProducts = async(req, res) =>{
    try {
        const products = await ProductModel.find();
        let response = {
          status: 200,
          message: "Successfully fatch data",
          data: products
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


const addProduct = async(req, res) =>{

  if(!req.body.title || !req.body.category ||!req.body.price){
    let response = {
        status:400,
        message: "Params are required: Should be title , category and price"
    }
    res.send(response)
    return;
  }

 let productData ={
    title: req.body.title,
    category: req.body.category,
    price: req.body.price,
    createdAt: new Date()
 }

 const product = new ProductModel(productData)

 try {
    await product.save();
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

const updateProduct = async(req, res) =>{
    if(!req.body.title || !req.body.category ||!req.body.price){
        let response = {
            status:400,
            message: "Params are required: Should be title , category and price"
        }
        res.send(response)
      }
    
     let updatedProduct ={
        title: req.body.title,
        category: req.body.category,
        price: req.body.price,
        createdAt: new Date()
     }
    
     console.log("req.params.id",req.params.id);


     try {
        await ProductModel.updateOne({_id:req.params.id }, updatedProduct);
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
const deleteProduct = async(req, res) =>{
    try {
        await  ProductModel.deleteOne({ _id: req.query.id })
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
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
}