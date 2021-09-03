const express = require('express');
const app = express();
const repoRoutes = require('./repo.route');
const userRoutes = require('./user.route');

app.use('/repo', repoRoutes);

app.use('/user', userRoutes);

module.exports = app;
