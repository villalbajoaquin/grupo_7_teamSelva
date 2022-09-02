module.exports = (sequelize, DataTypes)=>{


    const UserCategory = sequelize.define("userCategory", {
        idUserCategory: {
            autoIncrement: true,
            primaryKey: true,
            type:DataTypes.INTEGER
        },
            userCategoryName:{
            allowNull: false,
            type: DataTypes.STRING
        }
     }, 
        {
        tableName: "userCategory",
        timestamps: false
    });

    UserCategory.associate = models =>{
        UserCategory.hasMany(models.Users,
            {
                as: "user",
                foreignKey: "idUserCategory"
            }
        );
    };
    return UserCategory;
}