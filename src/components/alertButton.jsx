import React, { useState } from 'react';
import axios from 'axios';
import { base_url } from '../config';

const AlertButton = () => {
    const [message, setMessage] = useState('');
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    const getLocation = () => {
        return new Promise((resolve, reject) => {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                const coords = {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                };
                resolve(coords);
              },
              (error) => {
                reject(error.message);
              }
            );
          } else {
            reject('Geolocation is not supported by this browser.');
          }
        });
      };
      
    
      const googleMapsUrl = location
        ? `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
        : '#';

    const handleClick = async () => {
        debugger
        if (!message.trim()) {
            alert('Please enter a message.');
            return;
        }

        try {
            const location = await getLocation();
            const response = await axios.post(`${base_url}/send-alert`, { message, location });
            
            if (response.data.status === 'Messages sent') {
                alert('Messages sent successfully!');
                setMessage('')
            } else {
                alert('Messages sent, but there was an issue.');
            }
            console.log('Success:', location);
        } catch (error) {
            alert('Error sending messages: ' + error.response.data.error);
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col max-w-2xl mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Emergency Alert</h2>
            <textarea
                className="w-full p-3 border border-gray-300 rounded-md mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Type your emergency message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
            />
            <button
                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
                onClick={handleClick}
            >
                Send Alert
            </button>
        </div>
    );
};

export default AlertButton;
