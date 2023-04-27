const exp = require("constants");


// get all products
const getAllProduct = (req, res) => {
    Product.findAll().then(products => {
        res.json(products);
    });
}


// add new product
const newProduct = async (req, res) => {

    await Product.create({
        title: req.body.pName,
        price: req.body.price,
        Description: req.body.pDescription,
        createdby: req.body.createdBy,
    })

    res.send({ message: "user Added successfully" })

}


// Delete product (product owner only)
const deleteProduct = (req, res) => {
    Product.findByPk(req.params.id).then(product => {
        if (product.createdby === req.user.id) {
            product.destroy().then(() => {
                res.json({});
            });
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    });
}


// Update product (product owner only)
const updateProduct = (req, res) => {
    Product.findByPk(req.params.id).then(product => {
        if (product.createdby === req.user.id) {
            product.update(req.body).then(() => {
                res.json(product);
            });
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    });
}


// Search for products where price greater than 3000
const searchProOp = (req, res) => {
    Product.findAll({
        where: {
            price: { [Product.price]: 3000 }
        }
    }).then(products => {
        res.json(products);
    });
}

export {
    getAllProduct,
    newProduct,
    deleteProduct,
    updateProduct,
    searchProOp
}