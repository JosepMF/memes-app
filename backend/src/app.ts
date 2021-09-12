import express, { Application } from "express";
import path from 'path';
import morgan from 'morgan'; 
import cors from 'cors'

import memeRouter from './routers/memesRouter';
import usersRouter from './routers/usersRouter';

// settings for app 
export interface AppSettings {
    port: number;
}

export class Server {
    
    // create the object server
    app: Application = express();

    constructor(port: number) {
        this.settings(port);
        this.middlewares();
        this.routers();
        this.listen();
    }

    // init routers
    private routers() {
        this.app.use('/api/users', usersRouter);
        this.app.use('/api/memes', memeRouter);
    }

    // init middlewares
    private middlewares() {
        this.app.use(express.static(path.join(__dirname, 'uploads')));
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors())
    }
 
    // init settings
    private settings(port: number) {
        this.app.set('port', port);
    }

    // init server
    private async listen() {
        await this.app.listen(this.app.get('port'));
        console.log(`[*] the API is locate in a port ${this.app.get('port')}`)
    }
}

