import { injectable } from "inversify";
import { iocContainer } from '../ioc-container';
import { Request, Response, Router, NextFunction } from "express";
import { DummyController } from "../controller/dummy.controller";


@injectable()
export class DummyRoute {
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        console.log('router');
        this.router.get('/', this.getRouteMethod);
    }

    private getRouteMethod(req: Request, res: Response, nextFunc: NextFunction) {
        console.log('router');
        const dummyController = iocContainer.get<DummyController>(DummyController);
        dummyController.getDetails(req, res);

    }
}