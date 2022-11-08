import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export const swaggerConfig = (app) => {
  const config = new DocumentBuilder()
    .setTitle('Swagger')
    .setDescription('The API docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'Docs',
  };

  SwaggerModule.setup('api-docs', app, document, customOptions);
};
