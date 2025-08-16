import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

// ConfigModule: To be able to use the environment variables globally
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env.production.local'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
