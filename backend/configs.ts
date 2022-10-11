import { join } from 'path';

export const configs = {
    path: join(__dirname,'../', 'frontend/build'),
    cors : {
        origin: true,
        methods: ['GET', 'PATCH', 'POST', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length'],
        exposedHeaders: ['x-provider', 'limit', 'page', 'count', 'X-Response-Time']
    },
    mongodb : {
        uri: 'mongodb://database:27017/rexpo',
        uriTest: 'mongodb://database:27017/rexpo-test',
        debug: false,
    },
    // mongoURL: 'mongodb://mongodb:27017'
    mongoURL: 'mongodb://me@asdf:mongodb'

}