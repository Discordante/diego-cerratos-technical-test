import { IsInt, IsDefined, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO for specifying coordinates in a radar scan.
 */
export class CoordinatesDto {
  /**
   * X coordinate.
   */
  @ApiProperty({
    description: 'X coordinate.',
    type: 'integer',
    example: 5,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  x: number;

  /**
   * Y coordinate.
   */
  @ApiProperty({
    description: 'Y coordinate.',
    type: 'integer',
    example: 10,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  y: number;
}
