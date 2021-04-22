import IPlaidTokenService from "../interfaces/IPlaidTokenService.interface";
import PlaidClient from "../common/plaid-client";

class PlaidTokenService implements IPlaidTokenService {
    async generateLinkToken(userId: string): Promise<string> {
        let response = await PlaidClient.createLinkToken( {
            client_name: "Plaid Node Client",
            user: {
                client_user_id: userId
            },
            products: ['auth', 'assets'],
            //webhook: "",
            country_codes: ['us'],
            language: "en"
        });
        return response.link_token;
    }
}

export default new PlaidTokenService();
