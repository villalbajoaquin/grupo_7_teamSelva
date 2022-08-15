module.exports = (sequelize, dataTypes) => {
    const ProductCart = sequelize.define(
        'ProductCart',
        {
            productId: {
                type: dataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            quantity: {
                type: dataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            price: {
                type: dataTypes.INTEGER.UNSIGNED,
                allowNull: false
            },
            cartId: {
                type: dataTypes.INTEGER.UNSIGNED,
                allowNull: false
            }
        },
        {
            tableName: 'productsCart',
            timestamps: false
        }
    );
    return ProductCart;
};