import express from "express";
import { injectable } from "inversify";
import { DummyRoute } from "./routes/dummy.routes";
const cookieParser = require('cookie-parser');



@injectable()

export class App {

	public express: express.Application;
	constructor(private _dummyRouter: DummyRoute) {
		this.express = express();
		this.initializeMiddlewares();
		this.initializeRoute();
	}

	private initializeMiddlewares(): void {
		this.express.use(express.json());
		this.express.use(cookieParser());
		this.express.disable('x-powered-by');
		this.express.use(express.urlencoded({ extended: false }))
	}

	private initializeRoute(): void {
		this.express.use('/dummy', this._dummyRouter.router);
	}

}