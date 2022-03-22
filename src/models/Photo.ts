import { Schema, model, Document } from 'mongoose';

new Schema({
    title: { type: String },
    description: { type: String },
    imagePath: { type: String },
})