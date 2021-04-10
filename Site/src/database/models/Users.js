module.exports = (sequelize, dataTypes) => {
    const User = sequelize.define('User', {
        user_id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        first_name: {
            type: dataTypes.STRING(50),
        },
        last_name: {
            type: dataTypes.STRING(50),
        },
        email: {
            type: dataTypes.STRING(50),
        },
        password: {
            type: dataTypes.STRING(150),
        },
        address: {
            type: dataTypes.STRING(50),
        },
        tel: {
            type: dataTypes.INTEGER,
        },
        image: {
            type: dataTypes.STRING(50),
        },
        id_category: {
            type: dataTypes.INTEGER,
        }
    }, {
        tableName: 'users',
        paranoid: true
    });

    User.associate = models => {
        User.hasMany(models.Buy, {
        as: 'userBuy',
        foreignKey: 'user_id'
    }); 
        User.belongsTo(models.User_category, {
        as: 'userCategory',
        foreignKey: 'id_category' 
    });       

}
    
    return User;
}