'use strict';
const mongoose = require('mongoose');
const dbURL = process.env.db;

mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose Connected!`);
});

mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose Disconnected`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Error while connecting ${err}`);
});

