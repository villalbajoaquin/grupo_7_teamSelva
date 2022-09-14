module.exports = (sequelize, DataTypes) => {

    //Definicion del modelo usuario

    const User = sequelize.define("Users", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lastName: {
           allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        categoryId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        password: {
            allowNull: false,
            unique: true,
            type: DataTypes.STRING
        },
        avatar: {
            allowNull: false,
            type: DataTypes.STRING
        }
    },
        {
            tableName: "users",
            paranoid: true,
            deletedAt: 'softDelete',
            createdAt: 'createAt',
            updatedAt: 'modifiedAt'
        });

    User.associate = (models) => {

        User.belongsTo(models.userCategory,
            {
                as: "category1",
                foreignKey: "categoryId"
            }
        );
    }
    return User;
}