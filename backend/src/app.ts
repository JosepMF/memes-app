import express, { Application } from "express";
import path from 'path';
import morgan from 'morgan'; 

// settings for app 
export interface AppSettings {
    port: number;
}

export class Server {
    
    // create the object server
    app: Application = express();

    constructor(port: number) {
        this.listen();
        this.settings(port);
        this.middlewares();
        //this.routers();
    }

    // init routers
    private routers() {
        this.app.use('/api/users' /* router */);
        this.app.use('/api/memes' /* router */);
    }

    // init middlewares
    private middlewares() {
        this.app.use(express.static(path.join(__dirname, 'uploads')));
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    // init settings
    private settings(port: number) {
        this.app.set('port', port);
    }

    // init server
    private listen() {
        this.app.listen(3000);
    }
}

