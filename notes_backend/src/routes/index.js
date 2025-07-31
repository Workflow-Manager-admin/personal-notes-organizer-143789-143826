const express = require('express');
const healthController = require('../controllers/health');
const authRoutes = require('./auth');
const notesRoutes = require('./notes');

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Health endpoint
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Service health check passed
 */
router.get('/', healthController.check.bind(healthController));

// Mount auth and notes routes
router.use('/auth', authRoutes);
router.use('/notes', notesRoutes);

module.exports = router;
