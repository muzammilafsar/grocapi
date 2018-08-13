var jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const decoded = jwt.verify(req.body.auth, 'becfe9ac-dd1d-48b0-85f3-16627ca9fadc');
        req.decodedUserData = decoded;
    } catch(err) {
        return res.status(401).json({
            message: 'auth failed'
        })
    }
    next();
}