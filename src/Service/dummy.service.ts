import { injectable } from "inversify";
import { connection } from "../config/connection";
import { DummyRepo } from "../repo/dummy.repository";



@injectable()
export class DummyService {
    constructor(
        private _dummyRepo: DummyRepo,
        private _connection: connection) {
    }

    getDetails(req: any, res: any): Promise<any> {
        return this._dummyRepo.getDetails(req, res);
    }
}