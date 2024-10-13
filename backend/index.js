// const express = require('express')
// const mongoose = require('mongoose')
import express from 'express';
import mongoose from 'mongoose';
import listingRoute from './route/listing.route.js';

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://sheepca03:DQQVtnIZ8a7exjWT@cluster0.j6o91.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(() => console.log('Connected!'));

const app = express();
const dbName = 'dubhacks24'

app.use(express.json());

app.listen(3000, () => {
    console.log('Serving is running on port 3000')
})

app.use("/api/listings", listingRoute);

app.use("/test", (req, res) => {
    res.send("Hello");
})

app.get('/', (req, res) =>  {
    res.send("hello");
});
