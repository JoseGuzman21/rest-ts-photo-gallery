import { Schema, model, Document } from 'mongoose';

const photoSchema = new Schema({
    title: { type: String },
    description: { type: String },
    imagePath: { type: String },
});

interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string
}

export default model<IPhoto>('Photo', photoSchema);