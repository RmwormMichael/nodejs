const express = require('express');
const productServices = require('../services/servicesProducts')
const router = express.Router()
const validatorHendler = require('../middleware/validator.hendler')
const {schemaProductCreate,updateSchemaProduct,getProductSchema} = require('../schema/schemaProduct')



router.get('/', async(req, res) => {
    try {
    const products = await productServices.getAllProducts(req,res)
    res.json(products)
    } catch (error) {
        next(error)
    }
}
)

router.post('/', validatorHendler(schemaProductCreate, 'body'),
    async (req,res)=>{
    const createProduct = await productServices.createNewProduct(req,res)
})

router.patch('/:id',
    validatorHendler(getProductSchema, 'params'),
    validatorHendler(updateSchemaProduct, 'body'),
    async (req,res)=>{
    const updateProduct = await productServices.updateProduct(req,res)
    res.json(updateProduct)
})

router.delete('/:id', async (req,res)=>{
    const deleteProduct = await productServices.updateProduct(req,res)
    return deleteProduct
})


router.get('/:id',validatorHendler(getProductSchema, 'params'),
    async (req, res)=>{
    const getOneProduct = await productServices.getOneProduct(req,res)
    return getOneProduct
})

module.exports = router;
