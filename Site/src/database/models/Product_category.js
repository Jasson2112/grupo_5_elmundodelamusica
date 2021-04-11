module.exports = (sequelize, dataTypes) => {
    const Product_category = sequelize.define('Product_category', {
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
        timestamps: false,
        paranoid: true
    });

    Product_category.associate = models => {
        Product_category.hasMany(models.Products, {
        as: 'productCat',
        foreignKey: 'id_category'
    }); 
}
    
    return Product_category;
}