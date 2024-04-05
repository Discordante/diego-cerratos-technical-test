# 👾 Sistema de Radar para el Droide de Combate YVH

## Descripción

Este proyecto implementa el módulo de selección de objetivos para el droide de combate YVH, diseñado para la Nueva República. Utiliza tecnologías avanzadas para procesar datos del entorno y determinar las coordenadas del objetivo prioritario siguiendo una serie de protocolos específicos.

## Características

- **Procesamiento de Datos de Radar**: Acepta datos en formato JSON a través de un endpoint HTTP POST `/radar`.
- **Selección de Objetivos Avanzada**: Implementa varios protocolos para determinar el objetivo prioritario basado en la proximidad, la presencia de aliados, y el tipo de enemigo.
- **Extensible**: Diseñado para permitir la fácil adición de nuevos protocolos de selección de objetivos.

## Tecnologías Utilizadas

- Node.js y NestJS como framework de servidor.

## Instalación

```bash
$ npm install
```

## Puesta en marcha

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test
### Ubicarse dentro de la carpeta test y lanzar el archivo tests.sh

```bash
$ ./tests.sh
```

## Contacto

- Author - [Diego Cerratos Bravo](diegocerratos@gmail.com)
- LinkedIn - [https://www.linkedin.com/in/diego-cerratos/](https://www.linkedin.com/in/diego-cerratos/)

# diego-cerratos-technical-test
