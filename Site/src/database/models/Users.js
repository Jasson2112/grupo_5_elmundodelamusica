module.exports = (sequelize, dataTypes) => {
    const Users = sequelize.define('Users', {
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
        timestamps: false,
        paranoid: true
    });

    Users.associate = (models) => {
        Users.hasMany(models.Buy, {
        as: 'userBuy',
        foreignKey: 'id'
    }); 
        Users.belongsTo(models.User_category, {
        as: 'userCategory',
        foreignKey: 'id_category' 
    });       

}
    
    return Users;
}