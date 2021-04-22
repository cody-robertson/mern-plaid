import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from 'interfaces/IControllerBase.interface'

class IPAddressController implements IControllerBase {
    public path = '/api/ipaddress'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.get);
    }

    get = (req: Request, res: Response) => {
        const ipAddress = req.header('remote-addr') || req.header('x-forwarded-for')
        res.json({
            ipAddress: ipAddress
        });
    }
}

export default IPAddressController
