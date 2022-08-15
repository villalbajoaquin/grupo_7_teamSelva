module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define(
        'Product',
        {
            name: {
                type: dataTypes.STRING(55),
                allowNull: false
            },
            imgsrc: {
                type: dataTypes.STRING(55),
                allowNull: false
            },
            date: {
                type: dataTypes.DATE,
                allowNull: false
            },
            time: {
                type: dataTypes.TIME,
                allowNull: false
            },
            tickets: {
                type: dataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            price: {
                type: dataTypes.INTEGER.UNSIGNED,
                allowNull: false
            }
        },
        {
            tableName: 'products',
            timestamps: false
        }
    );
    return Product;
};