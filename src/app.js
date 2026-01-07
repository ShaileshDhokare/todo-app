const express = require('express');
const path = require('path');
const sampleTodos = require('./utils/sampleTodos');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('pages/homepage', { todos: sampleTodos });
});

app.get('/new-todo', (req, res) => {
  res.render('pages/newTodo');
});

app.post('/add-todo', (req, res) => {
  const newTodo = {
    id: sampleTodos.length + 1,
    user_id: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11',
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    due_date: req.body.due_date,
    status: 'PENDING',
    created_at: new Date(),
    updated_at: new Date(),
    is_deleted: false,
  };
  sampleTodos.push(newTodo);
  res.redirect('/');
});

module.exports = app;
