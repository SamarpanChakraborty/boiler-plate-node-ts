import { injectable } from "inversify";
import { Client } from 'pg';

@injectable()
export class connection {
    connectionstring: string;

    constructor() {
        this.connectionstring = 'postgresql://postgresql:root@localhost:5432/test'
        //process.env.DB_connection as string;
    }

    init() {

    }

    getClient() {
        const client = new Client({ connectionString: this.connectionstring });
        return client;
    }
}

