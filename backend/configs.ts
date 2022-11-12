import { join } from 'path';

export const configs = {
    path: join(__dirname,'../../', 'frontend/build'),
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
    // mongoURL: 'mongodb://root:example@mongo:27017/'
    mongoURL: `${process.env.DB_ROOTURL}${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERVICENAME}:${process.env.DB_PORT}/`
    // mongoURL: 'mongodb://root:example@localhost:27017/'
}