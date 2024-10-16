// const express = require('express')
// const mongoose = require('mongoose')
import express from 'express';
import mongoose from 'mongoose';
import listingRoute from './route/listing.route.js';
import cors from 'cors';

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://sheepca03:DQQVtnIZ8a7exjWT@cluster0.j6o91.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri).then(() => console.log('Connected!'));

const app = express();
const dbName = 'dubhacks24'

app.use(cors());

app.use(express.json());

app.listen(4000, () => {
    console.log('Serving is running on port 4000')
})

app.use("/api/listings", listingRoute);
