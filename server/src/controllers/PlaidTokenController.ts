import express, { Request, Response } from 'express'
import IControllerBase from 'interfaces/IControllerBase.interface'
import PlaidTokenService from "../services/plaid-token.service";

class PlaidTokenController implements IControllerBase {
    public path = '/api/plaid/token'
    public router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path, this.get);
        this.router.post(this.path, this.post);
    }

    get = async (req: Request, res: Response) => {
        try {
            const token = await PlaidTokenService.generateLinkToken("randomId");
            res.statusCode = 200;
            res.json({ link_token: token });
        }
        catch (e) {
            res.statusCode = 500;
            res.json(e);
        }
    }

    post = async (req: Request, res: Response) => {
        try {
            // TODO: Exchange public token for access token
            console.log('Token secured!', req.body);
            res.json(req.body);
        }
        catch (e) {
            res.statusCode = 500;
            res.json(e);
        }
    }
}

export default PlaidTokenController
