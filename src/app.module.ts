import {Module} from "@nestjs/common";
import {TrackModule} from "./track/track.module";
import {MongooseModule} from "@nestjs/mongoose";
import {FileModule} from "./file/file.module";
import * as path from 'path'
import {ServeStaticModule} from "@nestjs/serve-static";

@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        // MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.oeudk.mongodb.net/music-platform?retryWrites=true&w=majority'),
        MongooseModule.forRoot('mongodb+srv://bondarenkoav24:3WhlqYsZpR3KiVvK@cluster3-13.eilfmch.mongodb.net/?retryWrites=true&w=majority&appName=Cluster3-13'),
        TrackModule,
        FileModule
    ]
})
export class AppModule {}
