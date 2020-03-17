import { injectable } from "inversify";
import { Request, Response, NextFunction } from "express";
import { DummyService } from "../Service/Dummy.service";


@injectable()
export class DummyController {
    constructor(
        private _dummyService: DummyService) {
    }

    getDetails(req: any, res: any): Promise<any> {
        return this._dummyService.getDetails(req, res);
    }
}