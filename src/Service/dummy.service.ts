import { injectable } from "inversify";
import { connection } from "../config/connection";
import { DummyRepository } from "../repo/dummy.repository";



@injectable()
export class DummyService {
    constructor(
        private _dummyRepo: DummyRepository,
        private _connection: connection) {
    }

    getDetails(req: any, res: any): Promise<any> {
        return this._dummyRepo.getDetails(req, res);
    }
}