const path = require("path");

const userController = {
    register: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/users/register.html"));
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/users/login.html"));
    },
};

module.exports = userController; 