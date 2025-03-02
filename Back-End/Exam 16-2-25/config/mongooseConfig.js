import { connect } from 'mongoose';

const dbURL = 'mongodb://localhost:27017';

export async function mongooseConfig() {
    try {
        await connect(dbURL, { dbName: 'disasters' });
        console.log('connected to mongo');
    } catch (error) {
        console.error('error connecting to mongo:', error);
    }
}

