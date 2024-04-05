import { Type } from 'class-transformer';
import {
  IsInt,
  Min,
  ValidateNested,
  IsOptional,
  IsObject,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CoordinatesDto } from './coordinates.dto';
import { EnemiesDto } from './enemies.dto';

/**
 * DTO for a single scan within a radar scan array.
 */
export class ScanDto {
  /**
   * Coordinates of the scan.
   */
  @ApiProperty({
    description: 'Coordinates of the scan.',
    type: CoordinatesDto,
  })
  @IsObject()
  @ValidateNested()
  @Type(() => CoordinatesDto)
  coordinates: CoordinatesDto;

  /**
   * Information about enemies detected in the scan.
   */
  @ApiProperty({
    description: 'Information about enemies detected in the scan.',
    type: EnemiesDto,
  })
  @IsObject()
  @ValidateNested()
  @Type(() => EnemiesDto)
  enemies: EnemiesDto;

  /**
   * Number of allies detected in the scan (optional).
   */
  @ApiProperty({
    description: 'Number of allies detected in the scan (optional).',
    type: 'integer',
    example: 5,
  })
  @IsOptional()
  @IsInt()
  @Min(0)
  allies?: number;
}
