import jwt from 'jsonwebtoken';


export const generateToken = (id,isAdmin) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET);
}

export const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return false;
        } else {
            return decoded;
        }
    });
}