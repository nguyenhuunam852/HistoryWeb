import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import * as dotenv from 'dotenv'
import { join } from 'path'

dotenv.config()

let sync = true
// if (process.env.npm_lifecycle_event === 'sync') sync = true
// if (process.env.npm_lifecycle_event.indexOf('migration:') === 0) sync = true

// if (
//     startsWith(process.env.npm_lifecycle_event, 'migration:')
//     ||
//     startsWith(process.env.npm_lifecycle_event, 'seed:')
// ) {
//     global.IS_CONSOLE = true
// }


const DatabaseConfig = {
    name: 'default',
    type: process.env.DB_CLIENT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    dropSchema: false,
    autoLoadEntities: true,
    schema: "public",
    synchronize: false, /// process.env.NODE_ENV !== 'production',
    entities: [
        join(__dirname,'..', 'entities/*.entity.{ts,js}'),
    ],
    migrations: [
        join(__dirname, '..', 'migrations/*Migrate.{ts,js}')
    ],
    seeds: [
        join(__dirname, '..', 'entities/seeds/*{.ts,.js}'),
    ],
    migrationsDir: join(__dirname, '..', 'migrations'),
    cli: {
        migrationsDir: 'src/migrations'
    },
    cache: {
        type: 'database',
        tableName: '_cache'
    }
} as TypeOrmModuleAsyncOptions

export default DatabaseConfig
