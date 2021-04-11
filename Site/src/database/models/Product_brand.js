module.exports = (sequelize, dataTypes) => {
    const Product_brand = sequelize.define('Product_brand', {
        id_brand: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(50),
        },
 
    }, {
        tableName: 'product_brand',
        timestamps: false,
        paranoid: true
    });

    Product_brand.associate = models => {
        Product_brand.hasMany(models.Products, {
        as: 'productBrand',
        foreignKey: 'id_brand'
    }); 
}
    
    return Product_brand;
}