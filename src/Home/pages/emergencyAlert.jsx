import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import AlertButton from '../../components/alertButton';
import ContactList from '../../components/contactList';
import AddContactForm from '../../components/addContactForm';
import { base_url } from '../../config';

export default function EmergencyAlert() {
    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        try {
            const response = await axios.get(`${base_url}/get-contacts`, {
                params: { userId: 'user123' } // Replace with actual user ID
            });
            setContacts(response.data.contacts);
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleContactAdded = (newContact) => {
        setContacts(prevContacts => [...prevContacts, newContact]);
    };

    const handleContactDeleted = (deletedContactId) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact._id !== deletedContactId));
    };

    return (
        <div className='flex flex-col min-h-screen bg-gray-100'>
            <Navbar />
            <main className='flex flex-col items-center justify-center flex-grow p-4 md:p-8 bg-white shadow-md rounded-lg mx-4 md:mx-8 lg:mx-16 xl:mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
                <h1 className='text-2xl md:text-3xl font-bold mb-6 text-gray-800'>Emergency Alert System</h1>

                {/* Alert Button */}
                <div className='mt-6'>
                    <AlertButton />
                </div>

                {/* Main content flex container */}
                <div className='flex flex-col md:flex-row md:space-x-8 mt-6'>
                    {/* Add Contact Form */}
                    <div className='flex-grow mb-6 md:mb-0'>
                        <AddContactForm onContactAdded={handleContactAdded} />
                    </div>

                    {/* Contact List */}
                    <div className='flex-grow'>
                        <ContactList contacts={contacts} onContactDeleted={handleContactDeleted} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
