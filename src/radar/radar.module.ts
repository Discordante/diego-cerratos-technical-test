import { Module } from '@nestjs/common';
import { RadarController } from './radar.controller';
import { RadarService } from './radar.service';
import { RadarMapper } from './mapper/radar.mapper';

@Module({
  controllers: [RadarController],
  providers: [RadarService, RadarMapper],
})
export class RadarModule {}
