const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    swaggerDefinition: {
        openapi: '3.1.0',
        info: {
            title: 'gamestore API',
            version: '1.0.0',
            description: 'เกมๆๆๆๆๆๆๆๆๆๆๆๆๆ ',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'เกมๆๆๆๆ',
            },
        ],
    },
    apis: ['../HomeworkBTD/control/fc.js'],  //apisคือชี้ไปที่fileที่มีการเก็บรวมรวมโค้ดget post put delete(crud)
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerSpec, swaggerUi };