import App from './app'

import * as bodyParser from 'body-parser'

import IPAddressController from "./controllers/IPAddressController";
import PlaidTokenController from "./controllers/PlaidTokenController";

const app = new App({
    port: parseInt(process.env.PORT) || 5000,
    controllers: [
        new IPAddressController(),
        new PlaidTokenController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ],
});
app.listen()
