module.exports = (sequelize, dataTypes) => {
    const Products = sequelize.define('Products', {
        product_id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(50),
        },
        description: {
            type: dataTypes.STRING(1500),
        },
        price: {
            type: dataTypes.DECIMAL(8,2),
        },
        discount: {
            type: dataTypes.DECIMAL(3,2),
        },
        id_category: {
            type: dataTypes.INTEGER,
        },
        id_brand: {
            type: dataTypes.INTEGER,
        },
        image: {
            type: dataTypes.STRING(50),
        }
    }, {
        tableName: 'products',
        timestamps: false,
        paranoid: true
    });

    Products.associate = models => {
        Products.hasMany(models.Buy_detail, {
        as: 'productBuy',
        foreignKey: 'product_id'
    }); 
        Products.belongsTo(models.Product_category, {
        as: 'productCategory',
        foreignKey: 'id_category' 
    });
    Products.belongsTo(models.Product_brand, {
        as: 'productBrand',
        foreignKey: 'id_brand' 
    });    

}
    
    return Products;
}