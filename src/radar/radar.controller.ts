import { Body, Controller, Post } from '@nestjs/common';
import { RadarService } from './radar.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RadarDto } from './dto/radar.dto';
import { CoordinatesDto } from './dto/coordinates.dto';
import { ErrorResponseDto } from 'src/common/dto/error-request.dto';

@ApiTags('Radar')
@Controller('radar')
export class RadarController {
  constructor(private readonly radarService: RadarService) {}

  @Post()
  @ApiOperation({
    summary: 'Control del droide de combate YVH.',
    description:
      'Evalúa la información del radar y protocolos para determinar la acción estratégica óptima, devolviendo las coordenadas relevantes.',
  })
  @ApiResponse({
    status: 400,
    description: 'Solicitud con datos de entrada inválidos.',
    type: ErrorResponseDto,
  })
  selectTarget(@Body() radarDto: RadarDto): CoordinatesDto {
    return this.radarService.selectTarget(radarDto);
  }
}
