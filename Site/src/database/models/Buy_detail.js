module.exports = (sequelize, dataTypes) => {
    const Buy_det = sequelize.define('Buy_det', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        id_buy: {
            type: dataTypes.INTEGER,
        },
        product_id: {
            type: dataTypes.INTEGER,
        },
        quantity: {
            type: dataTypes.INTEGER,
        },
        price: {
            type: dataTypes.DECIMAL(8,2)
        }
 
    }, {
        tableName: 'buy_detail',
        paranoid: true
    });

        Buy_det.associate = models => {
            Buy_det.belongsTo(models.Buy, {
            as: 'buy',
            foreignKey: 'id_buy'
        }); 
            Buy_det.belongsTo(models.Products, {
            as: 'productBuy',
            foreignKey: 'product_id'   
        });    

    }
    return Buy_det;
}