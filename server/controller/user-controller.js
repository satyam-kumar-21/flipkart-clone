import User from "../models/user-Schema.js";

export const userSignup = async (req, res) => {
    try {

        const exit = await User.findOne({ username: req.body.username });

        if (exit) {
            res.status(401).json({ message: "username already exits" });
        }

        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json({ message: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const userLogin =async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({ username: username, password: password });

        if (user) {
            return res.status(200).json({data: user});
        } else {
            return res.status(401).json('Invalid user');
        }
    } catch (error) {
        res.status(500).json('Error while login', error.message);
    }
}