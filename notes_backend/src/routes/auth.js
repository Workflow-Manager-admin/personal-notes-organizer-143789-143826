const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in to get an authentication token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: testuser
 *     responses:
 *       200:
 *         description: Authentication token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 */
router.post('/login', authController.login);

module.exports = router;
