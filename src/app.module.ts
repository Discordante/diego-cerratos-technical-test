import { Module } from '@nestjs/common';
import { RadarModule } from './radar/radar.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RadarModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
