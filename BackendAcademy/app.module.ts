import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // Global config — reads .env automatically
    ConfigModule.forRoot({ isGlobal: true }),

    // Feature modules
    UsersModule,
    // TODO: AuthModule
    // TODO: DatabaseModule (TypeORM / Prisma)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
