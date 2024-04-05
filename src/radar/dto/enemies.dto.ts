import { IsEnum, IsInt, Min, IsDefined, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EnemyTypesEnum } from 'src/common/enum/enemy-types.enum';

/**
 * DTO for specifying enemies detected by a radar scan.
 */
export class EnemiesDto {
  /**
   * Type of the enemy.
   */
  @ApiProperty({
    description: 'Type of the enemy.',
    enum: EnemyTypesEnum,
    example: EnemyTypesEnum.Mech,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsEnum(EnemyTypesEnum)
  type: EnemyTypesEnum;

  /**
   * Number of enemies of this type (must be at least 1).
   */
  @ApiProperty({
    description: 'Number of enemies of this type (must be at least 1).',
    type: 'integer',
    example: 4,
  })
  @IsDefined()
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  number: number;
}
