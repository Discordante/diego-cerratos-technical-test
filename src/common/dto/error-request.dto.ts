import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty({
    example: ["each value in protocols must be one of the following values: closest-enemies, furthest-enemies, assist-allies, avoid-crossfire, prioritize-mech, avoid-mech"],
    description: 'Descripción detallada del error.',
    isArray: true,
  })
  message: string[];

  @ApiProperty({
    example: "Bad Request",
    description: 'Tipo de error.',
  })
  error: string;

  @ApiProperty({
    example: 400,
    description: 'Código de estado HTTP del error.',
  })
  statusCode: number;
}
