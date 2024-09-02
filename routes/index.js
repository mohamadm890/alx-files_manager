const express = require('express');
const router = express.Router();
const AppController = require('../controllers/AppController');


route.get('/status', (req, res) => {
AppController.getStatus
})

route.get('/connect', () => {
AuthController.getConnect	
})
route.get('/disconnect', () => {
AuthController.getDisconnect
})
route.get('./users/me', () => {
UserController.getMe
})
route.get('/stats', (req, res) => {
AppController.getStats
})
route.post('/users', (req, res) => {
UsersController.postNew
})
route.post('users',  (req, res) => {
AppController.postNew
})

route.post('files', (req, res) => {
FilesController.postUpload
}
