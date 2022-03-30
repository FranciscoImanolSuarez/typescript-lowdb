"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
require('dotenv').config();
exports.options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'Tasks API',
            version: '1.0.0',
            description: "A simple express library API"
        },
        servers: [
            {
                url: `${process.env.PORT}`
            }
        ]
    },
    apis: ["./src/routes/*.ts"]
};
