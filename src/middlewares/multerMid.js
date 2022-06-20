const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_pdt_${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage });

module.exports = upload;