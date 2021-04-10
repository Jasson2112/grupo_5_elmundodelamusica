module.exports = (sequelize, dataTypes) => {
    const Product_bra = sequelize.define('Product_bra', {
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
        paranoid: true
    });

    Product_bra.associate = models => {
        Product_bra.hasMany(models.Products, {
        as: 'productBrand',
        foreignKey: 'id_brand'
    }); 
}
    
    return Product_bra;
}