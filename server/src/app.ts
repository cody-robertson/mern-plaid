import express from 'express'
import { Application } from 'express'
import mongoose from "mongoose"
import settings from "../config/config"

const mongoSettings = settings.MongoSettings;
const mongoUrl = `mongodb://${mongoSettings.User}:${mongoSettings.Password}@${mongoSettings.IP}:${mongoSettings.Port}/?authSource=admin`
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => console.log('Connected to MongoDB!'))
    .catch((e) => console.log(e));

class App {
    public app: Application
    public port: number

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express()
        this.app.enable('trust proxy'); // must be enabled for nginx headers
        this.port = appInit.port

        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App
