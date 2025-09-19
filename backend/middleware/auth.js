import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Unauthorized! No token provided"})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;
        next();
    }catch (error) {
        console.log(error);
        return res.json({success:false,message:"Unauthorized! Invalid token"})
    }
}

export default authMiddleware;