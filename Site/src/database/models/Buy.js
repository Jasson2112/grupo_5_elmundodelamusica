module.exports = (sequelize, dataTypes) => {
    const Buy = sequelize.define('Buy', {
        id_buy: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        date: {
            type: dataTypes.DATE,
        },
        user_id: {
            type: dataTypes.INTEGER,
        },
 
    }, {
        tableName: 'buy',
        paranoid: true
    });

    Buy.associate = models => {
        Buy.belongsTo(models.Users, {
        as: 'buyUser',
        foreignKey: 'user_id'
    }); 
        Buy.hasMany(models.Buy_detail, {
        as: 'buyDetail',
        foreignKey: 'id_buy'   
    });    

}
    
    return Buy;
}