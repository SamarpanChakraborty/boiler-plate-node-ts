import 'reflect-metadata';
import { Container } from "inversify";
import { Connection } from './config/connection';
import { App } from './app';
import { DummyController } from './controller/dummy.controller';
import { DummyService } from './services/dummy.service';
import { DummyRepository } from './repositories/dummy.repository';
import { DummyRoute } from './routes/dummy.route';




const iocContainer = new Container();

iocContainer.bind<App>(App).to(App);



iocContainer.bind<DummyController>(DummyController).to(DummyController);
iocContainer.bind<DummyService>(DummyService).to(DummyService);
iocContainer.bind<DummyRepository>(DummyRepository).to(DummyRepository);
iocContainer.bind<DummyRoute>(DummyRoute).to(DummyRoute);
iocContainer.bind<Connection>(Connection).to(Connection);

export { iocContainer };