import { comparePassword, User } from "../models/userSchema.js";
import { generateToken } from "./jwt.js";

export const signupData = async (req, res) => {
    const { name, email, password, isAdmin = false} = req.body;
    try {
        if(!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.create({name, email, password, isAdmin});
        if(!user) {
            return res.status(400).json({ message: "User not created" });
        } else{
            return res.status(201).json({ message: "User created successfully", user })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const loginData = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (!user)  return res.status(400).json({ message: "Invalid email or password" });

        const isMatch = await comparePassword(password, user.password);

        if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

        const token = generateToken(user._id,user.isAdmin);

            res.cookie("token",token);
            return res.status(200).json({ message: "Login successful", user, token })
        
    } catch (error) {   
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}