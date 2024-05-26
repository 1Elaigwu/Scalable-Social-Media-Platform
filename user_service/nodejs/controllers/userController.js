const ObjectId = require('mongodb').ObjectId;

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = {
        user_id: new ObjectId(),
        username,
        email,
        password_hash: password,
        created_at: new Date()
    };

    try {
        const result = await req.db.collection('users').insertOne(newUser);
        res.status(201).json(result.ops[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await req.db.collection('users').findOne({ email, password_hash: password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
