const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'Static Code')));

const users = {}; 
let posts = [];

const authMiddleware = (req, res, next) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'adminpassword') {
        next(); 
    } else {
        res.status(401).json({ success: false, message: 'Unauthorized' });
    }
};

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.json({ success: false, message: 'Username already exists' });
    }
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
        users[username] = hash;
        res.json({ success: true, message: 'Registration successful' });
    });
});

app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        bcrypt.compare(password, users[username], (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Internal server error' });
            }
            if (result) {
                res.json({ success: true });
            } else {
                res.json({ success: false, message: 'Invalid password' });
            }
        });
    } else {
        res.json({ success: false, message: 'User not found' });
    }
});

app.get('/list-users', (req, res) => {
    res.json(Object.keys(users));
});


app.post('/clear-users', authMiddleware, (req, res) => {
    for (let user in users) {
        delete users[user];
    }
    res.json({ success: true, message: 'All users have been cleared.' });
});

app.get('/list-posts', (req, res) => {
    res.json(posts); 
});

app.post('/add-post', authMiddleware, (req, res) => {
    const { title, content } = req.body;
    const postId = posts.length ? posts[posts.length - 1].id + 1 : 1; 
    posts.push({ id: postId, title, content });
    res.json({ success: true, message: 'Post added successfully.' });
});

app.delete('/delete-post/:id', authMiddleware, (req, res) => {
    const postId = parseInt(req.params.id);
    const initialLength = posts.length;
    posts = posts.filter(post => post.id !== postId);
    if (posts.length < initialLength) {
        res.json({ success: true, message: 'Post deleted successfully.' });
    } else {
        res.json({ success: false, message: 'Post not found.' });
    }
});

app.post('/clear-posts', authMiddleware, (req, res) => {
    posts = []; 
    res.json({ success: true, message: 'All posts have been cleared.' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
