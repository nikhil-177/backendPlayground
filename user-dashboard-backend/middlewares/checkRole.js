// middlewares/role.js
export const checkRole = function (req, res, next) {
    console.log(req.user);
    
    if (req.user.isAdmin !== true) {
      return res.status(403).send({message:'Access denied. Admins only.'});
    } else {
        next();
    }
};

