// import {NestFactory} from "@nestjs/core";
// import {AppModule} from "./app.module";


// const start = async () => {
//     try {
//         const PORT = process.env.PORT || 5000;
//         const app = await NestFactory.create(AppModule);
//         app.enableCors()
//         await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
//     } catch (e) {
//         console.log(e)
//     }
// }

// start()
// test

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);

        const corsOptions = {
            origin: 'http://ec2-18-159-169-138.eu-central-1.compute.amazonaws.com:3313',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
            optionsSuccessStatus: 204
        };

        app.enableCors(corsOptions);

        await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
