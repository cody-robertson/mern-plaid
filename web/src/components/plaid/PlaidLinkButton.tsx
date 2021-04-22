import React, { useCallback } from 'react';
import {PlaidLinkOptions, usePlaidLink} from 'react-plaid-link';
import axios from "axios";

const PlaidLinkButton = (props: any) => {
    const onSuccess = useCallback(async (token) => {
        // send token to server
        await axios.post('/api/plaid/token', { public_token: token })
    }, []);

    const config: PlaidLinkOptions = {
        token: props.linkToken,
        onSuccess,
        env: 'sandbox'
        // ...
    };

    const { open, ready, error } = usePlaidLink(config);

    return (
        <button onClick={() => open()} disabled={!ready}>
            {error?.message || 'Connect a bank account'}
        </button>
    );
}
export default PlaidLinkButton;
