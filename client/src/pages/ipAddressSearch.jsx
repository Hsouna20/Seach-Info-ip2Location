import React, { useState } from 'react';
import axios from 'axios';
import { Button , TextInput} from 'flowbite-react';

const IPAddressSearch = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [ipInfo, setIpInfo] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3008/getinfo?ip=${ipAddress}`);
            setIpInfo(response.data.result); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex items-center mt-16 mb-16">
                 <TextInput
               type="text"
               placeholder='x.x.x.x'
               value={ipAddress}
               onChange={(e) => setIpAddress(e.target.value)}
                
              />
        <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              onClick={handleSearch}
              style={{ marginLeft: '0.5rem' }}
            >
              Search
            </Button>
    
        {ipInfo && (
            <div className="mt-4" style={{ marginLeft: '3rem' }}>
                <p><span className="font-semibold text-red-500">Country:</span> {ipInfo.country_name}</p>
                <p><span className="font-semibold text-red-500">Country Code:</span> {ipInfo.country_code}</p>
                <p><span className="font-semibold text-red-500">Region Name:</span> {ipInfo.region_name}</p>
                <p><span className="font-semibold text-red-500">City:</span> {ipInfo.city_name}</p>
           
            </div>
        )}
    </div>
    
    );
};

export default IPAddressSearch;
