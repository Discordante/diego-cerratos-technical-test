import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const defaultDocsPath = '/docs';

export interface SwaggerOptions {
  servers?: string[];
  globalPrefix?: string;
  docsPath?: string;
}

export const setupSwagger = (
  app: INestApplication,
  options?: SwaggerOptions,
) => {
  const config = new DocumentBuilder()
    .setTitle('API Radar - technical test')
    .setDescription(
      'Api to control the actions to be performed by the radar and coordinates',
    )
    .setVersion('1.0.0');

  options?.servers?.forEach((s) => config.addServer(s));

  const globalPrefix = options?.globalPrefix || '';
  let docsPath = options?.docsPath || defaultDocsPath;

  if (!docsPath.startsWith('/')) {
    docsPath = '/' + docsPath;
  }

  const document = SwaggerModule.createDocument(app, config.build());
  SwaggerModule.setup(`${globalPrefix}${docsPath}`, app, document, {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'method',
    },
  });
};
