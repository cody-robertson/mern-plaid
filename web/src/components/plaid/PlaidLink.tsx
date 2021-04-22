import React, {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import ILinkTokenResponse from "../../interfaces/ILinkTokenResponse.interface";
import PlaidLinkButton from "./PlaidLinkButton";

const PlaidLink = () => {
    const [ linkToken, setLinkToken ] = useState<ILinkTokenResponse>({ link_token: '' });

    useEffect(() => {
        axios.get('/api/plaid/token').then((response: AxiosResponse<ILinkTokenResponse>) => {
            setLinkToken(response.data);
        });
    }, [])

    return (
        <div>
            { linkToken && <PlaidLinkButton linkToken={ linkToken.link_token } /> }
        </div>
    )
}

export default PlaidLink;
