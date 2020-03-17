import express from "express";
import { injectable } from "inversify";
const cookieParser = require('cookie-parser');
import { UserRoute } from './routes/user.route';
import { AuthRoute } from './routes/auth.route';


@injectable()

export class App {

	public express: express.Application;
	constructor(
		private userRoute: UserRoute,
		private authRoute: AuthRoute
	) {
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
		this.express.use('/dummy', this.dummy.router);
	}

}