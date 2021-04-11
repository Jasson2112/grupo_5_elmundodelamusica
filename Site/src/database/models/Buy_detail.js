module.exports = (sequelize, dataTypes) => {
    const Buy_detail = sequelize.define('Buy_detail', {
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
        timestamps: false,
        paranoid: true
    });

    Buy_detail.associate = (models) => {
        Buy_detail.belongsTo(models.Buy, {
            as: 'buy',
            foreignKey: 'id_buy'
        }); 
        Buy_detail.belongsTo(models.Products, {
            as: 'productBuy',
            foreignKey: 'product_id'   
        });    

    }
    return Buy_detail;
}