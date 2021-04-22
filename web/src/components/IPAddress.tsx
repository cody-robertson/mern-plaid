import React, {useEffect, useState} from 'react';
import axios from "axios";
import IIPAddressResponse from "../interfaces/IIPAddressResponse.interface";

function IPAddress() {
    const [ ipAddress, setIPAddress ] = useState<IIPAddressResponse>({ ipAddress: 'Loading...' });

    useEffect(() => {
        axios.get('/api/ipaddress').then((response) => {
            setIPAddress(response.data);
        });
    }, [])

    return (
        <div>
            <h3>Your IP Address is:</h3>
            <div>{ipAddress.ipAddress}</div>
        </div>
    );
}

export default IPAddress;
