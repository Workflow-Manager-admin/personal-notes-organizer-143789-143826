const jwt = require('jsonwebtoken');

class AuthController {
  // Login and generate a token
  login(req, res) {
    // In a real app, you'd validate username/password against a database
    const { username } = req.body;
    if (!username) {
        return res.status(400).json({ message: 'Username is required' });
    }
    
    const user = { name: username };
    const accessToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    return res.json({ accessToken });
  }
}

module.exports = new AuthController();
