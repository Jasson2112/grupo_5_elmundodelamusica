module.exports = (sequelize, dataTypes) => {
    const Product_cat = sequelize.define('Product_cat', {
        id_category: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(50),
        },
 
    }, {
        tableName: 'product_category',
        paranoid: true
    });

    Product_cat.associate = models => {
        Product_cat.hasMany(models.Products, {
        as: 'productCat',
        foreignKey: 'id_category'
    }); 
}
    
    return Product_cat;
}