import { connect } from 'mongoose';

export async function startConnection() {
    try {
        const url_db = process.env.MONGODB_URL || '';
        await connect(url_db)
            .then(() => console.log('MongoDB connected...'))
            .catch(err => console.log(err.message));
    } catch (err) {
        console.log(err);
    }
}