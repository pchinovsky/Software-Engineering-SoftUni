import { connect } from 'mongoose';

const dbURL = 'mongodb://localhost:27017/moviesDB';

export async function mongooseConfig() {
    try {
        await connect(dbURL);
        console.log('connected to mongo');
    } catch (error) {
        console.error('error connecting to mongo:', error);
    }
}


// connect(dbURL).then(() => {
//     console.log('connected to mongo');
// }).catch((error) => {
//     console.error('error connecting to mongo:', error);
// });