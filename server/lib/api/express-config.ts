import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';

class ExpressConfig {
    public express: express.Application;

    /**
     * Initializes the express server
     */
     constructor() {
        this.express = express();
    }

    /**
     * Starts the express server
     */
     public initExpress() {
        // security middleware
         this.express.use(helmet());

         this.express.use(compression());
         this.express.use(bodyParser.json({ limit: '50mb' }));
         this.express.use(
            bodyParser.urlencoded({
            limit: '50mb',
            extended: true,
            parameterLimit: 50000
            })
        );

         this.express.use((req, res, next) => {
            // Website you wish to allow to connect
            // res.setHeader('Access-Control-Allow-Origin', 'http://some-accepted-origin');
            // Request methods you wish to allow
            res.setHeader(
            'Access-Control-Allow-Methods',
            'GET, POST, OPTIONS, PUT, PATCH, DELETE'
            );
            // Request headers you wish to allow
            res.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With, Content-type, Authorization, Cache-control, Pragma'
            );
            // Pass to next layer of middleware
            next();
        });
         this.express.use(morgan('combined'));
    }
    
}

/** Export the express module */
export default new ExpressConfig();
