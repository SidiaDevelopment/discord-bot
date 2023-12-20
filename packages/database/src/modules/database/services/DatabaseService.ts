import {Service} from "@sidia/service"
import {useContext} from "@sidia/core"
import {LoggingContext, LogLevel} from "@sidia/logging"
import {DataSource} from "typeorm"
import {TestEntity} from "../entities/TestEntity"

export class DatabaseService extends Service {
    private client: DataSource

    public async init(): Promise<void> {
        this.client = new DataSource({
            logger: "advanced-console",
            type: "sqlite",
            database: "./data/dev.sq3",
            entities: [TestEntity],
            synchronize: true
        })
        await this.client.initialize()
        const {logger} = useContext(LoggingContext)
        logger.log("@sidia/database", LogLevel.Debug, "Connected to database")

        const test = new TestEntity()
        test.name = "sidia"
        await this.client.manager.save(test)
    }
}
