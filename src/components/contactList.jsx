import React from 'react';
import axios from 'axios';
import { base_url } from '../config';

const ContactList = ({ contacts, onContactDeleted }) => {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(`${base_url}/get-contacts`, {
                    params: { userId: 'user123' } // Replace with actual user ID
                });
                // This line is unnecessary because contacts are passed as a prop
                // setContacts(response.data.contacts);
            } catch (error) {
                console.error('Error fetching contacts:', error);
                setError('Error fetching contacts.');
            } finally {
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    const handleDelete = async (contactId) => {
        try {
            await axios.delete(`${base_url}/delete-contact/${contactId}`);
            // Notify the parent component to remove the contact from the list
            onContactDeleted(contactId);
            alert('Contact deleted successfully!');
        } catch (error) {
            alert('Error deleting contact: ' + error.response.data.error);
            console.error('Error:', error);
        }
    };

    if (loading) return <p className="text-gray-500">Loading contacts...</p>;
    if (error) return <p className="text-red-600">{error}</p>;

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Contacts</h2>
            <ul className="space-y-2">
                {contacts.map((contact) => (
                    <li key={contact._id} className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm hover:bg-gray-50 transition ease-in-out duration-150 flex justify-between items-center">
                        <div>
                            <p className="text-lg font-medium text-gray-900">{contact.name}</p>
                            <p className="text-gray-600">{contact.phoneNumber}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(contact._id)}
                            className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition ease-in-out duration-150"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
