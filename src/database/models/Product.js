module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define(
        'Product',
        {
            name: {
                type: dataTypes.STRING(55),
                allowNull: false
            },
            imgsrc: dataTypes.STRING(55),
            date: dataTypes.DATE,
            time: dataTypes.TIME,
            tickets: dataTypes.INTEGER.UNSIGNED,
            price: dataTypes.INTEGER.UNSIGNED
        },
        {
            tableName: 'products',
            timestamps: false
        }
    );
    return Product;
};