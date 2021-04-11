module.exports = (sequelize, dataTypes) => {
    const User_category = sequelize.define('User_category', {
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
        timestamps: false,
        paranoid: true
    });

    User_category.associate = models => {
        User_category.hasMany(models.Users, {
        as: 'userCat',
        foreignKey: 'id_category'
    }); 
    

}
    
    return User_category;
}