import userModel from "../models/user.models.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function CreateUser(req, res) {
    try {
        let { username, email, password } = req.body;

        // Check if user already exists
        const isExists = await userModel.findOne({ $or: [{ email }, { username }] });

        if (isExists) {
            // Error format fixed
            return res.status(400).json({ message: "Username or email already exists" });
        }

        // FIXED: Added await here
        const hash = await bcrypt.hash(password, 10);

        const user = await userModel.create({ username, email, password: hash });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.cookie('token', token);

        // Success JSON response format fixed
        return res.status(201).json({ 
            message: "User created successfully", 
            user: { username: user.username, email: user.email }, 
            token 
        });

    } catch (error) {
        console.error("CreateUser Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

async function LoginUser(req, res) {
    try {
        let { username, email, password } = req.body;

        // FIXED: Used findOne() instead of find()
        const user = await userModel.findOne({ $or: [{ email }, { username }] });

        if (!user) {
            return res.status(400).json({ message: "Incorrect credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        // FIXED: Changed req.cookie to res.cookie
        res.cookie('token', token);

        // Message and JSON format fixed
        return res.status(200).json({ 
            message: "Login successful", 
            user: { username: user.username, email: user.email }, 
            token 
        });

    } catch (error) { 
        console.error("LoginUser Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export { CreateUser, LoginUser };