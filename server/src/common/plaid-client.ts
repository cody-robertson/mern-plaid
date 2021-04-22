import plaid from "plaid";

const PlaidClient = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox,
    options: {
        version: '2020-09-14', // '2020-09-14' | '2019-05-29' | '2018-05-22' | '2017-03-08'
    },
});

export default PlaidClient;
