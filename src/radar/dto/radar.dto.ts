import { Type } from 'class-transformer';
import { IsEnum, ValidateNested, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProtocolsEnum } from 'src/common/enum/protocols.enum';
import { ScanDto } from './scan.dto';

/**
 * Root DTO for radar data submission.
 */
export class RadarDto {
  /**
   * Protocols to be applied to the radar analysis.
   */
  @ApiProperty({
    description: 'Protocols to be applied to the radar analysis.',
    isArray: true,
    enum: ProtocolsEnum,
  })
  @IsDefined()
  @IsEnum(ProtocolsEnum, { each: true })
  protocols: ProtocolsEnum[];

  /**
   * Array of scans to analyze.
   */
  @ApiProperty({
    description: 'Array of scans to analyze.',
    isArray: true,
    type: ScanDto,
  })
  @IsDefined()
  @ValidateNested({ each: true })
  @Type(() => ScanDto)
  scan: ScanDto[];
}
