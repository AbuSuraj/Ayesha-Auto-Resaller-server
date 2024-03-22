const jwt = require('jsonwebtoken');
const usersCollection = require('../../model/users/Users.model');

exports.generateAccessToken = async (req, res) => {
    try {
        const email = req.query.email;
        console.log(email);
        const query = { email: email };
        const user = await usersCollection.findOne(query);
        if (user) {
            const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
                expiresIn: '1h',
            });
            return res.send({ accessToken: token });
        }
        res.status(403).send({
            message: 'Unauthorized access',
            accessToken: '',
        });
    } catch (error) {
        console.error("Error generating access token:", error);
        res.status(500).json({ error: "Failed to generate access token" });
    }
};
