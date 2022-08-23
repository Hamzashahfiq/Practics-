const Products = require('./ProductsModel')



const addProduct = async (req, res) => {
    if (!req.body.productTitle ||!req.body.productDesc || !req.body.category || !req.body.price||!req.body.imageUrl) {
        let responseData = {
            message: 'params required: productTitle, productDesc,category, price, imageUrl',
        }
        res.status(400).json(responseData);
        return;
    }
 
    let addNewPrduct = {
        productTitle: req.body.productTitle,
        productDesc: req.body.productDesc,
        category: req.body.category,
        price:req.body.price,
        imageUrl:req.body.imageUrl,
        createdAt: new Date(),
    }

    const newProduct = new Products(addNewPrduct)

    try {
        const nProduct = await newProduct.save()
        let responseData = {
            message: 'Product has been added successfully',
            data: nProduct
        }
        
        req.body.userName
        res.status(200).json(responseData);
    }
    catch (error) {
        let responseData = {
            message: error
        }
        res.status(404).json(responseData);
    }
}
const getProduct = async (req, res) => {

    try {
        const nProduct = await Products.find()
        let responseData = {
            statusCode: 200,
            message: 'Products',
            data: nProduct
        }
        
        req.body.userName
        res.status(200).json(responseData);
    }
    catch (error) {
        let responseData = {
            message: error
        }
        res.status(404).json(responseData);
    }
}




module.exports = {
    addProduct,
    getProduct
}
