const { request, response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.e9z0l.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(express.json()); // usa todos os métodos da aplicação
app.use(routes);

app.listen(3333);