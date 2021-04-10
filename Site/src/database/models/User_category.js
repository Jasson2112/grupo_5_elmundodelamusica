module.exports = (sequelize, dataTypes) => {
    const User_cat = sequelize.define('User_cat', {
        id_category: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER(11)
        },
        name: {
            type: dataTypes.STRING(50),
        },
 
    }, {
        tableName: 'user_category',
        paranoid: true
    });

    User_cat.associate = models => {
        User_cat.hasMany(models.Users, {
        as: 'userCat',
        foreignKey: 'id_category'
    }); 
    

}
    
    return User_cat;
}