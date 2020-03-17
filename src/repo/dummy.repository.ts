import { injectable } from "inversify";
import { connection } from "../config/connection";


@injectable()
export class DummyRepo {
    constructor(
        private _connection: connection) {
    }

    getDetails(req: any, res: any): Promise<any> {
        const dataBaseclient = this._connection.getClient();
        dataBaseclient.connect();
        const sql = ''; // sql query

        return dataBaseclient.query(sql).then((res: any) => {
            dataBaseclient.end();
            if (res.rows) {
                return res.rows;
            }
        });
    }
}