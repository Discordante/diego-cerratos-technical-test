import { Injectable } from '@nestjs/common';
import { CoordinatesDto } from '../dto/coordinates.dto';

@Injectable()
export class RadarMapper {
  toResponseCoordinatesDto = (
    coordinatesDto: CoordinatesDto,
  ): CoordinatesDto => ({
    x: coordinatesDto.x,
    y: coordinatesDto.y,
  });
}
