import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose'
import { app } from '../app'
import request from 'supertest';
import jwt from 'jsonwebtoken';

declare global {
    namespace NodeJS {
        interface Global {
            signin(id?: string): string[];
        }
    }
}

jest.mock('../nats-wrapper');

process.env.STRIPE_KEY = 'sk_test_51I6mHaGecBMJEnQDF7ngQqhR3WXUL9Heh1vTPNuIVQPqTH9IuDeVMXajoKy3HFMhBUxn9j2oAwN4NCwhzVDWju0s00i7WGcQW4';

let mongo: any
beforeAll(async () => {
    jest.clearAllMocks();
    process.env.JWT_KEY = "dsaf"
    mongo = new MongoMemoryServer();
    const mongoUri = await mongo.getUri();

    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

beforeEach( async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
})

afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close()
})

global.signin = (id?: string) => {
    //Fake authentication process:

   // Build a JWT payload. { id, email}
    const payload = {
        id: id || new mongoose.Types.ObjectId().toHexString(),
        email: 'test@test.com'
    };
   // Create the JWT!
    const token = jwt.sign(payload, process.env.JWT_KEY!)
   // Build session Object ( {jwt: MY_JWT })
    const session = { jwt: token };
   //Turn that session into JSON
    const sessionJSON = JSON.stringify(session);
   // Take JSON and encode it as base64
    const base64 = Buffer.from(sessionJSON).toString('base64');
   // return a string thats the cookie with the encoded data
    return [`express:sess=${base64}`];
}