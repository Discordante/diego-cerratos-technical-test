import { Injectable, Logger } from '@nestjs/common';
import { RadarDto } from './dto/radar.dto';
import { CoordinatesDto } from './dto/coordinates.dto';
import { ProtocolsEnum } from 'src/common/enum/protocols.enum';
import { ScanDto } from './dto/scan.dto';
import { ConfigService } from '@nestjs/config';
import { RadarMapper } from './mapper/radar.mapper';

@Injectable()
export class RadarService {
  private readonly logger = new Logger(RadarService.name);
  constructor(
    private configService: ConfigService,
    private readonly radarMapper: RadarMapper,
  ) {}

  selectTarget(radarDto: RadarDto): CoordinatesDto {
    const maxDistance = +this.configService.get<number>('MAX_DISTANCE', 100);
    let validTargets = this.filterByDistance(radarDto.scan, maxDistance);

    if (validTargets.length === 0) {
      this.logger.log('Targets are too far away');
      return null;
    }

    radarDto.protocols.forEach((protocol) => {
      switch (protocol) {
        case ProtocolsEnum.ClosestEnemies:
          validTargets = this.closestEnemies(validTargets);
          break;
        case ProtocolsEnum.FurthestEnemies:
          validTargets = this.furthestEnemies(validTargets);
          break;
        case ProtocolsEnum.AssistAllies:
          validTargets = this.assistAllies(validTargets);
          break;
        case ProtocolsEnum.AvoidCrossfire:
          validTargets = this.avoidCrossfire(validTargets);
          break;
        case ProtocolsEnum.PrioritizeMech:
          validTargets = this.prioritizeMech(validTargets);
          break;
        case ProtocolsEnum.AvoidMech:
          validTargets = this.avoidMech(validTargets);
          break;
      }
    });

    return this.radarMapper.toResponseCoordinatesDto(
      validTargets[0].coordinates,
    );
  }

  private calculateDistance(coordinates: { x: number; y: number }): number {
    return Math.hypot(coordinates.x, coordinates.y);
  }

  private filterByDistance(scan: ScanDto[], maxDistance: number) {
    return scan.filter(
      (target) => this.calculateDistance(target.coordinates) <= maxDistance,
    );
  }

  private closestEnemies(targets: ScanDto[]) {
    return [...targets].sort(
      (a, b) =>
        this.calculateDistance(a.coordinates) -
        this.calculateDistance(b.coordinates),
    );
  }

  private furthestEnemies(targets: ScanDto[]) {
    return [...targets].sort(
      (a, b) =>
        this.calculateDistance(b.coordinates) -
        this.calculateDistance(a.coordinates),
    );
  }

  private assistAllies(targets: ScanDto[]) {
    return targets.filter((target) => target.allies);
  }

  private avoidCrossfire(targets: ScanDto[]) {
    return targets.filter((target) => !target.allies);
  }

  private prioritizeMech(targets: ScanDto[]) {
    const mechs = targets.filter((target) => target.enemies.type === 'mech');
    return mechs.length > 0 ? mechs : targets;
  }

  private avoidMech(targets: ScanDto[]) {
    return targets.filter((target) => target.enemies.type !== 'mech');
  }
}
