import {Entity, PrimaryGeneratedColumn} from "typeorm"
import {autoLoadEntity} from "../../../decorators/autoLoadEntity"

@Entity()
@autoLoadEntity()
export class TestEntity {
    @PrimaryGeneratedColumn()
    id: number

    name: string
}
